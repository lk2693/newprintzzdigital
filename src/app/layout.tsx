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
    default: "Webdesign & Digitalagentur Braunschweig | PrintzzDigital - Webentwicklung, KI & Software",
    template: "%s | PrintzzDigital Braunschweig"
  },
  description: "Ihre Digitalagentur in Braunschweig: Professionelles Webdesign, Webentwicklung, Software-Entwicklung & KI-Integration. ✓ Persönliche Beratung ✓ Faire Preise ✓ Messbare Ergebnisse. Jetzt kostenlos beraten lassen!",
  keywords: ["Webdesign Braunschweig", "Webagentur Braunschweig", "Webentwicklung Braunschweig", "Software Entwicklung Braunschweig", "Digitalagentur Braunschweig", "Homepage erstellen Braunschweig", "SEO Braunschweig", "App Entwicklung Braunschweig", "KI-Integration", "Website erstellen lassen Braunschweig", "Webdesigner Braunschweig", "Online Marketing Braunschweig", "IT-Dienstleistungen Braunschweig", "Webseite erstellen Braunschweig"],
  authors: [{ name: "PrintzzDigital" }],
  creator: "PrintzzDigital",
  publisher: "PrintzzDigital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Webdesign & Digitalagentur Braunschweig | PrintzzDigital",
    description: "Professionelle Webentwicklung, Software-Entwicklung & KI-Integration in Braunschweig. Persönliche Beratung vor Ort. ✓ Faire Preise ✓ Messbare Ergebnisse",
    url: "https://printzzdigital.com",
    siteName: "PrintzzDigital - Digitalagentur Braunschweig",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/logo.png",
        width: 906,
        height: 660,
        alt: "PrintzzDigital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign & Digitalagentur Braunschweig | PrintzzDigital",
    description: "Professionelle Webentwicklung, Software-Entwicklung & KI-Integration in Braunschweig. Jetzt kostenlos beraten lassen!",
    images: ["/logo.png"],
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
        {/* Manifest for PWA & Google logo */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        
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
