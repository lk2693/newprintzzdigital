'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: [] as string[],
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { id: 'website', label: 'Website / Webshop' },
    { id: 'webapp', label: 'Web Application' },
    { id: 'ai', label: 'KI-Integration' },
    { id: 'automation', label: 'Automatisierung' },
    { id: 'design', label: 'Design System' },
    { id: 'other', label: 'Sonstiges' }
  ];

  const timelineOptions = [
    { id: 'asap', label: 'So schnell wie möglich' },
    { id: '1month', label: 'In 1 Monat' },
    { id: '3months', label: 'In 2-3 Monaten' },
    { id: '6months', label: 'In 3-6 Monaten' },
    { id: 'flexible', label: 'Noch offen' }
  ];

  const handleProjectTypeToggle = (typeId: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(typeId)
        ? prev.projectType.filter(t => t !== typeId)
        : [...prev.projectType, typeId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: [],
          timeline: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-12 font-light"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Link>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Kontakt</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              Lassen Sie uns{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                sprechen
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200 p-6">
                  <Mail className="w-6 h-6 text-slate-900 mb-4" />
                  <div className="text-sm uppercase tracking-wider text-slate-600 mb-2 font-light">E-Mail</div>
                  <a href="mailto:info@printzzdigital.de" className="text-slate-900 font-light hover:text-slate-600 transition-colors">
                    info@printzzdigital.de
                  </a>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6">
                  <Phone className="w-6 h-6 text-slate-900 mb-4" />
                  <div className="text-sm uppercase tracking-wider text-slate-600 mb-2 font-light">Telefon</div>
                  <a href="tel:+4915234567890" className="text-slate-900 font-light hover:text-slate-600 transition-colors">
                    +49 152 3456 7890
                  </a>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6">
                  <MapPin className="w-6 h-6 text-slate-900 mb-4" />
                  <div className="text-sm uppercase tracking-wider text-slate-600 mb-2 font-light">Standort</div>
                  <p className="text-slate-900 font-light">
                    Deutschland<br />
                    Remote & vor Ort
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6">
                  <Clock className="w-6 h-6 text-slate-900 mb-4" />
                  <div className="text-sm uppercase tracking-wider text-slate-600 mb-2 font-light">Verfügbarkeit</div>
                  <p className="text-slate-900 font-light">
                    Mo - Fr: 9:00 - 18:00<br />
                    Antwortzeit: &lt; 24h
                  </p>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="border-t border-slate-200 pt-8">
                <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Was Sie erwarten können</div>
                <ul className="space-y-3 text-slate-700 font-light">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                    <span>Antwort innerhalb von 24 Stunden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                    <span>Unverbindliches Erstgespräch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                    <span>Individuelle Projektanalyse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                    <span>Transparente Kostenschätzung</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <div className="bg-slate-50 border border-slate-200 p-12 text-center">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-slate-900 mb-4">Nachricht gesendet!</h3>
                  <p className="text-slate-600 font-light mb-8">
                    Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors font-light"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-slate-600 mb-3 font-light">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none font-light text-slate-900 placeholder:text-slate-400"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-slate-600 mb-3 font-light">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none font-light text-slate-900 placeholder:text-slate-400"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-slate-600 mb-3 font-light">
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none font-light text-slate-900 placeholder:text-slate-400"
                        placeholder="Ihre Firma"
                      />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-slate-600 mb-3 font-light">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none font-light text-slate-900 placeholder:text-slate-400"
                        placeholder="+49 ..."
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-slate-600 mb-4 font-light">
                      Projektart * (Mehrfachauswahl möglich)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {projectTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleProjectTypeToggle(type.id)}
                          className={`px-4 py-3 text-sm font-light transition-all border ${
                            formData.projectType.includes(type.id)
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-900 border-slate-200 hover:border-slate-900'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-slate-600 mb-4 font-light">
                      Wann soll das Projekt starten?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {timelineOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: option.id })}
                          className={`px-4 py-3 text-sm font-light transition-all border ${
                            formData.timeline === option.id
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-900 border-slate-200 hover:border-slate-900'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-slate-600 mb-3 font-light">
                      Nachricht *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none font-light text-slate-900 placeholder:text-slate-400 resize-none"
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.projectType.length === 0}
                    className="w-full px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 disabled:from-slate-300 disabled:to-slate-300 disabled:cursor-not-allowed transition-all font-light flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Nachricht senden
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 font-light text-center">
                    Mit dem Absenden stimmen Sie unserer{' '}
                    <Link href="/datenschutz" className="underline hover:text-slate-900">
                      Datenschutzerklärung
                    </Link>{' '}
                    zu.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}