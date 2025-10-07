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
        <div className="text-red-500 text-xl mb-4 font-light">Fehler beim Laden</div>
        <p className="text-slate-600 font-light">{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-light transition-all ${
                  selectedCategory === category
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-900 border border-slate-200 hover:border-slate-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-slate-600 text-xl font-light">
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
                    <div className="bg-white border border-slate-200 hover:border-slate-900 transition-all h-full flex flex-col">
                      {/* Image placeholder */}
                      <div className="aspect-[16/9] bg-slate-50 border-b border-slate-200 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                          <Tag className="w-12 h-12" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8 flex-1 flex flex-col">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-light">
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
                        <h2 className="text-xl font-light text-slate-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {post.title}
                        </h2>
                        
                        {/* Excerpt */}
                        {post.excerpt && (
                          <p className="text-slate-600 font-light leading-relaxed line-clamp-3 mb-6 flex-1">
                            {post.excerpt}
                          </p>
                        )}
                        
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 text-xs bg-slate-50 text-slate-600 border border-slate-200 font-light"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Read More */}
                        <div className="inline-flex items-center gap-2 text-slate-900 font-light group-hover:gap-4 transition-all">
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
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Bleiben Sie{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                informiert
              </span>
            </h2>
            <p className="text-slate-600 font-light mb-8 leading-relaxed">
              Erhalten Sie neue Artikel und Insights direkt in Ihr Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail Adresse"
                className="flex-1 px-6 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none font-light text-slate-900 placeholder:text-slate-400"
              />
              <button className="px-8 py-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors font-light whitespace-nowrap">
                Abonnieren
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-4 font-light">
              Kein Spam. Jederzeit abmeldbar.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
