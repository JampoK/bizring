import type { Field } from 'payload'

export const slugField = (): Field => ({
  name: 'slug',
  label: 'Slug',
  type: 'text',
  index: true,
  unique: true,
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [
      ({ operation, value, originalDoc, data }) => {
        if (typeof value === 'undefined' || value === null) {
          const name = data?.name || originalDoc?.name
          if (typeof name === 'string') {
            return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
          }
        }
        return value
      },
    ],
  },
})
