export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PrintzzDigital",
  "url": "https://printzzdigital.com",
  "logo": "https://printzzdigital.com/logo.svg",
  "description": "Digitalagentur für moderne Webentwicklung, KI-Integration und Marketing-Automatisierung",
  "sameAs": [
    // Füge hier später deine Social Media Profile ein
    // "https://www.linkedin.com/company/printzzdigital",
    // "https://twitter.com/printzzdigital",
    // "https://github.com/printzzdigital"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "info@printzzdigital.com"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DE",
    "addressLocality": "Deutschland"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PrintzzDigital",
  "url": "https://printzzdigital.com",
  "description": "Digitale Transformation & KI-Integration für Unternehmen",
  "publisher": {
    "@type": "Organization",
    "name": "PrintzzDigital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://printzzdigital.com/logo.svg"
    }
  }
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PrintzzDigital",
  "description": "Digitalagentur für Webentwicklung, KI-Integration und Marketing-Automatisierung",
  "url": "https://printzzdigital.com",
  "priceRange": "$$",
  "serviceType": [
    "Webentwicklung",
    "KI-Integration", 
    "Digital Marketing",
    "CRM-Systeme",
    "E-Commerce Lösungen",
    "Marketing-Automatisierung",
    "Data & AI Consulting"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Deutschland"
  }
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
  "image": article.image || "https://printzzdigital.com/logo.svg",
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
      "url": "https://printzzdigital.com/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});
