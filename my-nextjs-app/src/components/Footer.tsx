import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10">
          
          {/* Logo & Unternehmen */}
          <div className="col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
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
              <a href="https://www.linkedin.com/company/printzzdigital" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-xl flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
                <Link href="tel:+4953170201786" className="hover:text-yellow-500 transition-colors">
                  0531 - 70201786
                </Link>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <Link href="mailto:info@printzzdigital.de" className="hover:text-yellow-500 transition-colors">
                  info@printzzdigital.de
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
              © {new Date().getFullYear()} PrintzzDigital. Alle Rechte vorbehalten.
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
