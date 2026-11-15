"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APPLIANCE_CATEGORIES } from "@/lib/constants";
import { ShoppingBag, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function SalesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>(APPLIANCE_CATEGORIES[0].id);

  const activeAppliance = APPLIANCE_CATEGORIES.find((a) => a.id === selectedCategory) || APPLIANCE_CATEGORIES[0];

  return (
    <section id="sales" className="py-24 bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] border-t border-[#d2d2d7] dark:border-white/10 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Apple Style Section Header */}
        <ScrollReveal delay={0} y={28}>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#86868b] mb-3">
              <ShoppingBag className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
              <span>Retail Showroom &amp; Direct Sales</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
              Buy brand new appliances. <br />
              <span className="font-semibold text-[#86868b]">With official brand warranty.</span>
            </h2>
            <p className="text-base sm:text-[17px] text-[#86868b] leading-[1.47]">
              Get direct showroom prices in Udaipur on new smart televisions, inverter air conditioners, refrigerators, washing machines, and purifiers. Free doorstep delivery and installation assistance included.
            </p>
          </div>
        </ScrollReveal>

        {/* Appliance Category Selector Pills */}
        <ScrollReveal delay={0.1} y={20}>
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none">
            {APPLIANCE_CATEGORIES.map((cat) => {
              const isSelected = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-[13px] font-normal whitespace-nowrap transition-colors duration-300 focus:outline-none ${
                    isSelected
                      ? "text-white dark:text-black font-medium"
                      : "text-[#1d1d1f] dark:text-[#f5f5f7] border border-[#d2d2d7] dark:border-white/15 hover:border-[#86868b] bg-white dark:bg-[#161617]"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeSalesTabPill"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className="absolute inset-0 rounded-full bg-[#1d1d1f] dark:bg-[#f5f5f7] shadow-sm -z-0"
                    />
                  )}
                  <span className="relative z-10">{cat.title}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Product Sales Showcase Card */}
        <ScrollReveal delay={0.18} y={32}>
          <div className="p-8 sm:p-12 rounded-[28px] bg-white dark:bg-[#161617] border border-[#d2d2d7] dark:border-white/10 shadow-sm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#d2d2d7] dark:border-white/20 text-[#86868b] font-medium">
                    New Product Lineup
                  </span>
                  <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff]">
                    {activeAppliance.salesPriceRange}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-semibold tracking-[-0.025em] mb-2 text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {activeAppliance.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#86868b] mb-4">
                  {activeAppliance.tagline}
                </p>

                <p className="text-sm sm:text-base text-[#1d1d1f]/85 dark:text-[#f5f5f7]/85 leading-relaxed mb-6 font-normal">
                  {activeAppliance.salesInfo}
                </p>

                {/* Brands Available */}
                <div className="mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-3 text-[#86868b]">
                    Authorized Brands Available in Udaipur
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeAppliance.brandsAvailable.map((b, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full border border-[#d2d2d7] dark:border-white/15 text-xs text-[#1d1d1f] dark:text-[#f5f5f7] bg-[#f5f5f7] dark:bg-black"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Purchase Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-[13px] text-[#1d1d1f] dark:text-[#f5f5f7] font-normal">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 text-[#0071e3] dark:text-[#2997ff]" />
                    <span>100% Brand-New with Box Seal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 text-[#0071e3] dark:text-[#2997ff]" />
                    <span>Full Official Manufacturer Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 text-[#0071e3] dark:text-[#2997ff]" />
                    <span>Doorstep Delivery Across Udaipur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 text-[#0071e3] dark:text-[#2997ff]" />
                    <span>Free Installation &amp; Demo Included</span>
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
