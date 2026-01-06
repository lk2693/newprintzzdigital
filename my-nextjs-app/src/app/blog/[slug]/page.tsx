import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Statische Blog-Posts
const blogPosts: Record<string, any> = {
  'moderne-webentwicklung-2025': {
    _id: '1',
    title: 'Moderne Webentwicklung 2025: Trends und Best Practices',
    slug: { current: 'moderne-webentwicklung-2025' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-01',
    excerpt: 'Entdecken Sie die neuesten Trends in der Webentwicklung und wie Next.js 14 die Art und Weise verändert, wie wir moderne Webanwendungen erstellen.',
    tags: ['Webentwicklung', 'Next.js', 'Performance'],
    content: `
      <p>Die Webentwicklung hat sich in den letzten Jahren dramatisch weiterentwickelt. Mit dem Aufkommen von Frameworks wie Next.js 14 haben wir neue Möglichkeiten, performante und SEO-optimierte Webanwendungen zu erstellen.</p>
      
      <h2>Die wichtigsten Trends 2025</h2>
      <ul>
        <li><strong>Server Components:</strong> React Server Components ermöglichen es, Komponenten auf dem Server zu rendern und nur das notwendige JavaScript an den Client zu senden.</li>
        <li><strong>Edge Computing:</strong> Durch Edge-Funktionen können Anwendungen näher am Benutzer ausgeführt werden, was die Latenz drastisch reduziert.</li>
        <li><strong>AI-Integration:</strong> KI-gestützte Features werden zum Standard in modernen Webanwendungen.</li>
      </ul>

      <h2>Best Practices für 2025</h2>
      <p>Bei der Entwicklung moderner Webanwendungen sollten Sie folgende Best Practices beachten:</p>
      <ol>
        <li>Nutzen Sie TypeScript für Typ-Sicherheit</li>
        <li>Implementieren Sie Progressive Web App Features</li>
        <li>Optimieren Sie für Core Web Vitals</li>
        <li>Setzen Sie auf Accessibility von Anfang an</li>
      </ol>
    `
  },
  'ki-integration-geschaeftsprozesse': {
    _id: '2',
    title: 'KI-Integration in bestehende Geschäftsprozesse',
    slug: { current: 'ki-integration-geschaeftsprozesse' },
    author: 'Printzz Digital',
    publishedAt: '2025-09-28',
    excerpt: 'Wie kleine und mittlere Unternehmen von KI-Automatisierung profitieren können, ohne massive Investitionen tätigen zu müssen.',
    tags: ['KI & Automation', 'Business', 'Digitalisierung'],
    content: `
      <p>Künstliche Intelligenz ist nicht mehr nur für große Konzerne zugänglich. Auch KMUs können von KI-Technologien profitieren und ihre Geschäftsprozesse optimieren.</p>
      
      <h2>Einsatzbereiche für KI in KMUs</h2>
      <ul>
        <li><strong>Kundenservice:</strong> Chatbots und virtuelle Assistenten können einfache Anfragen automatisch beantworten</li>
        <li><strong>Content-Erstellung:</strong> KI unterstützt bei der Erstellung von Texten, Bildern und Social Media Content</li>
        <li><strong>Datenanalyse:</strong> Automatische Auswertung von Geschäftsdaten für bessere Entscheidungen</li>
      </ul>

      <h2>Erste Schritte</h2>
      <p>Beginnen Sie mit kleinen, fokussierten Projekten und skalieren Sie dann. Die Investitionskosten für KI-Tools sind heute deutlich niedriger als noch vor wenigen Jahren.</p>
    `
  },
  'lighthouse-score-100': {
    _id: '3',
    title: 'Performance-Optimierung: Lighthouse Score 100 erreichen',
    slug: { current: 'lighthouse-score-100' },
    author: 'Printzz Digital',
    publishedAt: '2025-09-25',
    excerpt: 'Eine Schritt-für-Schritt Anleitung, wie Sie perfekte Lighthouse Scores erreichen und damit Ihre Website-Performance maximieren.',
    tags: ['Performance', 'SEO', 'Webentwicklung'],
    content: `
      <p>Ein perfekter Lighthouse Score von 100 ist mehr als nur eine Zahl - es ist ein Zeichen für exzellente User Experience und technische Perfektion.</p>
      
      <h2>Die 4 Säulen von Lighthouse</h2>
      <ul>
        <li><strong>Performance:</strong> Ladezeiten, First Contentful Paint, Time to Interactive</li>
        <li><strong>Accessibility:</strong> Barrierefreiheit für alle Nutzer</li>
        <li><strong>Best Practices:</strong> Moderne Web-Standards und Sicherheit</li>
        <li><strong>SEO:</strong> Suchmaschinenoptimierung</li>
      </ul>

      <h2>Kritische Optimierungen</h2>
      <p>Diese Maßnahmen haben den größten Impact:</p>
      <ol>
        <li>Bilder mit Next.js Image Component optimieren</li>
        <li>Code-Splitting und Lazy Loading nutzen</li>
        <li>Critical CSS inline laden</li>
        <li>Service Worker für Offline-Funktionalität</li>
        <li>Fonts lokal hosten und preloaden</li>
      </ol>

      <h2>Messbare Ergebnisse</h2>
      <p>Unsere Kunden sehen durchschnittlich 40% schnellere Ladezeiten und 25% höhere Conversion-Raten nach der Optimierung.</p>
    `
  },
  'website-in-48-stunden': {
    _id: '4',
    title: 'Von der Idee zum Launch: Wie wir Websites in 48 Stunden umsetzen',
    slug: { current: 'website-in-48-stunden' },
    author: 'Printzz Digital',
    publishedAt: '2025-09-20',
    excerpt: 'Einblick in unseren optimierten Entwicklungsprozess und wie wir es schaffen, hochwertige Websites in Rekordzeit zu liefern.',
    tags: ['Projektmanagement', 'Webentwicklung', 'Case Study'],
    content: `
      <p>48 Stunden von der Idee bis zum Launch? Das klingt unmöglich - ist es aber nicht. Mit dem richtigen Prozess und modernen Tools ist es machbar.</p>
      
      <h2>Unser Sprint-Prozess</h2>
      <ul>
        <li><strong>Stunde 0-4:</strong> Briefing, Konzept und Wireframes</li>
        <li><strong>Stunde 4-12:</strong> Design in Figma mit Komponenten-System</li>
        <li><strong>Stunde 12-36:</strong> Entwicklung mit Next.js und Tailwind</li>
        <li><strong>Stunde 36-44:</strong> Content-Integration und Testing</li>
        <li><strong>Stunde 44-48:</strong> Deployment und Go-Live</li>
      </ul>

      <h2>Die Geheimzutaten</h2>
      <ol>
        <li><strong>Komponenten-Bibliothek:</strong> Bewährte Bausteine wiederverwenden</li>
        <li><strong>Automatisierung:</strong> CI/CD Pipeline für schnelles Deployment</li>
        <li><strong>Klare Kommunikation:</strong> Regelmäßige Updates alle 6 Stunden</li>
        <li><strong>Fokus:</strong> MVP-Ansatz - erst launchen, dann iterieren</li>
      </ol>

      <h2>Nicht für jeden geeignet</h2>
      <p>Dieser Ansatz funktioniert am besten für Landing Pages, Portfolios und kleinere Business-Websites. Komplexe Webanwendungen benötigen mehr Zeit.</p>
    `
  },
  'design-systems': {
    _id: '5',
    title: 'Design Systems: Konsistenz über alle Touchpoints',
    slug: { current: 'design-systems' },
    author: 'Printzz Digital',
    publishedAt: '2025-09-15',
    excerpt: 'Warum Design Systems der Schlüssel zu skalierbaren und wartbaren digitalen Produkten sind und wie Sie eines aufbauen.',
    tags: ['Design', 'UX/UI', 'Best Practices'],
    content: `
      <p>Ein Design System ist mehr als nur eine Sammlung von Komponenten - es ist die DNA Ihrer digitalen Marke.</p>
      
      <h2>Was gehört in ein Design System?</h2>
      <ul>
        <li><strong>Design Tokens:</strong> Farben, Typography, Spacing, Shadows</li>
        <li><strong>Komponenten:</strong> Buttons, Forms, Cards, Navigation</li>
        <li><strong>Patterns:</strong> Wiederkehrende Lösungen für häufige Probleme</li>
        <li><strong>Guidelines:</strong> Dokumentation und Best Practices</li>
      </ul>

      <h2>Vorteile eines Design Systems</h2>
      <ol>
        <li>Konsistente User Experience über alle Plattformen</li>
        <li>Schnellere Entwicklung durch Wiederverwendung</li>
        <li>Einfachere Wartung und Updates</li>
        <li>Bessere Zusammenarbeit zwischen Design und Development</li>
        <li>Skalierbarkeit für zukünftiges Wachstum</li>
      </ol>

      <h2>Von Atomic Design zu Design Systems</h2>
      <p>Wir nutzen den Atomic Design Ansatz: Atoms → Molecules → Organisms → Templates → Pages. Jede Ebene baut auf der vorherigen auf.</p>
    `
  },
  'seo-2025': {
    _id: '6',
    title: 'SEO in 2025: Was wirklich zählt',
    slug: { current: 'seo-2025' },
    author: 'Printzz Digital',
    publishedAt: '2025-09-10',
    excerpt: 'Die wichtigsten SEO-Faktoren haben sich verändert. Erfahren Sie, worauf Sie jetzt fokussieren sollten für maximale Sichtbarkeit.',
    tags: ['SEO', 'Marketing', 'Content'],
    content: `
      <p>SEO ist nicht tot - es hat sich nur dramatisch weiterentwickelt. Die Spielregeln haben sich geändert, und wer gewinnen will, muss sich anpassen.</p>
      
      <h2>Die neuen SEO-Prioritäten</h2>
      <ul>
        <li><strong>Core Web Vitals:</strong> Performance ist jetzt ein offizieller Ranking-Faktor</li>
        <li><strong>E-E-A-T:</strong> Experience, Expertise, Authority, Trust sind wichtiger denn je</li>
        <li><strong>User Intent:</strong> Google versteht Suchabsichten besser als je zuvor</li>
        <li><strong>Mobile First:</strong> Mobile ist nicht mehr optional</li>
      </ul>

      <h2>Content ist immer noch King</h2>
      <p>Aber der Fokus hat sich verschoben:</p>
      <ol>
        <li>Qualität über Quantität - lieber weniger, dafür besser</li>
        <li>Tiefgehende, hilfreiche Inhalte statt Keyword-Stuffing</li>
        <li>Multimediale Inhalte - Videos, Bilder, Infografiken</li>
        <li>Regelmäßige Updates bestehender Inhalte</li>
      </ol>

      <h2>Technisches SEO nicht vergessen</h2>
      <p>Strukturierte Daten, saubere URLs, XML Sitemaps, robots.txt - die Basics müssen stimmen. Aber sie allein reichen nicht mehr aus.</p>

      <h2>Local SEO für KMUs</h2>
      <p>Für lokale Unternehmen ist Google My Business Gold wert. Optimierte Einträge, regelmäßige Posts und echte Kundenbewertungen sind entscheidend.</p>
    `
  },
  'individuelle-webseite-vs-baukasten': {
    _id: '7',
    title: 'Individuelle Webseite vs. Baukasten: Was ist die richtige Wahl?',
    slug: { current: 'individuelle-webseite-vs-baukasten' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-03',
    excerpt: 'Website-Baukästen versprechen schnelle Lösungen, aber sind sie wirklich die bessere Wahl? Ein ehrlicher Vergleich mit individueller Entwicklung.',
    tags: ['Webentwicklung', 'Business', 'Strategie'],
    content: `
      <p>Wix, Squarespace, Jimdo – Website-Baukästen versprechen einfache und schnelle Lösungen. Aber ist das wirklich die beste Entscheidung für Ihr Business? Schauen wir uns die Fakten an.</p>
      
      <h2>Die Wahrheit über Baukästen</h2>
      <p><strong>Vorteile:</strong></p>
      <ul>
        <li>Schneller Start ohne technisches Know-how</li>
        <li>Niedrige Einstiegskosten (ab 10€/Monat)</li>
        <li>Vorgefertigte Templates</li>
      </ul>

      <p><strong>Nachteile:</strong></p>
      <ul>
        <li>Begrenzte Performance - oft langsame Ladezeiten</li>
        <li>Eingeschränkte SEO-Möglichkeiten</li>
        <li>Keine individuelle Funktionalität</li>
        <li>Langfristig teuer durch monatliche Gebühren</li>
        <li>Sie sind nicht Eigentümer Ihrer Website</li>
      </ul>

      <h2>Individuelle Entwicklung: Investition in die Zukunft</h2>
      <p><strong>Vorteile:</strong></p>
      <ul>
        <li>Maßgeschneidert für Ihre Bedürfnisse</li>
        <li>Optimale Performance (<1s Ladezeit möglich)</li>
        <li>Vollständige SEO-Kontrolle</li>
        <li>Volle Eigentümerschaft</li>
        <li>Unbegrenzte Skalierbarkeit</li>
      </ul>

      <h2>Die Kosten-Perspektive</h2>
      <p>Baukasten über 3 Jahre: ca. 1.000€ + Zeit für Anpassungen</p>
      <p>Individuelle Website: ab 2.500€ einmalig, danach nur Hosting (ca. 20€/Monat)</p>
      <p>Nach 3 Jahren haben Sie bei individueller Entwicklung oft schon Geld gespart - und eine deutlich bessere Website.</p>

      <h2>Unser Rat</h2>
      <p>Für private Projekte oder temporäre Websites: Baukasten ist OK</p>
      <p>Für ernsthaftes Business: Individuelle Entwicklung ist die bessere Investition</p>
    `
  },
  'chatbots-kundenservice': {
    _id: '8',
    title: 'Chatbots im Kundenservice: 24/7 Support ohne Mehrkosten',
    slug: { current: 'chatbots-kundenservice' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-05',
    excerpt: 'Wie intelligente Chatbots Ihren Kundenservice revolutionieren und dabei Kosten senken statt erhöhen.',
    tags: ['KI & Automation', 'Kundenservice', 'Chatbots'],
    content: `
      <p>Stellen Sie sich vor: Ihre Kunden bekommen jede Frage sofort beantwortet - rund um die Uhr, an jedem Tag im Jahr. Klingt teuer? Ist es nicht. Willkommen in der Welt der KI-Chatbots.</p>
      
      <h2>Der Chatbot-Vorteil</h2>
      <ul>
        <li><strong>24/7 Verfügbarkeit:</strong> Keine Wartezeiten, keine Öffnungszeiten</li>
        <li><strong>Sofortige Antworten:</strong> Keine frustrierten Kunden in der Warteschleife</li>
        <li><strong>Skalierbar:</strong> Tausende Anfragen gleichzeitig? Kein Problem</li>
        <li><strong>Konsistent:</strong> Immer freundlich, immer korrekt</li>
      </ul>

      <h2>Moderne Chatbots können mehr</h2>
      <p>Die neue Generation von KI-Chatbots (GPT-4 basiert) versteht Kontext, erkennt Stimmungen und kann komplexe Anfragen bearbeiten:</p>
      <ol>
        <li>Produktberatung und Empfehlungen</li>
        <li>Terminbuchungen</li>
        <li>Beschwerdemanagement</li>
        <li>Auftragsabwicklung</li>
        <li>FAQ-Automatisierung</li>
      </ol>

      <h2>ROI in Zahlen</h2>
      <p>Unsere Kunden berichten:</p>
      <ul>
        <li>70% weniger Support-Tickets</li>
        <li>90% Kundenzufriedenheit bei Chatbot-Interaktionen</li>
        <li>Amortisation nach durchschnittlich 6 Monaten</li>
      </ul>

      <h2>Der menschliche Touch bleibt wichtig</h2>
      <p>Chatbots ersetzen nicht Ihr Team - sie unterstützen es. Komplexe Fälle werden nahtlos an Mitarbeiter übergeben. So hat Ihr Team mehr Zeit für die wirklich wichtigen Gespräche.</p>

      <h2>Integration in bestehende Systeme</h2>
      <p>Moderne Chatbots lassen sich einfach in Ihre Website, WhatsApp, Facebook Messenger oder E-Mail-System integrieren. Ein einziger Bot, überall verfügbar.</p>
    `
  },
  'digitale-transformation-schritt-fuer-schritt': {
    _id: '9',
    title: 'Digitale Transformation: Ein Schritt-für-Schritt Fahrplan',
    slug: { current: 'digitale-transformation-schritt-fuer-schritt' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-08',
    excerpt: 'Digitalisierung klingt überwältigend? Mit diesem klaren Fahrplan bringen Sie Ihr Unternehmen sicher in die digitale Zukunft.',
    tags: ['Digitale Transformation', 'Strategie', 'Business'],
    content: `
      <p>Digitale Transformation ist kein Sprint, sondern ein Marathon. Aber mit dem richtigen Fahrplan schaffen Sie es - ohne Chaos, ohne Überforderung.</p>
      
      <h2>Phase 1: Analyse (Woche 1-2)</h2>
      <p><strong>Was läuft bereits digital? Was nicht?</strong></p>
      <ul>
        <li>Bestandsaufnahme aller digitalen Tools</li>
        <li>Identifikation von Schmerzpunkten</li>
        <li>Quick Wins definieren</li>
      </ul>

      <h2>Phase 2: Strategie (Woche 3-4)</h2>
      <p><strong>Wo wollen wir hin?</strong></p>
      <ul>
        <li>Klare Ziele definieren (messbar!)</li>
        <li>Priorisierung nach Impact und Aufwand</li>
        <li>Budget und Timeline festlegen</li>
        <li>Quick Wins umsetzen (für frühe Erfolge)</li>
      </ul>

      <h2>Phase 3: Implementierung (Monat 2-6)</h2>
      <p><strong>Step by Step umsetzen</strong></p>
      <ol>
        <li><strong>Monat 2:</strong> Digitale Infrastruktur (Cloud, Tools)</li>
        <li><strong>Monat 3-4:</strong> Prozessautomatisierung (CRM, Workflows)</li>
        <li><strong>Monat 5:</strong> Digitale Kundeninteraktion (Website, Chatbots)</li>
        <li><strong>Monat 6:</strong> Datenanalyse und Reporting</li>
      </ol>

      <h2>Phase 4: Optimierung (fortlaufend)</h2>
      <p>Digitalisierung ist nie fertig. Kontinuierliche Verbesserung ist der Schlüssel:</p>
      <ul>
        <li>Monatliche Reviews der KPIs</li>
        <li>Mitarbeiter-Feedback einh olen</li>
        <li>Neue Technologien testen</li>
        <li>Best Practices implementieren</li>
      </ul>

      <h2>Die häufigsten Fehler vermeiden</h2>
      <ol>
        <li><strong>Zu viel auf einmal:</strong> Fokus auf wenige Projekte</li>
        <li><strong>Mitarbeiter vergessen:</strong> Change Management ist kritisch</li>
        <li><strong>Keine klaren Ziele:</strong> Was genau wollen Sie erreichen?</li>
        <li><strong>Technologie vor Prozess:</strong> Erst Prozesse optimieren, dann digitalisieren</li>
      </ol>

      <h2>Erfolgsgeschichte: +40% Produktivität in 6 Monaten</h2>
      <p>Unser Kunde, ein mittelständisches Handelsunternehmen, hat durch strukturierte digitale Transformation seine Prozesse radikal verbessert. Investition: 15.000€. Einsparungen im ersten Jahr: 60.000€.</p>
    `
  },
  'predictive-analytics-geschaeftsentscheidungen': {
    _id: '10',
    title: 'Predictive Analytics: Bessere Entscheidungen durch Datenvorhersage',
    slug: { current: 'predictive-analytics-geschaeftsentscheidungen' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-10',
    excerpt: 'Wie Sie mit Predictive Analytics Trends vorhersagen, Risiken minimieren und Ihr Business proaktiv steuern können.',
    tags: ['KI & Automation', 'Data Analytics', 'Business Intelligence'],
    content: `
      <p>Was wäre, wenn Sie wüssten, welche Kunden in den nächsten 30 Tagen kaufen werden? Oder welche Produkte sich im nächsten Quartal am besten verkaufen? Predictive Analytics macht es möglich.</p>
      
      <h2>Was ist Predictive Analytics?</h2>
      <p>Predictive Analytics nutzt historische Daten, maschinelles Lernen und statistische Algorithmen, um zukünftige Entwicklungen vorherzusagen.</p>

      <h2>Praktische Anwendungsfälle</h2>
      <ul>
        <li><strong>Sales Forecasting:</strong> Umsatzprognosen mit 85%+ Genauigkeit</li>
        <li><strong>Churn Prediction:</strong> Erkennen Sie Kunden mit Abwanderungsrisiko</li>
        <li><strong>Demand Planning:</strong> Optimale Lagerbestände ohne Überproduktion</li>
        <li><strong>Lead Scoring:</strong> Identifizieren Sie die vielversprechendsten Leads</li>
        <li><strong>Price Optimization:</strong> Dynamische Preisgestaltung für maximalen Gewinn</li>
      </ul>

      <h2>Einstieg ohne große IT-Abteilung</h2>
      <p>Sie brauchen kein Data Science Team. Moderne Tools machen Predictive Analytics zugänglich:</p>
      <ol>
        <li>Sammeln Sie Ihre Daten (CRM, ERP, Website-Analytics)</li>
        <li>Nutzen Sie Cloud-basierte KI-Services (Google Cloud AI, AWS, Azure)</li>
        <li>Starten Sie mit einem konkreten Use Case</li>
        <li>Iterieren und verfeinern Sie Ihre Modelle</li>
      </ol>

      <h2>ROI-Beispiel aus der Praxis</h2>
      <p>E-Commerce-Händler mit 2M€ Jahresumsatz:</p>
      <ul>
        <li>Investition in Predictive Analytics: 8.000€</li>
        <li>Reduzierung von Überbeständen: -20% → 80.000€ Einsparung</li>
        <li>Besseres Lead Scoring: +15% Conversion → 300.000€ Mehrumsatz</li>
        <li>ROI nach 6 Monaten: 4.750%</li>
      </ul>

      <h2>Die Zukunft ist vorhersehbar</h2>
      <p>Nicht perfekt, aber deutlich besser als Bauchgefühl. Unternehmen, die jetzt in Predictive Analytics investieren, haben einen massiven Wettbewerbsvorteil.</p>
    `
  }
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-12 font-light"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zum Blog
        </Link>

        {/* Article Header */}
        <header className="mb-16 border-b border-slate-200 pb-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight text-slate-900">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>

          <div className="flex items-center gap-6 text-slate-500 text-sm font-light">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>{new Date(post.publishedAt).toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</time>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-slate-50 text-slate-600 border border-slate-200 font-light"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Image Placeholder */}
        <div className="aspect-[21/9] bg-slate-50 border border-slate-200 mb-12 flex items-center justify-center">
          <Tag className="w-16 h-16 text-slate-300" />
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none font-light">
          <div 
            className="text-slate-700 leading-relaxed space-y-6 [&>h2]:text-2xl [&>h2]:font-light [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:space-y-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Navigation */}
        <div className="pt-12 mt-12 border-t border-slate-200">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-900 hover:gap-4 transition-all font-light"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle Artikel
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    return {
      title: 'Artikel nicht gefunden',
      description: 'Der gesuchte Blogartikel konnte nicht gefunden werden.'
    };
  }

  return {
    title: `${post.title} | Printzz Digital Blog`,
    description: post.excerpt || post.title,
  };
}

// Generate static paths für alle Blog-Posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
