import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio – Projekte aus Braunschweig',
  description:
    'Echte Projekte mit Namen und Adresse: die Stadt-App „Deine City of Lions“, Websites für Jordan GmbH, il Capriccio und Kloster & Partner Architekten sowie die Plattform des Kulturrats Braunschweig.',
  keywords: [
    'Portfolio',
    'Referenzen',
    'Webdesign Projekte Braunschweig',
    'Website erstellen lassen',
    'PrintzzDigital',
    'Webentwicklung Referenzen',
  ],
  alternates: {
    canonical: 'https://www.printzzdigital.de/portfolio',
  },
  openGraph: {
    title: 'Portfolio – Projekte aus Braunschweig | PrintzzDigital',
    description:
      'Die Stadt-App „Deine City of Lions“, Websites für Handwerk, Gastronomie und Architektur – Arbeiten, die man besuchen kann.',
    url: 'https://www.printzzdigital.de/portfolio',
    siteName: 'PrintzzDigital',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.printzzdigital.de/assets/ref-jordan-v2.png',
        width: 2162,
        height: 1650,
        alt: 'PrintzzDigital Portfolio – Website der Jordan GmbH Braunschweig',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio – Projekte aus Braunschweig | PrintzzDigital',
    description:
      'Echte Projekte mit Namen und Adresse – von der Stadt-App bis zur Handwerker-Website.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
