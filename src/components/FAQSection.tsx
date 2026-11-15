"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { FAQS } from "@/lib/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] border-t border-[#d2d2d7] dark:border-white/10 transition-colors duration-250">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#86868b] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
            Questions about Arihant? <br />
            <span className="text-[#86868b]">Answers you can trust.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
            Everything you need to know about Arihant Electronics &amp; Electricals, authorized partnerships, showroom sales, and doorstep repair.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#d2d2d7]/80 dark:border-white/10 bg-white dark:bg-[#161617] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#0071e3] text-white"
                        : "bg-[#f5f5f7] dark:bg-white/10 text-[#86868b]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#86868b] leading-relaxed border-t border-black/5 dark:border-white/5 pt-3 animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-white dark:bg-[#161617] border border-[#d2d2d7]/80 dark:border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs sm:text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] block">
              Have a specific question about your appliance?
            </span>
            <span className="text-xs text-[#86868b]">
              Our authorized technical team in Udaipur is ready to help right now.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="px-4 py-2 rounded-full border border-[#d2d2d7] dark:border-white/20 text-[#1d1d1f] dark:text-[#f5f5f7] text-xs font-medium hover:border-[#0071e3] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
                "Hello Arihant Electronics, I have a query regarding appliance repair / purchase in Udaipur."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
