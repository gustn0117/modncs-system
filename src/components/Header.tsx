'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
  { name: '복합기 렌탈', href: '/rental' },
  { name: '복합기 구매', href: '/purchase' },
  { name: '솔루션상품', href: '/solution' },
  { name: '고객센터', href: '/support' },
  { name: '구매 문의', href: '/inquiry' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="bg-navy-900 text-white/80 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap text-xs sm:text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-gold-400" />
              여성기업인증
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-gold-400" />
              세종 · 대전 · 충청권
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="text-gold-300 font-medium">캐논코리아 공식 인증 대리점</span>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a href="tel:010-6603-3432" className="hover:text-white transition">010-6603-3432</a>
            <a href="tel:044-868-4874" className="hover:text-white transition">044-868-4874</a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/모든CS시스템 로고.jpg" alt="모든CS시스템" width={180} height={60} className="h-12 w-auto" priority />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-navy-700 font-medium hover:text-navy-900 hover:bg-navy-50 rounded-lg transition-all duration-200 text-[15px]"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/inquiry"
              className="ml-4 bg-navy-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-navy-800 transition-all duration-200 text-sm"
            >
              무료 상담 신청
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-navy-700 hover:bg-navy-50 hover:text-navy-900 rounded-lg transition font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/inquiry"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-3 text-center bg-navy-900 text-white py-3 rounded-lg font-semibold hover:bg-navy-800 transition"
            >
              무료 상담 신청
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
