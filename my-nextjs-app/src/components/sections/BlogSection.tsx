"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const staticBlogPosts = [
  {
    _id: "10",
    title: "Predictive Analytics: Bessere Entscheidungen durch Datenvorhersage",
    excerpt:
      "Wie Sie mit Predictive Analytics Trends vorhersagen, Risiken minimieren und Ihr Business proaktiv steuern können.",
    author: "Printzz Digital",
    publishedAt: "2025-10-10",
    slug: { current: "predictive-analytics-geschaeftsentscheidungen" },
    tags: ["KI & Automation", "Data Analytics"],
    category: "Ressourcen",
  },
  {
    _id: "9",
    title: "Digitale Transformation: Ein Schritt-für-Schritt Fahrplan",
    excerpt:
      "Digitalisierung klingt überwältigend? Mit diesem klaren Fahrplan bringen Sie Ihr Unternehmen sicher in die digitale Zukunft.",
    author: "Printzz Digital",
    publishedAt: "2025-10-08",
    slug: { current: "digitale-transformation-schritt-fuer-schritt" },
    tags: ["Digitale Transformation", "Strategie"],
    category: "Artikel",
  },
  {
    _id: "8",
    title: "Chatbots im Kundenservice: 24/7 Support ohne Mehrkosten",
    excerpt:
      "Wie intelligente Chatbots Ihren Kundenservice revolutionieren und dabei Kosten senken statt erhöhen.",
    author: "Printzz Digital",
    publishedAt: "2025-10-05",
    slug: { current: "chatbots-kundenservice" },
    tags: ["KI & Automation", "Kundenservice"],
    category: "News",
  },
];

export default function BlogSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
            News &{" "}
            <span className="text-yellow-500">Artikel</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Bleiben Sie informiert mit unseren neuesten Einblicken zu
            Design-Trends, Branchennews und Tipps für Ihren digitalen Erfolg.
          </p>
        </motion.div>

        {/* Blog Grid - Framer template style: 1 large + 2 stacked */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Featured Post */}
          <Link
            href={`/blog/${staticBlogPosts[0].slug.current}`}
            className="group block"
          >
            <article className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                    {staticBlogPosts[0].category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {new Date(staticBlogPosts[0].publishedAt).toLocaleDateString("de-DE", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors leading-snug">
                  {staticBlogPosts[0].title}
                </h3>

                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {staticBlogPosts[0].excerpt}
                </p>

                {staticBlogPosts[0].tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {staticBlogPosts[0].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-xs font-bold text-black">
                  PD
                </div>
                <span className="text-sm text-gray-600">
                  {staticBlogPosts[0].author}
                </span>
              </div>
            </article>
          </Link>

          {/* Stacked Posts */}
          <div className="flex flex-col gap-6">
            {staticBlogPosts.slice(1).map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block"
              >
                <article className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Browse All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-black font-semibold hover:text-yellow-600 transition-colors group"
          >
            Alle Artikel ansehen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
