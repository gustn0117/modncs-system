'use client'

import { useState, FormEvent } from 'react'

export default function InquiryPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">구매 문의</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            복합기 렌탈, 구매, 솔루션 도입 등 무엇이든 편하게 문의해주세요.
            빠르고 정확하게 안내드리겠습니다.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-4">연락처 정보</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">담당자</p>
                    <p className="font-semibold text-gray-900">박부장</p>
                    <a href="tel:010-6603-3432" className="text-blue-700 font-bold text-lg hover:text-blue-800">010-6603-3432</a>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 mb-1">매장</p>
                    <a href="tel:044-868-4874" className="text-blue-700 font-bold text-lg hover:text-blue-800">044-868-4874</a>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 mb-1">상담 시간</p>
                    <p className="font-semibold text-gray-900">평일 09:00 ~ 18:00</p>
                    <p className="text-sm text-gray-500">토/일/공휴일 휴무</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">빠른 상담 원하시나요?</h3>
                <p className="text-blue-200 text-sm mb-4">전화 한 통이면 바로 상담 가능합니다.</p>
                <a href="tel:010-6603-3432" className="block text-center bg-white text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-50 transition">
                  지금 전화하기
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">문의가 접수되었습니다!</h3>
                  <p className="text-gray-600 mb-6">빠른 시일 내에 담당자가 연락드리겠습니다.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-700 font-semibold hover:text-blue-800"
                  >
                    다시 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">문의 양식</h3>
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">회사명 *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                          placeholder="회사명을 입력하세요"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">담당자명 *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                          placeholder="담당자명을 입력하세요"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">연락처 *</label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                          placeholder="010-0000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                          placeholder="email@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">문의 유형 *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">선택해주세요</option>
                        <option value="rental">복합기 렌탈</option>
                        <option value="purchase">복합기 구매</option>
                        <option value="solution">솔루션상품</option>
                        <option value="as">A/S 문의</option>
                        <option value="other">기타</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">문의 내용 *</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                        placeholder="문의하실 내용을 자세히 적어주세요. (필요 수량, 용도, 예산 등)"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-700 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl text-lg"
                    >
                      문의 접수하기
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      접수 후 1영업일 이내에 담당자가 연락드립니다.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
