import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Über uns - PrintzzDigital Braunschweig',
  description: 'Lernen Sie PrintzzDigital kennen: Ihre Digitalagentur in Braunschweig für Webentwicklung, KI-Integration und digitale Transformation. Persönlich, kompetent, lokal.',
  keywords: ['Über uns', 'PrintzzDigital', 'Digitalagentur Braunschweig', 'Team Braunschweig', 'Webagentur'],
  alternates: {
    canonical: 'https://printzzdigital.com/about',
  },
  openGraph: {
    title: 'Über uns - PrintzzDigital Braunschweig',
    description: 'Ihre Digitalagentur in Braunschweig. Persönliche Betreuung, moderne Technologien, lokale Expertise.',
    url: 'https://printzzdigital.com/about',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
