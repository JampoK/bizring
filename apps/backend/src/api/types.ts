/**
 * Domain-specific DTOs for the Marketplace
 */

export interface PublicBusinessDTO {
  id: string
  name: string
  slug: string
  description?: string
  category: string | { name: string; slug: string }
  location: string | { name: string }
  intents: {
    mencariReseller: boolean
    mencariDistributor: boolean
    franchiseAvailable: boolean
    partnershipOpen: boolean
    mencariInvestor: boolean
  }
  contact: {
    whatsapp?: string
    website?: string
    email?: string
  }
  trust: {
    verified: boolean
  }
  isPremium: boolean
}

export interface APIError {
  code: string;
  message: string;
}

export type APIResponse<T> = {
  data?: T
  error?: string
  meta?: {
    totalDocs: number
    limit: number
    page: number
  }
}
