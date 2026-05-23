import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export async function GET(req: NextRequest) {
  try {
    const cookie = req.headers.get('cookie') || ''
    const res = await fetch(`${BACKEND_URL}/api/auth/me`, {
      headers: { cookie },
    })

    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch (err: any) {
    return NextResponse.json({ user: null }, { status: 401 })
  }
}
