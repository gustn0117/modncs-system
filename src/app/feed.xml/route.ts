import { supabaseAdmin } from '@/lib/supabase/server'

export async function GET() {
  const baseUrl = 'https://modncssystem.com'

  const { data: products } = await supabaseAdmin
    .from('products')
    .select('name, slug, description, category, updated_at')
    .eq('is_active', true)
    .order('updated_at', { ascending: false })

  const items = (products || []).map((p) => `
    <item>
      <title>${escapeXml(p.name)}</title>
      <link>${baseUrl}/products/${p.slug}</link>
      <description>${escapeXml(p.description || `${p.category} - ${p.name}`)}</description>
      <pubDate>${new Date(p.updated_at).toUTCString()}</pubDate>
      <guid>${baseUrl}/products/${p.slug}</guid>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>모든CS시스템 - 복합기 렌탈 &amp; 구매 전문</title>
    <link>${baseUrl}</link>
    <description>세종, 대전, 충청권 캐논 복합기 렌탈 및 구매 전문 매장. 캐논코리아 공식 인증 대리점.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
