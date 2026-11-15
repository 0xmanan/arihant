"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Sun, Moon, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Repair Service", href: "#service" },
    { label: "Buy New", href: "#sales" },
    { label: "Authorized Brands", href: "#partners" },
    { label: "Why Arihant", href: "#why-arihant" },
    { label: "Diagnostic", href: "#diagnostic" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to target
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Main Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-2xl border-b border-[#d2d2d7]/60 dark:border-white/10 py-2 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
            : "bg-white/70 dark:bg-black/60 backdrop-blur-xl border-b border-transparent py-2.5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#overview" className="group flex items-center">
            <div className="relative h-14 w-44 sm:h-16 sm:w-52">
              <Image
                src="/logo-light.jpg"
                alt="Arihant Electronics & Electricals"
                fill
                className="object-contain object-left dark:opacity-0 transition-opacity duration-300"
                priority
              />
              <Image
                src="/logo-dark.jpg"
                alt="Arihant Electronics & Electricals"
                fill
                className="object-contain object-left opacity-0 dark:opacity-100 transition-opacity duration-300"
                priority
              />
            </div>
          </Link>

          {/* Center Nav Links (Desktop) */}
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

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-full text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-black/5 dark:hover:bg-white/10 transition-colors lg:hidden active:scale-95"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Independent Mobile Overlay — completely decoupled from header */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] h-[100dvh] w-screen bg-white dark:bg-[#000000] flex flex-col overflow-hidden text-[#1d1d1f] dark:text-[#f5f5f7]"
          >
            {/* Top Bar with Logo, Theme Toggle, and Close (X) */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#d2d2d7]/50 dark:border-white/10 bg-white dark:bg-black flex-shrink-0">
              <div className="relative h-12 w-40">
                <Image
                  src="/logo-light.jpg"
                  alt="Arihant Electronics"
                  fill
                  className="object-contain object-left dark:opacity-0 transition-opacity duration-300"
                  priority
                />
                <Image
                  src="/logo-dark.jpg"
                  alt="Arihant Electronics"
                  fill
                  className="object-contain object-left opacity-0 dark:opacity-100 transition-opacity duration-300"
                  priority
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-black/5 dark:bg-white/10 text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-black/10 dark:hover:bg-white/20 transition-colors active:scale-90"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Nav Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col justify-between">
              <div className="flex flex-col divide-y divide-[#d2d2d7]/40 dark:divide-white/10">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + idx * 0.035,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="block text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] py-3.5 tracking-[-0.02em] hover:text-[#0071e3] dark:hover:text-[#2997ff] active:text-[#0071e3] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Quick Contact & Actions */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="pt-6 pb-6 flex flex-col gap-3 flex-shrink-0"
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b]">
                  Director &amp; Support Contacts
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl border border-[#d2d2d7] dark:border-white/20 bg-[#f5f5f7] dark:bg-[#161617] text-[#1d1d1f] dark:text-[#f5f5f7] text-xs font-medium active:scale-95 transition-transform"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
                    <span className="truncate">{BRAND.phone}</span>
                  </a>
                  <a
                    href={`tel:${BRAND.phoneSecondaryRaw}`}
                    className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl border border-[#d2d2d7] dark:border-white/20 bg-[#f5f5f7] dark:bg-[#161617] text-[#1d1d1f] dark:text-[#f5f5f7] text-xs font-medium active:scale-95 transition-transform"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
                    <span className="truncate">{BRAND.phoneSecondary}</span>
                  </a>
                </div>

                <div className="flex flex-col gap-2 mt-1">
                  <a
                    href={`https://wa.me/${BRAND.whatsappNumber}?text=Hello%20Arihant%20Electronics%2C%20I%20would%20like%20to%20enquire%20about%20appliances%2Frepair.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white text-xs font-medium shadow-sm active:scale-98 transition-transform"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("#contact");
                    }}
                    className="flex items-center justify-center w-full py-3 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium shadow-sm active:scale-98 transition-transform"
                  >
                    Book Repair or Buy New
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
