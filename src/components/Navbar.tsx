"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Sun, Moon } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Repair Service", href: "#service" },
    { label: "Buy New", href: "#sales" },
    { label: "Authorized Brands", href: "#partners" },
    { label: "Why Arihant", href: "#why-arihant" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-2xl border-b border-[#d2d2d7]/60 dark:border-white/10 py-2 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-white/70 dark:bg-black/60 backdrop-blur-xl border-b border-transparent py-2.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo — image mark */}
        <Link href="#overview" className="group flex items-center">
          <div className="relative h-14 w-44 sm:h-16 sm:w-52">
            {/* Light theme logo */}
            <Image
              src="/logo-light.jpg"
              alt="Arihant Electronics & Electricals"
              fill
              className="object-contain object-left dark:opacity-0 transition-opacity duration-300"
              priority
            />
            {/* Dark theme logo */}
            <Image
              src="/logo-dark.jpg"
              alt="Arihant Electronics & Electricals"
              fill
              className="object-contain object-left opacity-0 dark:opacity-100 transition-opacity duration-300"
              priority
            />
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] font-normal text-[#1d1d1f]/75 dark:text-[#f5f5f7]/75 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors tracking-[0.01em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Quick Call — desktop only */}
          <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-[#1d1d1f] dark:text-[#f5f5f7] font-medium">
            <Phone className="w-3 h-3 text-[#0071e3] dark:text-[#2997ff]" />
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
            >
              {BRAND.phone}
            </a>
          </div>

          {/* Book CTA */}
          <Link
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[12px] font-normal transition-all tracking-[0.01em] shadow-sm"
          >
            Book / Enquire
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#1d1d1f] dark:text-[#f5f5f7] lg:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/97 dark:bg-black/97 backdrop-blur-2xl border-b border-[#d2d2d7] dark:border-white/15 px-6 py-6 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-normal text-[#1d1d1f] dark:text-[#f5f5f7] py-2 border-b border-black/5 dark:border-white/10 tracking-[0.01em]"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-[#d2d2d7] dark:border-white/20 text-[#1d1d1f] dark:text-[#f5f5f7] text-[11px] font-medium"
                >
                  <Phone className="w-3 h-3 text-[#0071e3] dark:text-[#2997ff]" />
                  <span>{BRAND.phone}</span>
                </a>
                <a
                  href={`tel:${BRAND.phoneSecondaryRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-[#d2d2d7] dark:border-white/20 text-[#1d1d1f] dark:text-[#f5f5f7] text-[11px] font-medium"
                >
                  <Phone className="w-3 h-3 text-[#0071e3] dark:text-[#2997ff]" />
                  <span>{BRAND.phoneSecondary}</span>
                </a>
              </div>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-2.5 rounded-full bg-[#0071e3] text-white text-xs font-medium"
              >
                Book Service or Buy New
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
