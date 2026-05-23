import type { CollectionConfig } from 'payload'
import { canReadDataRoom, canManageDataRoom } from '../access/data-room-access'
import { logDataRoomAccess, logDataRoomChange } from '../hooks/log-data-room-access'

export const DataRooms: CollectionConfig = {
  slug: 'data-rooms',
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterRead: [logDataRoomAccess],
    afterChange: [logDataRoomChange],
  },
  access: {
    read: canReadDataRoom,
    create: ({ req }) => !!req.user,
    update: canManageDataRoom,
    delete: canManageDataRoom,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'business',
      type: 'relationship',
      relationTo: 'businesses',
      required: true,
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'isPublic',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'accessList',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      admin: {
        description: 'Users who can access this data room',
      },
    },
    {
      name: 'documents',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'file', type: 'relationship', relationTo: 'media', required: true },
      ],
    },
  ],
  timestamps: true,
}
