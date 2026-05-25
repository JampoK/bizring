'use server'

import { revalidatePath } from 'next/cache'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export const updateBusinessProfile = async (id: string, data: any) => {
  try {
    const res = await fetch(`${API_URL}/api/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          mutation updateBusiness($id: String!, $description: String) {
            updateBusiness(id: $id, data: { description: $description }) {
              id
              slug
            }
          }
        `,
        variables: { id, description: data.description },
      }),
    })

    const result = await res.json()

    if (result.errors) {
      return { error: result.errors[0]?.message || 'Failed to update' }
    }

    const slug = result.data.updateBusiness.slug
    revalidatePath(`/business/${slug}`)
    return { data: result.data.updateBusiness }
  } catch {
    return { error: 'Failed to update profile' }
  }
}
