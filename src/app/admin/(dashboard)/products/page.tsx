'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import type { Product } from '@/lib/types'

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const res = await fetch('/api/admin/products')
    const data = await res.json()
    setProducts(data)
    setLoading(false)
  }

  useEffect(() => { fetchProducts() }, [])

  const toggleActive = async (product: Product) => {
    const res = await fetch(`/api/admin/products/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_active: !product.is_active }),
    })
    if (res.ok) {
      toast.success(product.is_active ? '비활성화됨' : '활성화됨')
      fetchProducts()
    }
  }

  const handleDelete = async (product: Product) => {
    if (!confirm(`"${product.name}" 상품을 삭제하시겠습니까?`)) return
    const res = await fetch(`/api/admin/products/${product.id}`, { method: 'DELETE' })
    if (res.ok) {
      toast.success('삭제되었습니다.')
      fetchProducts()
    }
  }

  const typeLabel = (t: string) => {
    switch (t) {
      case 'rental': return '렌탈'
      case 'purchase': return '구매'
      case 'both': return '렌탈+구매'
      default: return t
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-navy-900">상품 관리</h1>
        <Link href="/admin/products/new" className="bg-gradient-to-r from-navy-900 to-navy-800 text-white font-semibold py-2.5 px-6 rounded-xl hover:shadow-lg transition-all text-sm">
          + 새 상품 등록
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-400">로딩 중...</div>
      ) : products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 mb-4">등록된 상품이 없습니다.</p>
          <Link href="/admin/products/new" className="text-navy-700 font-semibold hover:text-navy-900">
            첫 상품 등록하기 →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">상품명</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-500">카테고리</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-500">유형</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-500">가격</th>
                <th className="text-center px-4 py-4 text-sm font-semibold text-gray-500">상태</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500">관리</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">{p.name}</p>
                      {p.tag && <span className="text-xs text-gold-600 bg-gold-50 px-2 py-0.5 rounded-full">{p.tag}</span>}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">{p.category}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{typeLabel(p.type)}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{p.price_display || '-'}</td>
                  <td className="px-4 py-4 text-center">
                    <button onClick={() => toggleActive(p)} className={`text-xs px-3 py-1 rounded-full font-medium ${p.is_active ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
                      {p.is_active ? '활성' : '비활성'}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/products/${p.id}/edit`} className="text-xs text-navy-600 hover:text-navy-900 font-medium px-3 py-1.5 rounded-lg hover:bg-navy-50 transition">
                        수정
                      </Link>
                      <button onClick={() => handleDelete(p)} className="text-xs text-red-400 hover:text-red-600 font-medium px-3 py-1.5 rounded-lg hover:bg-red-50 transition">
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
