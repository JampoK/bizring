import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export async function POST(req: NextRequest) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/auth/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()
    const response = NextResponse.json(data, { status: res.status })

    // Clear cookie
    response.cookies.delete('payload-token')

    return response
  } catch (err: any) {
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 })
  }
}
