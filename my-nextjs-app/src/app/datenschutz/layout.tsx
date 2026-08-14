import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der PrintzzDigital – Informationen zum Datenschutz gemäß DSGVO.',
  alternates: {
    canonical: 'https://www.printzzdigital.de/datenschutz',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
