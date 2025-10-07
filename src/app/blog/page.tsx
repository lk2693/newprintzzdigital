import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "@/app/blog/BlogContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Insights zu Webentwicklung, KI & Digital Marketing | PrintzzDigital",
  description: "Aktuelle Artikel und Best Practices zu Webentwicklung, KI-Integration, Performance-Optimierung und digitaler Transformation. Expertenwissen von PrintzzDigital.",
  keywords: ["Webentwicklung Blog", "KI-Integration", "Next.js", "Performance-Optimierung", "Lighthouse Score", "Digital Marketing"],
  openGraph: {
    title: "PrintzzDigital Blog - Wissen & Insights",
    description: "Aktuelle Entwicklungen aus der Welt der digitalen Innovation",
    type: "website",
  },
};

// Statische Blog-Posts - kannst du später durch ein CMS ersetzen
const blogPosts = [
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
