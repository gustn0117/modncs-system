import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://modncssystem.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '모든CS시스템 - 캐논 복합기 렌탈 구매 전문 (세종·대전·충청)',
    template: '%s - 모든CS시스템',
  },
  description: '모든CS시스템은 캐논코리아 공식 인증 대리점으로, 세종·대전·충청권에서 캐논 복합기 렌탈과 구매 서비스를 제공합니다. 모든CS시스템에서 정품 토너, 정기 점검, 무료 방문 상담을 받아보세요.',
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
    title: '모든CS시스템 - 캐논 복합기 렌탈 구매 전문 (세종·대전·충청)',
    description: '모든CS시스템은 캐논코리아 공식 인증 대리점입니다. 세종·대전·충청권 복합기 렌탈 및 구매, 무료 방문 상담.',
    images: [{ url: '/logo-icon.png', width: 512, height: 512, alt: '모든CS시스템 로고' }],
  },
  twitter: {
    card: 'summary',
    title: '모든CS시스템 - 캐논 복합기 렌탈 구매 전문',
    description: '모든CS시스템 - 세종·대전·충청 캐논코리아 공식 인증 대리점.',
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
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://modncssystem.com/#organization',
                  name: '모든CS시스템',
                  alternateName: ['모든씨에스시스템', '모든CS', 'MODNCS', 'MODNCS SYSTEM'],
                  url: 'https://modncssystem.com',
                  logo: 'https://modncssystem.com/logo-icon.png',
                  description: '캐논코리아 공식 인증 대리점. 세종·대전·충청권 복합기 렌탈 및 구매 전문.',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+82-10-6603-3432',
                    contactType: 'sales',
                    areaServed: 'KR',
                    availableLanguage: 'Korean',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://modncssystem.com/#website',
                  url: 'https://modncssystem.com',
                  name: '모든CS시스템',
                  publisher: { '@id': 'https://modncssystem.com/#organization' },
                  inLanguage: 'ko-KR',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://modncssystem.com/?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://modncssystem.com/#localbusiness',
                  name: '모든CS시스템',
                  alternateName: '모든씨에스시스템',
                  description: '세종·대전·충청권 캐논 복합기 렌탈 및 구매 전문 매장. 캐논코리아 공식 인증 대리점.',
                  url: 'https://modncssystem.com',
                  telephone: ['010-6603-3432', '044-868-4874'],
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '관악대로263번길 13 (비산동)',
                    addressLocality: '안양시 동안구',
                    addressRegion: '경기도',
                    addressCountry: 'KR',
                  },
                  founder: '박경수',
                  foundingDate: '2018-02-01',
                  taxID: '710-32-00622',
                  areaServed: ['세종특별자치시', '대전광역시', '충청남도', '충청북도'],
                  priceRange: '$$',
                  image: 'https://modncssystem.com/logo-icon.png',
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
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
