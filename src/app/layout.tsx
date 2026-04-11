import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://modncssystem.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '모든CS시스템 | 세종 대전 충청 복합기 렌탈 구매 전문',
    template: '%s | 모든CS시스템',
  },
  description: '모든CS시스템 - 세종·대전·충청 캐논 복합기 렌탈·구매 전문. 캐논코리아 공식 인증 대리점.',
  keywords: [
    '모든CS시스템', '복합기 렌탈', '복합기 구매', '프린터 렌탈', '복사기 렌탈',
    '캐논 복합기', '캐논 대리점', 'Canon 복합기',
    '세종 복합기', '대전 복합기', '충청 복합기', '세종 프린터', '대전 프린터',
    '사무실 복합기', '기업 프린터', '복합기 A/S', '토너 공급',
    '캐논코리아 공식 인증', '여성기업인증',
  ],
  icons: {
    icon: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  verification: {
    other: {
      'naver-site-verification': '4e681ef73505885b557c9c7a58a86fa7e18d4e4a',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: '모든CS시스템',
    title: '모든CS시스템 | 세종 대전 충청 복합기 렌탈 구매 전문',
    description: '세종, 대전, 충청권 캐논 복합기 렌탈 및 구매 전문. 캐논코리아 공식 인증 대리점. 무료 방문 상담 및 맞춤 견적.',
    images: [{ url: '/logo-icon.png', width: 512, height: 512, alt: '모든CS시스템 로고' }],
  },
  twitter: {
    card: 'summary',
    title: '모든CS시스템 | 세종 대전 충청 복합기 렌탈 구매 전문',
    description: '세종, 대전, 충청권 캐논 복합기 렌탈 및 구매 전문. 캐논코리아 공식 인증 대리점.',
    images: ['/logo-icon.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: '모든CS시스템',
              description: '세종, 대전, 충청권 캐논 복합기 렌탈 및 구매 전문 매장. 캐논코리아 공식 인증 대리점.',
              url: 'https://modncssystem.com',
              telephone: ['010-6603-3432', '044-868-4874'],
              address: {
                '@type': 'PostalAddress',
                addressRegion: '세종특별자치시',
                addressCountry: 'KR',
              },
              areaServed: ['세종특별자치시', '대전광역시', '충청남도', '충청북도'],
              priceRange: '$$',
              image: 'https://modncssystem.com/logo-icon.png',
              sameAs: [],
              openingHours: 'Mo-Fr 09:00-18:00',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: '복합기 렌탈 & 구매',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '복합기 렌탈' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '복합기 구매' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '복합기 A/S' } },
                ],
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
