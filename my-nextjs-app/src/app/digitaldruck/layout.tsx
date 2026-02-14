import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Digitaldruck Braunschweig - Professioneller Druckservice | PrintzzDigital',
  description: 'Professioneller Digitaldruck in Braunschweig. Visitenkarten, Flyer, Plakate, Großformatdruck und mehr. Schnell, hochwertig und zu fairen Preisen.',
  keywords: ['Digitaldruck Braunschweig', 'Druckerei Braunschweig', 'Visitenkarten drucken', 'Flyer Braunschweig', 'Großformatdruck', 'PrintzzDigital Druck'],
  alternates: {
    canonical: 'https://printzzdigital.com/digitaldruck',
  },
  openGraph: {
    title: 'Digitaldruck Braunschweig - PrintzzDigital',
    description: 'Professioneller Digitaldruck in Braunschweig. Visitenkarten, Flyer, Plakate und mehr.',
    url: 'https://printzzdigital.com/digitaldruck',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function DigitaldruckLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
