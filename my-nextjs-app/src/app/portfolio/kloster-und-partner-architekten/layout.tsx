import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kloster & Partner Architekten – Website-Projekt',
  description:
    'Case Study: Moderne Website für Kloster & Partner Architekten – entwickelt von PrintzzDigital, Ihrer Digitalagentur in Braunschweig. Schnell, responsive und suchmaschinenoptimiert.',
  alternates: {
    canonical: 'https://www.printzzdigital.de/portfolio/kloster-und-partner-architekten',
  },
  openGraph: {
    title: 'Kloster & Partner Architekten – Website-Projekt | PrintzzDigital',
    description:
      'Case Study: Moderne Architekten-Website, entwickelt von PrintzzDigital aus Braunschweig.',
    url: 'https://www.printzzdigital.de/portfolio/kloster-und-partner-architekten',
    siteName: 'PrintzzDigital',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function KlosterPartnerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
