import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'KI-Anwendungen Braunschweig | Künstliche Intelligenz für Unternehmen | PrintzzDigital',
  description: 'KI-Lösungen für Braunschweiger Unternehmen: Chatbots, Automatisierung, Datenanalyse & KI-Integration. Ihr lokaler Partner für Künstliche Intelligenz in Braunschweig.',
  keywords: [
    'KI Braunschweig',
    'Künstliche Intelligenz Braunschweig',
    'KI Anwendungen Braunschweig',
    'AI Braunschweig',
    'Chatbot Braunschweig',
    'KI Integration Unternehmen',
    'KI Automatisierung Braunschweig',
    'Machine Learning Braunschweig',
    'KI Beratung Braunschweig',
    'Datenanalyse KI Braunschweig',
    'OpenAI Integration',
    'KI für Mittelstand',
    'PrintzzDigital KI',
  ],
  openGraph: {
    title: 'KI-Anwendungen Braunschweig | PrintzzDigital',
    description: 'Künstliche Intelligenz für Ihr Unternehmen in Braunschweig. Chatbots, Automatisierung, Datenanalyse & individuelle KI-Lösungen.',
    url: 'https://printzzdigital.com/ki-anwendungen-braunschweig',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://printzzdigital.com/ki-anwendungen-braunschweig',
  },
};

export default function KILayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
