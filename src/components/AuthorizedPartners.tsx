"use client";

import { AUTHORIZED_PARTNERS } from "@/lib/constants";
import { ShieldCheck, Check, ShoppingBag, Wrench, ChevronRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function AuthorizedPartners() {
  return (
    <section id="partners" className="py-24 bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] border-t border-[#d2d2d7] dark:border-white/10 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Apple Style Section Header */}
        <ScrollReveal delay={0} y={28}>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#86868b] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
              <span>Official Brand Authorization</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
              Authorized Service Partner. <br />
              <span className="font-semibold text-[#86868b]">Trusted for sales &amp; service.</span>
            </h2>
            <p className="text-base sm:text-[17px] text-[#86868b] leading-[1.47]">
              Arihant Electronics &amp; Electricals is proud to be the official Authorized Service Partner and sales center in Udaipur for these leading global technology brands.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Brand Cards + 1 Showcase Card (Staggered Scroll Entrance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {AUTHORIZED_PARTNERS.map((brand, idx) => (
            <ScrollReveal key={brand.name} delay={idx * 0.07} y={24} className="h-full">
              <div className="p-8 rounded-[28px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/80 dark:border-white/10 hover:border-[#86868b] dark:hover:border-white/30 transition-all duration-300 shadow-sm flex flex-col justify-between h-full">
                <div>
                  {/* Brand Header with prominent Authorized Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7]">
                      {brand.name}
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#0071e3]/30 dark:border-[#2997ff]/40 text-[#0071e3] dark:text-[#2997ff] uppercase tracking-wider flex items-center gap-1 bg-[#0071e3]/5 dark:bg-[#2997ff]/10">
                      <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Authorized Partner</span>
                    </span>
                  </div>

                  {/* Scope Badge */}
                  <div className="inline-block px-2.5 py-0.5 rounded-full border border-[#d2d2d7] dark:border-white/20 text-[11px] text-[#86868b] mb-4 font-medium">
                    Authorized Scope: <strong className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">{brand.coverageScope}</strong>
                  </div>

                  <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed mb-5">
                    {brand.description}
                  </p>

                  {/* Product Categories */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-[#d2d2d7] dark:border-white/10">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-[#86868b]">
                      Products Covered:
                    </div>
                    {brand.categories.map((cat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-[13px] text-[#1d1d1f] dark:text-[#f5f5f7] font-normal">
                        <Check className="w-3.5 h-3.5 flex-shrink-0 text-[#0071e3] dark:text-[#2997ff]" />
                        <span>{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dual Sales & Service Highlights */}
                <div className="pt-4 border-t border-[#d2d2d7] dark:border-white/10 space-y-2 text-xs text-[#86868b]">
                  <div className="flex items-start gap-2">
                    <ShoppingBag className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#0071e3] dark:text-[#2997ff]" />
                    <span>{brand.salesHighlight}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Wrench className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#0071e3] dark:text-[#2997ff]" />
                    <span>{brand.serviceHighlight}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Unified Udaipur Commitment Card */}
          <ScrollReveal delay={AUTHORIZED_PARTNERS.length * 0.07} y={24} className="h-full">
            <div className="p-8 rounded-[28px] bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-black border border-[#1d1d1f] dark:border-white flex flex-col justify-between shadow-xl h-full">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#86868b] dark:text-[#6e6e73] block mb-2">
                  Showroom &amp; Service Desk
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] mb-2">
                  Complete Peace of Mind in Udaipur
                </h3>
                <p className="text-xs sm:text-sm text-[#86868b] dark:text-[#6e6e73] leading-relaxed mb-6 font-normal">
                  Whether you are purchasing a brand-new appliance with official warranty or scheduling a home repair visit, our direct brand authorization ensures genuine quality and authentic company care.
                </p>
                <div className="space-y-2 text-xs sm:text-[13px] font-normal">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2997ff] dark:text-[#0071e3]" />
                    <span>Direct Company Supply</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2997ff] dark:text-[#0071e3]" />
                    <span>100% Original Spare Parts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2997ff] dark:text-[#0071e3]" />
                    <span>Official Warranty Coverage</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/15 dark:border-black/15 text-xs text-[#86868b] dark:text-[#6e6e73] flex items-center justify-between">
                <span>Udaipur, Rajasthan</span>
                <Link href="#contact" className="hover:underline flex items-center gap-1 text-[#2997ff] dark:text-[#0071e3] font-normal">
                  <span>Book / Enquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
