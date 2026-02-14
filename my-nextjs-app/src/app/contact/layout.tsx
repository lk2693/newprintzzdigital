import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Kontakt - PrintzzDigital Braunschweig',
  description: 'Kontaktieren Sie PrintzzDigital in Braunschweig. Kostenlose Beratung für Webentwicklung, KI-Integration und digitale Transformation. Telefon: 0531 70201786.',
  keywords: ['Kontakt', 'PrintzzDigital', 'Braunschweig', 'kostenlose Beratung', 'Digitalagentur kontaktieren'],
  alternates: {
    canonical: 'https://printzzdigital.com/contact',
  },
  openGraph: {
    title: 'Kontakt - PrintzzDigital Braunschweig',
    description: 'Jetzt Kontakt aufnehmen für eine kostenlose Beratung. Ihr Partner für digitale Lösungen in Braunschweig.',
    url: 'https://printzzdigital.com/contact',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
