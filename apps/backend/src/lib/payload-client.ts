// Payload Client Wrapper
// Provides a runtime-initialized Payload instance for API route handlers.
import type { Payload } from 'payload'
import { getPayload } from 'payload'
import config from '../payload.config'

let cachedPayload: Payload | null = null

export const getPayloadClient = async (): Promise<Payload | null> => {
  if (cachedPayload) return cachedPayload
  try {
    cachedPayload = await getPayload({ config })
    return cachedPayload
  } catch (err) {
    console.error('Failed to initialize Payload client:', err)
    return null
  }
}
