import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'application/pdf'],

    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 200,
        position: 'centre',
      },
      {
        name: 'medium',
        width: 800,
        height: 600,
        position: 'centre',
      },
    ],
  },
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'mimeType', 'filesize', 'createdAt'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => req.user?.roles?.includes('admin') ?? false,
    delete: ({ req }) => req.user?.roles?.includes('admin') ?? false,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Alternative text for accessibility',
      },
    },
    {
      name: 'uploadedBy',
      type: 'relationship',
      relationTo: 'users',
      required: false,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ req, operation }) => {
            if (operation === 'create' && req.user) {
              return req.user.id
            }
            return undefined
          },
        ],
      },
    },
  ],
  timestamps: true,
}