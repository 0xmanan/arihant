"use client";

import { BRAND } from "@/lib/constants";
import { Check, MapPin, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] border-t border-[#d2d2d7] dark:border-white/10 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#86868b] mb-3">
              About Us
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-6 text-[#1d1d1f] dark:text-[#f5f5f7]">
              Your trusted partner for <br />
              <span className="font-semibold text-[#86868b]">new appliances &amp; repair.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-[17px] text-[#86868b] leading-[1.47] mb-8 font-normal">
              <p>
                Founded and directed by <strong className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold">{BRAND.owner}</strong>,{" "}
                <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold">Arihant Electronics &amp; Electricals</span> has served homeowners, hotels, and businesses for over {BRAND.experienceYears} years across <strong className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold">Udaipur, Rajsamand, Banswara, Dungarpur, and Gogunda</strong>.
              </p>
              <p>
                We operate both as an <strong className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold">Authorized Retail Showroom</strong> (selling brand-new televisions, ACs, refrigerators, washing machines, and purifiers at direct showroom prices) and an <strong className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold">Authorized Service Center</strong> providing fast doorstep repair.
              </p>
              <p>
                As official authorized partners for TCL, Atomberg, AKAI, Amstrad, and Sharp, you always receive 100% genuine products with manufacturer warranty and authentic factory parts for all service needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Authorized Sales with Brand Warranty",
                "Doorstep Visits in Udaipur & Intercity",
                "100% Genuine Spare Parts Only",
                "Transparent & Honest Pricing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-[14px] text-[#1d1d1f] dark:text-[#f5f5f7] font-normal">
                  <Check className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-normal text-[#86868b]">
              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
                <span>{BRAND.locationDisplay}</span>
              </a>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
                <span>Owner: {BRAND.owner}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Key Stats Card (Apple Style) */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-[28px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/80 dark:border-white/10 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider mb-6 text-[#86868b]">
                Regional Track Record
              </div>

              <div className="space-y-6">
                <div className="pb-6 border-b border-[#d2d2d7] dark:border-white/10">
                  <div className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7]">
                    {BRAND.experienceYears} Years
                  </div>
                  <div className="text-xs sm:text-sm text-[#86868b] mt-1">
                    Serving Udaipur, Rajsamand, Banswara, Dungarpur &amp; Gogunda with integrity
                  </div>
                </div>
                <div className="pb-6 border-b border-[#d2d2d7] dark:border-white/10">
                  <div className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7]">25,000+</div>
                  <div className="text-xs sm:text-sm text-[#86868b] mt-1">
                    Happy families assisted with new appliances and repairs
                  </div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7]">
                    {BRAND.brandsCount} Brands
                  </div>
                  <div className="text-xs sm:text-sm text-[#86868b] mt-1">
                    Direct company authorized sales &amp; service partnerships
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
