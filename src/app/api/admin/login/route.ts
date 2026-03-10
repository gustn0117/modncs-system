import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { supabaseAdmin } from '@/lib/supabase/server'
import { signAdminToken } from '@/lib/admin-auth'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    const { data, error } = await supabaseAdmin
      .from('admin_settings')
      .select('admin_password_hash')
      .eq('id', 1)
      .single()

    if (error || !data) {
      return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }

    const valid = await bcrypt.compare(password, data.admin_password_hash)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = signAdminToken()
    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
