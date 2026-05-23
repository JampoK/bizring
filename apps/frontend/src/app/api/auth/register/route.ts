import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const res = await fetch(`${BACKEND_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const data = await res.json()
    const response = NextResponse.json(data, { status: res.status })

    // Forward set-cookie header from backend
    const setCookie = res.headers.get('set-cookie')
    if (setCookie) {
      response.headers.set('set-cookie', setCookie)
    }

    return response
  } catch (err: any) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}
