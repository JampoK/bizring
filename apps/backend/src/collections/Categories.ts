import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'

export const categoryTypes = [
  { label: 'Franchise', value: 'franchise' },
  { label: 'Kemitraan', value: 'kemitraan' },
  { label: 'Distributor', value: 'distributor' },
  { label: 'Reseller', value: 'reseller' },
  { label: 'Supplier', value: 'supplier' },
  { label: 'Investor', value: 'investor' },
  { label: 'Grosir', value: 'grosir' },
  { label: 'Partnership', value: 'partnership' },
] as const

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'parent', 'categoryType'],
    group: 'Taxonomy',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
      required: true,
    },
    slugField(),
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categoryType',
      type: 'select',
      options: categoryTypes as unknown as { label: string; value: string }[],
      required: true,
      admin: {
        description: 'Type of business opportunity this category represents.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'seoTags',
      type: 'array',
      label: 'SEO Tags',
      admin: {
        description: 'Keywords and phrases for SEO optimization.',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
  ],
}

export default Categories
