'use client'

import { useState, FormEvent } from 'react'

export default function HomeInquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    company_name: '',
    contact_name: '',
    phone: '',
    email: '',
    inquiry_type: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json()
        setError(data.error || '오류가 발생했습니다.')
      }
    } catch {
      setError('서버 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 text-center">
        <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-navy-700" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
        </div>
        <h3 className="text-2xl font-black text-navy-950 mb-3">문의가 접수되었습니다!</h3>
        <p className="text-gray-600 font-medium mb-6">빠른 시일 내에 담당자가 연락드리겠습니다.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ company_name: '', contact_name: '', phone: '', email: '', inquiry_type: '', message: '' }) }}
          className="text-navy-700 font-bold hover:text-navy-900"
        >
          다시 작성하기
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-navy-900 mb-2">회사명 *</label>
            <input name="company_name" value={form.company_name} onChange={handleChange} type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition bg-white font-medium" placeholder="회사명" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy-900 mb-2">담당자명 *</label>
            <input name="contact_name" value={form.contact_name} onChange={handleChange} type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition bg-white font-medium" placeholder="담당자명" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-navy-900 mb-2">연락처 *</label>
            <input name="phone" value={form.phone} onChange={handleChange} type="tel" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition bg-white font-medium" placeholder="010-0000-0000" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy-900 mb-2">문의 유형 *</label>
            <select name="inquiry_type" value={form.inquiry_type} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition bg-white font-medium">
              <option value="">선택해주세요</option>
              <option value="rental">복합기 렌탈</option>
              <option value="purchase">복합기 구매</option>
              <option value="solution">솔루션상품</option>
              <option value="as">A/S 문의</option>
              <option value="other">기타</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-navy-900 mb-2">문의 내용 *</label>
          <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition resize-none bg-white font-medium" placeholder="문의하실 내용을 적어주세요. (필요 수량, 용도, 예산 등)" />
        </div>
        {error && <p className="text-red-500 text-sm text-center font-semibold">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-navy-900 to-navy-800 text-white font-black py-4 rounded-xl hover:shadow-lg hover:shadow-navy-900/20 transition-all duration-300 text-lg disabled:opacity-50"
        >
          {loading ? '접수 중...' : '문의 접수하기'}
        </button>
        <p className="text-xs text-gray-500 text-center font-medium">
          접수 후 1영업일 이내에 담당자가 연락드립니다.
        </p>
      </div>
    </form>
  )
}
