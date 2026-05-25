'use server'

/**
 * Server Action untuk menyimpan Inquiry/Lead dari form franchise.
 */
export async function submitFranchiseInquiry(data: {
  name: string
  email: string
  whatsapp: string
  franchiseId: string
  intent: 'brochure' | 'availability' | 'contact' | 'application'
  message?: string
}) {
  const PAYLOAD_API = process.env.PAYLOAD_PUBLIC_API_URL || 'http://localhost:3001/api'

  try {
    const res = await fetch(`${PAYLOAD_API}/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        franchise: data.franchiseId,
        intent: data.intent,
        message: data.message,
        status: 'new',
      }),
    })

    if (!res.ok) throw new Error('Failed to submit inquiry')

    return { success: true }
  } catch (error) {
    console.error('Submit Inquiry Error:', error)
    return { success: false, error: 'Gagal mengirim inquiry. Silakan coba lagi.' }
  }
}
