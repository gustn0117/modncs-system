import Link from 'next/link'

const solutions = [
  {
    title: '문서 관리 솔루션',
    desc: '전자 문서 관리 시스템으로 종이 문서를 디지털화하고, 검색과 공유를 간편하게 할 수 있습니다. 문서 보안과 버전 관리까지 한 번에 해결하세요.',
    features: ['자동 문서 분류', '전문 검색 기능', '접근 권한 관리', '문서 이력 추적'],
    icon: '📄',
  },
  {
    title: '보안 인쇄 솔루션',
    desc: '인증 후 출력 시스템으로 무분별한 인쇄를 방지하고, 기밀 문서의 보안을 강화합니다. 인쇄 이력 관리로 비용 절감 효과도 얻을 수 있습니다.',
    features: ['사용자 인증 출력', '인쇄 이력 모니터링', '비용 분석 리포트', '워터마크 자동 삽입'],
    icon: '🔒',
  },
  {
    title: '클라우드 연동 솔루션',
    desc: '복합기에서 직접 클라우드 서비스에 접근하여 스캔 데이터를 업로드하거나, 클라우드 문서를 바로 인쇄할 수 있습니다.',
    features: ['Google Drive 연동', 'OneDrive 연동', '클라우드 다이렉트 인쇄', '모바일 인쇄 지원'],
    icon: '☁️',
  },
  {
    title: 'OCR 솔루션',
    desc: '스캔한 문서를 자동으로 텍스트 인식하여 검색 가능한 PDF로 변환합니다. 대량 문서 디지털화 작업을 효율적으로 처리할 수 있습니다.',
    features: ['한국어/영어 인식', '자동 PDF 변환', '대량 처리 지원', '정확도 99%+'],
    icon: '🔍',
  },
]

export default function SolutionPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">솔루션상품</h1>
          <p className="text-xl text-purple-200 max-w-2xl">
            단순한 인쇄를 넘어, 업무 효율을 극대화하는 스마트 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {solutions.map((sol, i) => (
            <div key={sol.title} className={`card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center text-4xl">
                  {sol.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{sol.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{sol.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {sol.features.map((f) => (
                    <span key={f} className="bg-purple-50 text-purple-700 text-sm px-4 py-1.5 rounded-full border border-purple-100 font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <Link href="/inquiry" className="text-blue-700 font-semibold hover:text-blue-800 inline-flex items-center gap-1">
                  도입 문의하기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
