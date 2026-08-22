import { NextRequest, NextResponse } from "next/server";

// Nonce-basierte CSP für securityheaders.com A+:
// Ein bloßes 'unsafe-inline' in script-src deckelt die Note bei A. Mit Nonce +
// 'strict-dynamic' ignorieren moderne Browser 'unsafe-inline' und die Host-Liste
// (CSP3-Fallback-Kette) – ältere Browser fallen auf Hosts bzw. 'unsafe-inline' zurück.
// Next.js liest den Nonce aus dem CSP-Request-Header und hängt ihn automatisch an
// alle Framework-Scripts. Kehrseite: Alle Seiten werden dynamisch gerendert
// (kein Static Prerender/CDN-Cache für HTML mehr), siehe headers()-Aufruf im Root-Layout.
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV === "development";

  // Externe Dienste wie gehabt: Supabase (Kontakt/Admin), Vercel Analytics,
  // Carto-Kartenkacheln (Kontaktseite), Unsplash (Portfolio), Google Fonts.
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://va.vercel-scripts.com 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
    // Kein Nonce in style-src, sonst würde 'unsafe-inline' dort ignoriert –
    // Inline-Styles (framer-motion, Critical CSS) brauchen es. A+ erlaubt das seit 11/2023.
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https://images.unsplash.com https://*.basemaps.cartocdn.com",
    "font-src 'self' data: https://fonts.gstatic.com",
    `connect-src 'self' https://*.supabase.co https://vitals.vercel-insights.com https://va.vercel-scripts.com${isDev ? " ws:" : ""}`,
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "manifest-src 'self'",
    "worker-src 'self' blob:",
    "media-src 'self'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    // Alles außer API-Routen, Next-Assets und statischen Dateien (alles mit Punkt,
    // z. B. sitemap.xml, robots.txt, sw.js, /assets/*). Prefetches brauchen keine CSP.
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
