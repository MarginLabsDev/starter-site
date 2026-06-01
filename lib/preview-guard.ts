import { NextRequest, NextResponse } from 'next/server'

export function checkPreviewSecret(request: NextRequest): NextResponse | null {
  const host = request.nextUrl.hostname
  if (host === 'localhost' || host === '127.0.0.1' || host === '::1') return null
  if (!process.env.PREVIEW_SECRET) return null
  const header = request.headers.get('x-preview-secret')
  if (header === process.env.PREVIEW_SECRET) return null
  return new NextResponse('Unauthorized', { status: 403 })
}
