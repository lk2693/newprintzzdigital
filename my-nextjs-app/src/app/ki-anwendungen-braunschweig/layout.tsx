import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'KI-Anwendungen Braunschweig – Chatbots & Automatisierung ab 3.000 €',
  description: 'KI für Unternehmen in Braunschweig, ohne Buzzword-Bingo: Chatbots mit Ihrem Firmenwissen, Texterkennung für den Papierkram, Auswertungen auf Zuruf. DSGVO-konform, auf Wunsch auf deutschen Servern. Potenzial-Check kostenlos.',
  keywords: [
    'KI Braunschweig',
    'Künstliche Intelligenz Braunschweig',
    'KI Anwendungen Braunschweig',
    'Chatbot Braunschweig',
    'KI Automatisierung Braunschweig',
    'KI Beratung Braunschweig',
    'KI für Mittelstand',
  ],
  openGraph: {
    title: 'KI-Anwendungen Braunschweig – Chatbots & Automatisierung ab 3.000 €',
    description: 'KI, die messbar Zeit spart – und ehrliche Beratung, wo sie nichts bringt. Von den Software-Entwicklern der Stadt-App „Deine City of Lions“.',
    url: 'https://www.printzzdigital.de/ki-anwendungen-braunschweig',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://www.printzzdigital.de/ki-anwendungen-braunschweig',
  },
};

export default function KILayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
