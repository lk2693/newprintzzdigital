import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Über uns – Olaf Jaeschke & Team',
  description: 'Hinter PrintzzDigital steht Olaf Jaeschke: über 20 Jahre Druckgewerbe, IHK-Vizepräsident Braunschweig, Präsident des Handelsverbands Harz-Heide. Lernen Sie den Menschen hinter der Agentur kennen.',
  keywords: ['Über uns', 'Olaf Jaeschke', 'PrintzzDigital', 'Digitalagentur Braunschweig', 'Printzz GmbH'],
  alternates: {
    canonical: 'https://www.printzzdigital.de/about',
  },
  openGraph: {
    title: 'Über uns – Olaf Jaeschke & Team | PrintzzDigital',
    description: 'Über 20 Jahre Druckgewerbe, IHK-Vizepräsident Braunschweig, Gründer von PrintzzDigital: der Mensch hinter der Agentur.',
    url: 'https://www.printzzdigital.de/about',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
