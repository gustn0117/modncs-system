'use client'

import { useState } from 'react'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-xl p-5 mb-2 w-72 border border-gray-100">
          <h3 className="font-bold text-navy-900 mb-3 text-lg">빠른 연락</h3>
          <div className="space-y-3">
            <a
              href="tel:010-6603-3432"
              className="flex items-center gap-3 p-3 bg-navy-50 rounded-xl hover:bg-navy-100 transition group"
            >
              <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center group-hover:scale-105 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-navy-900 text-sm">휴대폰</p>
                <p className="text-navy-700 font-bold">010-6603-3432</p>
              </div>
            </a>
            <a
              href="tel:044-868-4874"
              className="flex items-center gap-3 p-3 bg-navy-50 rounded-xl hover:bg-navy-100 transition group"
            >
              <div className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center group-hover:scale-105 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-navy-900 text-sm">매장 전화</p>
                <p className="text-navy-700 font-bold">044-868-4874</p>
              </div>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-gray-600 rotate-45' : 'bg-navy-900 hover:bg-navy-800'
        }`}
        aria-label="연락처"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
        )}
      </button>
    </div>
  )
}
