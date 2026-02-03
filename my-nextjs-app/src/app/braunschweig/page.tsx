'use client';

import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, ArrowRight, Check } from "lucide-react";

// Dynamischer Import von LocationMap (nur Client-Side)
const LocationMap = dynamic(() => import('@/components/LocationMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
      <p className="text-gray-500">Karte wird geladen...</p>
    </div>
  ),
});

export default function BraunschweigPage() {
  return (
    <>
      <Head>
        <title>Webentwicklung Braunschweig - Ihre Digitalagentur vor Ort | PrintzzDigital</title>
        <meta name="description" content="PrintzzDigital - Ihre Digitalagentur in Braunschweig für moderne Webentwicklung, KI-Integration und digitale Transformation. Kostenlose Beratung vor Ort." />
        <meta name="keywords" content="Webentwicklung Braunschweig, Digitalagentur Braunschweig, Website erstellen Braunschweig, SEO Braunschweig, Webdesign Braunschweig" />
      </Head>
      <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-600 font-semibold">Braunschweig & Region</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ihre <span className="text-yellow-500">Digitalagentur</span> in Braunschweig
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Moderne Webentwicklung, KI-Integration und digitale Transformation – direkt vor Ihrer Haustür. 
                Persönliche Beratung, schnelle Umsetzung, messbare Ergebnisse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors">
                    <Phone className="w-5 h-5" />
                    Kostenlose Beratung vor Ort
                  </button>
                </Link>
                <Link href="/#leistungen">
                  <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 flex items-center justify-center gap-2 transition-colors">
                    Unsere Leistungen
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Map/Contact Info */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Kontakt Braunschweig</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">PrintzzDigital</p>
                    <p className="text-gray-600">Rischbleek 6</p>
                    <p className="text-gray-600">38122 Braunschweig-Rautheim</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <a href="tel:+4953170201786" className="text-gray-900 hover:text-yellow-600 transition-colors">
                    0531 - 70201786
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <a href="mailto:info@printzzdigital.de" className="text-gray-900 hover:text-yellow-600 transition-colors">
                    info@printzzdigital.de
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">Öffnungszeiten:</p>
                <p className="font-semibold">Mo - Fr: 09:00 - 18:00 Uhr</p>
                <p className="text-sm text-gray-600 mt-2">Termine nach Vereinbarung</p>
              </div>

              {/* Karte */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-200">
                <LocationMap
                  lat={52.2177}
                  lng={10.5668}
                  address="Rischbleek 6, 38122 Braunschweig-Rautheim"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Warum <span className="text-yellow-500">lokale Expertise</span> wichtig ist
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Persönlicher Kontakt</h3>
              <p className="text-gray-600">
                Treffen Sie uns persönlich in Braunschweig. Kein anonymer Support, 
                sondern echte Menschen, die Ihr Business verstehen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Regionale Vernetzung</h3>
              <p className="text-gray-600">
                Wir kennen die Region, die Märkte und die lokalen Besonderheiten. 
                Das macht uns zum idealen Partner für Ihr Business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Schnelle Reaktion</h3>
              <p className="text-gray-600">
                Bei dringenden Anfragen sind wir in kürzester Zeit vor Ort. 
                Keine langen Wartezeiten, keine E-Mail-Odyssee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wir sind in der <span className="text-yellow-500">gesamten Region</span> aktiv
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Neben Braunschweig betreuen wir Kunden in Wolfsburg, Salzgitter, Gifhorn, 
            Peine, Helmstedt und der gesamten Region Niedersachsen.
          </p>
          
          <Link href="/contact">
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg transition-colors">
              Jetzt kostenlos beraten lassen
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Bereit für Ihre digitale Transformation?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Lassen Sie uns bei einem kostenlosen Beratungsgespräch in Braunschweig 
            herausfinden, wie wir Ihr Business digitalisieren können.
          </p>
          <Link href="/contact">
            <button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg transition-colors">
              <Phone className="w-5 h-5" />
              Termin vereinbaren
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
