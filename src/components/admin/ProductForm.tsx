'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import type { Product } from '@/lib/types'

interface Props {
  product?: Product
}

export default function ProductForm({ product }: Props) {
  const router = useRouter()
  const isEdit = !!product

  const [form, setForm] = useState({
    name: product?.name || '',
    slug: product?.slug || '',
    category: product?.category || '복합기',
    type: product?.type || 'both',
    price_display: product?.price_display || '',
    speed: product?.speed || '',
    print_volume: product?.print_volume || '',
    tag: product?.tag || '',
    description: product?.description || '',
    features: product?.features?.join('\n') || '',
    specs: product?.specs ? Object.entries(product.specs).map(([k, v]) => `${k}: ${v}`).join('\n') : '',
    image_url: product?.image_url || '',
    is_popular: product?.is_popular || false,
    is_active: product?.is_active ?? true,
    sort_order: product?.sort_order || 0,
  })
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string>(product?.image_url || '')

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Preview
    setPreview(URL.createObjectURL(file))
    setUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        const { url } = await res.json()
        setForm(prev => ({ ...prev, image_url: url }))
        setPreview(url)
        toast.success('이미지 업로드 완료')
      } else {
        const err = await res.json()
        toast.error(err.error || '업로드 실패')
        setPreview(form.image_url)
      }
    } catch {
      toast.error('업로드 중 오류 발생')
      setPreview(form.image_url)
    } finally {
      setUploading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : type === 'number' ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const features = form.features.split('\n').map(s => s.trim()).filter(Boolean)
    const specs: Record<string, string> = {}
    form.specs.split('\n').forEach(line => {
      const [key, ...vals] = line.split(':')
      if (key?.trim() && vals.length) {
        specs[key.trim()] = vals.join(':').trim()
      }
    })

    const payload = {
      name: form.name,
      slug: form.slug || undefined,
      category: form.category,
      type: form.type,
      price_display: form.price_display || null,
      speed: form.speed || null,
      print_volume: form.print_volume || null,
      tag: form.tag || null,
      description: form.description || null,
      features,
      specs,
      image_url: form.image_url || null,
      is_popular: form.is_popular,
      is_active: form.is_active,
      sort_order: form.sort_order,
    }

    try {
      const url = isEdit ? `/api/admin/products/${product.id}` : '/api/admin/products'
      const res = await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        toast.success(isEdit ? '상품이 수정되었습니다.' : '상품이 등록되었습니다.')
        router.push('/admin/products')
        router.refresh()
      } else {
        const err = await res.json()
        toast.error(err.error || '오류가 발생했습니다.')
      }
    } catch {
      toast.error('서버 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition text-sm'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
        <h3 className="font-bold text-navy-900">기본 정보</h3>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-800 mb-2">상품명 *</label>
            <input name="name" value={form.name} onChange={handleChange} required className={inputClass} placeholder="Canon imageRUNNER ADVANCE DX C3826i" />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-800 mb-2">슬러그 (URL)</label>
            <input name="slug" value={form.slug} onChange={handleChange} className={inputClass} placeholder="자동 생성됩니다" />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-800 mb-2">카테고리 *</label>
            <select name="category" value={form.category} onChange={handleChange} className={inputClass}>
              <option value="복합기">복합기</option>
              <option value="프린터">프린터</option>
              <option value="프로젝터">프로젝터</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-800 mb-2">유형 *</label>
            <select name="type" value={form.type} onChange={handleChange} className={inputClass}>
              <option value="both">렌탈 + 구매</option>
              <option value="rental">렌탈 전용</option>
              <option value="purchase">구매 전용</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-800 mb-2">태그</label>
            <input name="tag" value={form.tag} onChange={handleChange} className={inputClass} placeholder="사무실 추천" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-800 mb-2">가격 표시</label>
            <input name="price_display" value={form.price_display} onChange={handleChange} className={inputClass} placeholder="월 49,000원 / 별도 문의" />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-800 mb-2">출력 속도</label>
            <input name="speed" value={form.speed} onChange={handleChange} className={inputClass} placeholder="26매/분" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-800 mb-2">포함 장수</label>
          <input name="print_volume" value={form.print_volume} onChange={handleChange} className={inputClass} placeholder="월 3,000매 포함 / 흑백 5,000매 + 컬러 1,000매" />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-800 mb-2">설명</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows={3} className={inputClass} placeholder="상품에 대한 간략한 설명" />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-800 mb-2">제품 이미지</label>
          <div className="flex items-start gap-5">
            <div className="w-40 h-40 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
              {preview ? (
                <img src={preview} alt="미리보기" className="w-full h-full object-contain p-2" />
              ) : (
                <div className="text-center text-gray-400">
                  <svg className="w-10 h-10 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">이미지 없음</p>
                </div>
              )}
            </div>
            <div className="flex-1 space-y-3">
              <label className={`block w-full text-center py-3 px-4 rounded-xl border-2 border-dashed cursor-pointer transition text-sm font-semibold ${uploading ? 'border-gray-200 bg-gray-50 text-gray-400' : 'border-navy-200 bg-navy-50 text-navy-700 hover:bg-navy-100'}`}>
                {uploading ? '업로드 중...' : '파일 선택'}
                <input type="file" accept="image/*" onChange={handleUpload} disabled={uploading} className="hidden" />
              </label>
              <p className="text-xs text-gray-400">JPG, PNG, WebP (최대 5MB)</p>
              {form.image_url && (
                <div className="flex items-center gap-2">
                  <input name="image_url" value={form.image_url} onChange={handleChange} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-500" placeholder="이미지 URL" />
                  <button type="button" onClick={() => { setForm(prev => ({ ...prev, image_url: '' })); setPreview('') }} className="text-xs text-red-400 hover:text-red-600 shrink-0">삭제</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
        <h3 className="font-bold text-navy-900">상세 정보</h3>

        <div>
          <label className="block text-sm font-medium text-navy-800 mb-2">주요 기능 (줄바꿈으로 구분)</label>
          <textarea name="features" value={form.features} onChange={handleChange} rows={4} className={inputClass} placeholder="양면 자동 인쇄&#10;대용량 급지함&#10;네트워크 스캔" />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-800 mb-2">상세 스펙 (키: 값, 줄바꿈으로 구분)</label>
          <textarea name="specs" value={form.specs} onChange={handleChange} rows={4} className={inputClass} placeholder="용지 크기: A3, A4, B4&#10;해상도: 1200x1200dpi&#10;메모리: 3.0GB" />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
        <h3 className="font-bold text-navy-900">옵션</h3>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="is_popular" checked={form.is_popular} onChange={handleChange} className="w-4 h-4 text-navy-600 rounded" />
            <span className="text-sm text-navy-800">인기 상품</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="is_active" checked={form.is_active} onChange={handleChange} className="w-4 h-4 text-navy-600 rounded" />
            <span className="text-sm text-navy-800">활성 상태</span>
          </label>
          <div className="flex items-center gap-2">
            <label className="text-sm text-navy-800">정렬 순서</label>
            <input type="number" name="sort_order" value={form.sort_order} onChange={handleChange} className="w-20 px-3 py-2 border border-gray-200 rounded-lg text-sm" />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-navy-900 to-navy-800 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
        >
          {loading ? '저장 중...' : isEdit ? '수정하기' : '등록하기'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-100 text-gray-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-200 transition"
        >
          취소
        </button>
      </div>
    </form>
  )
}
