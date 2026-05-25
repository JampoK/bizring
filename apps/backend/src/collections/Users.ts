import type { CollectionConfig } from 'payload'
import { Role, Plan, SubscriptionStatus } from '../types'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 60 * 60 * 24 * 7, // 7 days
    verify: false,
    maxLoginAttempts: 5,
    lockTime: 5 * 60 * 1000, // 5 minutes
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'roles', 'createdAt'],
  },
  access: {
    read: ({ req }) => {
      const user = req.user
      if (!user) return false
      if (user.roles?.includes('admin')) return true
      return { id: { equals: user.id } }
    },
    create: ({ req }) => req.user?.roles?.includes('admin') ?? false,
    update: ({ req }) => {
      const user = req.user
      if (!user) return false
      if (user.roles?.includes('admin')) return true
      return { id: { equals: user.id } }
    },
    delete: ({ req }) => req.user?.roles?.includes('admin') ?? false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      required: true,
      defaultValue: ['business_owner'],
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Business Owner', value: 'business_owner' },
        { label: 'Investor', value: 'investor' },
      ],
      access: {
        create: ({ req }) => req.user?.roles?.includes('admin') ?? false,
        update: ({ req }) => req.user?.roles?.includes('admin') ?? false,
      },
    },
    {
      name: 'plan',
      type: 'select',
      defaultValue: 'free',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editorial', value: 'editorial' },
        { label: 'User', value: 'user' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'subscriptionStatus',
      type: 'select',
      defaultValue: 'inactive',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Past Due', value: 'past_due' },
        { label: 'Canceled', value: 'canceled' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true,
}
