"use client";

import Link from "next/link";
import Image from "next/image";
import { BRAND, AUTHORIZED_PARTNERS, APPLIANCE_CATEGORIES } from "@/lib/constants";
import { ArrowUp, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const neighborhoods = [
    "Hiran Magri (Sectors 3–14)",
    "Panchwati",
    "Fatehpura",
    "Shobhagpura",
    "Sukher",
    "Bhuwana",
    "Madhuban",
    "Pratap Nagar",
    "Bedla Road",
    "Malla Talai",
    "Goverdhan Vilas",
    "Chetak Circle",
  ];

  return (
    <footer className="bg-[#f5f5f7] dark:bg-black text-[#86868b] border-t border-[#d2d2d7] dark:border-white/10 text-xs py-16 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#d2d2d7] dark:border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo mark */}
            <div className="relative h-9 w-28">
              <Image
                src="/logo-light.jpg"
                alt="Arihant Electronics"
                fill
                className="object-contain object-left dark:opacity-0 transition-opacity duration-300"
              />
              <Image
                src="/logo-dark.jpg"
                alt="Arihant Electronics"
                fill
                className="object-contain object-left opacity-0 dark:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="leading-relaxed text-xs">
              Authorized Electronics Sales Showroom &amp; Service Center. Over {BRAND.experienceYears} years of technical excellence.
            </p>
            <div className="pt-2 space-y-1.5 text-xs">
              <div>Owner: <strong className="text-[#1d1d1f] dark:text-[#f5f5f7]">{BRAND.owner}</strong></div>
              <div>
                Address:{" "}
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
                >
                  {BRAND.address}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span>Phones:</span>
                <a href={`tel:${BRAND.phoneRaw}`} className="text-[#0071e3] dark:text-[#2997ff] hover:underline font-semibold">
                  {BRAND.phone}
                </a>
                <span>•</span>
                <a href={`tel:${BRAND.phoneSecondaryRaw}`} className="text-[#0071e3] dark:text-[#2997ff] hover:underline font-semibold">
                  {BRAND.phoneSecondary}
                </a>
              </div>
            </div>
          </div>

          {/* Appliances */}
          <div className="lg:col-span-3">
            <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold mb-3 uppercase tracking-wider text-[11px]">
              Appliances (Service &amp; Sales)
            </h4>
            <ul className="space-y-2">
              {APPLIANCE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href="#sales" className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Authorized Partners */}
          <div className="lg:col-span-2">
            <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold mb-3 uppercase tracking-wider text-[11px]">
              Authorized Brands
            </h4>
            <ul className="space-y-2">
              {AUTHORIZED_PARTNERS.map((p) => (
                <li key={p.name}>
                  <Link href="#partners" className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors block">
                    <span className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">{p.name}</span>
                    <span className="text-[10px] block text-[#86868b]">{p.coverageScope}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Intercity & Udaipur Areas */}
          <div className="lg:col-span-3">
            <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold mb-2 uppercase tracking-wider text-[11px]">
              Intercity Service Areas
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {BRAND.intercityAreas.map((city) => (
                <span
                  key={city}
                  className="px-2.5 py-1 rounded-full bg-[#0071e3]/10 dark:bg-white/10 border border-[#0071e3]/30 dark:border-white/20 text-[11px] font-semibold text-[#0071e3] dark:text-[#2997ff]"
                >
                  {city}
                </span>
              ))}
            </div>

            <h5 className="text-[#86868b] font-medium text-[10px] uppercase tracking-wider mb-1.5">
              Udaipur Localities
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {neighborhoods.map((area, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full bg-white dark:bg-[#161617] border border-[#d2d2d7] dark:border-white/10 text-[10px] text-[#86868b]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#86868b] text-[11px]">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. Authorized Service Partner for TCL, Atomberg, AKAI, Amstrad, and Sharp.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors font-normal"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
