import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '솔루션상품',
  description: '모든CS시스템 문서 관리 솔루션. 보안 인쇄, 클라우드 연동, 출력 관리 등 사무실 업무 효율을 극대화하는 캐논 소프트웨어 솔루션.',
}

const solutions = [
  {
    title: '문서 관리 솔루션',
    desc: '전자 문서 관리 시스템으로 종이 문서를 디지털화하고, 검색과 공유를 간편하게 할 수 있습니다. 문서 보안과 버전 관리까지 한 번에 해결하세요.',
    features: ['자동 문서 분류', '전문 검색 기능', '접근 권한 관리', '문서 이력 추적'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
  },
  {
    title: '보안 인쇄 솔루션',
    desc: '인증 후 출력 시스템으로 무분별한 인쇄를 방지하고, 기밀 문서의 보안을 강화합니다. 인쇄 이력 관리로 비용 절감 효과도 얻을 수 있습니다.',
    features: ['사용자 인증 출력', '인쇄 이력 모니터링', '비용 분석 리포트', '워터마크 자동 삽입'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
  },
  {
    title: '클라우드 연동 솔루션',
    desc: '복합기에서 직접 클라우드 서비스에 접근하여 스캔 데이터를 업로드하거나, 클라우드 문서를 바로 인쇄할 수 있습니다.',
    features: ['Google Drive 연동', 'OneDrive 연동', '클라우드 다이렉트 인쇄', '모바일 인쇄 지원'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
      </svg>
    ),
  },
  {
    title: 'OCR 솔루션',
    desc: '스캔한 문서를 자동으로 텍스트 인식하여 검색 가능한 PDF로 변환합니다. 대량 문서 디지털화 작업을 효율적으로 처리할 수 있습니다.',
    features: ['한국어/영어 인식', '자동 PDF 변환', '대량 처리 지원', '정확도 99%+'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
  },
]

export default function SolutionPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gold-400/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <span className="text-sm font-semibold text-gold-400 tracking-wider uppercase mb-4 block">Solutions</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">솔루션상품</h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            단순한 인쇄를 넘어, 업무 효율을 극대화하는 스마트 솔루션을 제공합니다.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <section className="py-24 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {solutions.map((sol, i) => (
            <div key={sol.title} className={`bg-white rounded-2xl border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start hover:border-transparent hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl flex items-center justify-center text-gold-400 shadow-lg">
                  {sol.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{sol.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{sol.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {sol.features.map((f) => (
                    <span key={f} className="bg-navy-50 text-navy-700 text-sm px-4 py-1.5 rounded-full border border-navy-100 font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <Link href="/inquiry" className="text-navy-700 font-semibold hover:text-navy-900 inline-flex items-center gap-1">
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
