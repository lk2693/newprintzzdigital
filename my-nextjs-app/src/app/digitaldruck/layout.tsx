import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Digitaldruck Braunschweig – Visitenkarten, Flyer & Großformat',
  description: 'Digitaldruck bei Printzz in Braunschweig: Visitenkarten ab 100 Stück, Flyer, Kataloge, Plakate und Fahnen – mit Gestaltung aus dem eigenen Haus, kostenlosem Druckdaten-Check und Abholung am Rischbleek 6.',
  keywords: ['Digitaldruck Braunschweig', 'Druckerei Braunschweig', 'Visitenkarten drucken Braunschweig', 'Flyer drucken Braunschweig', 'Großformatdruck Braunschweig', 'Plakate drucken Braunschweig'],
  alternates: {
    canonical: 'https://printzzdigital.com/digitaldruck',
  },
  openGraph: {
    title: 'Digitaldruck Braunschweig – Visitenkarten, Flyer & Großformat',
    description: 'Die Druckerei hinter PrintzzDigital: Drucksachen mit Gestaltung aus einem Haus, Datencheck inklusive, Abholung vor Ort in Braunschweig.',
    url: 'https://printzzdigital.com/digitaldruck',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function DigitaldruckLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
