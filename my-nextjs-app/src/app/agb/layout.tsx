import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB – Allgemeine Geschäftsbedingungen',
  description: 'Allgemeine Geschäftsbedingungen der PrintzzDigital. Vertragsbedingungen für unsere digitalen Dienstleistungen.',
  alternates: {
    canonical: 'https://www.printzzdigital.de/agb',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AGBLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
