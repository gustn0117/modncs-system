'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ products: 0, inquiries: 0, newInquiries: 0 })

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/products').then(r => r.json()),
      fetch('/api/admin/inquiries').then(r => r.json()),
    ]).then(([products, inquiries]) => {
      setStats({
        products: products.length,
        inquiries: inquiries.length,
        newInquiries: inquiries.filter((i: { status: string }) => i.status === 'new').length,
      })
    })
  }, [])

  const cards = [
    { label: '전체 상품', value: stats.products, href: '/admin/products', color: 'from-blue-500 to-cyan-500' },
    { label: '전체 문의', value: stats.inquiries, href: '/admin/inquiries', color: 'from-violet-500 to-purple-500' },
    { label: '새 문의', value: stats.newInquiries, href: '/admin/inquiries?status=new', color: 'from-amber-500 to-orange-500' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-navy-900 mb-8">대시보드</h1>
      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4`}>
              <span className="text-white font-bold text-lg">{card.value}</span>
            </div>
            <p className="text-gray-500 text-sm">{card.label}</p>
            <p className="text-3xl font-bold text-navy-900 mt-1">{card.value}</p>
          </Link>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Link href="/admin/products/new" className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-2xl p-6 hover:shadow-xl transition-all">
          <h3 className="font-bold text-lg mb-1">새 상품 등록</h3>
          <p className="text-white/50 text-sm">렌탈/구매 상품을 새로 등록합니다.</p>
        </Link>
        <Link href="/admin/inquiries?status=new" className="bg-gradient-to-br from-gold-400 to-gold-500 text-navy-900 rounded-2xl p-6 hover:shadow-xl transition-all">
          <h3 className="font-bold text-lg mb-1">새 문의 확인</h3>
          <p className="text-navy-900/50 text-sm">아직 확인하지 않은 문의를 확인합니다.</p>
        </Link>
      </div>
    </div>
  )
}
