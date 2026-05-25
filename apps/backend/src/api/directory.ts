import { getPayloadClient } from '../lib/payload-client'
import { PublicBusinessDTO } from './types'

export async function getPublicBusinesses(params: { 
  category?: string
  location?: string 
  page?: number 
}) {
  const payload = await getPayloadClient()
  
  const result = await payload.find({
    collection: 'businesses',
    where: {
      status: { equals: 'verified' },
      ...(params.category && { category: { equals: params.category } }),
      ...(params.location && { location: { equals: params.location } }),
    },
    select: { // Projection untuk keamanan DTO
      name: true,
      slug: true,
      category: true,
      location: true,
      intents: true,
      contact: true,
      trust: true,
      isPremium: true,
    },
    limit: 12,
    page: params.page || 1,
  })
  
  return {
    data: result.docs as unknown as PublicBusinessDTO[],
    meta: {
      totalDocs: result.totalDocs,
      limit: result.limit,
      page: result.page || 1,
    }
  }
}
