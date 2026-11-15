"use client";

import { SERVICE_STEPS } from "@/lib/constants";
import { PhoneCall, MessageCircle, Home, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ServiceProcess() {
  const stepIcons = [
    <PhoneCall key="1" className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />,
    <MessageCircle key="2" className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />,
    <Home key="3" className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />,
    <CheckCircle2 key="4" className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />,
  ];

  return (
    <section id="process" className="py-24 bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] border-t border-[#d2d2d7] dark:border-white/10 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0} y={28}>
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#86868b] mb-3">
              Simple Process
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-4">
              How we serve you. <br />
              <span className="font-semibold text-[#86868b]">Simple four-step experience.</span>
            </h2>
            <p className="text-base sm:text-[17px] text-[#86868b] leading-[1.47]">
              Whether inquiring about a new appliance or requesting a technician at your doorstep, our process is fast, friendly, and hassle-free.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICE_STEPS.map((item, idx) => (
            <ScrollReveal key={item.step} delay={idx * 0.08} y={24} className="h-full">
              <div className="p-7 rounded-[28px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/80 dark:border-white/10 hover:border-[#86868b] transition-all duration-300 flex flex-col justify-between shadow-sm h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl border border-[#d2d2d7] dark:border-white/15 bg-[#f5f5f7] dark:bg-black">
                      {stepIcons[idx]}
                    </div>
                    <span className="text-sm font-semibold text-[#86868b]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-[13px] text-[#86868b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#d2d2d7] dark:border-white/10 text-[10px] text-[#86868b] uppercase tracking-wider font-medium">
                  Step {item.step} of 04
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
