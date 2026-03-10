import Link from 'next/link'

const services = [
  {
    title: '복합기 렌탈',
    desc: '초기 비용 부담 없이 최신 복합기를 합리적인 월 렌탈료로 이용하세요. 유지보수 및 토너 공급까지 원스톱 서비스를 제공합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
      </svg>
    ),
    href: '/rental',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: '복합기 구매',
    desc: '캐논 공식 인증 대리점으로서 정품 복합기를 최적의 가격에 구매하실 수 있습니다. 설치부터 교육까지 책임집니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
      </svg>
    ),
    href: '/purchase',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: '솔루션상품',
    desc: '문서 관리, 보안 인쇄, 클라우드 연동 등 업무 효율을 극대화하는 다양한 소프트웨어 솔루션을 제공합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    href: '/solution',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: '고객센터',
    desc: '전문 기술 인력이 신속한 A/S와 정기 점검 서비스를 제공합니다. 장비 문제 발생 시 빠르게 대응합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    ),
    href: '/support',
    gradient: 'from-amber-500 to-orange-500',
  },
]

const features = [
  { number: '15+', label: '년 업력', desc: '오랜 경험과 노하우' },
  { number: '1,000+', label: '고객사', desc: '다양한 기업 파트너' },
  { number: '24h', label: '긴급 대응', desc: '신속한 A/S 처리' },
  { number: '100%', label: '정품 보증', desc: '캐논 공식 인증' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section - Centered */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-gold-400/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-700/15 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.4)_100%)]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 py-28 md:py-40 relative text-center">
          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <span className="bg-gold-400/15 text-gold-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-gold-400/20 backdrop-blur-sm">여성기업인증</span>
            <span className="bg-white/5 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">캐논코리아 공식 인증 대리점</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 tracking-tight">
            세종 · 대전 · 충청권
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">복합기 전문</span> 파트너
          </h1>
          <p className="text-lg md:text-xl text-white/50 mb-10 leading-relaxed max-w-2xl mx-auto">
            렌탈부터 구매, 유지보수까지 한 곳에서.
            <br />
            캐논 공식 인증 대리점 모든CS시스템이 함께합니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/inquiry" className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-900 font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 hover:scale-[1.02]">
              무료 상담 신청
            </Link>
            <Link href="/rental" className="border border-white/20 text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-xl transition-all duration-300 text-lg backdrop-blur-sm">
              렌탈 서비스 보기
            </Link>
          </div>
          <div className="mt-14 flex items-center justify-center gap-8 text-sm text-white/40 flex-wrap">
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
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10 z-10 pb-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/5 border border-gray-100 p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {features.map((f, i) => (
                <div key={f.label} className={`text-center ${i < features.length - 1 ? 'md:border-r md:border-gray-100' : ''}`}>
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-navy-800 to-navy-600 bg-clip-text text-transparent mb-1">
                    {f.number}
                  </div>
                  <div className="text-sm font-bold text-navy-700 mb-0.5">{f.label}</div>
                  <div className="text-xs text-gray-400">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-3 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">서비스 안내</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">모든CS시스템이 제공하는 전문 서비스를 만나보세요</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group bg-white rounded-2xl border border-gray-100 hover:border-transparent p-7 transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1">
                <div className={`bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`} style={{width: '3.25rem', height: '3.25rem'}}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-navy-600 font-medium text-sm group-hover:gap-2.5 transition-all duration-300">
                  자세히 보기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gold-500 tracking-wider uppercase mb-3 block">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">왜 모든CS시스템인가요?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">고객님의 비즈니스를 위한 최적의 선택</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>,
                title: '캐논 공식 인증 대리점',
                desc: '캐논코리아로부터 공식 인증받은 대리점으로 정품 제품과 정식 A/S를 보장합니다.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>,
                title: '여성기업인증 기업',
                desc: '여성기업인증을 받은 신뢰할 수 있는 기업으로, 공공기관 납품 실적을 보유하고 있습니다.',
                gradient: 'from-rose-500 to-pink-500',
              },
              {
                icon: <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>,
                title: '지역 밀착 서비스',
                desc: '세종, 대전, 충청권에 특화된 전문 매장으로 빠른 방문 서비스와 긴급 대응이 가능합니다.',
                gradient: 'from-emerald-500 to-teal-500',
              },
            ].map((item) => (
              <div key={item.title} className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-navy-900/5 hover:border-transparent hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-400/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
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
