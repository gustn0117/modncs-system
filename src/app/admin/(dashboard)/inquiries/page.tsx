'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
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

export default function AdminInquiriesPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400">로딩 중...</div>}>
      <InquiriesContent />
    </Suspense>
  )
}

function InquiriesContent() {
  const searchParams = useSearchParams()
  const statusFilter = searchParams.get('status') || 'all'
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState(statusFilter)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/admin/inquiries?status=${filter}`)
      .then(r => r.json())
      .then(data => {
        setInquiries(data)
        setLoading(false)
      })
  }, [filter])

  const formatDate = (d: string) => {
    const date = new Date(d)
    return `${date.getFullYear()}.${String(date.getMonth()+1).padStart(2,'0')}.${String(date.getDate()).padStart(2,'0')} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-navy-900 mb-8">문의 관리</h1>

      <div className="flex gap-2 mb-6">
        {[{ v: 'all', l: '전체' }, { v: 'new', l: '새 문의' }, { v: 'in_progress', l: '처리 중' }, { v: 'completed', l: '완료' }].map(f => (
          <button
            key={f.v}
            onClick={() => setFilter(f.v)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filter === f.v ? 'bg-navy-900 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}
          >
            {f.l}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-400">로딩 중...</div>
      ) : inquiries.length === 0 ? (
        <div className="text-center py-20 text-gray-400">문의가 없습니다.</div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">회사명 / 담당자</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-500">문의 유형</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-500">연락처</th>
                <th className="text-center px-4 py-4 text-sm font-semibold text-gray-500">상태</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500">접수일</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq) => (
                <tr key={inq.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4">
                    <Link href={`/admin/inquiries/${inq.id}`} className="block hover:text-navy-700">
                      <p className="font-semibold text-navy-900 text-sm">{inq.company_name}</p>
                      <p className="text-xs text-gray-400">{inq.contact_name}</p>
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">{typeMap[inq.inquiry_type] || inq.inquiry_type}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{inq.phone}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusMap[inq.status]?.color || 'bg-gray-100 text-gray-500'}`}>
                      {statusMap[inq.status]?.label || inq.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-gray-400">{formatDate(inq.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
