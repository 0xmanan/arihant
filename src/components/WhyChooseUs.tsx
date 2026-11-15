"use client";

import { WHY_CHOOSE_US } from "@/lib/constants";
import { ShieldCheck, ShoppingBag, Clock, Award, Check, X } from "lucide-react";

export default function WhyChooseUs() {
  const icons = [
    <ShieldCheck key="1" className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />,
    <ShoppingBag key="2" className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />,
    <Clock key="3" className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />,
    <Award key="4" className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />,
  ];

  const comparisons = [
    {
      criterion: "New Appliance Deals",
      arihant: "Official company warranty with direct showroom pricing",
      others: "Often gray-market or without authorized support",
    },
    {
      criterion: "Repair Replacement Parts",
      arihant: "100% Genuine factory spares with warranty",
      others: "Substandard or used duplicate parts",
    },
    {
      criterion: "Technician Training",
      arihant: "Brand-certified technicians with proper diagnostic tools",
      others: "Unverified local mechanics using trial & error",
    },
    {
      criterion: "Pricing Structure",
      arihant: "Clear honest estimate before any repair work",
      others: "Hidden charges and arbitrary rates",
    },
    {
      criterion: "Authorized Credentials",
      arihant: "Official partner for TCL, Atomberg, AKAI, Amstrad, Sharp",
      others: "No direct company accountability",
    },
  ];

  return (
    <section id="why-arihant" className="py-24 bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] border-t border-[#d2d2d7] dark:border-white/10 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#86868b] mb-3">
            Why Choose Arihant
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
            Reliable electronics care. <br />
            <span className="font-semibold text-[#86868b]">Simple, honest &amp; transparent.</span>
          </h2>
          <p className="text-base sm:text-[17px] text-[#86868b] leading-[1.47]">
            Whether buying new appliances or fixing an existing one, thousands of Udaipur residents choose Arihant for our genuine quality and friendly support.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {WHY_CHOOSE_US.map((c, idx) => (
            <div
              key={c.number}
              className="p-6 rounded-[24px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/80 dark:border-white/10 hover:border-[#86868b] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl border border-[#d2d2d7] dark:border-white/15 bg-[#f5f5f7] dark:bg-black">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-semibold text-[#86868b]">{c.number}</span>
                </div>

                <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-2">{c.title}</h3>
                <p className="text-xs sm:text-[13px] text-[#86868b] leading-relaxed">{c.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#d2d2d7] dark:border-white/10 text-[10px] text-[#86868b] uppercase tracking-wider font-medium">
                Verified Promise
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table (Apple Comparison Matrix style) */}
        <div className="p-8 sm:p-10 rounded-[28px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/80 dark:border-white/10 shadow-sm">
          <div className="max-w-2xl mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1">
              Honest Comparison
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-[-0.02em]">
              Why an Authorized Center Makes a Difference
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#d2d2d7] dark:border-white/15 text-[#86868b] text-xs font-medium">
                  <th className="py-3 px-3">Service Factor</th>
                  <th className="py-3 px-3 text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold">Arihant Electronics</th>
                  <th className="py-3 px-3">Ordinary Local Repair Shops</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d2d2d7]/60 dark:divide-white/10">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-3 text-[#1d1d1f] dark:text-[#f5f5f7] font-medium">{row.criterion}</td>
                    <td className="py-3.5 px-3 text-[#1d1d1f] dark:text-[#f5f5f7] flex items-center gap-2 font-semibold">
                      <Check className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff] flex-shrink-0" />
                      <span>{row.arihant}</span>
                    </td>
                    <td className="py-3.5 px-3 text-[#86868b]">
                      <div className="flex items-center gap-2">
                        <X className="w-3.5 h-3.5 flex-shrink-0 text-[#86868b]" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
