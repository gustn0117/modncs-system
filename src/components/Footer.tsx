import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 회사 정보 */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">모든CS시스템</h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              ModnCS SYSTEM / PRINTER &amp; COPIER SPECIALIST
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>세종 · 대전 · 충청권 전문 매장</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>박부장: <a href="tel:010-6603-3432" className="text-blue-400 hover:text-blue-300">010-6603-3432</a></span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>매장: <a href="tel:044-868-4874" className="text-blue-400 hover:text-blue-300">044-868-4874</a></span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">여성기업인증</span>
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">캐논코리아 공식 인증 대리점</span>
            </div>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/rental" className="hover:text-white transition">복합기 렌탈</Link></li>
              <li><Link href="/purchase" className="hover:text-white transition">복합기 구매</Link></li>
              <li><Link href="/solution" className="hover:text-white transition">솔루션상품</Link></li>
              <li><Link href="/support" className="hover:text-white transition">고객센터</Link></li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">고객지원</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/inquiry" className="hover:text-white transition">구매 문의</Link></li>
              <li><Link href="/support" className="hover:text-white transition">A/S 접수</Link></li>
              <li><Link href="/support" className="hover:text-white transition">자주 묻는 질문</Link></li>
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <p className="text-xs text-gray-400 mb-1">상담 가능 시간</p>
              <p className="text-white font-semibold">평일 09:00 ~ 18:00</p>
              <p className="text-xs text-gray-400 mt-1">토/일/공휴일 휴무</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 모든CS시스템. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
