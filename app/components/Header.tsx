"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/researches", label: "Researches" },
  { href: "/organization", label: "Organization" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact & Support" },
];

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ur", label: "اردو", flag: "🇵🇰" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    if (languageMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass backdrop-blur-xl bg-white/5 dark:bg-black/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-purple-400/50 transition-all duration-300">
              <Image
                src="/assets/hamza-pic.jpeg"
                alt="Hamza Hafeez"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent hidden sm:block">
              Hamza Hafeez
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg glass hover:bg-white/10 transition-colors"
                aria-label="Select language"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline text-sm font-medium">{selectedLanguage.flag}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${languageMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 rounded-lg glass border border-white/10 overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-black/10 shadow-lg"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setLanguageMenuOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors flex items-center gap-2 ${
                          selectedLanguage.code === lang.code ? "bg-white/10" : ""
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 space-y-2"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-foreground"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

