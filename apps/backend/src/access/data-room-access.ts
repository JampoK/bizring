import type { Access } from 'payload'

export const canReadDataRoom: Access = ({ req: { user } }) => {
  if (!user) return false
  if (user.roles?.includes('admin')) return true

  return {
    or: [
      { isPublic: { equals: true } },
      { owner: { equals: user.id } },
      { accessList: { contains: user.id } },
    ],
  } as any
}

export const canManageDataRoom: Access = ({ req: { user } }) => {
  if (!user) return false
  if (user.roles?.includes('admin')) return true

  return {
    owner: { equals: user.id },
  }
}
