import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Karriere - PrintzzDigital Braunschweig',
  description: 'Karriere bei PrintzzDigital in Braunschweig. Werde Teil unseres Teams für Webentwicklung, KI und digitale Transformation. Aktuelle Stellenangebote.',
  keywords: ['Karriere', 'Jobs Braunschweig', 'Webentwickler Jobs', 'PrintzzDigital Karriere', 'IT Jobs Braunschweig'],
  alternates: {
    canonical: 'https://printzzdigital.com/karriere',
  },
  openGraph: {
    title: 'Karriere bei PrintzzDigital',
    description: 'Aktuelle Stellenangebote bei PrintzzDigital in Braunschweig. Werde Teil unseres Teams.',
    url: 'https://printzzdigital.com/karriere',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function KarriereLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
