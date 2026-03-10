'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ProductForm from '@/components/admin/ProductForm'
import type { Product } from '@/lib/types'

export default function EditProductPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/admin/products/${params.id}`)
      .then(r => r.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
  }, [params.id])

  if (loading) return <div className="text-center py-20 text-gray-400">로딩 중...</div>
  if (!product) return <div className="text-center py-20 text-red-400">상품을 찾을 수 없습니다.</div>

  return (
    <div>
      <h1 className="text-2xl font-bold text-navy-900 mb-8">상품 수정</h1>
      <ProductForm product={product} />
    </div>
  )
}
