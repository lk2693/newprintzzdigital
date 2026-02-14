import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio – Unsere Referenzprojekte',
  description: 'Entdecken Sie unsere erfolgreich umgesetzten Projekte: Websites, Web-Apps, KI-Lösungen und digitale Transformationen für Unternehmen in Braunschweig und der Region.',
  keywords: ['Portfolio', 'Referenzen', 'Projekte', 'Webdesign', 'Braunschweig', 'PrintzzDigital', 'Kundenprojekte'],
  alternates: {
    canonical: 'https://printzzdigital.com/portfolio',
  },
  openGraph: {
    title: 'Portfolio – PrintzzDigital',
    description: 'Unsere Referenzprojekte: Websites, Web-Apps und digitale Lösungen.',
    url: 'https://printzzdigital.com/portfolio',
    siteName: 'PrintzzDigital',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
