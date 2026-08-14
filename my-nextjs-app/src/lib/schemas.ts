export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PrintzzDigital",
  "image": "https://www.printzzdigital.de/logo.png",
  "url": "https://www.printzzdigital.de",
  "logo": "https://www.printzzdigital.de/logo.png",
  "description": "Digitalagentur in Braunschweig für moderne Webentwicklung, KI-Integration und digitale Transformation",
  "telephone": "+49-531-70201786",
  "email": "info@printzzdigital.de",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rischbleek 6",
    "addressLocality": "Braunschweig",
    "postalCode": "38126",
    "addressRegion": "Niedersachsen",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.2177",
    "longitude": "10.5668"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/printzzdigital"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Braunschweig"
    },
    {
      "@type": "City",
      "name": "Wolfsburg"
    },
    {
      "@type": "City",
      "name": "Salzgitter"
    },
    {
      "@type": "City",
      "name": "Gifhorn"
    },
    {
      "@type": "City",
      "name": "Peine"
    },
    {
      "@type": "State",
      "name": "Niedersachsen"
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PrintzzDigital",
  "url": "https://www.printzzdigital.de",
  "description": "Digitale Transformation & KI-Integration für Unternehmen",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.printzzdigital.de/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PrintzzDigital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.printzzdigital.de/logo.png"
    }
  }
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PrintzzDigital - Digitalagentur Braunschweig",
  "description": "Digitalagentur für Webentwicklung, KI-Integration und digitale Transformation in Braunschweig und Umgebung",
  "url": "https://www.printzzdigital.de",
  "priceRange": "$$",
  "telephone": "+49-531-70201786",
  "email": "info@printzzdigital.de",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Braunschweig",
    "addressRegion": "Niedersachsen",
    "addressCountry": "DE"
  },
  "serviceType": [
    "Webentwicklung Braunschweig",
    "KI-Integration", 
    "Digitale Transformation",
    "Website erstellen",
    "E-Commerce Lösungen",
    "SEO Optimierung",
    "Performance-Optimierung"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Braunschweig"
    },
    {
      "@type": "City",
      "name": "Wolfsburg"
    },
    {
      "@type": "City",
      "name": "Salzgitter"
    },
    {
      "@type": "State",
      "name": "Niedersachsen"
    }
  ]
};

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const articleSchema = (article: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image || "https://www.printzzdigital.de/logo.png",
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "PrintzzDigital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.printzzdigital.de/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});
