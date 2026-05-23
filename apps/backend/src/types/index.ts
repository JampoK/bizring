// apps/backend/src/types/index.ts
export type Role = 'admin' | 'business_owner' | 'investor'
export type Plan = 'free' | 'premium'
export type SubscriptionStatus = 'active' | 'inactive' | 'past_due' | 'canceled'
export type BusinessStatus = 'pending' | 'verified' | 'rejected' | 'suspended'
