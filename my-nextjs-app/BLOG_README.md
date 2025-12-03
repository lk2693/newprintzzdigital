# Blog System - Statische Inhalte

## 📝 Aktueller Aufbau

Die Blog-Seite verwendet derzeit **statische Inhalte**, die direkt im Code gespeichert sind. Dies ist ideal für den Start und benötigt kein CMS oder externe Datenbank.

### Dateien:
- `/src/app/blog/page.tsx` - Blog-Übersichtsseite
- `/src/app/blog/[slug]/page.tsx` - Einzelne Blog-Artikel
- `/src/app/blog/BlogContent.tsx` - Client-Komponente für Filtering

## ✏️ Neue Blogartikel hinzufügen

### In `/src/app/blog/page.tsx`:

Füge einen neuen Post zum `blogPosts` Array hinzu:

\`\`\`typescript
const blogPosts = [
  {
    _id: '7',
    title: 'Dein neuer Artikel-Titel',
    slug: { current: 'dein-artikel-slug' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-15',
    excerpt: 'Kurze Zusammenfassung des Artikels...',
    tags: ['Kategorie1', 'Kategorie2']
  },
  // ... andere Posts
];
\`\`\`

### In `/src/app/blog/[slug]/page.tsx`:

Füge den vollständigen Artikel hinzu:

\`\`\`typescript
const blogPosts: Record<string, any> = {
  'dein-artikel-slug': {
    _id: '7',
    title: 'Dein neuer Artikel-Titel',
    slug: { current: 'dein-artikel-slug' },
    author: 'Printzz Digital',
    publishedAt: '2025-10-15',
    excerpt: 'Kurze Zusammenfassung...',
    tags: ['Kategorie1', 'Kategorie2'],
    content: \`
      <p>Dein Artikel-Inhalt in HTML...</p>
      <h2>Überschrift</h2>
      <p>Mehr Text...</p>
    \`
  },
  // ... andere Posts
};
\`\`\`

**Wichtig:** Der `slug` muss in beiden Dateien identisch sein!

## 🚀 Später CMS hinzufügen (Optional)

Wenn du später ein CMS hinzufügen möchtest, hier sind gute Optionen:

### Option 1: Sanity.io
- Kostenloses Starter-Tier
- Modernes Studio-Interface
- Hervorragende Performance

### Option 2: Contentful
- Benutzerfreundlich
- Gutes kostenloses Tier
- APIs für alle Sprachen

### Option 3: Strapi
- Open Source
- Selbst gehostet möglich
- Volle Kontrolle

### Option 4: MDX Files
- Markdown-basiert
- Kein externes CMS nötig
- Version Control mit Git

## 📦 Vorteile des aktuellen statischen Ansatzes

✅ **Keine Kosten** - Kein CMS-Subscription nötig  
✅ **Perfekte Performance** - Alles ist statisch generiert  
✅ **Einfach** - Keine zusätzliche Komplexität  
✅ **SEO** - Optimale Indexierung durch Static Generation  
✅ **Schneller Start** - Sofort produktionsbereit  

## 🔄 Migration zu CMS später

Wenn dein Blog wächst, kannst du jederzeit migrieren:

1. CMS deiner Wahl einrichten
2. Blog-Posts in CMS importieren
3. API-Calls in `page.tsx` hinzufügen
4. Bestehende Komponenten wiederverwenden

Die Struktur ist bereits CMS-ready!

## 🎨 Styling anpassen

Der Blog nutzt das Terminal Industries Design:
- `font-light` für alle Texte
- `bg-white` / `bg-slate-50` Hintergründe
- `border-slate-200` für Borders
- Orange-Red Gradient für Akzente

Alle Styles können in den tsx-Dateien angepasst werden.
