import Link from 'next/link'

const products = [
  {
    name: 'Canon imageRUNNER ADVANCE DX C3826i',
    category: '컬러 복합기',
    speed: '26매/분',
    features: ['양면 자동 인쇄', '대용량 급지함', '네트워크 스캔', '모바일 인쇄 지원'],
    tag: '사무실 추천',
  },
  {
    name: 'Canon imageRUNNER ADVANCE DX 4745i',
    category: '흑백 복합기',
    speed: '45매/분',
    features: ['고속 출력', '보안 인쇄', '클라우드 연동', '대량 문서 처리'],
    tag: '대량 인쇄',
  },
  {
    name: 'Canon imageRUNNER ADVANCE DX C5840i',
    category: '컬러 복합기',
    speed: '40매/분',
    features: ['고해상도 컬러', 'A3 지원', '후처리 옵션', '고급 보안 기능'],
    tag: '프리미엄',
  },
  {
    name: 'Canon imageRUNNER 2630i',
    category: '흑백 복합기',
    speed: '30매/분',
    features: ['경제적 운용', '컴팩트 디자인', '기본 스캔', 'USB 다이렉트'],
    tag: '가성비',
  },
]

export default function PurchasePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">복합기 구매</h1>
          <p className="text-xl text-indigo-200 max-w-2xl">
            캐논코리아 공식 인증 대리점에서 정품 복합기를 최적의 가격에 만나보세요.
            설치부터 교육까지 원스톱 서비스를 제공합니다.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-gray-900">추천 제품</h2>
          <p className="section-subtitle">캐논 정품 복합기 라인업</p>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p) => (
              <div key={p.name} className="card p-6 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{p.tag}</span>
                  <span className="text-sm text-gray-500">{p.category}</span>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-8 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                    </svg>
                    <p className="text-sm text-gray-500">{p.speed}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{p.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.features.map((f) => (
                    <span key={f} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{f}</span>
                  ))}
                </div>
                <Link
                  href="/inquiry"
                  className="block text-center bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
                >
                  견적 문의
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">원하는 모델을 못 찾으셨나요?</h2>
            <p className="text-blue-200 mb-8 text-lg">캐논 전 모델 취급 가능합니다. 문의 주시면 맞춤 견적을 보내드립니다.</p>
            <Link href="/inquiry" className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-xl hover:bg-blue-50 transition shadow-xl">
              맞춤 견적 요청
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
