import type { NextConfig } from "next";

// Die Content-Security-Policy wird nicht mehr hier, sondern pro Request in
// src/proxy.ts gesetzt (Nonce-basiert, nötig für securityheaders.com A+).
const securityHeaders = [
  // 2 Jahre HSTS inkl. Subdomains, Preload-fähig
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), autoplay=(), browsing-topics=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), usb=(), xr-spatial-tracking=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Performance-Optimierungen für Lighthouse
  compress: true,
  poweredByHeader: false,

  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },

  // 301-Redirects für entfernte Blogartikel (generische Trend-Themen, März 2026 entfernt)
  async redirects() {
    const blogRedirects: Array<[string, string]> = [
      ["moderne-webentwicklung-2025", "/webdesign-braunschweig"],
      ["ki-integration-geschaeftsprozesse", "/ki-anwendungen-braunschweig"],
      ["lighthouse-score-100", "/blog/website-ladezeit-optimierung-2026"],
      ["website-in-48-stunden", "/webdesign-braunschweig"],
      ["design-systems", "/webdesign-braunschweig"],
      ["seo-2025", "/webdesign-braunschweig"],
      ["digitale-transformation-schritt-fuer-schritt", "/leistungen/digital-transformation"],
      ["predictive-analytics-geschaeftsentscheidungen", "/ki-anwendungen-braunschweig"],
      ["ai-agents-2026", "/ki-anwendungen-braunschweig"],
      ["nachhaltige-digitalisierung", "/leistungen/digital-transformation"],
      ["web3-blockchain-business", "/software-entwicklung-braunschweig"],
      ["augmented-reality-ecommerce", "/software-entwicklung-braunschweig"],
      ["zero-click-content-strategie", "/blog"],
      ["hyper-personalisierung-ki", "/ki-anwendungen-braunschweig"],
    ];
    // Hauptdomain ist www.printzzdigital.de – alle .com-Aufrufe dauerhaft dorthin umleiten
    const domainRedirects = ["printzzdigital.com", "www.printzzdigital.com"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.printzzdigital.de/:path*",
      permanent: true,
    }));

    // Alte Druckerei-Domains der Printzz GmbH (Website abgeschaltet) → Digitaldruck-Seite.
    // Greift erst, wenn die Domains im Vercel-Projekt hängen und ihr DNS dorthin zeigt.
    // Nicht pfaderhaltend, da die alten Pfade (z. B. /produkte/...) hier nicht existieren.
    const legacyPrintRedirects = ["printzz.de", "www.printzz.de", "printzz24.de", "www.printzz24.de"].map(
      (host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://www.printzzdigital.de/digitaldruck",
        permanent: true,
      })
    );

    return [
      ...domainRedirects,
      ...legacyPrintRedirects,
      ...blogRedirects.map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
  
  // Experimentelle Features für bessere Performance
  
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 Jahr Cache für bessere Performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nskf49wp.api.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@sanity/client'
    ],
  },
  
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
