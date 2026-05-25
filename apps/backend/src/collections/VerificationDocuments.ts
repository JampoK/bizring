import type { CollectionConfig } from 'payload'

export const VerificationDocuments: CollectionConfig = {
  slug: 'verification-documents',
  admin: {
    useAsTitle: 'docType',
    group: 'Verification',
  },
  access: {
    read: ({ req }) => !!req.user, // Hanya user yang login (dan admin) yang bisa baca
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
      admin: {
        position: 'sidebar',
      },
    },
    { 
      name: 'docType', 
      type: 'select',
      required: true,
      options: [
        { label: 'NIB (Nomor Induk Berusaha)', value: 'nib' },
        { label: 'SIUP (Surat Izin Usaha Perdagangan)', value: 'siup' },
        { label: 'NPWP Perusahaan', value: 'npwp' },
        { label: 'Akta Pendirian', value: 'akta' },
        { label: 'Lainnya', value: 'others' },
      ],
    },
    { 
      name: 'file', 
      type: 'upload', 
      relationTo: 'media', 
      required: true 
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
    },
    { name: 'adminNotes', type: 'textarea' },
  ],
}
