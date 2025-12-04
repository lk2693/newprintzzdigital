// Content Management für einfache Updates
// Diese Datei enthält alle wichtigen Inhalte an einem Ort

export const siteConfig = {
  company: {
    name: "printzzdigital",
    tagline: "Moderne Webseiten & individuelle Softwareentwicklung",
    description: "Frisch am Markt, aber mit großen Visionen: Wir planen, designen und entwickeln performante Web-Lösungen mit den neuesten Technologien – ohne Altlasten, dafür mit viel Leidenschaft.",
    founded: "2024",
    location: "Berlin, Deutschland"
  },
  
  contact: {
    email: "info@printzz.de",
    phone: "+49 (0) 30 12345678",
    address: {
      street: "Musterstraße 123",
      city: "10115 Berlin",
      country: "Deutschland"
    },
    social: {
      github: "https://github.com/printzzdigital",
      linkedin: "https://linkedin.com/company/printzzdigital",
      twitter: "https://twitter.com/printzzdigital"
    }
  },

  earlyAdopter: {
    slotsTotal: 10,
    slotsRemaining: 7,
    discountPercentage: 20,
    validUntil: "2025-09-13", // 30 Tage von heute
    benefits: [
      "20% Rabatt auf alle Packages",
      "Persönlicher Ansprechpartner", 
      "Kostenlose Zusatzleistungen im Wert von 1.000€",
      "Priority Support (4h Antwortzeit)",
      "Lebenslange kostenlose Updates",
      "Exklusiver Zugang zu neuen Features",
      "Einfluss auf unsere Produktentwicklung",
      "Referenz in unserem Portfolio (optional)"
    ]
  },

  services: [
    {
      id: "web-development",
      title: "Moderne Webentwicklung",
      category: "Websites",
      duration: "2-4 Wochen",
      description: "Responsive und performante Websites mit React, Next.js und modernstem Tech-Stack",
      features: [
        "React & Next.js Entwicklung",
        "Responsive Design", 
        "SEO-Optimierung",
        "Performance-Optimierung",
        "Progressive Web Apps (PWA)",
        "Server-Side Rendering (SSR)"
      ]
    },
    {
      id: "ai-integration",
      title: "KI-Integration",
      category: "KI & Automatisierung", 
      duration: "3-6 Wochen",
      description: "Intelligente Funktionen und Automatisierung durch modernste KI-Technologien",
      features: [
        "ChatGPT & OpenAI Integration",
        "Intelligente Chatbots",
        "Automatisierte Workflows", 
        "Datenanalyse & Insights",
        "Personalisierung",
        "Natural Language Processing"
      ]
    },
    {
      id: "custom-software",
      title: "Custom Software",
      category: "Enterprise",
      duration: "4-12 Wochen", 
      description: "Maßgeschneiderte Softwarelösungen für komplexe Geschäftsanforderungen",
      features: [
        "Fullstack-Entwicklung",
        "API-Entwicklung",
        "Datenbank-Design",
        "Cloud-Integration", 
        "Microservices-Architektur",
        "DevOps & Deployment"
      ]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "M. Schneider",
      company: "StartupTech",
      text: "Endlich eine Agentur die unsere Startup-Mentalität versteht! Schnell, modern und fair.",
      rating: 5,
      projectType: "Website"
    },
    {
      id: 2, 
      name: "A. Weber",
      company: "LocalBiz",
      text: "Als Early Adopter haben wir nicht nur eine top Website bekommen, sondern auch 20% gespart!",
      rating: 5,
      projectType: "E-Commerce"
    },
    {
      id: 3,
      name: "S. Braun", 
      company: "InnovateCorp",
      text: "Frischer Wind! Das Team arbeitet mit Leidenschaft und den neuesten Technologien.",
      rating: 5,
      projectType: "Custom Software"
    }
  ],

  portfolio: [
    {
      id: 1,
      title: "StartupTech Website",
      category: "website",
      client: "StartupTech GmbH", 
      duration: "3 Wochen",
      description: "Moderne Corporate Website mit KI-gestütztem Chatbot",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
      results: [
        "300% mehr organischer Traffic",
        "50% längere Verweildauer", 
        "KI-Chatbot reduziert Support-Anfragen um 70%"
      ],
      featured: true
    },
    {
      id: 2,
      title: "LocalBiz E-Commerce",
      category: "ecommerce", 
      client: "LocalBiz",
      duration: "4 Wochen",
      description: "E-Commerce Platform mit KI-Produktempfehlungen",
      technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
      results: [
        "40% Umsatzsteigerung",
        "25% höhere Conversion Rate",
        "Automatisierung von 80% der Prozesse"  
      ],
      featured: true
    }
  ],

  team: [
    {
      id: 1,
      name: "Lucas",
      role: "Founder & Lead Developer",
      bio: "Vollstack-Entwickler mit Leidenschaft für moderne Webtechnologien und KI-Integration",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
      image: "/team/lucas.jpg"
    }
  ],

  stats: {
    projectsCompleted: 15,
    clientSatisfaction: 100,
    avgResponseTime: "12h",
    yearsExperience: 1
  },

  // Einfach zu aktualisierende Inhalte
  updates: {
    lastUpdated: "2025-08-13",
    version: "1.0.0",
    changelog: [
      {
        date: "2025-08-13",
        changes: [
          "Website Launch",
          "Early Adopter Programm gestartet", 
          "Erste Kundenprojekte abgeschlossen"
        ]
      }
    ]
  }
};

// Utility Funktionen für Content Updates
export const updateEarlyAdopterSlots = (newCount: number) => {
  siteConfig.earlyAdopter.slotsRemaining = newCount;
};

export const addTestimonial = (testimonial: any) => {
  siteConfig.testimonials.push({
    ...testimonial,
    id: siteConfig.testimonials.length + 1
  });
};

export const addPortfolioProject = (project: any) => {
  siteConfig.portfolio.push({
    ...project, 
    id: siteConfig.portfolio.length + 1
  });
};

export const updateStats = (newStats: Partial<typeof siteConfig.stats>) => {
  siteConfig.stats = { ...siteConfig.stats, ...newStats };
};
