import type { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
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
    { name: 'name', type: 'text', required: true, index: true },
    slugField(),
    { name: 'description', type: 'textarea' },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      hasMany: false,
      index: true,
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations',
      required: true,
      hasMany: false,
      index: true,
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
    },
    // Business Intents
    {
      name: 'intents',
      type: 'group',
      fields: [
        { name: 'mencariReseller', type: 'checkbox', defaultValue: false },
        { name: 'mencariDistributor', type: 'checkbox', defaultValue: false },
        { name: 'franchiseAvailable', type: 'checkbox', defaultValue: false },
        { name: 'partnershipOpen', type: 'checkbox', defaultValue: false },
        { name: 'mencariInvestor', type: 'checkbox', defaultValue: false },
      ],
    },
    // Contact Info
    {
      name: 'contact',
      type: 'group',
      fields: [
        { name: 'whatsapp', type: 'text' },
        { name: 'website', type: 'text' },
        { name: 'email', type: 'email' },
      ],
    },
    // Trust & Verification
    {
      name: 'trust',
      type: 'group',
      fields: [
        { name: 'verified', type: 'checkbox', defaultValue: false },
        {
          name: 'verificationStatus',
          type: 'select',
          defaultValue: 'pending',
          options: [
            { label: 'Pending', value: 'pending' },
            { label: 'Reviewed', value: 'reviewed' },
            { label: 'Verified', value: 'verified' },
          ],
        },
        {
          name: 'documents',
          type: 'array',
          fields: [
            { name: 'docType', type: 'text', label: 'Document Type (e.g. NIB, SIUP)' },
            { name: 'file', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
    // Admin & System
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
