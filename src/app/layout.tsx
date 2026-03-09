import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

export const metadata: Metadata = {
  title: '모든CS시스템 | 복합기 렌탈 & 구매 전문',
  description: '세종, 대전, 충청권 복합기 렌탈 및 구매 전문 매장. 캐논코리아 공식 인증 대리점. 여성기업인증.',
  keywords: '복합기, 렌탈, 프린터, 복사기, 캐논, 세종, 대전, 충청, 모든CS시스템',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
