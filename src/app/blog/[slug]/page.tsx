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
      
      <h2>Website-Baukästen: Die Verlockung der Einfachheit</h2>
      <p>Baukastensysteme haben durchaus ihre Berechtigung:</p>
      <ul>
        <li><strong>Schneller Start:</strong> In wenigen Stunden online</li>
        <li><strong>Günstige Einstiegspreise:</strong> Ab 10-30€ pro Monat</li>
        <li><strong>Keine technischen Kenntnisse nötig:</strong> Drag & Drop Interface</li>
        <li><strong>Hosting inklusive:</strong> Alles aus einer Hand</li>
      </ul>

      <h2>Die versteckten Kosten und Limitierungen</h2>
      <p>Was Baukasten-Anbieter gerne verschweigen:</p>
      <ul>
        <li><strong>Performance-Probleme:</strong> Langsame Ladezeiten durch aufgeblähten Code (durchschnittlich 3-5 Sekunden)</li>
        <li><strong>SEO-Nachteile:</strong> Eingeschränkte Optimierungsmöglichkeiten, generischer Code</li>
        <li><strong>Vendor Lock-in:</strong> Ihre Daten und Inhalte sind gefangen im System</li>
        <li><strong>Steigende Kosten:</strong> Für erweiterte Features zahlen Sie schnell 50-100€/Monat</li>
        <li><strong>Design-Limitierungen:</strong> Sie sehen aus wie tausend andere Websites</li>
        <li><strong>Keine echte Skalierbarkeit:</strong> Wenn Ihr Business wächst, stößt der Baukasten an Grenzen</li>
      </ul>

      <h2>Individuelle Entwicklung: Die langfristige Investition</h2>
      <p>Eine maßgeschneiderte Website bietet entscheidende Vorteile:</p>
      <ul>
        <li><strong>Perfekte Performance:</strong> Lighthouse Scores von 95-100, Ladezeiten unter 1 Sekunde</li>
        <li><strong>SEO-Optimierung:</strong> Sauberer Code, strukturierte Daten, optimale Indexierung</li>
        <li><strong>Einzigartiges Design:</strong> Ihre Marke, Ihre Identität – nicht Template #4729</li>
        <li><strong>Volle Kontrolle:</strong> Eigener Code, eigene Daten, kein Vendor Lock-in</li>
        <li><strong>Unbegrenzte Skalierbarkeit:</strong> Wächst mit Ihrem Business</li>
        <li><strong>Zukunftssicher:</strong> Moderne Technologien statt veralteter Systeme</li>
      </ul>

      <h2>Der Kosten-Vergleich über 3 Jahre</h2>
      <p><strong>Baukasten:</strong></p>
      <ul>
        <li>Premium-Plan: 40€/Monat × 36 Monate = 1.440€</li>
        <li>Plus: kostenpflichtige Plugins, Apps, Premium-Templates</li>
        <li>Plus: Zeit für Wartung und Anpassungen</li>
        <li><strong>Gesamt: ca. 2.000-3.000€</strong></li>
      </ul>

      <p><strong>Individuelle Entwicklung:</strong></p>
      <ul>
        <li>Einmalige Entwicklung: 2.500-5.000€</li>
        <li>Hosting: 10-20€/Monat × 36 Monate = 360-720€</li>
        <li>Wartung optional: 50€/Monat oder selbst</li>
        <li><strong>Gesamt: ca. 3.000-6.000€</strong></li>
      </ul>

      <h2>Aber: Schauen Sie auf den ROI!</h2>
      <p>Eine individuelle Website mit perfekter Performance und SEO generiert:</p>
      <ul>
        <li>40% mehr organischen Traffic durch bessere Rankings</li>
        <li>25% höhere Conversion-Rate durch optimale UX</li>
        <li>Professioneller Markenauftritt = höheres Vertrauen</li>
      </ul>
      <p>Bei nur 10 zusätzlichen Kunden pro Jahr à 500€ Wert = 5.000€ Mehrertrag. Die Website hat sich bereits im ersten Jahr amortisiert.</p>

      <h2>Wann macht ein Baukasten Sinn?</h2>
      <p>Baukasten-Systeme eignen sich für:</p>
      <ul>
        <li>Absolute Anfänger ohne jegliche Unterstützung</li>
        <li>Hobby-Projekte ohne kommerzielle Ziele</li>
        <li>Temporäre Landingpages für Tests</li>
        <li>Sehr limitiertes Budget (unter 1.000€)</li>
      </ul>

      <h2>Individuelle Entwicklung ist die richtige Wahl für:</h2>
      <ul>
        <li>Seriöse Business-Websites</li>
        <li>Unternehmen, die online wachsen wollen</li>
        <li>Marken mit professionellem Anspruch</li>
        <li>Alle, die Performance und SEO ernst nehmen</li>
      </ul>

      <h2>Unser Ansatz: Das Beste aus beiden Welten</h2>
      <p>Mit modernen Frameworks wie Next.js kombinieren wir:</p>
      <ul>
        <li>Schnelle Entwicklung (48h für MVP möglich)</li>
        <li>Professionelle, individuelle Lösungen</li>
        <li>Faire Preise durch effiziente Prozesse</li>
        <li>Volle Flexibilität und Kontrolle</li>
      </ul>

      <h2>Fazit</h2>
      <p>Baukästen sind verlockend einfach, aber langfristig eine Sackgasse. Eine individuelle Website ist eine Investition in Ihr Business – eine, die sich durch bessere Performance, höhere Conversions und professionellen Auftritt schnell auszahlt.</p>
      <p>Die Frage ist nicht, ob Sie sich eine individuelle Website leisten können. Die Frage ist: Können Sie es sich leisten, auf eine zu verzichten?</p>
    `
  },
  'wcag-eaa-barrierefreiheit-pflicht': {
    _id: '8',
    title: 'WCAG & EAA: Warum viele Websites ab 2025 nicht mehr rechtskonform sind',
    slug: { current: 'wcag-eaa-barrierefreiheit-pflicht' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-04',
    excerpt: 'Der European Accessibility Act macht digitale Barrierefreiheit zur Pflicht. Ist Ihre Website rechtskonform? Was Sie jetzt wissen müssen.',
    tags: ['Recht', 'Accessibility', 'WCAG'],
    content: `
      <p>Ab dem 28. Juni 2025 wird es ernst: Der European Accessibility Act (EAA) macht digitale Barrierefreiheit zur gesetzlichen Pflicht. Viele Unternehmen sind nicht vorbereitet – und riskieren Abmahnungen und Bußgelder.</p>
      
      <h2>Was ist der European Accessibility Act (EAA)?</h2>
      <p>Der EAA ist eine EU-Richtlinie, die sicherstellt, dass digitale Produkte und Dienstleistungen für alle Menschen zugänglich sind – unabhängig von ihren körperlichen oder kognitiven Fähigkeiten.</p>
      <ul>
        <li><strong>Inkrafttreten:</strong> 28. Juni 2025</li>
        <li><strong>Betroffen:</strong> Alle Unternehmen, die digitale Produkte/Dienstleistungen anbieten</li>
        <li><strong>Umfang:</strong> Websites, Apps, Online-Shops, digitale Dokumente</li>
        <li><strong>Standard:</strong> WCAG 2.1 Level AA als Mindestanforderung</li>
      </ul>

      <h2>Wer ist betroffen?</h2>
      <p>Praktisch jedes Unternehmen mit digitaler Präsenz:</p>
      <ul>
        <li>E-Commerce und Online-Shops</li>
        <li>Banken und Finanzdienstleister</li>
        <li>Telekommunikationsanbieter</li>
        <li>Transportdienstleister (Bahn, Flug, Bus)</li>
        <li>E-Books und digitale Medien</li>
        <li>Öffentliche Einrichtungen (bereits seit 2021 verpflichtet)</li>
        <li><strong>Und: Alle anderen Unternehmen ab einer bestimmten Größe</strong></li>
      </ul>

      <h2>Was bedeutet WCAG 2.1 Level AA?</h2>
      <p>Die Web Content Accessibility Guidelines (WCAG) definieren Standards für barrierefreie Websites. Level AA ist der geforderte Standard und umfasst:</p>

      <h3>1. Wahrnehmbar (Perceivable)</h3>
      <ul>
        <li><strong>Alternativtexte:</strong> Alle Bilder brauchen beschreibende Alt-Texte</li>
        <li><strong>Kontraste:</strong> Mindestens 4.5:1 für normalen Text, 3:1 für großen Text</li>
        <li><strong>Textalternativen:</strong> Für Audio und Video Untertitel/Transkripte</li>
        <li><strong>Responsive Design:</strong> Lesbar auf allen Geräten und Zoomstufen</li>
      </ul>

      <h3>2. Bedienbar (Operable)</h3>
      <ul>
        <li><strong>Tastatur-Navigation:</strong> Alle Funktionen per Tastatur erreichbar</li>
        <li><strong>Focus-Indikatoren:</strong> Klare Anzeige, wo man sich befindet</li>
        <li><strong>Zeit-Limits:</strong> Ausreichend Zeit für Interaktionen oder abschaltbar</li>
        <li><strong>Keine Flackern:</strong> Vermeidung von Anfällen auslösenden Animationen</li>
      </ul>

      <h3>3. Verständlich (Understandable)</h3>
      <ul>
        <li><strong>Klare Sprache:</strong> Einfach formulierte Inhalte</li>
        <li><strong>Konsistente Navigation:</strong> Einheitliche Bedienung auf allen Seiten</li>
        <li><strong>Fehlermeldungen:</strong> Klar und hilfreich formuliert</li>
        <li><strong>Labels:</strong> Alle Formularfelder beschriftet</li>
      </ul>

      <h3>4. Robust (Robust)</h3>
      <ul>
        <li><strong>Sauberer Code:</strong> Valides HTML</li>
        <li><strong>ARIA-Labels:</strong> Semantische Auszeichnung für Screenreader</li>
        <li><strong>Kompatibilität:</strong> Mit assistiven Technologien nutzbar</li>
      </ul>

      <h2>Häufige Verstöße auf Websites</h2>
      <p>Unsere Audits zeigen: 95% der Websites haben mindestens einen dieser kritischen Mängel:</p>
      <ol>
        <li><strong>Fehlende Alt-Texte:</strong> Bilder ohne Beschreibung (78% der Websites)</li>
        <li><strong>Kontrast-Probleme:</strong> Zu helle Schrift auf hellem Hintergrund (65%)</li>
        <li><strong>Keine Tastatur-Navigation:</strong> Menüs und Buttons nicht per Tab erreichbar (58%)</li>
        <li><strong>Fehlende Labels:</strong> Formularfelder ohne Beschriftung (52%)</li>
        <li><strong>Unleserliche Schriftgrößen:</strong> Zu klein oder nicht skalierbar (45%)</li>
        <li><strong>Komplexe Navigation:</strong> Unlogische Struktur (41%)</li>
        <li><strong>Auto-Play Videos:</strong> Ohne Steuerung (38%)</li>
      </ol>

      <h2>Die Konsequenzen bei Nicht-Konformität</h2>
      <ul>
        <li><strong>Abmahnungen:</strong> Anwälte und Verbände können abmahnen</li>
        <li><strong>Bußgelder:</strong> Bis zu 100.000€ in Deutschland</li>
        <li><strong>Klagen:</strong> Schadensersatzforderungen möglich</li>
        <li><strong>Reputationsschaden:</strong> Negative PR und Shitstorms</li>
        <li><strong>Verlorene Kunden:</strong> 15% der Bevölkerung haben Einschränkungen</li>
        <li><strong>SEO-Nachteile:</strong> Google bewertet Accessibility positiv</li>
      </ul>

      <h2>Was Sie jetzt tun müssen</h2>
      
      <h3>1. Audit durchführen</h3>
      <p>Lassen Sie Ihre Website professionell prüfen:</p>
      <ul>
        <li>Automatisierte Tools (WAVE, axe, Lighthouse)</li>
        <li>Manuelle Tests mit Screenreadern</li>
        <li>Tastatur-Navigation überprüfen</li>
        <li>Kontrast-Checks durchführen</li>
      </ul>

      <h3>2. Prioritäten setzen</h3>
      <p>Beheben Sie kritische Mängel zuerst:</p>
      <ol>
        <li>Kontraste anpassen (schnell umsetzbar)</li>
        <li>Alt-Texte ergänzen (zeitaufwendig aber wichtig)</li>
        <li>Tastatur-Navigation implementieren (technisch)</li>
        <li>Formulare überarbeiten (mittlerer Aufwand)</li>
      </ol>

      <h3>3. Langfristige Strategie</h3>
      <ul>
        <li><strong>Schulungen:</strong> Team für Barrierefreiheit sensibilisieren</li>
        <li><strong>Guidelines:</strong> Interne Standards definieren</li>
        <li><strong>Testing:</strong> Accessibility in Entwicklungsprozess integrieren</li>
        <li><strong>Monitoring:</strong> Regelmäßige Überprüfungen</li>
      </ul>

      <h2>Die gute Nachricht: Win-Win-Situation</h2>
      <p>Barrierefreiheit ist nicht nur Pflicht – es lohnt sich:</p>
      <ul>
        <li><strong>Größere Zielgruppe:</strong> 15% mehr potenzielle Kunden</li>
        <li><strong>Bessere UX für alle:</strong> Was für Menschen mit Behinderung gut ist, hilft allen</li>
        <li><strong>SEO-Vorteile:</strong> Sauberer Code, klare Struktur = bessere Rankings</li>
        <li><strong>Markenimage:</strong> Zeigen Sie soziale Verantwortung</li>
        <li><strong>Zukunftssicher:</strong> Einmal richtig, lange Ruhe</li>
      </ul>

      <h2>Kosten und Aufwand</h2>
      <p>Abhängig vom aktuellen Zustand Ihrer Website:</p>
      <ul>
        <li><strong>Kleine Website (bis 10 Seiten):</strong> 1.000-3.000€ für Anpassungen</li>
        <li><strong>Mittlere Website (bis 50 Seiten):</strong> 3.000-8.000€</li>
        <li><strong>Große Website/Shop:</strong> 8.000-20.000€</li>
        <li><strong>Neu-Entwicklung:</strong> 10-15% Aufpreis für barrierefreie Entwicklung</li>
      </ul>

      <h2>Unsere Empfehlung</h2>
      <p>Warten Sie nicht bis zur letzten Minute! Die Deadline (28. Juni 2025) ist näher als Sie denken. Je früher Sie starten, desto entspannter die Umsetzung.</p>

      <h2>Was wir für Sie tun können</h2>
      <ul>
        <li><strong>Accessibility Audit:</strong> Vollständige Analyse Ihrer Website</li>
        <li><strong>Priorisierte Roadmap:</strong> Was muss wann gemacht werden</li>
        <li><strong>Technische Umsetzung:</strong> Alle notwendigen Anpassungen</li>
        <li><strong>Dokumentation:</strong> Nachweis der Konformität</li>
        <li><strong>Schulung:</strong> Ihr Team lernt, barrierefrei zu arbeiten</li>
      </ul>

      <h2>Fazit</h2>
      <p>Der EAA ist keine Empfehlung – er ist Gesetz. Unternehmen, die jetzt nicht handeln, riskieren rechtliche Konsequenzen und verlieren Kunden. Aber richtig umgesetzt ist Barrierefreiheit eine Chance: für mehr Reichweite, bessere UX und ein positives Markenimage.</p>
      
      <p><strong>Die Frage ist nicht ob, sondern wann Sie Ihre Website barrierefrei machen. Und die Antwort sollte sein: Jetzt.</strong></p>
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
