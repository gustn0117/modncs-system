import Link from 'next/link'
import type { Product } from '@/lib/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-transparent hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 transition-all duration-300 block"
    >
      <div className="flex items-start justify-between mb-4">
        {product.tag && (
          <span className="bg-gradient-to-r from-navy-900 to-navy-800 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full">
            {product.tag}
          </span>
        )}
        <span className="text-sm text-gray-400">{product.category}</span>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-6 flex items-center justify-center border border-gray-100 group-hover:bg-navy-50/50 transition">
        {product.image_url ? (
          <img src={product.image_url} alt={product.name} className="h-32 object-contain" />
        ) : (
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto text-navy-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
            {product.speed && <p className="text-sm text-gray-400">{product.speed}</p>}
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition">{product.name}</h3>

      {product.description && (
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{product.description}</p>
      )}

      {product.features && product.features.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.features.slice(0, 4).map((f) => (
            <span key={f} className="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-100">{f}</span>
          ))}
        </div>
      )}

      {product.price_display && (
        <p className="text-lg font-bold text-navy-700 mb-3">{product.price_display}</p>
      )}

      <div className="text-center bg-gradient-to-r from-navy-900 to-navy-800 text-white py-3 rounded-xl font-semibold group-hover:shadow-lg group-hover:shadow-navy-900/20 transition-all duration-300">
        자세히 보기
      </div>
    </Link>
  )
}
