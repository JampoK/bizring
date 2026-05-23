import { getPayloadClient } from '../lib/payload-client'

export const checkDataRoomAccess = async (businessId: string, userId: string) => {
  const payload = await getPayloadClient()
  if (!payload) return false

  const business = await payload.findByID({
    collection: 'businesses',
    id: businessId,
  })

  // business.owner bisa berupa object (User) atau number (ID)
  const ownerId = typeof business.owner === 'object' ? (business.owner as any)?.id : business.owner
  return String(ownerId) === String(userId)
}

export const logDataRoomAccessAttempt = async (businessId: string, userId: string, granted: boolean) => {
  console.log(`[Audit] User ${userId} accessed DataRoom for Business ${businessId}. Granted: ${granted}`)
}
