import type { CollectionAfterReadHook, CollectionAfterChangeHook } from 'payload'

export const logDataRoomAccess: CollectionAfterReadHook = async ({ doc, req }) => {
  if (req.user) {
    console.log(`[Audit] User ${req.user.id} accessed DataRoom ${doc.id} at ${new Date().toISOString()}`)
  }
  return doc
}

export const logDataRoomChange: CollectionAfterChangeHook = async ({ doc, req, operation }) => {
  if (req.user) {
    console.log(`[Audit] User ${req.user.id} performed ${operation} on DataRoom ${doc.id} at ${new Date().toISOString()}`)
  }
  return doc
}
