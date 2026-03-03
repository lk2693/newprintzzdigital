import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio – Referenzprojekte | Websites, E-Commerce & KI | PrintzzDigital',
  description:
    'Entdecken Sie unsere erfolgreich umgesetzten Projekte: Moderne Websites, E-Commerce-Shops, KI-Lösungen und digitale Transformationen für Unternehmen in Braunschweig und der Region. 95+ Lighthouse Score.',
  keywords: [
    'Portfolio',
    'Referenzen',
    'Webdesign Projekte',
    'E-Commerce Beispiele',
    'KI-Integration',
    'Website erstellen lassen',
    'Braunschweig',
    'PrintzzDigital',
    'Webentwicklung Referenzen',
    'Next.js Projekte',
  ],
  alternates: {
    canonical: 'https://printzzdigital.de/portfolio',
  },
  openGraph: {
    title: 'Portfolio – Unsere Referenzprojekte | PrintzzDigital',
    description:
      'Websites, E-Commerce-Shops und KI-Lösungen – entdecken Sie unsere erfolgreich umgesetzten Projekte mit 95+ Lighthouse Score.',
    url: 'https://printzzdigital.de/portfolio',
    siteName: 'PrintzzDigital',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://printzzdigital.de/restaurant.png',
        width: 1200,
        height: 630,
        alt: 'PrintzzDigital Portfolio – Referenzprojekte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio – PrintzzDigital Referenzprojekte',
    description:
      'Moderne Websites, E-Commerce & KI-Lösungen. Entdecken Sie unsere Arbeiten.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
