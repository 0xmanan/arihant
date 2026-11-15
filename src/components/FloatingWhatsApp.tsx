"use client";

import { useState } from "react";
import { BRAND } from "@/lib/constants";
import { MessageCircle, X, ChevronRight, Phone, ShoppingBag, Wrench } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    { label: "Buy New Appliance (Best Showroom Price)", prompt: "Hello Arihant Electronics, I want to inquire about buying a new appliance in Udaipur." },
    { label: "Book LED TV Repair", prompt: "Hello Arihant Electronics, I need repair service for my LED TV in Udaipur." },
    { label: "Book AC Service / Gas Refill", prompt: "Hello Arihant Electronics, I need AC repair or jet service in Udaipur." },
    { label: "Book Refrigerator Repair", prompt: "Hello Arihant Electronics, I need refrigerator repair service in Udaipur." },
    { label: "Book Washing Machine Service", prompt: "Hello Arihant Electronics, I need washing machine repair in Udaipur." },
    { label: "Water Purifier (RO) Service", prompt: "Hello Arihant Electronics, I need RO water purifier maintenance in Udaipur." },
    { label: "Air Purifier Service", prompt: "Hello Arihant Electronics, I need filter replacement / service for my air purifier in Udaipur." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-[28px] bg-white/95 dark:bg-[#161617]/95 backdrop-blur-2xl border border-[#d2d2d7] dark:border-white/15 shadow-2xl p-5 animate-fadeIn text-[#1d1d1f] dark:text-[#f5f5f7]">
          <div className="flex items-center justify-between pb-3 border-b border-[#d2d2d7] dark:border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0071e3] dark:bg-[#2997ff]" />
              <div>
                <h4 className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">Arihant Sales &amp; Service</h4>
                <p className="text-[10px] text-[#86868b]">Sector 8, Udaipur • Intercity Service</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#86868b] mb-3">
            Choose what you need for an instant WhatsApp message:
          </p>

          <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
            {quickOptions.map((opt, i) => (
              <a
                key={i}
                href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(opt.prompt)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7]/60 dark:border-white/10 text-xs text-[#1d1d1f] dark:text-[#f5f5f7] hover:border-[#0071e3] transition-all group"
              >
                <span>{opt.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#86868b] group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-[#d2d2d7] dark:border-white/10 flex items-center justify-between text-[11px] text-[#86868b]">
            <span>Direct Call:</span>
            <div className="flex items-center gap-1.5 font-semibold">
              <a href={`tel:${BRAND.phoneRaw}`} className="text-[#0071e3] dark:text-[#2997ff] hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>{BRAND.phone}</span>
              </a>
              <span>•</span>
              <a href={`tel:${BRAND.phoneSecondaryRaw}`} className="text-[#0071e3] dark:text-[#2997ff] hover:underline">
                <span>{BRAND.phoneSecondary}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button (Apple Blue Pill) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-xl hover:scale-105 transition-all"
        aria-label="WhatsApp Support"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span className="text-xs font-normal tracking-tight">Chat with Us</span>
      </button>
    </div>
  );
}
