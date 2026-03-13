'use client'

import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white/80 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap text-xs sm:text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              여성기업인증
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              세종 · 대전 · 충청권
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-gold-300 font-semibold">캐논코리아 공식 인증 대리점</span>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a href="tel:010-6603-3432" className="hover:text-white transition flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              010-6603-3432
            </a>
            <a href="tel:044-868-4874" className="hover:text-white transition flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              044-868-4874
            </a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image src="/logo-icon.png" alt="모든CS시스템" width={48} height={48} className="h-12 w-auto group-hover:scale-105 transition-transform" priority />
            <div className="flex flex-col">
              <span className="text-navy-950 font-black text-xl leading-tight tracking-tight">모든CS시스템</span>
              <span className="text-[10px] text-navy-500 font-semibold tracking-wider">PRINTER & COPIER SPECIALIST</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-navy-800 font-bold hover:text-navy-950 rounded-lg transition-all duration-200 text-[15px] group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold-400 rounded-full group-hover:w-2/3 transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/inquiry"
              className="ml-4 bg-gradient-to-r from-navy-900 to-navy-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-navy-900/20 transition-all duration-300 text-sm"
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
          <div className="lg:hidden border-t border-gray-100 pb-4 animate-fadeIn">
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
