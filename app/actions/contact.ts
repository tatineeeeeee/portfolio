'use server'

import { Resend } from 'resend'

const NHOST_GRAPHQL_URL = `https://${process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN}.graphql.${process.env.NEXT_PUBLIC_NHOST_REGION}.nhost.run/v1`

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactFormState = {
    success: boolean
    message: string
} | null

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    // Validation
    if (!name || !email || !message) {
        return {
            success: false,
            message: 'Please fill in all required fields.',
        }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
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

        // Send email notification
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'justinecesarocampo@gmail.com',
            subject: `New Contact: ${subject || 'No Subject'}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>From:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
                <hr />
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
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
