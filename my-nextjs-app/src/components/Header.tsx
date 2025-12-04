"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#leistungen", label: "Leistungen", isAnchor: true },
    { href: "/digitaldruck", label: "Digitaldruck" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "Über uns" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Kontakt" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string; isAnchor?: boolean }) => {
    if (item.isAnchor) {
      e.preventDefault();
      closeMobileMenu();
      
      if (pathname === "/") {
        // Already on homepage, just scroll
        const element = document.getElementById("leistungen");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to homepage first, then scroll
        router.push("/");
        setTimeout(() => {
          const element = document.getElementById("leistungen");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="PrintzzDigital Logo" 
            width={72} 
            height={72}
            className="w-16 h-16 object-contain"
            priority
          />
          <span className="font-bold text-black text-2xl">PrintzzDigital</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-[15px] transition-colors font-normal ${
                pathname === item.href
                  ? "text-yellow-500"
                  : "text-black hover:text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-black hover:bg-gray-900 text-white transition-all font-medium px-4 lg:px-6 py-2.5 rounded-full text-xs lg:text-sm whitespace-nowrap">
              Beratungsgespräch
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-black hover:text-gray-600 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => {
                handleNavClick(e, item);
                if (!item.isAnchor) closeMobileMenu();
              }}
              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                pathname === item.href
                  ? "text-yellow-600 bg-yellow-50"
                  : "text-gray-700 hover:text-black hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="pt-3">
            <Link href="/contact" onClick={closeMobileMenu} className="block">
              <Button className="w-full bg-black hover:bg-gray-900 text-white transition-all font-medium rounded-full">
                Kostenloses Beratungsgespräch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
