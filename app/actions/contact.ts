'use server'

import { Resend } from 'resend'

const NHOST_GRAPHQL_URL = `https://${process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN}.graphql.${process.env.NEXT_PUBLIC_NHOST_REGION}.nhost.run/v1`

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactFormState = {
    success: boolean
    message: string
} | null


function validateEmail(email: string): boolean {
    // RFC 5322 compliant email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) return false
    if (email.length > 254) return false
    return true
}

function sanitizeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = (formData.get('name') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const subject = (formData.get('subject') as string)?.trim()
    const message = (formData.get('message') as string)?.trim()

    // Validation
    if (!name || !email || !message) {
        return {
            success: false,
            message: 'Please fill in all required fields.',
        }
    }

    // Length validation
    if (name.length > 100 || email.length > 254 || (subject && subject.length > 200) || message.length > 5000) {
        return {
            success: false,
            message: 'One or more fields exceed the maximum length.',
        }
    }

    // Email validation
    if (!validateEmail(email)) {
        return {
            success: false,
            message: 'Please enter a valid email address.',
        }
    }

    const mutation = `
    mutation InsertContactMessage($name: String!, $email: String!, $subject: String, $message: String!) {
      insert_contact_messages(objects: [{
        name: $name,
        email: $email,
        subject: $subject,
        message: $message
      }]) {
        affected_rows
      }
    }
  `

    try {
        // Save to database
        const response = await fetch(NHOST_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-role': 'public',
            },
            body: JSON.stringify({
                query: mutation,
                variables: { name, email, subject, message },
            }),
        })

        const result = await response.json()

        if (result.errors) {
            console.error('GraphQL errors:', result.errors)
            return {
                success: false,
                message: 'Failed to send message. Please try again later.',
            }
        }

        // Send email notification with sanitized HTML
        const safeName = sanitizeHtml(name)
        const safeEmail = sanitizeHtml(email)
        const safeSubject = sanitizeHtml(subject || 'No Subject')
        const safeMessage = sanitizeHtml(message)

        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'justinecesarocampo@gmail.com',
            subject: `New Contact: ${safeSubject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>From:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Subject:</strong> ${safeSubject}</p>
                <hr />
                <p><strong>Message:</strong></p>
                <p>${safeMessage.replace(/\n/g, '<br>')}</p>
                <hr />
                <p style="color: #666; font-size: 12px;">Sent from your portfolio contact form</p>
            `,
        })

        return {
            success: true,
            message: 'Thank you! Your message has been sent successfully.',
        }
    } catch (error) {
        console.error('Contact form error:', error)
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
        }
    }
}
