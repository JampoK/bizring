import type { CollectionConfig } from 'payload'

export const Insights: CollectionConfig = {
  slug: 'insights',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'author', 'publishDate', '_status'],
    group: 'Editorial',
  },
  versions: { drafts: true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            { name: 'title', type: 'text', required: true, label: 'Article Title' },
            { name: 'slug', type: 'text', required: true, unique: true, label: 'URL Slug' },
            { name: 'excerpt', type: 'textarea', label: 'Summary/Excerpt' },
            { name: 'content', type: 'richText', required: true },
            {
              name: 'category',
              type: 'select',
              options: [
                'Franchise', 'Business Ideas', 'Entrepreneurship', 'Marketing',
                'Investment', 'Startup', 'Finance', 'Case Studies',
                'Success Stories', 'Industry Trends'
              ],
              required: true,
            },
            { name: 'featuredImage', type: 'upload', relationTo: 'media' },
            { name: 'author', type: 'text' },
            { name: 'publishDate', type: 'date', defaultValue: () => new Date() },
          ],
        },
        {
          label: 'SEO & Metadata',
          fields: [
            { name: 'seoTitle', type: 'text', label: 'SEO Title' },
            { name: 'seoDescription', type: 'textarea', label: 'SEO Description' },
            { name: 'canonicalUrl', type: 'text', label: 'Canonical URL' },
          ],
        },
        {
          label: 'Connections',
          fields: [
            {
              name: 'relatedBusinesses',
              type: 'relationship',
              relationTo: 'businesses',
              hasMany: true,
            },
            {
              name: 'relatedInsights',
              type: 'relationship',
              relationTo: 'insights',
              hasMany: true,
            },
          ],
        },
      ],
    },
  ],
}
