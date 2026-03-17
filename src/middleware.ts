import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip login page and login API
  if (pathname === '/admin/login' || pathname === '/api/admin/login') {
    return NextResponse.next()
  }

  // Protect admin pages and admin API routes
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const token = request.cookies.get('admin_session')?.value

    if (!token) {
      if (pathname.startsWith('/api/admin')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // Basic JWT structure check (full verify happens in API routes)
    try {
      const parts = token.split('.')
      if (parts.length !== 3) throw new Error()
      const payload = JSON.parse(atob(parts[1]))
      if (payload.exp && payload.exp * 1000 < Date.now()) throw new Error()
    } catch {
      if (pathname.startsWith('/api/admin')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      const response = NextResponse.redirect(new URL('/admin/login', request.url))
      response.cookies.delete('admin_session')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
