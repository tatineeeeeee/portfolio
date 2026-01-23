import { createClient } from '@nhost/nhost-js'

export const nhost = createClient({
    subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN!,
    region: process.env.NEXT_PUBLIC_NHOST_REGION!,
})

// Export commonly used services
export const nhostStorage = nhost.storage
export const nhostGraphql = nhost.graphql
export const nhostAuth = nhost.auth
