import { getPayloadClient } from '../lib/payload-client'

export const submitVerificationRequest = async (businessId: string, documents: string[]) => {
  const payload = await getPayloadClient()
  if (!payload) return { error: 'Backend unreachable' }

  try {
    return await payload.update({
      collection: 'businesses',
      id: businessId,
      data: {
        status: 'pending',
        adminNotes: `Verification submitted. Documents: ${documents.join(', ')}`,
      },
    })
  } catch (err) {
    return { error: 'Failed to submit verification' }
  }
}

export const approveVerification = async (businessId: string) => {
  const payload = await getPayloadClient()
  if (!payload) return { error: 'Backend unreachable' }

  return await payload.update({
    collection: 'businesses',
    id: businessId,
    data: {
      status: 'verified',
      isPremium: true,
      verifiedAt: new Date().toISOString(),
    },
  })
}
