"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Statische Blog-Posts für die Vorschau (nimmt die ersten 3)
const staticBlogPosts = [
  {
    _id: "10",
    title: "Predictive Analytics: Bessere Entscheidungen durch Datenvorhersage",
    excerpt: "Wie Sie mit Predictive Analytics Trends vorhersagen, Risiken minimieren und Ihr Business proaktiv steuern können.",
    author: "Printzz Digital",
    publishedAt: "2025-10-10",
    slug: { current: "predictive-analytics-geschaeftsentscheidungen" },
    tags: ["KI & Automation", "Data Analytics", "Business Intelligence"]
  },
  {
    _id: "9",
    title: "Digitale Transformation: Ein Schritt-für-Schritt Fahrplan",
    excerpt: "Digitalisierung klingt überwältigend? Mit diesem klaren Fahrplan bringen Sie Ihr Unternehmen sicher in die digitale Zukunft.",
    author: "Printzz Digital",
    publishedAt: "2025-10-08",
    slug: { current: "digitale-transformation-schritt-fuer-schritt" },
    tags: ["Digitale Transformation", "Strategie", "Business"]
  },
  {
    _id: "8",
    title: "Chatbots im Kundenservice: 24/7 Support ohne Mehrkosten",
    excerpt: "Wie intelligente Chatbots Ihren Kundenservice revolutionieren und dabei Kosten senken statt erhöhen.",
    author: "Printzz Digital",
    publishedAt: "2025-10-05",
    slug: { current: "chatbots-kundenservice" },
    tags: ["KI & Automation", "Kundenservice", "Chatbots"]
  }
];

export default function BlogPreview() {
  const blogPosts = staticBlogPosts;

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-yellow-50/30 to-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-700 text-sm font-semibold rounded-full mb-4">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
            Wissen &{" "}
            <span className="text-yellow-500">
              Insights
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Aktuelle Entwicklungen und Trends aus der Welt der digitalen Innovation
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post: any) => (
            <article key={post._id} className="group relative">
              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:border-yellow-400 hover:shadow-xl">
                {/* Article Content */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-500 uppercase tracking-wider">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time>{new Date(post.publishedAt).toLocaleDateString('de-DE')}</time>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  {post.excerpt && (
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Read More Link */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href={`/blog/${post.slug?.current || post._id}`}
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 transition-colors font-semibold"
                    aria-label={`${post.title} lesen`}
                  >
                    Artikel lesen
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition-all rounded-xl shadow-lg hover:shadow-xl"
          >
            Alle Artikel ansehen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
