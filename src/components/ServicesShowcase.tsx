"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APPLIANCE_CATEGORIES, BRAND } from "@/lib/constants";
import {
  Wrench,
  Check,
  MessageCircle,
  Phone,
  Clock,
  AlertCircle,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState<string>(APPLIANCE_CATEGORIES[0].id);

  const currentService = APPLIANCE_CATEGORIES.find((s) => s.id === activeTab) || APPLIANCE_CATEGORIES[0];

  const whatsappServiceMsg = `Hello Arihant Electronics, I need repair / service for my ${currentService.title}. Please send a technician.`;

  return (
    <section id="service" className="py-24 bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] border-t border-[#d2d2d7] dark:border-white/10 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Apple Style Section Header */}
        <ScrollReveal delay={0} y={28}>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#86868b] mb-3">
              <Wrench className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
              <span>Authorized Repair &amp; Maintenance • Intercity Services Available</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
              Fast doorstep repair. <br />
              <span className="font-semibold text-[#86868b]">Udaipur &amp; Intercity coverage.</span>
            </h2>
            <p className="text-base sm:text-[17px] text-[#86868b] leading-[1.47]">
              From smart TVs and air conditioners to refrigerators and purifiers, our trained team arrives at your home with genuine parts, transparent pricing, and post-service warranty across Udaipur, Rajsamand, Banswara, Dungarpur, and Gogunda.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Selector Pills */}
        <ScrollReveal delay={0.1} y={20}>
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none">
            {APPLIANCE_CATEGORIES.map((srv) => {
              const isActive = srv.id === activeTab;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-[13px] font-normal whitespace-nowrap transition-colors duration-300 focus:outline-none ${
                    isActive
                      ? "text-white dark:text-black font-medium"
                      : "text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#d2d2d7] dark:border-white/15 hover:border-[#86868b] bg-white dark:bg-[#161617]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeServiceTabPill"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className="absolute inset-0 rounded-full bg-[#1d1d1f] dark:bg-[#f5f5f7] shadow-sm -z-0"
                    />
                  )}
                  <span className="relative z-10">{srv.title}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Featured Service Card */}
        <ScrollReveal delay={0.18} y={32}>
          <div className="p-8 sm:p-12 rounded-[28px] bg-white dark:bg-[#161617] border border-[#d2d2d7] dark:border-white/10 shadow-sm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Column: Scope & Actions */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#d2d2d7] dark:border-white/20 text-[#86868b] font-medium">
                      Doorstep Repair
                    </span>
                    <span className="text-xs text-[#0071e3] dark:text-[#2997ff] flex items-center gap-1.5 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Same-Day or 24-Hour Resolution</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-semibold tracking-[-0.025em] mb-2 text-[#1d1d1f] dark:text-[#f5f5f7]">
                    {currentService.title} Repair
                  </h3>

                  <p className="text-sm sm:text-base text-[#1d1d1f]/85 dark:text-[#f5f5f7]/85 leading-relaxed mb-6 font-normal">
                    {currentService.serviceInfo}
                  </p>

                  {/* Service Standards */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-[#86868b]">
                      What You Receive
                    </div>
                    {[
                      "On-site inspection by polite, certified technician",
                      "100% genuine spare parts direct from the manufacturer",
                      "Honest price quote before any repair work starts",
                      "Dedicated service warranty on replaced components",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#1d1d1f] dark:text-[#f5f5f7] font-normal">
                        <Check className="w-4 h-4 flex-shrink-0 text-[#0071e3] dark:text-[#2997ff]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#d2d2d7] dark:border-white/10">
                    <a
                      href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(whatsappServiceMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-normal transition-all flex items-center gap-2 shadow-sm active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book Technician via WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${BRAND.phoneRaw}`}
                      className="px-4 py-2.5 rounded-full border border-[#d2d2d7] dark:border-white/20 text-[#1d1d1f] dark:text-[#f5f5f7] hover:border-[#1d1d1f] dark:hover:border-white text-xs sm:text-sm font-normal transition-colors flex items-center gap-2 active:scale-95"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
                      <span>{BRAND.phone}</span>
                    </a>

                    <a
                      href={`tel:${BRAND.phoneSecondaryRaw}`}
                      className="px-4 py-2.5 rounded-full border border-[#d2d2d7] dark:border-white/20 text-[#1d1d1f] dark:text-[#f5f5f7] hover:border-[#1d1d1f] dark:hover:border-white text-xs sm:text-sm font-normal transition-colors flex items-center gap-2 active:scale-95"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
                      <span>{BRAND.phoneSecondary}</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Common Problems Solved */}
                <div className="lg:col-span-5 bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7] dark:border-white/10 rounded-[22px] p-6 sm:p-7">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 text-[#86868b]">
                    <AlertCircle className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
                    <span>Common Problems We Fix</span>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {currentService.commonRepairs.map((issue, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl border border-[#d2d2d7] dark:border-white/10 bg-white dark:bg-[#161617] text-xs text-[#1d1d1f] dark:text-[#f5f5f7] flex items-start gap-3"
                      >
                        <span className="text-[11px] font-semibold text-[#0071e3] dark:text-[#2997ff]">0{idx + 1}</span>
                        <span className="leading-snug">{issue}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#d2d2d7] dark:border-white/10 text-xs text-[#86868b] leading-relaxed bg-white dark:bg-[#161617]">
                    <strong className="text-[#1d1d1f] dark:text-[#f5f5f7] block mb-0.5 font-semibold">Doorstep Visit Available:</strong>
                    Our technician visits your home across Udaipur, Rajsamand, Banswara, Dungarpur, and Gogunda with diagnostic tools and genuine spares.
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
