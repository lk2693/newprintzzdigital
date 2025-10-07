"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, User, Building, X, CheckCircle, FileText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function EBookDownload() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    position: string;
    interests: string[];
  }>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    position: '',
    interests: []
  });

  const interests = [
    "KI & Machine Learning",
    "Web Development",
    "E-Commerce",
    "Mobile Apps",
    "SEO & Marketing",
    "Blockchain",
    "IoT & Smart Solutions"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Track E-Book Download mit neuer API
      const downloadData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company || '',
        ebookTitle: 'Digital Transformation Guide für Unternehmen'
      };

      const response = await fetch('/api/ebook-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(downloadData)
      });

      const result = await response.json();

      if (result.success) {
        console.log('E-Book Download tracked and email sent:', result);
      }

      setIsSubmitted(true);
      
      // Download starten
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/downloads/Digitale Transformation 2025 – Der Praxis-Guide für kleine und mittlere Unternehmen.pdf';
        link.download = 'Digitale-Transformation-2025-Praxis-Guide.pdf';
        link.click();
      }, 1500);

    } catch (error) {
      console.error('Error during E-Book download:', error);
      // Trotzdem erfolgreich zeigen und Download starten
      setIsSubmitted(true);
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/downloads/Digitale Transformation 2025 – Der Praxis-Guide für kleine und mittlere Unternehmen.pdf';
        link.download = 'Digitale-Transformation-2025-Praxis-Guide.pdf';
        link.click();
      }, 1500);
    }
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      position: '',
      interests: []
    });
  };

  return (
    <>
      {/* E-Book CTA Section */}
      <section className="py-12 sm:py-20 relative overflow-hidden bg-slate-50">
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* E-Book Preview */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative group">
                <Card className="relative bg-white border border-slate-200 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] relative bg-gradient-to-br from-slate-900 to-slate-700 p-8 flex flex-col">
                      <div className="relative z-10 flex-1 flex flex-col">
                        <div className="mb-6">
                          <FileText className="h-12 w-12 text-white mb-4" strokeWidth={1.5} />
                          <div className="space-y-2">
                            <div className="h-px bg-white/30 w-3/4" />
                            <div className="h-px bg-white/20 w-1/2" />
                          </div>
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-center space-y-4">
                          <h3 className="text-3xl font-light text-white leading-tight">
                            Digital Transformation Guide
                            <span className="block text-orange-400 font-normal mt-2">2025</span>
                          </h3>
                          <p className="text-white/70 text-sm font-light mt-6">
                            Der ultimative Leitfaden für moderne Unternehmen
                          </p>
                        </div>
                        
                        <div className="mt-6">
                          <div className="flex items-center gap-2 text-white/50 text-xs mb-2 font-light">
                            <Star className="h-3 w-3 fill-current" />
                            <span>42 Seiten • PDF Download</span>
                          </div>
                          <div className="text-white font-light">
                            PrintzzDigital
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 border border-slate-200 text-slate-600 text-xs sm:text-sm font-light uppercase tracking-wider">
                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                Kostenloses E-Book
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
                Digital Transformation Guide{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  2025
                </span>
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                Erhalten Sie unseren umfassenden Leitfaden zur digitalen Transformation und entdecken Sie, wie moderne Technologien Ihr Unternehmen zum Erfolg führen können.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-light text-slate-900">Was Sie erwartet:</h3>
                <div className="grid gap-2 sm:gap-3">
                  {[
                    "KI-Integration in bestehende Systeme",
                    "Cloud-Migration Strategien",
                    "Automatisierung von Geschäftsprozessen",
                    "ROI-Optimierung durch Digitalisierung",
                    "Best Practices & Case Studies",
                    "Schritt-für-Schritt Implementierung"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-slate-900 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-sm sm:text-base text-slate-600 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 font-light"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Jetzt kostenlos herunterladen
                </Button>
                
                <div className="text-sm text-slate-500 self-center font-light">
                  ✓ Kein Spam • ✓ Wertvolle Insights • ✓ Sofortiger Download
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) resetModal();
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md mx-auto"
            >
              <Card className="bg-white border border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-light text-slate-900">
                      {isSubmitted ? 'Download erfolgreich!' : 'E-Book herunterladen'}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={resetModal}
                      className="text-slate-600 hover:text-slate-900 h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-light text-slate-700 mb-2">
                            Vorname *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                              type="text"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-2 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 font-light"
                              placeholder="Max"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-light text-slate-700 mb-2">
                            Nachname *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 font-light"
                            placeholder="Mustermann"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-light text-slate-700 mb-2">
                          E-Mail Adresse *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 font-light"
                            placeholder="max@unternehmen.de"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-light text-slate-700 mb-2">
                          Unternehmen
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 font-light"
                            placeholder="Ihr Unternehmen"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-light text-slate-700 mb-2">
                          Position
                        </label>
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 font-light"
                        >
                          <option value="">Position auswählen</option>
                          <option value="geschaeftsfuehrung">Geschäftsführung</option>
                          <option value="it-leitung">IT-Leitung</option>
                          <option value="marketing">Marketing</option>
                          <option value="entwicklung">Entwicklung</option>
                          <option value="projektmanagement">Projektmanagement</option>
                          <option value="sonstiges">Sonstiges</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-light text-slate-700 mb-3">
                          Interessensgebiete
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {interests.map((interest) => (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => handleInterestToggle(interest)}
                              className={`px-3 py-1 text-xs border transition-colors font-light ${
                                formData.interests.includes(interest)
                                  ? 'bg-slate-900 text-white border-slate-900'
                                  : 'border-slate-300 text-slate-600 hover:border-slate-900'
                              }`}
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-slate-500 leading-relaxed font-light">
                        Mit dem Download stimmen Sie zu, dass wir Ihnen gelegentlich wertvolle 
                        Insights und Updates per E-Mail senden dürfen. Abmeldung jederzeit möglich.
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 font-light"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        E-Book herunterladen & Newsletter abonnieren
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="h-16 w-16 bg-slate-900 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-lg font-light text-slate-900">
                          Vielen Dank!
                        </h4>
                        <p className="text-slate-600 text-sm font-light leading-relaxed">
                          Ihr Download startet automatisch. Sie wurden erfolgreich 
                          für unseren Newsletter angemeldet und erhalten regelmäßig 
                          wertvolle Digital-Insights.
                        </p>
                      </div>

                      <Button 
                        onClick={resetModal}
                        variant="outline"
                        className="w-full border-slate-300 text-slate-900 hover:bg-slate-50 font-light"
                      >
                        Schließen
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
