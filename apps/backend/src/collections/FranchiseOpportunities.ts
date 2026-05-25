import type { CollectionConfig } from 'payload'

export const FranchiseOpportunities: CollectionConfig = {
  slug: 'franchise-opportunities',
  admin: {
    useAsTitle: 'name',
    group: 'Franchise',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => req.user?.roles?.includes('admin') ?? false,
    delete: ({ req }) => req.user?.roles?.includes('admin') ?? false,
  },
  fields: [
    {
      name: 'business',
      type: 'relationship',
      relationTo: 'businesses',
      required: true,
      hasMany: false,
      index: true,
    },
    { name: 'name', type: 'text', required: true }, // e.g., "Paket Silver", "Master Franchise"
    { name: 'franchiseFee', type: 'number', required: true },
    { name: 'investmentRange', type: 'text', required: true, admin: { description: 'e.g. 100jt - 500jt' } },
    { name: 'royaltyFee', type: 'text' },
    { name: 'contractDuration', type: 'number', label: 'Duration (Years)' },
    { name: 'territory', type: 'text' },
    { name: 'supportDescription', type: 'textarea' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Pending Review', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
      access: {
        update: ({ req }) => req.user?.roles?.includes('admin') ?? false,
      },
    },
    {
      name: 'compliance',
      type: 'group',
      fields: [
        { name: 'hasSTPW', type: 'checkbox', defaultValue: false },
        { name: 'isIndonesianLanguageReady', type: 'checkbox', defaultValue: false },
        { name: 'prospectusReady', type: 'checkbox', defaultValue: false },
        { 
          name: 'alertMessage', 
          type: 'text', 
          admin: { 
            readOnly: true,
            description: 'Automated compliance alerts based on missing documents or fields'
          } 
        },
      ],
    },
    {
      name: 'admin',
      type: 'group',
      admin: { description: 'Admin only' },
      fields: [
        { name: 'reviewedBy', type: 'relationship', relationTo: 'users', admin: { readOnly: true } },
        { name: 'reviewedAt', type: 'date', admin: { readOnly: true } },
        { name: 'adminNotes', type: 'textarea' },
      ],
    },
  ],
}
