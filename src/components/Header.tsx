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
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* 상단 인증 바 */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              여성기업인증
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              세종 · 대전 · 충청권 전문 매장
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="font-semibold">캐논코리아 공식 인증 대리점</span>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a href="tel:010-6603-3432" className="hover:text-blue-200 transition">
              박부장 010-6603-3432
            </a>
            <a href="tel:044-868-4874" className="hover:text-blue-200 transition">
              매장 044-868-4874
            </a>
          </div>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.png" alt="모든CS시스템" width={180} height={60} className="h-14 w-auto" priority />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-5 py-2 text-gray-700 font-medium hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 text-[15px]"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/inquiry"
              className="ml-4 bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 text-sm shadow-md"
            >
              무료 상담 신청
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t pb-4 animate-fadeIn">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/inquiry"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-3 text-center bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              무료 상담 신청
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
