import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unsere Services – Digitale Lösungen für Ihr Unternehmen',
  description: 'Entdecken Sie unsere digitalen Services: Webentwicklung, KI-Integration, Marketing, CRM, Data Analytics und E-Commerce. PrintzzDigital aus Braunschweig.',
  keywords: ['Services', 'Digitale Lösungen', 'Webentwicklung', 'KI', 'Marketing', 'CRM', 'Braunschweig', 'PrintzzDigital'],
  alternates: {
    canonical: 'https://printzzdigital.com/services',
  },
  openGraph: {
    title: 'Unsere Services – PrintzzDigital',
    description: 'Digitale Lösungen für Ihr Unternehmen: Webentwicklung, KI-Integration, Marketing und mehr.',
    url: 'https://printzzdigital.com/services',
    siteName: 'PrintzzDigital',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
