import type { CollectionBeforeChangeHook } from 'payload'

export const preventTampering: CollectionBeforeChangeHook = async ({ data, req, operation }) => {
  if (operation === 'update' && !req.user?.roles?.includes('admin')) {
    // Prevent non-admins from modifying restricted fields
    const restrictedFields = ['status', 'isPremium', 'featuredRank', 'verifiedAt', 'verifiedBy']
    
    restrictedFields.forEach((field) => {
      if (data[field] !== undefined) {
        delete data[field]
      }
    })
  }
  return data
}
