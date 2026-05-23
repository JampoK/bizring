// apps/backend/src/access/role-guards.ts
import type { Access, FieldAccess } from 'payload'

export const isAdmin: Access = ({ req }) => req.user?.roles?.includes('admin') ?? false

export const isBusinessOwner: FieldAccess = ({ req, doc }) => {
  if (!req.user) return false
  if (req.user.roles?.includes('admin')) return true
  return req.user.id === (doc as any)?.owner
}

export const isPremiumInvestor: Access = ({ req }) =>
  !!(req.user?.roles?.includes('investor') && req.user.plan === 'premium' && req.user.subscriptionStatus === 'active')

export const isAdminOrOwner: FieldAccess = ({ req, doc }) => {
  if (req.user?.roles?.includes('admin')) return true
  return req.user?.id === (doc as any)?.owner
}
