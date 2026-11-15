"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, ShieldCheck, ShoppingBag, Wrench } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function AppleHero() {
  return (
    <section id="overview" className="relative pt-32 pb-24 bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-250">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Headline: Apple SF Pro Display typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-semibold tracking-[-0.035em] leading-[1.04] mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
          ARIHANT ELECTRONICS <br />
          <span className="font-semibold text-[#86868b]">&amp; ELECTRICALS</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-normal tracking-[-0.015em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-3">
          Authorized Service Partner &amp; Sales Showroom • 25+ Years Experience
        </p>

        {/* Description in Apple SF Pro text */}
        <p className="max-w-2xl mx-auto text-sm sm:text-[17px] text-[#86868b] leading-[1.47] mb-8 font-normal">
          Your trusted destination for certified doorstep repair across Udaipur, Rajsamand, Banswara, Dungarpur, and Gogunda—and brand-new home appliances at direct showroom prices with official manufacturer warranty.
        </p>

        {/* Apple Style CTAs: Primary Blue Pill (Service) + Outline Pill (Sales) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <Link
            href="#service"
            className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-normal tracking-[-0.01em] transition-all flex items-center gap-2 shadow-none"
          >
            <Wrench className="w-4 h-4" />
            <span>Book Repair Service</span>
          </Link>

          <Link
            href="#sales"
            className="px-6 py-2.5 rounded-full border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white dark:border-[#2997ff] dark:text-[#2997ff] dark:hover:bg-[#2997ff] dark:hover:text-black text-sm font-normal tracking-[-0.01em] transition-all flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Buy New Appliances</span>
          </Link>

          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="px-4 py-2.5 rounded-full text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
            <span>{BRAND.phone}</span>
          </a>

          <a
            href={`tel:${BRAND.phoneSecondaryRaw}`}
            className="px-4 py-2.5 rounded-full text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
            <span>{BRAND.phoneSecondary}</span>
          </a>
        </div>

        {/* User-Supplied Hero Image (In Full Vibrant Color!) */}
        <div className="relative max-w-4xl mx-auto rounded-[28px] overflow-hidden border border-[#d2d2d7] dark:border-white/15 bg-black shadow-2xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/hero-appliances.jpg"
              alt="Arihant Electronics Home Appliances - TV, AC, Fridge, Washing Machine, Water Purifier, Air Purifier"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Under-image authorized banner */}
          <div className="py-4 px-6 border-t border-[#d2d2d7] dark:border-white/10 bg-white dark:bg-[#161617] flex flex-col sm:flex-row items-center justify-between text-xs text-[#1d1d1f] dark:text-[#f5f5f7] gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#86868b]">
                Authorized Service Partner: TCL • Atomberg • AKAI • Amstrad • Sharp
              </span>
            </div>
            <Link
              href="#partners"
              className="flex items-center gap-1 text-[#0071e3] dark:text-[#2997ff] hover:underline font-normal text-xs"
            >
              <span>View Brand Scope</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3-Column Trust Strip (No EMI) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mt-14 pt-10 border-t border-[#d2d2d7] dark:border-white/10 text-left">
          <div className="p-6 rounded-[22px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/70 dark:border-white/10 shadow-sm">
            <div className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-[-0.02em]">25+ Years Care</div>
            <div className="text-xs sm:text-sm text-[#86868b] mt-1.5 leading-relaxed">
              Serving customers with integrity since over 25 years. All repairs use 100% original factory parts with warranty.
            </div>
          </div>

          <div className="p-6 rounded-[22px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/70 dark:border-white/10 shadow-sm">
            <div className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-[-0.02em]">Direct Pricing</div>
            <div className="text-xs sm:text-sm text-[#86868b] mt-1.5 leading-relaxed">
              Direct showroom pricing, festive discounts, cash/card payment options, and free delivery in Udaipur.
            </div>
          </div>

          <div className="p-6 rounded-[22px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/70 dark:border-white/10 shadow-sm">
            <div className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-[-0.02em]">Intercity Doorstep Visit</div>
            <div className="text-xs sm:text-sm text-[#86868b] mt-1.5 leading-relaxed">
              Experienced technicians visit your home across Udaipur, Rajsamand, Banswara, Dungarpur, and Gogunda.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
