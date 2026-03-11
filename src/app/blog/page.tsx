import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "@/app/blog/BlogContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Webdesign, Digitalisierung & KI Trends für Braunschweig | PrintzzDigital",
  description: "Aktuelle Artikel zu Webdesign-Trends, Digitalisierung, KI-Integration und lokaler SEO für Unternehmen in Braunschweig. Expertenwissen von Ihrer Digitalagentur vor Ort.",
  keywords: ["Webdesign Blog Braunschweig", "Digitalisierung Braunschweig", "KI-Integration", "Website Trends 2026", "lokale SEO Braunschweig", "Webentwicklung Tipps"],
  openGraph: {
    title: "PrintzzDigital Blog - Wissen & Insights für Braunschweiger Unternehmen",
    description: "Webdesign-Trends, Digitalisierung und KI-Tipps für Unternehmen in Braunschweig und der Region",
    type: "website",
  },
};

// Statische Blog-Posts - kannst du später durch ein CMS ersetzen
const blogPosts = [
  {
    _id: '17',
    title: 'Website-Speed 2026: Warum jede Sekunde Ladezeit bares Geld kostet',
    slug: { current: 'website-ladezeit-optimierung-2026' },
    author: 'Printzz Digital',
    publishedAt: '2026-03-01',
    excerpt: 'Langsame Websites verlieren Kunden – jede Sekunde kostet Sie bis zu 7% Conversion. So optimieren Sie Ihre Ladezeit und steigern Ihren Umsatz messbar.',
    tags: ['Performance', 'SEO', 'Webentwicklung']
  },
  {
    _id: '16',
    title: 'Conversion-Optimierung: So macht Ihre Website aus Besuchern zahlende Kunden',
    slug: { current: 'conversion-optimierung-website-2026' },
    author: 'Printzz Digital',
    publishedAt: '2026-03-05',
    excerpt: 'Ihre Website hat Traffic, aber kaum Anfragen? Mit diesen bewährten Conversion-Strategien verwandeln Sie Besucher in Kunden – ohne mehr Werbebudget.',
    tags: ['Marketing', 'Webentwicklung', 'Business']
  },
  {
    _id: '15',
    title: 'Website-Relaunch 2026: 7 Warnsignale, dass Ihre Seite ein Redesign braucht',
    slug: { current: 'website-relaunch-warnsignale-2026' },
    author: 'Printzz Digital',
    publishedAt: '2026-03-10',
    excerpt: 'Veraltetes Design, schlechte Performance oder sinkende Rankings? Diese 7 Zeichen verraten, dass Ihre Website dringend einen Relaunch braucht.',
    tags: ['Webentwicklung', 'Strategie', 'Braunschweig']
  },
  {
    _id: '14',
    title: 'Mobile-First Webdesign 2026: Warum 85% Ihrer Kunden mobil kommen',
    slug: { current: 'mobile-first-webdesign-2026' },
    author: 'Printzz Digital',
    publishedAt: '2026-03-15',
    excerpt: 'Über 85% der Nutzer surfen mobil – aber die meisten Unternehmenswebsites sind immer noch für Desktop optimiert. Der komplette Leitfaden für Mobile-First.',
    tags: ['Webentwicklung', 'Design', 'Braunschweig']
  },
  {
    _id: '1',
    title: 'Moderne Webentwicklung 2025: Trends und Best Practices',
    slug: { current: 'moderne-webentwicklung-2025' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-01',
    excerpt: 'Entdecken Sie die neuesten Trends in der Webentwicklung und wie Next.js 14 die Art und Weise verändert, wie wir moderne Webanwendungen erstellen.',
    tags: ['Webentwicklung', 'Next.js', 'Performance']
  },
  {
    _id: '2',
    title: 'KI-Integration in bestehende Geschäftsprozesse',
    slug: { current: 'ki-integration-geschaeftsprozesse' },
    author: 'Printzz Digital',
    publishedAt: '2025-09-28',
    excerpt: 'Wie kleine und mittlere Unternehmen von KI-Automatisierung profitieren können, ohne massive Investitionen tätigen zu müssen.',
    tags: ['KI & Automation', 'Business', 'Digitalisierung']
  },
  {
    _id: '3',
    title: 'Performance-Optimierung: Lighthouse Score 100 erreichen',
    slug: { current: 'lighthouse-score-100' },
    author: 'Printzz Digital',
    publishedAt: '2025-09-25',
    excerpt: 'Eine Schritt-für-Schritt Anleitung, wie Sie perfekte Lighthouse Scores erreichen und damit Ihre Website-Performance maximieren.',
    tags: ['Performance', 'SEO', 'Webentwicklung']
  },
  {
    _id: '4',
    title: 'Von der Idee zum Launch: Wie wir Websites in 48 Stunden umsetzen',
    slug: { current: 'website-in-48-stunden' },
    author: 'Printzz Digital',
    publishedAt: '2025-09-20',
    excerpt: 'Einblick in unseren optimierten Entwicklungsprozess und wie wir es schaffen, hochwertige Websites in Rekordzeit zu liefern.',
    tags: ['Projektmanagement', 'Webentwicklung', 'Case Study']
  },
  {
    _id: '5',
    title: 'Design Systems: Konsistenz über alle Touchpoints',
    slug: { current: 'design-systems' },
    author: 'Printzz Digital',
    publishedAt: '2025-09-15',
    excerpt: 'Warum Design Systems der Schlüssel zu skalierbaren und wartbaren digitalen Produkten sind und wie Sie eines aufbauen.',
    tags: ['Design', 'UX/UI', 'Best Practices']
  },
  {
    _id: '6',
    title: 'SEO in 2025: Was wirklich zählt',
    slug: { current: 'seo-2025' },
    author: 'Printzz Digital',
    publishedAt: '2025-09-10',
    excerpt: 'Die wichtigsten SEO-Faktoren haben sich verändert. Erfahren Sie, worauf Sie jetzt fokussieren sollten für maximale Sichtbarkeit.',
    tags: ['SEO', 'Marketing', 'Content']
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
  {
    _id: '8',
    title: 'WCAG & EAA: Warum viele Websites ab 2025 nicht mehr rechtskonform sind',
    slug: { current: 'wcag-eaa-barrierefreiheit-pflicht' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-04',
    excerpt: 'Der European Accessibility Act macht digitale Barrierefreiheit zur Pflicht. Ist Ihre Website rechtskonform? Was Sie jetzt wissen müssen.',
    tags: ['Recht', 'Accessibility', 'WCAG']
  },
  {
    _id: '9',
    title: 'Website-Trends 2026: Was Braunschweiger Unternehmen jetzt wissen müssen',
    slug: { current: 'website-trends-2026-braunschweig' },
    author: 'Printzz Digital',
    publishedAt: '2026-02-10',
    excerpt: 'Die wichtigsten Website-Trends 2026 für den Mittelstand in Braunschweig: KI-Chatbots, Voice Search, Micro-Interactions und mehr. So bleiben Sie der Konkurrenz voraus.',
    tags: ['Webentwicklung', 'Braunschweig', 'Trends']
  },
  {
    _id: '10',
    title: 'Professionelles Webdesign in Braunschweig: Der komplette Leitfaden für Unternehmer',
    slug: { current: 'webdesign-braunschweig-leitfaden' },
    author: 'Printzz Digital',
    publishedAt: '2026-02-05',
    excerpt: 'Alles was Sie über professionelles Webdesign in Braunschweig wissen müssen: Kosten, Ablauf, Technologien und worauf es bei der Agenturwahl wirklich ankommt.',
    tags: ['Webentwicklung', 'Braunschweig', 'Business']
  },
  {
    _id: '11',
    title: 'Digitalisierung im Mittelstand: So profitieren KMUs in Braunschweig',
    slug: { current: 'digitalisierung-mittelstand-braunschweig' },
    author: 'Printzz Digital',
    publishedAt: '2026-01-28',
    excerpt: 'Warum Digitalisierung für den Braunschweiger Mittelstand kein Luxus mehr ist und wie Sie mit überschaubarem Budget starten können.',
    tags: ['Digitalisierung', 'Braunschweig', 'Business']
  },
  {
    _id: '12',
    title: 'Lokale SEO für Braunschweig: So werden Sie bei Google auf Platz 1 gefunden',
    slug: { current: 'lokale-seo-braunschweig-platz-1' },
    author: 'Printzz Digital',
    publishedAt: '2026-01-20',
    excerpt: 'Der ultimative Leitfaden für lokale Suchmaschinenoptimierung in Braunschweig. Google Business Profil, lokale Keywords und Strategien für Top-Rankings.',
    tags: ['SEO', 'Braunschweig', 'Marketing']
  },
  {
    _id: '13',
    title: 'KI für Braunschweiger Unternehmen: Praktische Anwendungen, die sofort Mehrwert bringen',
    slug: { current: 'ki-anwendungen-braunschweiger-unternehmen' },
    author: 'Printzz Digital',
    publishedAt: '2026-01-15',
    excerpt: 'Von automatisierter Kundenkommunikation bis zur intelligenten Datenanalyse: So nutzen Unternehmen in Braunschweig KI bereits heute erfolgreich.',
    tags: ['KI & Automation', 'Braunschweig', 'Business']
  }
];

export default async function BlogPage() {
  const posts = blogPosts;
  const error = null;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-12 font-light"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Link>

          <div className="text-center">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Blog</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              Wissen &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Aktuelle Entwicklungen, Technologie-Trends und praxisnahe Einblicke aus der digitalen Welt.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <BlogContent initialPosts={posts} error={error} />

      <Footer />
    </main>
  );
}
