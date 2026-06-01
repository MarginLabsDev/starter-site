import { NextRequest } from 'next/server'
import { checkPreviewSecret } from '@/lib/preview-guard'

export function middleware(request: NextRequest) {
  const guard = checkPreviewSecret(request)
  if (guard) return guard
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
