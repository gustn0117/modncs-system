import type { Metadata } from 'next'
import Link from 'next/link'
import { supabaseAdmin } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import type { Product } from '@/lib/types'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data: product } = await supabaseAdmin
    .from('products')
    .select('name, description, category, image_url')
    .eq('slug', params.slug)
    .single()

  if (!product) return { title: '제품을 찾을 수 없습니다' }

  return {
    title: product.name,
    description: product.description || `${product.name} - ${product.category}. 모든CS시스템에서 렌탈 및 구매 가능. 무료 상담 및 맞춤 견적.`,
    openGraph: {
      title: `${product.name} | 모든CS시스템`,
      description: product.description || `${product.name} - 모든CS시스템`,
      images: product.image_url ? [{ url: product.image_url }] : undefined,
    },
  }
}

async function getProduct(slug: string): Promise<Product | null> {
  const { data } = await supabaseAdmin
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single()
  return data
}

async function getRelatedProducts(product: Product): Promise<Product[]> {
  const { data } = await supabaseAdmin
    .from('products')
    .select('*')
    .eq('category', product.category)
    .neq('id', product.id)
    .eq('is_active', true)
    .limit(3)
  return data || []
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)
  if (!product) notFound()

  const related = await getRelatedProducts(product)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/purchase" className="text-gray-400 text-sm hover:text-gray-600 mb-6 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            전체 제품
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 mt-4">
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 flex items-center justify-center shadow-sm sticky top-24">
                {product.image_url ? (
                  <img src={product.image_url} alt={product.name} className="max-h-80 object-contain" />
                ) : (
                  <svg className="w-40 h-40 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                  </svg>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-3">
                {product.tag && (
                  <span className="bg-navy-900 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full">{product.tag}</span>
                )}
                <span className="text-gray-400 text-sm">{product.category}</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-4 tracking-tight leading-tight">{product.name}</h1>

              {product.description && (
                <p className="text-gray-500 text-lg mb-6 leading-relaxed">{product.description}</p>
              )}

              {product.price_display && (
                <div className="bg-navy-50 rounded-2xl p-5 mb-6">
                  <p className="text-sm text-gray-400 mb-1">렌탈/구매 가격</p>
                  <p className="text-2xl font-bold text-navy-900">{product.price_display}</p>
                </div>
              )}

              {/* Quick specs */}
              {product.speed && (
                <div className="flex items-center gap-6 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">출력 속도</p>
                      <p className="font-semibold text-navy-900">{product.speed}</p>
                    </div>
                  </div>
                  {product.print_volume && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">포함 장수</p>
                        <p className="font-semibold text-navy-900">{product.print_volume}</p>
                      </div>
                    </div>
                  )}
                  {product.type !== 'purchase' && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">토너</p>
                        <p className="font-semibold text-navy-900">무상 공급</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Features tags */}
              {product.features && product.features.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((f) => (
                    <span key={f} className="bg-gray-50 text-gray-600 text-sm px-4 py-1.5 rounded-full border border-gray-100">{f}</span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/inquiry?product=${product.slug}`}
                  className="flex-1 text-center bg-gradient-to-r from-navy-900 to-navy-800 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-navy-900/20 transition-all text-lg"
                >
                  견적 문의하기
                </Link>
                <a
                  href="tel:010-6603-3432"
                  className="flex-1 text-center bg-gray-100 text-navy-900 font-bold py-4 px-8 rounded-xl hover:bg-gray-200 transition text-lg"
                >
                  전화 상담
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      {product.specs && Object.keys(product.specs).length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">상세 스펙</h2>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              {Object.entries(product.specs).map(([key, value], i) => (
                <div key={key} className={`flex items-center px-8 py-4 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <dt className="w-1/3 text-sm font-medium text-gray-400">{key}</dt>
                  <dd className="text-sm font-semibold text-navy-900">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50/80">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">관련 제품</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="h-40 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
                    {p.image_url ? (
                      <img src={p.image_url} alt={p.name} className="h-32 object-contain group-hover:scale-105 transition-transform" />
                    ) : (
                      <svg className="w-16 h-16 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                      </svg>
                    )}
                  </div>
                  <div className="p-5 border-t border-gray-50">
                    <p className="text-xs text-gray-400 mb-1">{p.category}</p>
                    <h3 className="font-bold text-navy-900 text-sm group-hover:text-navy-700 transition">{p.name}</h3>
                    {p.price_display && <p className="text-navy-700 font-bold mt-1">{p.price_display}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-navy-950 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">이 제품이 궁금하신가요?</h2>
          <p className="text-white/50 mb-8">전문 상담사가 맞춤 견적과 상세 안내를 드립니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/inquiry?product=${product.slug}`}
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-bold py-4 px-10 rounded-xl hover:from-gold-500 hover:to-gold-600 transition-all shadow-lg shadow-gold-400/25"
            >
              견적 문의하기
            </Link>
            <a
              href="tel:010-6603-3432"
              className="border border-white/20 text-white font-bold py-4 px-10 rounded-xl hover:bg-white/10 transition"
            >
              전화 상담
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
