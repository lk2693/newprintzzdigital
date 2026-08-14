import Link from "next/link";
import { Metadata } from "next";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import ContactCta from "@/components/landing/ContactCta";
import { Reveal } from "@/components/landing/motion";
import { breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Blog – Praxiswissen für Ihre Website",
  description: "Praxisnahe Artikel aus der Werkstatt von PrintzzDigital Braunschweig: Was Websites wirklich kosten, wann sich ein Relaunch lohnt, wie Ladezeit und Conversion zusammenhängen – ohne Buzzwords.",
  keywords: ["Webentwicklung Blog", "Website Kosten", "Website Relaunch", "Ladezeit optimieren", "Conversion-Optimierung", "PrintzzDigital Braunschweig"],
  alternates: {
    canonical: 'https://www.printzzdigital.de/blog',
  },
  openGraph: {
    title: "Blog – Praxiswissen für Ihre Website | PrintzzDigital",
    description: "Praxisnahe Artikel aus Braunschweig: Websites, Ladezeit, Conversion und Chatbots – ohne Buzzwords.",
    url: 'https://www.printzzdigital.de/blog',
    type: "website",
  },
};

// Statische Blog-Posts - kannst du später durch ein CMS ersetzen
const blogPosts = [
  {
    _id: '20',
    title: 'Website-Speed 2026: Warum jede Sekunde Ladezeit bares Geld kostet',
    slug: { current: 'website-ladezeit-optimierung-2026' },
    author: 'Printzz Digital',
    publishedAt: '2026-03-01',
    excerpt: 'Langsame Websites verlieren Kunden – jede Sekunde kostet Sie bis zu 7% Conversion. So optimieren Sie Ihre Ladezeit und steigern Ihren Umsatz messbar.',
    tags: ['Performance', 'SEO', 'Webentwicklung']
  },
  {
    _id: '19',
    title: 'Conversion-Optimierung: So macht Ihre Website aus Besuchern zahlende Kunden',
    slug: { current: 'conversion-optimierung-website-2026' },
    author: 'Printzz Digital',
    publishedAt: '2026-03-05',
    excerpt: 'Ihre Website hat Traffic, aber kaum Anfragen? Mit diesen bewährten Conversion-Strategien verwandeln Sie Besucher in Kunden – ohne mehr Werbebudget.',
    tags: ['Marketing', 'Webentwicklung', 'Business']
  },
  {
    _id: '18',
    title: 'Website-Relaunch 2026: 7 Warnsignale, dass Ihre Seite ein Redesign braucht',
    slug: { current: 'website-relaunch-warnsignale-2026' },
    author: 'Printzz Digital',
    publishedAt: '2026-03-10',
    excerpt: 'Veraltetes Design, schlechte Performance oder sinkende Rankings? Diese 7 Zeichen verraten, dass Ihre Website dringend einen Relaunch braucht.',
    tags: ['Webentwicklung', 'Strategie', 'Business']
  },
  {
    _id: '17',
    title: 'Mobile-First Webdesign 2026: Warum 85% Ihrer Kunden mobil kommen',
    slug: { current: 'mobile-first-webdesign-2026' },
    author: 'Printzz Digital',
    publishedAt: '2026-03-15',
    excerpt: 'Über 85% der Nutzer surfen mobil – aber die meisten Unternehmenswebsites sind immer noch für Desktop optimiert. Der komplette Leitfaden für Mobile-First.',
    tags: ['Webentwicklung', 'Design', '2026 Trends']
  },
  {
    _id: '8',
    title: 'Chatbots im Kundenservice: 24/7 Support ohne Mehrkosten',
    slug: { current: 'chatbots-kundenservice' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-05',
    excerpt: 'Wie intelligente Chatbots Ihren Kundenservice revolutionieren und dabei Kosten senken statt erhöhen.',
    tags: ['KI & Automation', 'Kundenservice', 'Chatbots']
  },
  {
    _id: '7',
    title: 'Individuelle Webseite vs. Baukasten: Was ist die richtige Wahl?',
    slug: { current: 'individuelle-webseite-vs-baukasten' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-03',
    excerpt: 'Website-Baukästen versprechen schnelle Lösungen, aber sind sie wirklich die bessere Wahl? Ein ehrlicher Vergleich mit individueller Entwicklung.',
    tags: ['Webentwicklung', 'Business', 'Strategie']
  },
];

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      <div aria-hidden className="landing-grain" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://www.printzzdigital.de" },
              { name: "Blog", url: "https://www.printzzdigital.de/blog" },
            ])
          ),
        }}
      />

      <LandingHeader />

      {/* Kopf */}
      <section id="inhalt" className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5F1E8]">
        <div className="mx-auto max-w-[1200px] px-5 pb-14 pt-14 sm:px-8 lg:pt-[72px]">
          <Reveal>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-[34px] bg-[#F28C00]" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                Blog
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-expanded m-0 max-w-[760px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[46px] lg:text-[54px]">
              Praxiswissen statt{" "}
              <span className="text-[#A05F00]">Buzzword-Sammlung.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="m-0 mt-6 max-w-[620px] text-[19px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
              Lieber wenige Artikel, die Ihnen bei einer echten Entscheidung helfen, als jede Woche
              einen Trend-Text: Hier schreiben wir über die Fragen, die uns Kunden aus Braunschweig
              tatsächlich stellen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Artikel */}
      <section className="mx-auto max-w-[1200px] px-5 pb-[100px] pt-[70px] sm:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post, i) => (
            <Reveal key={post._id} delay={(i % 3) * 0.1}>
              <Link
                href={`/blog/${post.slug.current}`}
                className="group flex h-full flex-col gap-3.5 rounded-xl border border-[#E8E4DC] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_20px_48px_rgba(20,18,16,0.1)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#F2EFE9] px-3 py-1 text-[13px] font-bold text-[#A05F00]">
                    {post.tags[0]}
                  </span>
                  <time
                    dateTime={post.publishedAt}
                    className="text-[13px] text-[#7A7365]"
                  >
                    {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="m-0 text-[20px] font-bold leading-[1.3] text-[#26231E] transition-colors group-hover:text-[#A05F00]">
                  {post.title}
                </h2>
                <p className="m-0 flex-1 text-[15px] leading-[1.6] text-[#6B655B]">
                  {post.excerpt}
                </p>
                <span className="text-[15px] font-semibold text-[#A05F00] transition-colors group-hover:text-[#F28C00]">
                  Artikel lesen{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCta />
      <LandingFooter />
    </div>
  );
}
