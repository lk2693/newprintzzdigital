export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PrintzzDigital",
  "alternateName": "Printzz GmbH",
  "url": "https://printzzdigital.com",
  "logo": "https://printzzdigital.com/logo.png",
  "description": "Digitalagentur in Braunschweig für professionelles Webdesign, Webentwicklung, Software-Entwicklung und KI-Integration",
  "sameAs": [
    // Social Media Profile hier eintragen
    // "https://www.linkedin.com/company/printzzdigital",
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+49-531-12345678",
      "email": "info@printzz.de",
      "availableLanguage": ["German", "English"],
      "areaServed": "DE"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Schuhstraße 42",
    "addressLocality": "Braunschweig",
    "postalCode": "38100",
    "addressRegion": "Niedersachsen",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.2646,
    "longitude": 10.5236
  },
  "foundingDate": "2024",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 2,
    "maxValue": 10
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://printzzdigital.com/#localbusiness",
  "name": "PrintzzDigital - Digitalagentur Braunschweig",
  "alternateName": "Printzz GmbH",
  "url": "https://printzzdigital.com",
  "logo": "https://printzzdigital.com/logo.png",
  "image": "https://printzzdigital.com/logo.png",
  "description": "Ihre Digitalagentur in Braunschweig: Professionelles Webdesign, Webentwicklung, Software-Entwicklung, KI-Integration und Online Marketing. Persönliche Beratung vor Ort.",
  "telephone": "+49-531-12345678",
  "email": "info@printzz.de",
  "priceRange": "$$",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Überweisung, Rechnung",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Schuhstraße 42",
    "addressLocality": "Braunschweig",
    "postalCode": "38100",
    "addressRegion": "Niedersachsen",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.2646,
    "longitude": 10.5236
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Braunschweig",
      "sameAs": "https://de.wikipedia.org/wiki/Braunschweig"
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
      "@type": "City",
      "name": "Helmstedt"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Niedersachsen"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digitale Dienstleistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Webdesign & Webentwicklung",
          "description": "Professionelle Websites und Web-Anwendungen mit Next.js, React und TypeScript für Unternehmen in Braunschweig"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software-Entwicklung",
          "description": "Individuelle Softwarelösungen und App-Entwicklung für Unternehmen in der Region Braunschweig"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "KI-Integration & Automatisierung",
          "description": "Künstliche Intelligenz und Prozessautomatisierung für Braunschweiger Unternehmen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO & Online Marketing",
          "description": "Suchmaschinenoptimierung und digitales Marketing für lokale Unternehmen in Braunschweig"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-Commerce Lösungen",
          "description": "Online-Shops und E-Commerce Plattformen für den Einzelhandel in Braunschweig und Umgebung"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "12",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": []
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PrintzzDigital - Digitalagentur Braunschweig",
  "url": "https://printzzdigital.com",
  "description": "Webdesign, Webentwicklung, Software-Entwicklung & KI-Integration in Braunschweig. Ihre lokale Digitalagentur.",
  "publisher": {
    "@type": "Organization",
    "name": "PrintzzDigital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://printzzdigital.com/logo.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://printzzdigital.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PrintzzDigital - Digitalagentur Braunschweig",
  "description": "Professionelle Digitalagentur in Braunschweig für Webdesign, Webentwicklung, Software-Entwicklung, KI-Integration und Online Marketing",
  "url": "https://printzzdigital.com",
  "priceRange": "$$",
  "telephone": "+49-531-12345678",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Schuhstraße 42",
    "addressLocality": "Braunschweig",
    "postalCode": "38100",
    "addressRegion": "Niedersachsen",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.2646,
    "longitude": 10.5236
  },
  "serviceType": [
    "Webdesign",
    "Webentwicklung",
    "Software-Entwicklung",
    "App-Entwicklung",
    "KI-Integration",
    "Online Marketing",
    "SEO",
    "CRM-Systeme",
    "E-Commerce Lösungen",
    "Digitale Transformation"
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
      "@type": "AdministrativeArea",
      "name": "Niedersachsen"
    }
  ]
};

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
  "image": article.image || "https://printzzdigital.com/logo.png",
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
      "url": "https://printzzdigital.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});
