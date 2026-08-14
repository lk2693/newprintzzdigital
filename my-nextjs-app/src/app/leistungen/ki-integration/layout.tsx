import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'KI-Integration - Künstliche Intelligenz für Ihr Unternehmen | PrintzzDigital',
  description: 'KI-Integration für Unternehmen: Chatbots, Automatisierung, Datenanalyse und intelligente Systeme. Maßgeschneiderte KI-Lösungen aus Braunschweig.',
  keywords: ['KI-Integration', 'Künstliche Intelligenz', 'Chatbots', 'Automatisierung', 'Machine Learning', 'KI Braunschweig'],
  alternates: {
    canonical: 'https://www.printzzdigital.de/leistungen/ki-integration',
  },
  openGraph: {
    title: 'KI-Integration - PrintzzDigital',
    description: 'Intelligente KI-Lösungen für Ihr Unternehmen. Chatbots, Automatisierung und Datenanalyse.',
    url: 'https://www.printzzdigital.de/leistungen/ki-integration',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function KIIntegrationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
