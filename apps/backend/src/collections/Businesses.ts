import type { CollectionConfig } from 'payload'
import { BusinessStatus } from '../types'
import { preventTampering } from '../hooks/prevent-tampering'
import { updateFeaturedRank } from '../hooks/update-featured-rank'

export const Businesses: CollectionConfig = {
  slug: 'businesses',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'status', 'owner', 'createdAt'],
  },
  hooks: {
    beforeChange: [preventTampering, updateFeaturedRank],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => req.user?.roles?.includes('admin') ?? false,
    delete: ({ req }) => req.user?.roles?.includes('admin') ?? false,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Verified', value: 'verified' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Suspended', value: 'suspended' },
      ],
      access: {
        update: ({ req }) => req.user?.roles?.includes('admin') ?? false,
      },
      index: true,
    },
    { name: 'isPremium', type: 'checkbox', defaultValue: false, access: { update: ({ req }) => req.user?.roles?.includes('admin') ?? false } },
    { name: 'featuredRank', type: 'number', defaultValue: 0, access: { update: ({ req }) => req.user?.roles?.includes('admin') ?? false } },
    { name: 'verifiedAt', type: 'date', admin: { readOnly: true } },
    { name: 'verifiedBy', type: 'relationship', relationTo: 'users', admin: { readOnly: true } },
    { name: 'adminNotes', type: 'textarea' },
  ],
  timestamps: true,
}
