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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-gray-100">
      <Header />

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors mb-8 sm:mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-20"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-500/20 text-yellow-700 text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
              Kontakt
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-8 leading-tight text-gray-900">
              Lassen Sie uns{" "}
              <span className="text-yellow-500">
                sprechen
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6 sm:space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-yellow-400 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1 sm:mb-2">E-Mail</div>
                  <a href="mailto:info@printzz.de" className="text-sm sm:text-base text-gray-900 font-semibold hover:text-yellow-600 transition-colors break-all">
                    info@printzz.de
                  </a>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-yellow-400 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1 sm:mb-2">Telefon</div>
                  <a href="tel:+4915234567890" className="text-sm sm:text-base text-gray-900 font-semibold hover:text-yellow-600 transition-colors">
                    +49 152 3456 7890
                  </a>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-yellow-400 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1 sm:mb-2">Standort</div>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">
                    Deutschland<br />
                    <span className="text-gray-600 font-normal">Braunschweig</span>
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-yellow-400 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1 sm:mb-2">Verfügbarkeit</div>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">
                    Mo - Fr: 9:00 - 18:00<br />
                    <span className="text-gray-600 font-normal">Antwortzeit: &lt; 24h</span>
                  </p>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 col-span-2 lg:col-span-1">
                <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-4 sm:mb-6">Was Sie erwarten können</div>
                <ul className="space-y-2 sm:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Antwort innerhalb von 24 Stunden</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Unverbindliches Erstgespräch</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Individuelle Projektanalyse</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">Transparente Kostenschätzung</span>
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
                <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-xl">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Check className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Nachricht gesendet!</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                    Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl transition-colors font-semibold"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="Ihre Firma"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="+49 ..."
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Projektart * <span className="text-gray-500 font-normal">(Mehrfachauswahl möglich)</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {projectTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleProjectTypeToggle(type.id)}
                          className={`px-4 py-3 text-sm font-medium transition-all border rounded-xl ${
                            formData.projectType.includes(type.id)
                              ? 'bg-yellow-500 text-white border-yellow-500'
                              : 'bg-white text-gray-900 border-gray-300 hover:border-yellow-400 hover:shadow-md'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Wann soll das Projekt starten?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {timelineOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: option.id })}
                          className={`px-4 py-3 text-sm font-medium transition-all border rounded-xl ${
                            formData.timeline === option.id
                              ? 'bg-yellow-500 text-white border-yellow-500'
                              : 'bg-white text-gray-900 border-gray-300 hover:border-yellow-400 hover:shadow-md'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Nachricht *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none text-gray-900 placeholder:text-gray-400 resize-none"
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.projectType.length === 0}
                    className="w-full px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-all font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:shadow-none rounded-xl"
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

                  <p className="text-xs text-gray-500 text-center">
                    Mit dem Absenden stimmen Sie unserer{' '}
                    <Link href="/datenschutz" className="text-yellow-600 hover:text-yellow-700 underline">
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