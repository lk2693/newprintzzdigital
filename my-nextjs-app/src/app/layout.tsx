import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://printzzdigital.com'),
  title: {
    default: "PrintzzDigital - Digitale Transformation & KI-Integration für Unternehmen",
    template: "%s | PrintzzDigital"
  },
  description: "Digitalagentur für moderne Webentwicklung, KI-Integration und Marketing-Automatisierung. Wir helfen Unternehmen mit Next.js, CRM-Systemen und datengetriebenen Lösungen. Bis zu 60% bessere Conversion.",
  keywords: ["Webentwicklung", "KI-Integration", "Digital Marketing", "CRM-Systeme", "E-Commerce", "Next.js", "Marketing-Automatisierung", "Data & AI", "Digitale Transformation"],
  authors: [{ name: "PrintzzDigital" }],
  creator: "PrintzzDigital",
  publisher: "PrintzzDigital",
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PrintzzDigital - Digitale Transformation für Unternehmen",
    description: "Digitalagentur für Webentwicklung, KI-Integration und Marketing-Automatisierung. 60% bessere Conversion, 4:1 ROAS, 40% mehr Leads.",
    url: "https://printzzdigital.com",
    siteName: "PrintzzDigital",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "PrintzzDigital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrintzzDigital - Digitale Transformation für Unternehmen",
    description: "Digitalagentur für Webentwicklung, KI-Integration und Marketing-Automatisierung",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Füge hier später deine Verification Codes ein
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Critical image preloads for LCP optimization */}
        <link rel="preload" href="/artmarket.png" as="image" type="image/png" />
        <link rel="preload" href="/aiflow.png" as="image" type="image/png" />
        
        {/* Font optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//cdn.sanity.io" />
        
        {/* Performance hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Critical CSS inline hint */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-image{will-change:transform}
            .mobile-hero{contain:layout style paint}
            .animate-spin{animation:spin 1s linear infinite}
            @keyframes spin{to{transform:rotate(360deg)}}
            body{font-display:swap}
          `
        }} />
        
        {/* Service Worker Registration */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
