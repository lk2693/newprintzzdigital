'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Loader2, Send, Globe2, Brain, Zap, Code2, PhoneCall, Calendar } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  project_type: string[]
  timeline: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    project_type: [],
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = [
    { id: 'website', label: 'Website / Webshop', icon: Globe2, description: 'Moderne Websites & E-Commerce' },
    { id: 'ai', label: 'KI-Integration', icon: Brain, description: 'AI & Machine Learning' },
    { id: 'automation', label: 'Automatisierung', icon: Zap, description: 'Process Automation' },
    { id: 'custom', label: 'Custom Software', icon: Code2, description: 'Maßgeschneiderte Lösungen' }
  ]

  const timelineOptions = [
    { id: 'asap', label: 'So schnell wie möglich', description: 'Dringender Start' },
    { id: '1-2months', label: '1-2 Monate', description: 'Kurzfristige Umsetzung' },
    { id: '3-6months', label: '3-6 Monate', description: 'Mittelfristige Planung' },
    { id: '6months+', label: 'Über 6 Monate', description: 'Langfristige Planung' },
    { id: 'flexible', label: 'Flexibel / Noch offen', description: 'Zeitpunkt in Planung' }
  ]

  const handleProjectTypeChange = (typeId: string) => {
    setFormData(prev => ({
      ...prev,
      project_type: prev.project_type.includes(typeId)
        ? prev.project_type.filter(t => t !== typeId)
        : [...prev.project_type, typeId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validierung
      if (!formData.name || !formData.email || !formData.message) {
        toast.error('Bitte füllen Sie alle Pflichtfelder aus')
        return
      }

      if (formData.project_type.length === 0) {
        toast.error('Bitte wählen Sie mindestens einen Projekttyp aus')
        return
      }

      if (!formData.timeline) {
        toast.error('Bitte wählen Sie einen gewünschten Startzeitpunkt aus')
        return
      }

      // Sende Daten an die API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Projektanfrage: ${formData.project_type.join(', ')} (Start: ${formData.timeline})`,
          phone: formData.phone,
          company: formData.company,
          project_type: formData.project_type,
          timeline: formData.timeline
        }),
      })

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht')
      }

      const result = await response.json()

      // Erfolg!
      setIsSubmitted(true)
      toast.success('Nachricht erfolgreich gesendet!')

      // Form zurücksetzen nach 3 Sekunden
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          project_type: [],
          timeline: '',
          message: ''
        })
      }, 3000)

    } catch (error) {
      console.error('Submit error:', error)
      toast.error('Ein unerwarteter Fehler ist aufgetreten')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-12 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
              Nachricht gesendet!
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Card className="border border-slate-200">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-slate-900 mb-4">Vielen Dank für Ihre Anfrage!</h3>
                  <p className="text-slate-600 mb-6 text-lg font-light leading-relaxed">
                    Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 bg-slate-50">
                    <Send className="h-4 w-4 text-slate-600" />
                    <span className="text-sm text-slate-600 font-light">
                      Bestätigung gesendet an: {formData.email}
                    </span>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          phone: '',
                          project_type: [],
                          timeline: '',
                          message: ''
                        })
                      }}
                      variant="outline"
                      className="border-slate-900 bg-transparent hover:bg-slate-900 hover:text-white font-light"
                    >
                      Neue Anfrage senden
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid #e2e8f0'
            }
          }}
        />
        
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase font-light mb-3 sm:mb-4 block">
            09 — Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 mb-4 sm:mb-6">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Erzählen Sie uns von Ihrem Projekt. Wir entwickeln gemeinsam die perfekte Lösung für Ihre Bedürfnisse.
          </p>
        </div>

      <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-light text-slate-900 mb-6">Direkter Kontakt</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-light uppercase tracking-wider">E-Mail</div>
                  <div className="text-slate-900 font-light">kontakt@printzzdigital.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-light uppercase tracking-wider">Telefon</div>
                  <div className="text-slate-900 font-light">+49 (0) 123 456 789</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-light uppercase tracking-wider">Antwortzeit</div>
                  <div className="text-slate-900 font-light">Innerhalb von 24h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="p-6 border border-slate-200 bg-slate-50">
            <h4 className="text-lg font-light text-slate-900 mb-4">Warum uns wählen?</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-light">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-slate-900" />
                Kostenlose Erstberatung
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-slate-900" />
                Transparente Preise
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-slate-900" />
                Moderne Technologien
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-slate-900" />
                Persönliche Betreuung
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative border border-slate-200 bg-white p-8 space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full h-14 border border-slate-300 px-4 text-slate-900 placeholder-transparent outline-none focus:border-slate-900 transition-all peer font-light" 
                    placeholder="Ihr Name"
                    id="name"
                    required
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 text-xs text-slate-900 bg-white px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-slate-900 font-light"
                  >
                    Ihr Name *
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full h-14 border border-slate-300 px-4 text-slate-900 placeholder-transparent outline-none focus:border-slate-900 transition-all peer font-light" 
                    placeholder="E-Mail"
                    id="email"
                    required
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 text-xs text-slate-900 bg-white px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-slate-900 font-light"
                  >
                    E-Mail *
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full h-14 border border-slate-300 px-4 text-slate-900 placeholder-transparent outline-none focus:border-slate-900 transition-all peer font-light" 
                    placeholder="Unternehmen"
                    id="company"
                  />
                  <label 
                    htmlFor="company"
                    className="absolute left-4 -top-2.5 text-xs text-slate-900 bg-white px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-slate-900 font-light"
                  >
                    Unternehmen
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full h-14 border border-slate-300 px-4 text-slate-900 placeholder-transparent outline-none focus:border-slate-900 transition-all peer font-light" 
                    placeholder="Telefon"
                    id="phone"
                  />
                  <label 
                    htmlFor="phone"
                    className="absolute left-4 -top-2.5 text-xs text-slate-900 bg-white px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-slate-900 font-light"
                  >
                    Telefon
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-light text-slate-700 mb-4">Projekttyp * <span className="text-xs text-slate-500">(Mehrfachauswahl möglich)</span></label>
                <div className="grid md:grid-cols-2 gap-3">
                  {projectTypes.map((option) => (
                    <label 
                      key={option.id} 
                      onClick={() => handleProjectTypeChange(option.id)}
                      className={`flex items-start gap-3 p-4 border cursor-pointer transition-all duration-300 group ${
                        formData.project_type.includes(option.id)
                          ? 'bg-slate-900 border-slate-900'
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      <div className={`w-5 h-5 border-2 flex items-center justify-center transition-colors mt-0.5 ${
                        formData.project_type.includes(option.id)
                          ? 'bg-white border-white'
                          : 'border-slate-300 group-hover:border-slate-900'
                      }`}>
                        {formData.project_type.includes(option.id) && (
                          <Check className="h-3 w-3 text-slate-900" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <option.icon className={`h-5 w-5 transition-colors ${
                            formData.project_type.includes(option.id) ? 'text-white' : 'text-slate-600 group-hover:text-slate-900'
                          }`} />
                          <span className={`font-light transition-colors ${
                            formData.project_type.includes(option.id) ? 'text-white' : 'text-slate-900 group-hover:text-slate-900'
                          }`}>{option.label}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 font-light">{option.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-light text-slate-700 mb-4">Wann soll das Projekt starten? *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {timelineOptions.map((option) => (
                    <label 
                      key={option.id}
                      className={`flex items-start gap-3 p-4 border cursor-pointer transition-all duration-300 ${
                        formData.timeline === option.id
                          ? 'bg-slate-900 border-slate-900'
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={option.id}
                        checked={formData.timeline === option.id}
                        onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                        className="w-5 h-5 text-slate-900 border-slate-300 focus:ring-2 focus:ring-slate-900 transition-all mt-0.5"
                      />
                      <div className="flex-1">
                        <div className={`font-light ${formData.timeline === option.id ? 'text-white' : 'text-slate-900'}`}>{option.label}</div>
                        <p className="text-xs text-slate-500 mt-1 font-light">{option.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="relative group">
                <textarea 
                  rows={5} 
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full border border-slate-300 px-4 py-4 text-slate-900 placeholder-transparent outline-none focus:border-slate-900 transition-all peer resize-none font-light" 
                  placeholder="Erzählen Sie uns von Ihrem Projekt"
                  id="message"
                  required
                />
                <label 
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 text-xs text-slate-900 bg-white px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-slate-900 font-light"
                >
                  Erzählen Sie uns von Ihrem Projekt *
                </label>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-light transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Projekt starten
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                
                <div className="text-xs text-slate-500 text-center sm:text-left font-light">
                  * Pflichtfelder<br />
                  Antwort binnen 24h
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}
