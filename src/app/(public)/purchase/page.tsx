import type { Metadata } from 'next'
import Link from 'next/link'
import { supabaseAdmin } from '@/lib/supabase/server'
import ProductGrid from '@/components/ProductGrid'
import type { Product } from '@/lib/types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '복합기 구매',
  description: '모든CS시스템 캐논 복합기 구매. 캐논코리아 공식 인증 대리점에서 정품 복합기를 최적의 가격에 구매. 설치, 교육, A/S까지 원스톱 서비스.',
}

async function getPurchaseProducts(): Promise<Product[]> {
  const { data } = await supabaseAdmin
    .from('products')
    .select('*')
    .or('type.eq.purchase,type.eq.both')
    .eq('is_active', true)
    .order('sort_order')
    .order('created_at', { ascending: false })
  return data || []
}

export default async function PurchasePage() {
  const products = await getPurchaseProducts()

  return (
    <>
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-gold-400/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <span className="text-sm font-semibold text-gold-400 tracking-wider uppercase mb-4 block">Purchase</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">복합기 구매</h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            캐논코리아 공식 인증 대리점에서 정품 복합기를 최적의 가격에 만나보세요.
            <br className="hidden md:block" />
            설치부터 교육까지 원스톱 서비스를 제공합니다.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <section className="py-24 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-3 block">Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">구매 가능 제품</h2>
            <p className="text-gray-500 text-lg">캐논 정품 복합기 라인업</p>
          </div>
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 mb-6">현재 구매 가능 제품을 준비 중입니다.</p>
              <Link href="/inquiry" className="inline-block bg-gradient-to-r from-navy-900 to-navy-800 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all">
                문의하기
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-400/10 rounded-full blur-[100px]" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">원하는 모델을 못 찾으셨나요?</h2>
              <p className="text-white/50 mb-8 text-lg">캐논 전 모델 취급 가능합니다. 문의 주시면 맞춤 견적을 보내드립니다.</p>
              <Link href="/inquiry" className="inline-block bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-bold py-4 px-10 rounded-xl hover:from-gold-500 hover:to-gold-600 transition-all shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 hover:scale-[1.02]">
                맞춤 견적 요청
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
