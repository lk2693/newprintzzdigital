import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Webentwicklung - Moderne Websites & Web-Apps | PrintzzDigital',
  description: 'Professionelle Webentwicklung mit Next.js, React und TypeScript. Schnelle, SEO-optimierte Websites und Web-Anwendungen aus Braunschweig.',
  keywords: ['Webentwicklung', 'Next.js', 'React', 'TypeScript', 'Website erstellen', 'Web-App Entwicklung', 'Braunschweig'],
  alternates: {
    canonical: 'https://www.printzzdigital.de/leistungen/webentwicklung',
  },
  openGraph: {
    title: 'Webentwicklung - PrintzzDigital',
    description: 'Moderne Webentwicklung mit Next.js, React und TypeScript aus Braunschweig.',
    url: 'https://www.printzzdigital.de/leistungen/webentwicklung',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function WebentwicklungLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
