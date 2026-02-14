import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der PrintzzDigital – Angaben gemäß § 5 TMG. Rischbleek 6, 38126 Braunschweig.',
  alternates: {
    canonical: 'https://printzzdigital.com/impressum',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
