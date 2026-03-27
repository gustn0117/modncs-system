import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { company_name, contact_name, phone, email, inquiry_type, message, product_id } = body

    if (!company_name || !contact_name || !phone || !inquiry_type || !message) {
      return NextResponse.json({ error: '필수 항목을 모두 입력해주세요.' }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from('inquiries')
      .insert({
        company_name,
        contact_name,
        phone,
        email: email || null,
        inquiry_type,
        message,
        product_id: product_id || null,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
