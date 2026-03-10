import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { notFound } from 'next/navigation'
import type { Product } from '@/lib/types'

async function getProduct(slug: string): Promise<Product | null> {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single()
  return data
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)
  if (!product) notFound()

  return (
    <>
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-gold-400/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <Link href="/purchase" className="text-white/40 text-sm hover:text-white/70 mb-6 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            목록으로
          </Link>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 flex items-center justify-center">
                {product.image_url ? (
                  <img src={product.image_url} alt={product.name} className="max-h-64 object-contain" />
                ) : (
                  <svg className="w-32 h-32 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                  </svg>
                )}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                {product.tag && (
                  <span className="bg-gold-400/20 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full">{product.tag}</span>
                )}
                <span className="text-white/40 text-sm">{product.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">{product.name}</h1>
              {product.description && (
                <p className="text-white/50 text-lg mb-6 leading-relaxed">{product.description}</p>
              )}
              {product.price_display && (
                <p className="text-2xl font-bold text-gold-400 mb-6">{product.price_display}</p>
              )}
              {product.speed && (
                <p className="text-white/40 mb-6">출력 속도: <span className="text-white font-semibold">{product.speed}</span></p>
              )}
              <Link
                href={`/inquiry?product=${product.slug}`}
                className="inline-block bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-bold py-4 px-10 rounded-xl hover:from-gold-500 hover:to-gold-600 transition-all shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 hover:scale-[1.02]"
              >
                견적 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50/80">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {product.features && product.features.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-navy-900 mb-6">주요 기능</h2>
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-navy-900 mb-6">상세 스펙</h2>
                <dl className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex items-start py-2 border-b border-gray-50 last:border-0">
                      <dt className="w-1/3 text-sm text-gray-400 shrink-0">{key}</dt>
                      <dd className="text-sm font-medium text-navy-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">이 제품이 궁금하신가요?</h2>
          <p className="text-gray-500 mb-8">전문 상담사가 맞춤 견적과 상세 안내를 드립니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/inquiry?product=${product.slug}`}
              className="bg-gradient-to-r from-navy-900 to-navy-800 text-white font-bold py-4 px-10 rounded-xl hover:shadow-lg hover:shadow-navy-900/20 transition-all"
            >
              견적 문의하기
            </Link>
            <a
              href="tel:010-6603-3432"
              className="bg-gray-100 text-navy-900 font-bold py-4 px-10 rounded-xl hover:bg-gray-200 transition"
            >
              전화 상담
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
