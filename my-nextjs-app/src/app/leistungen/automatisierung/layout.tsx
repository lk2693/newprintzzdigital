import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Automatisierung - Geschäftsprozesse digitalisieren | PrintzzDigital',
  description: 'Automatisierung von Geschäftsprozessen: Workflows, E-Mail-Automation, Datenverarbeitung und KI-gestützte Prozessoptimierung aus Braunschweig.',
  keywords: ['Automatisierung', 'Geschäftsprozesse', 'Workflow Automation', 'Prozessoptimierung', 'RPA', 'Braunschweig'],
  alternates: {
    canonical: 'https://www.printzzdigital.de/leistungen/automatisierung',
  },
  openGraph: {
    title: 'Automatisierung - PrintzzDigital',
    description: 'Geschäftsprozesse automatisieren und digitalisieren. Mehr Effizienz durch intelligente Automatisierung.',
    url: 'https://www.printzzdigital.de/leistungen/automatisierung',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function AutomatisierungLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
