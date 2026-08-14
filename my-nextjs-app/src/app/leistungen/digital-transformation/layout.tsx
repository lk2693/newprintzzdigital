import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Digitale Transformation - Ihr Unternehmen zukunftssicher machen | PrintzzDigital',
  description: 'Digitale Transformation für den Mittelstand: Strategie, Implementierung und Begleitung. Von der Analyse bis zur Umsetzung — aus Braunschweig.',
  keywords: ['Digitale Transformation', 'Digitalisierung', 'Mittelstand', 'Digitalstrategie', 'Change Management', 'Braunschweig'],
  alternates: {
    canonical: 'https://www.printzzdigital.de/leistungen/digital-transformation',
  },
  openGraph: {
    title: 'Digitale Transformation - PrintzzDigital',
    description: 'Ihr Unternehmen zukunftssicher machen mit strategischer Digitalisierung aus Braunschweig.',
    url: 'https://www.printzzdigital.de/leistungen/digital-transformation',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function DigitalTransformationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
