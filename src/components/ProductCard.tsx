import Link from 'next/link'
import type { Product } from '@/lib/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-transparent hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 transition-all duration-300 block"
    >
      <div className="relative h-52 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6 overflow-hidden">
        {product.image_url ? (
          <img src={product.image_url} alt={product.name} className="h-40 object-contain group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="text-center">
            <svg className="w-20 h-20 mx-auto text-navy-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
          </div>
        )}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {product.tag && (
            <span className="bg-gradient-to-r from-navy-900 to-navy-800 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {product.tag}
            </span>
          )}
        </div>
        {product.is_popular && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">BEST</span>
        )}
      </div>

      <div className="p-6 border-t border-gray-50">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-400">{product.category}</span>
          {product.speed && (
            <>
              <span className="text-gray-200">·</span>
              <span className="text-xs text-gray-400">{product.speed}</span>
            </>
          )}
        </div>

        <h3 className="text-base font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition leading-snug">{product.name}</h3>

        {product.description && (
          <p className="text-sm text-gray-400 mb-3 line-clamp-2 leading-relaxed">{product.description}</p>
        )}

        {product.features && product.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.features.slice(0, 3).map((f) => (
              <span key={f} className="bg-navy-50 text-navy-600 text-xs px-2.5 py-0.5 rounded-md font-medium">{f}</span>
            ))}
            {product.features.length > 3 && (
              <span className="text-xs text-gray-300">+{product.features.length - 3}</span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          {product.price_display ? (
            <p className="text-lg font-bold text-navy-800">{product.price_display}</p>
          ) : (
            <p className="text-sm text-gray-400">가격 문의</p>
          )}
          <span className="text-navy-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            상세보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
