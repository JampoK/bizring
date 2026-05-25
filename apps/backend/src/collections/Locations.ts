import { CollectionConfig } from 'payload'

const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'parent'],
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
      unique: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Province', value: 'province' },
        { label: 'City', value: 'city' },
        { label: 'District', value: 'district' },
      ],
      required: true,
      admin: {
        description: 'Type of location (e.g., Province, City, District).',
      },
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'locations',
      hasMany: false,
      admin: {
        position: 'sidebar',
        description: 'For City, select its Province. For District, select its City.',
      },
      filterOptions: ({ siblingData }: { siblingData: any }) => {
        if (siblingData.type === 'city') {
          return {
            type: {
              equals: 'province',
            },
          }
        }
        if (siblingData.type === 'district') {
          return {
            type: {
              equals: 'city',
            },
          }
        }
        return false // Return false instead of empty object
      },
    },
  ],
}

export default Locations
