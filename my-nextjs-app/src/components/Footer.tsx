import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo & Unternehmen */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="PrintzzDigital Logo"
                width={80}
                height={80}
                className="rounded-xl"
              />
              <div>
                <span className="text-3xl font-bold text-white">Printzz</span>
                <span className="text-3xl font-bold text-yellow-500">Digital</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Ihr Partner für digitale Transformation, KI-Integration und innovative Weblösungen. Wir machen Mittelstand digital.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-xl flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-xl flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Kontakt</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>Rischbleek 6<br/>38126 Braunschweig</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <Link href="tel:+4953112345" className="hover:text-yellow-500 transition-colors">
                  +49 531 123456
                </Link>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <Link href="mailto:info@printzz.de" className="hover:text-yellow-500 transition-colors">
                  info@printzz.de
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Leistungen</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/leistungen/webentwicklung" className="hover:text-yellow-500 transition-colors">
                  Webentwicklung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/ki-integration" className="hover:text-yellow-500 transition-colors">
                  KI-Integration
                </Link>
              </li>
              <li>
                <Link href="/leistungen/automatisierung" className="hover:text-yellow-500 transition-colors">
                  Automatisierung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/digital-transformation" className="hover:text-yellow-500 transition-colors">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen & Rechtliches */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Unternehmen</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-yellow-500 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="hover:text-yellow-500 transition-colors">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-500 transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-yellow-500 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-yellow-500 transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-yellow-500 transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 PrintzzDigital. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>in Braunschweig</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
