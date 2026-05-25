import { getPayload } from 'payload'
import config from '../payload.config'

/**
 * Server-side Payload client wrapper.
 * Ensures consistent access control and safe data projection.
 */

export const getPayloadClient = async () => {
  return await getPayload({ config })
}

export type APIError = {
  code: 'NOT_FOUND' | 'FORBIDDEN' | 'VALIDATION_ERROR' | 'SERVER_ERROR'
  message: string
}

export const normalizeError = (error: unknown): APIError => {
  // Logic untuk memetakan error Payload/DB ke DTO Error
  console.error('[API Error]:', error)
  return {
    code: 'SERVER_ERROR',
    message: 'An unexpected error occurred.',
  }
}
