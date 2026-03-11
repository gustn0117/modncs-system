import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase/client'
import type { Product } from '@/lib/types'

async function getFeaturedProducts(): Promise<Product[]> {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('is_popular', true)
    .order('sort_order')
    .limit(3)
  return data || []
}

const services = [
  {
    title: '복합기 렌탈',
    desc: '초기 비용 부담 없이 최신 복합기를 합리적인 월 렌탈료로 이용하세요.',
    href: '/rental',
    gradient: 'from-blue-500 to-cyan-500',
    img: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=400&h=250&fit=crop',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  {
    title: '복합기 구매',
    desc: '캐논 공식 인증 대리점에서 정품 복합기를 최적의 가격에 구매하세요.',
    href: '/purchase',
    gradient: 'from-violet-500 to-purple-500',
    img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=250&fit=crop',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
  },
  {
    title: '솔루션상품',
    desc: '문서 관리, 보안 인쇄, 클라우드 연동 등 스마트 솔루션을 제공합니다.',
    href: '/solution',
    gradient: 'from-emerald-500 to-teal-500',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: '고객센터',
    desc: '전문 기술진이 신속한 A/S와 정기 점검 서비스를 제공합니다.',
    href: '/support',
    gradient: 'from-amber-500 to-orange-500',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
]

export default async function Home() {
  const featured = await getFeaturedProducts()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1920&h=1080&fit=crop"
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/50 to-navy-800/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-28 md:py-36 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="bg-gold-400/15 text-gold-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-gold-400/20 backdrop-blur-sm">여성기업인증</span>
              <span className="bg-white/5 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">캐논코리아 공식 인증 대리점</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 tracking-tight">
              세종 · 대전 · 충청권
              <br />
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">복합기 전문</span> 파트너
            </h1>
            <p className="text-lg md:text-xl text-white/50 mb-10 leading-relaxed max-w-xl">
              렌탈부터 구매, 유지보수까지 한 곳에서.
              <br />
              캐논 공식 인증 대리점 모든CS시스템이 함께합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/inquiry" className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-900 font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 hover:scale-[1.02]">
                무료 상담 신청
              </Link>
              <Link href="/rental" className="border border-white/20 text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-xl transition-all duration-300 text-lg backdrop-blur-sm">
                렌탈 서비스 보기
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm text-white/40 flex-wrap">
              {['무료 방문 상담', '정품 토너 공급', '정기 점검 서비스'].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-3 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">서비스 안내</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">모든CS시스템이 제공하는 전문 서비스를 만나보세요</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group bg-white rounded-2xl border border-gray-100 hover:border-transparent overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1">
                <div className="relative h-40 overflow-hidden">
                  <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute bottom-3 left-3 w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon}/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{service.desc}</p>
                  <span className="inline-flex items-center gap-1 text-navy-600 font-medium text-sm group-hover:gap-2.5 transition-all duration-300">
                    자세히 보기
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featured.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-3 block">Best Products</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">인기 제품</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">가장 많이 선택하는 베스트 복합기를 만나보세요</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featured.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`} className="group">
                  <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:border-transparent hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 transition-all duration-300">
                    <div className="relative h-56 bg-white flex items-center justify-center p-6 overflow-hidden">
                      {product.image_url ? (
                        <img src={product.image_url} alt={product.name} className="h-44 object-contain group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <svg className="w-24 h-24 text-navy-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                        </svg>
                      )}
                      {product.tag && (
                        <span className="absolute top-4 left-4 bg-gradient-to-r from-navy-900 to-navy-800 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full">
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-gray-400 mb-1">{product.category} · {product.speed}</p>
                      <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition">{product.name}</h3>
                      {product.price_display && (
                        <p className="text-navy-700 font-bold text-lg mb-3">{product.price_display}</p>
                      )}
                      <span className="inline-flex items-center gap-1 text-navy-600 font-medium text-sm group-hover:gap-2.5 transition-all duration-300">
                        자세히 보기
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/purchase" className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 text-lg transition">
                전체 제품 보기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Us */}
      <section className="py-24 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-3 block">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-6">왜 모든CS시스템인가요?</h2>
              <p className="text-gray-500 text-lg mb-10">고객님의 비즈니스를 위한 최적의 선택, 15년 이상의 경험으로 증명합니다.</p>
              <div className="space-y-6">
                {[
                  { title: '캐논 공식 인증 대리점', desc: '캐논코리아로부터 공식 인증받은 대리점으로 정품 제품과 정식 A/S를 보장합니다.', gradient: 'from-blue-500 to-cyan-500', iconPath: 'M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' },
                  { title: '여성기업인증 기업', desc: '여성기업인증을 받은 신뢰할 수 있는 기업으로, 공공기관 납품 실적을 보유하고 있습니다.', gradient: 'from-rose-500 to-pink-500', iconPath: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' },
                  { title: '지역 밀착 서비스', desc: '세종, 대전, 충청권에 특화된 전문 매장으로 빠른 방문 서비스와 긴급 대응이 가능합니다.', gradient: 'from-emerald-500 to-teal-500', iconPath: 'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d={item.iconPath} clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
                <Image
                  src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop"
                  alt="모던 오피스 환경"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-navy-900 text-lg">1,000+</p>
                    <p className="text-xs text-gray-400">누적 고객사</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-navy-900 text-white rounded-2xl p-4 shadow-xl">
                <p className="font-bold text-gold-400 text-2xl">15+</p>
                <p className="text-xs text-white/60">년 경력</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-3 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">이용 절차</h2>
            <p className="text-gray-500 text-lg">간편한 4단계로 시작하세요</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '상담 신청', desc: '전화 또는 온라인으로 문의해 주세요' },
              { step: '02', title: '방문 상담', desc: '전문 상담사가 직접 방문하여 맞춤 제안' },
              { step: '03', title: '설치 & 교육', desc: '장비 설치 후 사용법 교육까지 완료' },
              { step: '04', title: '정기 관리', desc: '토너 공급, 정기 점검, A/S 지원' },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-navy-200 to-transparent" />
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-gold-400 font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=600&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/90" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative text-white">
          <span className="text-sm font-semibold text-gold-400 tracking-wider uppercase mb-4 block">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            복합기 관련 고민, 지금 바로 상담받으세요
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            무료 방문 상담 및 맞춤 견적을 제공해 드립니다
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/inquiry" className="bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 font-bold py-4 px-10 rounded-xl hover:from-gold-500 hover:to-gold-600 transition-all text-lg shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 hover:scale-[1.02]">
              무료 상담 신청하기
            </Link>
            <a href="tel:010-6603-3432" className="border border-white/20 text-white font-bold py-4 px-10 rounded-xl hover:bg-white/10 transition-all text-lg backdrop-blur-sm">
              전화 상담: 010-6603-3432
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
