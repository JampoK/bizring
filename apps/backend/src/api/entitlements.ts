import { getPayloadClient } from '../lib/payload-client'

/**
 * Entitlement helper to check premium access.
 * Admins have automatic access.
 */
export async function hasPremiumEntitlement(userId: string): Promise<boolean> {
  const payload = await getPayloadClient()

  const user = await payload.findByID({
    collection: 'users',
    id: userId,
  })

  // Admins get automatic premium access
  if (user.roles?.includes('admin')) {
    return true
  }

  // Check user premium status (assuming a field exists on User collection)
  // Adjust field name based on your schema
  return !!user.isPremium
}

/**
 * Gating function to protect premium routes/logic
 */
export async function checkPremiumAccess(userId: string) {
  const isPremium = await hasPremiumEntitlement(userId)
  if (!isPremium) {
    throw { code: 'FORBIDDEN', message: 'Premium subscription required.' }
  }
  return true
}
