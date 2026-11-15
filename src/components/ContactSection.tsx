"use client";

import { useState } from "react";
import { BRAND, APPLIANCE_CATEGORIES } from "@/lib/constants";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Check,
  ShoppingBag,
  Wrench,
} from "lucide-react";

export default function ContactSection() {
  const [inquiryType, setInquiryType] = useState<"sales" | "service">("service");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    appliance: APPLIANCE_CATEGORIES[0].title,
    brand: "TCL",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const intent = inquiryType === "sales" ? "BUY NEW APPLIANCE" : "REPAIR / SERVICE VISIT";
    const message = `Hello Arihant Electronics, I would like to inquire from Udaipur:%0A%0A*Request Type:* ${intent}%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Appliance:* ${formData.appliance}%0A*Brand:* ${formData.brand}%0A*Details:* ${formData.note || "Please share details & schedule visit"}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(
        `https://wa.me/${BRAND.whatsappNumber}?text=${message}`,
        "_blank"
      );
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] border-t border-[#d2d2d7] dark:border-white/10 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#86868b] mb-3">
            Contact &amp; Showroom Desk
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-4">
            Connect with Arihant. <br />
            <span className="font-semibold text-[#86868b]">We are right here in Udaipur.</span>
          </h2>
          <p className="text-base sm:text-[17px] text-[#86868b] leading-[1.47]">
            Visit our showroom for brand-new appliances or contact our service desk for fast home technician visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Maps */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[28px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/80 dark:border-white/10 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                Authorized Sales &amp; Service Hub
              </div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mb-1">
                {BRAND.name}
              </h3>
              <p className="text-xs text-[#86868b] mb-6">
                Director: <strong className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold">{BRAND.owner}</strong>
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-[#86868b]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium block">Showroom &amp; Service Center</span>
                    <a
                      href={BRAND.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
                    >
                      {BRAND.address}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium block">Direct Phone Numbers</span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-medium pt-0.5">
                      <a href={`tel:${BRAND.phoneRaw}`} className="text-[#0071e3] dark:text-[#2997ff] hover:underline">
                        {BRAND.phone}
                      </a>
                      <span className="text-[#86868b]">•</span>
                      <a href={`tel:${BRAND.phoneSecondaryRaw}`} className="text-[#0071e3] dark:text-[#2997ff] hover:underline">
                        {BRAND.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium block">Showroom Hours</span>
                    <span>{BRAND.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Intercity Coverage Badge */}
              <div className="mt-5 p-3.5 rounded-2xl bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7]/70 dark:border-white/10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f5f5f7] block mb-1.5">
                  Intercity Doorstep Coverage
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {BRAND.intercityAreas.map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-0.5 rounded-full bg-white dark:bg-[#161617] border border-[#d2d2d7] dark:border-white/15 text-[11px] font-medium text-[#1d1d1f] dark:text-[#f5f5f7]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#d2d2d7] dark:border-white/10 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex-1 py-2.5 rounded-full border border-[#d2d2d7] dark:border-white/20 hover:border-[#1d1d1f] text-[#1d1d1f] dark:text-[#f5f5f7] text-xs font-normal text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
                  <span>Call {BRAND.phone}</span>
                </a>
                <a
                  href={`tel:${BRAND.phoneSecondaryRaw}`}
                  className="flex-1 py-2.5 rounded-full border border-[#d2d2d7] dark:border-white/20 hover:border-[#1d1d1f] text-[#1d1d1f] dark:text-[#f5f5f7] text-xs font-normal text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
                  <span>Call {BRAND.phoneSecondary}</span>
                </a>
              </div>
              <div className="mt-2.5">
                <a
                  href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Arihant Electronics, I would like to connect for sales / service in Udaipur."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-normal text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Maps Embed */}
            <div className="rounded-[28px] overflow-hidden border border-[#d2d2d7]/80 dark:border-white/10 bg-white dark:bg-[#161617] shadow-sm">
              <div className="p-4 flex items-center justify-between border-b border-[#d2d2d7] dark:border-white/10 text-xs">
                <div>
                  <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium block">
                    Showroom &amp; Service Center Location
                  </span>
                  <span className="text-[11px] text-[#86868b]">Sector 8, Tilak Nagar, Udaipur</span>
                </div>
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0071e3] dark:text-[#2997ff] hover:underline font-medium text-xs flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <span>→</span>
                </a>
              </div>
              <iframe
                title="Arihant Electronics Sector 8 Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.7773229616233!2d73.708356!3d24.558459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef030e5e8075%3A0x60d9993621d8887!2sTCL%20Authorized%20company%20service%20center!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#f5f5f7] dark:bg-black/50 border-t border-[#d2d2d7] dark:border-white/10 flex items-center justify-between text-[11px] text-[#86868b] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
              >
                <span className="truncate">34, Tilak Nagar, Near Ganpati Apartment, Sector 8</span>
                <span className="font-semibold flex-shrink-0 ml-2">Get Directions →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form for Sales & Service */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[28px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/80 dark:border-white/10 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                Instant Request
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mb-2">
                Send an Inquiry or Book a Visit
              </h3>
              <p className="text-xs sm:text-sm text-[#86868b] mb-6">
                Tell us whether you want to purchase a new appliance or need a repair visit.
              </p>

              {/* Inquiry Type Toggle (Apple Style Pills) */}
              <div className="grid grid-cols-2 gap-2 p-1.5 rounded-full bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7] dark:border-white/15 mb-6">
                <button
                  type="button"
                  onClick={() => setInquiryType("service")}
                  className={`py-2 px-3 rounded-full text-xs sm:text-[13px] font-normal flex items-center justify-center gap-2 transition-all ${
                    inquiryType === "service"
                      ? "bg-[#0071e3] text-white shadow-sm font-medium"
                      : "text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]"
                  }`}
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Book Repair Service</span>
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType("sales")}
                  className={`py-2 px-3 rounded-full text-xs sm:text-[13px] font-normal flex items-center justify-center gap-2 transition-all ${
                    inquiryType === "sales"
                      ? "bg-[#0071e3] text-white shadow-sm font-medium"
                      : "text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]"
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Buy New Appliance</span>
                </button>
              </div>

              {submitted ? (
                <div className="p-8 rounded-[22px] bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7] dark:border-white/20 text-center animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-[#0071e3] text-white flex items-center justify-center mx-auto mb-3">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1">Inquiry Sent!</h4>
                  <p className="text-xs text-[#86868b] max-w-sm mx-auto mb-5">
                    Thank you, {formData.name}. Opening WhatsApp with your details so our team can immediately confirm with you...
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-medium text-[#0071e3] dark:text-[#2997ff] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Mehta"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7] dark:border-white/15 text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b]/60 text-xs sm:text-sm focus:outline-none focus:border-[#0071e3] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9460804045"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7] dark:border-white/15 text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b]/60 text-xs sm:text-sm focus:outline-none focus:border-[#0071e3] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1.5">
                        Appliance Category *
                      </label>
                      <select
                        value={formData.appliance}
                        onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7] dark:border-white/15 text-[#1d1d1f] dark:text-[#f5f5f7] text-xs sm:text-sm focus:outline-none focus:border-[#0071e3] transition-colors"
                      >
                        {APPLIANCE_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.title} className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]">
                            {cat.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1.5">
                        Brand Preference *
                      </label>
                      <select
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7] dark:border-white/15 text-[#1d1d1f] dark:text-[#f5f5f7] text-xs sm:text-sm focus:outline-none focus:border-[#0071e3] transition-colors"
                      >
                        <option value="TCL" className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]">TCL (Authorized Partner - All Products)</option>
                        <option value="Atomberg" className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]">Atomberg (Authorized Partner - Water Purifier)</option>
                        <option value="AKAI" className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]">AKAI (Authorized Partner - All Products)</option>
                        <option value="Amstrad" className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]">Amstrad (Authorized Partner - All Products)</option>
                        <option value="Sharp" className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]">Sharp (Authorized Partner - All Products)</option>
                        <option value="Samsung" className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]">Samsung</option>
                        <option value="LG" className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]">LG</option>
                        <option value="Other Brand" className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]">Other Brand</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-1.5">
                      {inquiryType === "sales" ? "Model or Screen Size Preference (Optional)" : "Describe the Problem (Optional)"}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={
                        inquiryType === "sales"
                          ? "e.g. Looking for 55-inch 4K QLED TV or 1.5 Ton Inverter AC with best price..."
                          : "e.g. Sound is working but screen is dark, need technician today..."
                      }
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7] dark:border-white/15 text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b]/60 text-xs sm:text-sm focus:outline-none focus:border-[#0071e3] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-normal transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>

                  <div className="text-[11px] text-center text-[#86868b]">
                    Direct Phones: <a href={`tel:${BRAND.phoneRaw}`} className="text-[#0071e3] dark:text-[#2997ff] hover:underline font-medium">{BRAND.phone}</a> • <a href={`tel:${BRAND.phoneSecondaryRaw}`} className="text-[#0071e3] dark:text-[#2997ff] hover:underline font-medium">{BRAND.phoneSecondary}</a> • Sector 8, Udaipur
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
