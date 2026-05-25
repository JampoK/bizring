import type { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    useAsTitle: 'name',
    group: 'Leads',
  },
  access: {
    read: ({ req }) => req.user?.roles?.includes('admin') ?? false,
    create: () => true, // Public access for form submission
    update: ({ req }) => req.user?.roles?.includes('admin') ?? false,
    delete: ({ req }) => req.user?.roles?.includes('admin') ?? false,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'whatsapp', type: 'text', required: true },
    {
      name: 'franchise',
      type: 'relationship',
      relationTo: 'franchise-opportunities',
      required: true,
    },
    {
      name: 'intent',
      type: 'select',
      required: true,
      options: [
        { label: 'Minta Brosur', value: 'brochure' },
        { label: 'Tanya Ketersediaan', value: 'availability' },
        { label: 'Request Kontak', value: 'contact' },
        { label: 'Pengajuan Franchise', value: 'application' },
      ],
    },
    { name: 'message', type: 'textarea' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'Baru', value: 'new' },
        { label: 'Dihubungi', value: 'contacted' },
        { label: 'Selesai', value: 'completed' },
      ],
    },
  ],
}
