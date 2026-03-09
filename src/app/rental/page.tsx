import Link from 'next/link'

const plans = [
  {
    name: '베이직',
    price: '29,000',
    period: '월',
    features: ['흑백 복합기', '월 3,000매 포함', '토너 무상 공급', '분기별 정기점검', '전화 기술지원'],
    popular: false,
  },
  {
    name: '스탠다드',
    price: '49,000',
    period: '월',
    features: ['컬러 복합기', '월 5,000매 포함', '토너 무상 공급', '월 1회 정기점검', '당일 출장 A/S', '팩스 기능 포함'],
    popular: true,
  },
  {
    name: '프리미엄',
    price: '79,000',
    period: '월',
    features: ['고속 컬러 복합기', '월 10,000매 포함', '토너 무상 공급', '주 1회 정기점검', '4시간 내 긴급 출동', '보안인쇄 솔루션', '클라우드 연동'],
    popular: false,
  },
]

const benefits = [
  { title: '초기 비용 제로', desc: '장비 구매 비용 없이 최신 복합기를 바로 사용할 수 있습니다.', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
  ) },
  { title: '올인원 관리', desc: '토너, 부품, A/S까지 모든 유지보수를 포함합니다.', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
  ) },
  { title: '최신 장비 교체', desc: '계약 기간 만료 시 최신 모델로 무상 교체해 드립니다.', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
  ) },
  { title: '세금 혜택', desc: '렌탈 비용은 전액 비용 처리가 가능합니다.', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
  ) },
]

export default function RentalPage() {
  return (
    <>
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">복합기 렌탈</h1>
          <p className="text-lg text-white/50 max-w-2xl">
            초기 비용 걱정 없이, 합리적인 월 렌탈료로 최신 복합기를 이용하세요.
            토너 공급부터 A/S까지 모든 것을 책임집니다.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-navy-900">렌탈의 장점</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-navy-200 transition-all">
                <div className="w-11 h-11 bg-navy-900 rounded-lg flex items-center justify-center text-gold-400 mb-4">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-navy-900">렌탈 요금제</h2>
          <p className="section-subtitle">비즈니스 규모에 맞는 최적의 플랜을 선택하세요</p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-navy-900 text-white shadow-xl scale-105 relative'
                    : 'bg-white text-navy-900 border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-400 text-navy-900 text-sm font-bold px-4 py-1 rounded-full">
                    가장 인기
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-white/50' : 'text-gray-400'}`}>원 / {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg className={`w-4 h-4 shrink-0 ${plan.popular ? 'text-gold-400' : 'text-navy-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inquiry"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gold-400 text-navy-900 hover:bg-gold-500'
                      : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}
                >
                  상담 신청
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            * 실제 요금은 장비 모델 및 계약 조건에 따라 달라질 수 있습니다. 정확한 견적은 상담을 통해 안내드립니다.
          </p>
        </div>
      </section>
    </>
  )
}
