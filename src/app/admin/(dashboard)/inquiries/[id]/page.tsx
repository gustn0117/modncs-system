'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import type { Inquiry } from '@/lib/types'

const statusMap: Record<string, { label: string; color: string }> = {
  new: { label: '새 문의', color: 'bg-amber-50 text-amber-600' },
  in_progress: { label: '처리 중', color: 'bg-blue-50 text-blue-600' },
  completed: { label: '완료', color: 'bg-emerald-50 text-emerald-600' },
}

const typeMap: Record<string, string> = {
  rental: '복합기 렌탈',
  purchase: '복합기 구매',
  solution: '솔루션상품',
  as: 'A/S 문의',
  other: '기타',
}

export default function InquiryDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [inquiry, setInquiry] = useState<Inquiry | null>(null)
  const [loading, setLoading] = useState(true)
  const [adminNote, setAdminNote] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    fetch(`/api/admin/inquiries/${params.id}`)
      .then(r => r.json())
      .then(data => {
        setInquiry(data)
        setAdminNote(data.admin_note || '')
        setStatus(data.status)
        setLoading(false)
      })
  }, [params.id])

  const handleUpdate = async () => {
    const res = await fetch(`/api/admin/inquiries/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, admin_note: adminNote }),
    })
    if (res.ok) {
      toast.success('저장되었습니다.')
      const data = await res.json()
      setInquiry(data)
    } else {
      toast.error('오류가 발생했습니다.')
    }
  }

  const formatDate = (d: string) => new Date(d).toLocaleString('ko-KR')

  if (loading) return <div className="text-center py-20 text-gray-400">로딩 중...</div>
  if (!inquiry) return <div className="text-center py-20 text-red-400">문의를 찾을 수 없습니다.</div>

  return (
    <div>
      <button onClick={() => router.back()} className="text-sm text-gray-400 hover:text-gray-600 mb-6 flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
        목록으로
      </button>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-bold text-navy-900">{inquiry.company_name}</h1>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusMap[inquiry.status]?.color}`}>
                {statusMap[inquiry.status]?.label}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs text-gray-400 mb-1">담당자</p>
                <p className="font-medium text-navy-900">{inquiry.contact_name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">연락처</p>
                <a href={`tel:${inquiry.phone}`} className="font-medium text-navy-700 hover:text-navy-900">{inquiry.phone}</a>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">이메일</p>
                <p className="font-medium text-navy-900">{inquiry.email || '-'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">문의 유형</p>
                <p className="font-medium text-navy-900">{typeMap[inquiry.inquiry_type] || inquiry.inquiry_type}</p>
              </div>
            </div>
            {inquiry.product && (
              <div className="mb-6 p-3 bg-navy-50 rounded-xl">
                <p className="text-xs text-gray-400 mb-1">관련 상품</p>
                <p className="font-medium text-navy-700">{inquiry.product.name}</p>
              </div>
            )}
            <div>
              <p className="text-xs text-gray-400 mb-2">문의 내용</p>
              <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {inquiry.message}
              </div>
            </div>
            <p className="text-xs text-gray-300 mt-4">접수: {formatDate(inquiry.created_at)}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold text-navy-900 mb-4">처리 상태</h3>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-navy-500 mb-4"
            >
              <option value="new">새 문의</option>
              <option value="in_progress">처리 중</option>
              <option value="completed">완료</option>
            </select>

            <label className="block text-sm font-medium text-navy-800 mb-2">관리자 메모</label>
            <textarea
              value={adminNote}
              onChange={(e) => setAdminNote(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-navy-500 resize-none mb-4"
              placeholder="내부 메모를 남겨주세요..."
            />
            <button
              onClick={handleUpdate}
              className="w-full bg-gradient-to-r from-navy-900 to-navy-800 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all text-sm"
            >
              저장
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold text-navy-900 mb-3">빠른 연락</h3>
            <a href={`tel:${inquiry.phone}`} className="block w-full text-center bg-emerald-50 text-emerald-600 font-semibold py-3 rounded-xl hover:bg-emerald-100 transition text-sm">
              전화 걸기
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
