import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie',
  description: 'Cookie-Richtlinie der PrintzzDigital – Informationen über die Verwendung von Cookies auf unserer Website.',
  alternates: {
    canonical: 'https://www.printzzdigital.de/cookies',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
