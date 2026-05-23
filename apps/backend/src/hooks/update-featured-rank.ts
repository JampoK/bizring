import type { CollectionBeforeChangeHook } from 'payload'

export const updateFeaturedRank: CollectionBeforeChangeHook = async ({ data, operation, originalDoc }) => {
  // If a business is updated to be premium and has no rank, give it a baseline
  if (operation === 'update' || operation === 'create') {
    if (data.isPremium && (data.featuredRank === 0 || data.featuredRank === null)) {
      data.featuredRank = 10 // Baseline rank for premiums
    }
  }
  return data
}
