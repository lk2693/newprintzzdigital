'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  slug?: { current: string };
  author?: string;
  publishedAt: string;
  excerpt?: string;
  mainImage?: any;
  tags?: string[];
}

interface BlogContentProps {
  initialPosts: BlogPost[];
  error: string | null;
}

export default function BlogContent({ initialPosts, error }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");

  const categories = ["Alle", "Webentwicklung", "KI & Automation", "Design", "Marketing"];
  
  const filteredPosts = selectedCategory === "Alle" 
    ? initialPosts 
    : initialPosts.filter(post => post.tags?.includes(selectedCategory));

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500 text-xl mb-4">Fehler beim Laden</div>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Category Filter */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-medium transition-all rounded-full ${
                  selectedCategory === category
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-gray-900 border border-gray-200 hover:border-yellow-400 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-600 text-xl">
                {selectedCategory === "Alle" ? "Keine Blog-Posts gefunden" : `Keine Posts in der Kategorie "${selectedCategory}"`}
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <Link 
                    href={`/blog/${post.slug?.current || post._id}`}
                    aria-label={`${post.title} lesen`}
                  >
                    <div className="bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all h-full flex flex-col rounded-3xl overflow-hidden">
                      {/* Image placeholder */}
                      <div className="aspect-[16/9] bg-gradient-to-br from-yellow-50 to-yellow-100 border-b border-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-yellow-300">
                          <Tag className="w-12 h-12" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8 flex-1 flex flex-col">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                          <div className="flex items-center gap-2">
                            <User className="w-3 h-3" />
                            {post.author || "Printzz Digital"}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-all">
                          {post.title}
                        </h2>
                        
                        {/* Excerpt */}
                        {post.excerpt && (
                          <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-1">
                            {post.excerpt}
                          </p>
                        )}
                        
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 text-xs bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Read More */}
                        <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold group-hover:gap-4 transition-all">
                          Artikel lesen
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white border border-gray-200 rounded-3xl p-12 shadow-xl"
          >
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-700 text-sm font-semibold rounded-full mb-6">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Bleiben Sie{" "}
              <span className="text-yellow-500">
                informiert
              </span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Erhalten Sie neue Artikel und Insights direkt in Ihr Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail Adresse"
                className="flex-1 px-6 py-3 border border-gray-300 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none text-gray-900 placeholder:text-gray-400"
              />
              <button className="px-8 py-3 bg-yellow-500 text-white hover:bg-yellow-600 transition-colors font-semibold whitespace-nowrap rounded-xl shadow-lg hover:shadow-xl">
                Abonnieren
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Kein Spam. Jederzeit abmeldbar.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
