"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ThemeToggle from "@/components/ThemeToggle";

interface NavigationProps {
  activeSection?: string;
}

const navLinks = [
  { href: "#experience", label: "Experience", section: "experience" },
  { href: "#projects", label: "Work", section: "projects" },
  { href: "#skills", label: "Skills", section: "skills" },
  { href: "#about", label: "About", section: "about" },
  { href: "#contact", label: "Contact", section: "contact" },
];

export default function Navigation({ activeSection = "hero" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/50 px-6 py-4 z-50"
      role="navigation"
      aria-label="Main navigation"
      initial={prefersReducedMotion ? undefined : { y: -20, opacity: 0 }}
      animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
      transition={prefersReducedMotion ? undefined : { duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2 group" aria-label="Home">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-sm font-bold">J</span>
          </div>
          <span className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
            Justine
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.section}
                href={link.href}
                className={`relative py-1 transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "text-red-500 dark:text-red-400"
                    : "text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId={prefersReducedMotion ? undefined : "nav-underline"}
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 dark:bg-red-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 dark:bg-red-400 group-hover:w-full transition-all duration-300" />
                )}
              </a>
            );
          })}
          <ThemeToggle />
          <a
            href="https://github.com/tatineeeeeee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 hover:scale-105 flex items-center space-x-1 group"
          >
            <svg
              className="w-4 h-4 group-hover:rotate-12 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-800/50 pt-4 space-y-3"
          role="menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 transition-colors ${
                activeSection === link.section
                  ? "text-red-500 dark:text-red-400 font-medium"
                  : "text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400"
              }`}
              role="menuitem"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/tatineeeeeee"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors py-2"
            role="menuitem"
          >
            GitHub
          </a>
        </div>
      )}
    </motion.nav>
  );
}
