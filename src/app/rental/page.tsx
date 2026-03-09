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
  { title: '초기 비용 제로', desc: '장비 구매 비용 없이 최신 복합기를 바로 사용할 수 있습니다.', icon: '💰' },
  { title: '올인원 관리', desc: '토너, 부품, A/S까지 모든 유지보수를 포함합니다.', icon: '🔧' },
  { title: '최신 장비 교체', desc: '계약 기간 만료 시 최신 모델로 무상 교체해 드립니다.', icon: '🔄' },
  { title: '세금 혜택', desc: '렌탈 비용은 전액 비용 처리가 가능합니다.', icon: '📋' },
]

export default function RentalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">복합기 렌탈</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            초기 비용 걱정 없이, 합리적인 월 렌탈료로 최신 복합기를 이용하세요.
            토너 공급부터 A/S까지 모든 것을 책임집니다.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-gray-900">렌탈의 장점</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all border border-gray-100 hover:border-blue-200">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-gray-900">렌탈 요금제</h2>
          <p className="section-subtitle">비즈니스 규모에 맞는 최적의 플랜을 선택하세요</p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-blue-700 text-white shadow-2xl scale-105 relative'
                    : 'bg-white text-gray-900 shadow-lg border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full">
                    가장 인기
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>원 / {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'bg-white text-blue-700 hover:bg-blue-50'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                  }`}
                >
                  상담 신청
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            * 실제 요금은 장비 모델 및 계약 조건에 따라 달라질 수 있습니다. 정확한 견적은 상담을 통해 안내드립니다.
          </p>
        </div>
      </section>
    </>
  )
}
