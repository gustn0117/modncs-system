'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: '렌탈 계약 기간은 어떻게 되나요?',
    a: '기본 계약 기간은 3년(36개월)이며, 고객님의 상황에 맞게 1년~5년까지 유연하게 조정 가능합니다. 계약 기간에 따라 월 렌탈료가 달라질 수 있습니다.',
  },
  {
    q: '토너는 무상으로 제공되나요?',
    a: '네, 렌탈 서비스의 경우 토너 및 드럼 등 소모품이 무상으로 제공됩니다. 소모품 소진 시 연락 주시면 신속하게 배송해 드립니다.',
  },
  {
    q: 'A/S는 얼마나 빨리 받을 수 있나요?',
    a: '세종, 대전, 충청권 지역은 당일 방문 A/S가 가능합니다. 접수 후 보통 2~4시간 내에 기술진이 방문합니다. 긴급한 경우 즉시 대응도 가능합니다.',
  },
  {
    q: '구매 후 설치와 교육도 해주시나요?',
    a: '물론입니다. 구매하신 복합기의 설치, 네트워크 설정, 사용법 교육까지 무상으로 제공해 드립니다. 직원 교체 시에도 재교육이 가능합니다.',
  },
  {
    q: '중도 해지가 가능한가요?',
    a: '중도 해지 시 잔여 기간에 대한 위약금이 발생할 수 있습니다. 다만 기업 이전, 폐업 등 불가피한 사유의 경우 협의를 통해 조정 가능합니다.',
  },
]

export default function SupportPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <>
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gold-400/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <span className="text-sm font-semibold text-gold-400 tracking-wider uppercase mb-4 block">Support</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">고객센터</h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            궁금한 점이 있으시면 언제든 문의해주세요. 전문 상담원이 친절하게 안내드립니다.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <a href="tel:010-6603-3432" className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:bg-white hover:border-transparent hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-navy-900 mb-1">휴대폰</h3>
              <p className="text-navy-700 font-bold text-xl">010-6603-3432</p>
            </a>
            <a href="tel:044-868-4874" className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:bg-white hover:border-transparent hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-navy-900 mb-1">매장 전화</h3>
              <p className="text-navy-700 font-bold text-xl">044-868-4874</p>
            </a>
            <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:bg-white hover:border-transparent hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-navy-900 mb-1">상담 시간</h3>
              <p className="text-navy-700 font-bold text-xl">평일 09:00 ~ 18:00</p>
              <p className="text-sm text-gray-400 mt-1">토/일/공휴일 휴무</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/80">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-navy-900">자주 묻는 질문</h2>
          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-navy-900 pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openIdx === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {openIdx === i && (
                  <div className="px-6 pb-5 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">더 궁금한 점이 있으신가요?</h2>
          <p className="text-gray-500 mb-8 text-lg">언제든지 편하게 문의해주세요. 신속하게 답변드리겠습니다.</p>
          <Link href="/inquiry" className="inline-block bg-gradient-to-r from-navy-900 to-navy-800 text-white font-bold py-4 px-10 rounded-xl hover:shadow-lg hover:shadow-navy-900/20 transition-all duration-300 text-lg">
            문의하기
          </Link>
        </div>
      </section>
    </>
  )
}
