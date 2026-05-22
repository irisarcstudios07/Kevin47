"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-playfair text-2xl font-bold tracking-wider text-black dark:text-white flex items-center gap-2">
            KEVIV <span className="text-[#D4AF37]">47</span>
            <span className="text-sm font-light tracking-widest hidden sm:inline-block">| FAMILY SALON</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-[#D4AF37] ${
                pathname === link.path
                  ? "text-[#D4AF37] font-medium"
                  : isScrolled
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/919948366135?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            className={`px-6 py-2 border transition-all duration-300 flex items-center gap-2 ${
              isScrolled
                ? "border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                : "border-white text-white hover:bg-white hover:text-green-600"
            }`}
          >
            WHATSAPP NOW
          </Link>
          <ThemeToggle isScrolled={isScrolled} />
        </nav>

        {/* Mobile Menu Toggle & Theme */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <ThemeToggle isScrolled={isScrolled || isMobileMenuOpen} />
          <button
            className="text-black dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className={isScrolled || isMobileMenuOpen ? "text-black dark:text-white" : "text-white"} />
            ) : (
              <Menu size={28} className={isScrolled ? "text-black dark:text-white" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-[#111111] flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-playfair tracking-widest text-black dark:text-white hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 px-8 py-3 bg-[#D4AF37] text-white tracking-widest uppercase hover:bg-black transition-colors"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
}
