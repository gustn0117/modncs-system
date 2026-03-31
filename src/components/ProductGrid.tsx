'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '@/lib/types'

const FIXED_CATEGORIES = ['전체', '복합기', '프린터', '프로젝터']

interface Props {
  products: Product[]
  showCategoryFilter?: boolean
}

export default function ProductGrid({ products, showCategoryFilter = true }: Props) {
  const [activeCategory, setActiveCategory] = useState('전체')

  const filtered = activeCategory === '전체' ? products : products.filter(p => p.category === activeCategory)

  return (
    <div>
      {showCategoryFilter && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {FIXED_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? 'bg-navy-900 text-white shadow-lg shadow-navy-900/20'
                  : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">등록된 상품이 없습니다.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
