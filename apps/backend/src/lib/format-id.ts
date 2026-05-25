/**
 * Utility functions for Indonesian market data formatting
 */

/**
 * Format phone number to Indonesian format (starts with 08 or 628)
 */
export const formatPhoneNumber = (phone: string): string => {
  let cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('62')) {
    cleaned = '0' + cleaned.substring(2)
  }
  return cleaned
}

/**
 * Format as WhatsApp Link
 */
export const formatWhatsAppLink = (phone: string, message: string = ''): string => {
  let cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('08')) {
    cleaned = '62' + cleaned.substring(1)
  }
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`
}

/**
 * Format currency to IDR
 */
export const formatIDR = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format date for Indonesia
 */
export const formatDateID = (date: Date | string): string => {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}
