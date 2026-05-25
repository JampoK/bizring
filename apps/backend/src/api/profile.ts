import { getPayloadClient } from '../lib/payload-client'
import { APIError } from './types'

export async function updateBusinessProfile(
  businessId: string,
  data: any,
  userId: string
) {
  const payload = await getPayloadClient()

  try {
    // 1. Verifikasi kepemilikan (Access Control)
    const business = await payload.findByID({
      collection: 'businesses',
      id: businessId,
    })

    if ((typeof business.owner === 'object' ? business.owner.id : business.owner) !== userId) { // Simple owner check
       throw { code: 'FORBIDDEN', message: 'You do not have permission to edit this business.' }
    }

    // 2. Update data
    const updated = await payload.update({
      collection: 'businesses',
      id: businessId,
      data: {
        ...data,
        status: business.status === 'verified' ? 'verified' : 'pending', // Re-verify on change
      },
    })

    return { data: updated }
  } catch (error) {
    return { error: 'Failed to update profile' }
  }
}
