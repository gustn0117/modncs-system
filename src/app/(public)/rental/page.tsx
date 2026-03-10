import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import ProductGrid from '@/components/ProductGrid'
import type { Product } from '@/lib/types'

async function getRentalProducts(): Promise<Product[]> {
  const { data } = await supabase
    .from('products')
    .select('*')
    .or('type.eq.rental,type.eq.both')
    .eq('is_active', true)
    .order('sort_order')
    .order('created_at', { ascending: false })
  return data || []
}

const benefits = [
  { title: '초기 비용 제로', desc: '장비 구매 비용 없이 최신 복합기를 바로 사용할 수 있습니다.', gradient: 'from-emerald-500 to-teal-500', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
  ) },
  { title: '올인원 관리', desc: '토너, 부품, A/S까지 모든 유지보수를 포함합니다.', gradient: 'from-blue-500 to-cyan-500', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
  ) },
  { title: '최신 장비 교체', desc: '계약 기간 만료 시 최신 모델로 무상 교체해 드립니다.', gradient: 'from-violet-500 to-purple-500', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
  ) },
  { title: '세금 혜택', desc: '렌탈 비용은 전액 비용 처리가 가능합니다.', gradient: 'from-amber-500 to-orange-500', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
  ) },
]

export default async function RentalPage() {
  const products = await getRentalProducts()

  return (
    <>
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-gold-400/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <span className="text-sm font-semibold text-gold-400 tracking-wider uppercase mb-4 block">Rental Service</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">복합기 렌탈</h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            초기 비용 걱정 없이, 합리적인 월 렌탈료로 최신 복합기를 이용하세요.
            <br className="hidden md:block" />
            토너 공급부터 A/S까지 모든 것을 책임집니다.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-3 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">렌탈의 장점</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-navy-900/5 hover:border-transparent hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${b.gradient} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-3 block">Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">렌탈 가능 제품</h2>
            <p className="text-gray-500 text-lg">비즈니스 규모에 맞는 최적의 복합기를 선택하세요</p>
          </div>
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 mb-6">현재 렌탈 가능 제품을 준비 중입니다.</p>
              <Link href="/inquiry" className="inline-block bg-gradient-to-r from-navy-900 to-navy-800 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all">
                문의하기
              </Link>
            </div>
          )}
          <p className="text-center text-sm text-gray-400 mt-10">
            * 실제 요금은 장비 모델 및 계약 조건에 따라 달라질 수 있습니다. 정확한 견적은 상담을 통해 안내드립니다.
          </p>
        </div>
      </section>
    </>
  )
}
