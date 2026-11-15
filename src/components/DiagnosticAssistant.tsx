"use client";

import { useState } from "react";
import { BRAND } from "@/lib/constants";
import { HelpCircle, Check, MessageCircle, Phone, Sparkles } from "lucide-react";

interface DiagnosticOption {
  appliance: string;
  symptoms: {
    label: string;
    probableCause: string;
    resolution: string;
  }[];
}

const SIMPLE_DIAGNOSTIC_DATA: DiagnosticOption[] = [
  {
    appliance: "LED TV",
    symptoms: [
      {
        label: "Sound is coming clearly, but the screen is completely black",
        probableCause: "The internal LED backlight strip has worn out.",
        resolution: "Technician replaces the backlight with original company LED strips at your home.",
      },
      {
        label: "Lines appearing on the screen or picture is flickering",
        probableCause: "Display panel connection or display board issue.",
        resolution: "Clean inspection and genuine display board repair with warranty.",
      },
      {
        label: "TV stuck on brand logo or keeps turning on and off",
        probableCause: "Software update needed or power supply board fault.",
        resolution: "Official software reload or original power board replacement.",
      },
    ],
  },
  {
    appliance: "Air Conditioner (AC)",
    symptoms: [
      {
        label: "AC fan is running, but air is not cold enough",
        probableCause: "Cooling gas is low, or filters have thick dust accumulation.",
        resolution: "High-pressure jet wash service and eco-friendly gas refill.",
      },
      {
        label: "Water is dripping or leaking inside the room",
        probableCause: "The indoor water drain pipe is blocked with dust.",
        resolution: "Complete drain line cleaning and tray alignment.",
      },
      {
        label: "Outdoor unit is making loud vibrating sound or tripping breaker",
        probableCause: "Fan motor or compressor electrical sensor issue.",
        resolution: "On-site electrical testing and genuine part replacement.",
      },
    ],
  },
  {
    appliance: "Refrigerator",
    symptoms: [
      {
        label: "Freezer is making ice, but the lower compartment is not cooling",
        probableCause: "Defrost sensor or cold air circulation fan has stopped.",
        resolution: "Quick on-site replacement of defrost sensor or fan motor.",
      },
      {
        label: "Compressor clicks every few minutes but doesn't start",
        probableCause: "Compressor starter relay has worn out.",
        resolution: "Direct replacement of original starter relay with warranty.",
      },
      {
        label: "Excessive ice forming around the freezer door",
        probableCause: "Rubber door seal has loosened and outside air is getting in.",
        resolution: "Door gasket seal replacement to make it completely airtight.",
      },
    ],
  },
  {
    appliance: "Washing Machine",
    symptoms: [
      {
        label: "Machine vibrates heavily or makes loud banging during spin cycle",
        probableCause: "Drum shock absorbers or bearings have worn out.",
        resolution: "Drum balancing and new genuine shock absorber replacement.",
      },
      {
        label: "Water remains in the tub and will not drain out",
        probableCause: "Drain filter has coin/cloth blockage or drain pump is stuck.",
        resolution: "Filter clearing and drain pump check by technician.",
      },
      {
        label: "Machine does not start or buttons do not respond",
        probableCause: "Door safety lock switch or main control circuit issue.",
        resolution: "Door lock switch check or circuit repair with original parts.",
      },
    ],
  },
  {
    appliance: "Water Purifier (RO)",
    symptoms: [
      {
        label: "Purified water output is very slow or has completely stopped",
        probableCause: "Sediment filter or RO membrane is clogged with impurities.",
        resolution: "Filter change and genuine high-flow RO membrane replacement.",
      },
      {
        label: "Water taste has changed or TDS level is too high",
        probableCause: "Mineral filter exhausted or membrane needs replacement.",
        resolution: "Complete TDS testing and fresh mineral cartridge recharge.",
      },
      {
        label: "Booster pump runs constantly without stopping",
        probableCause: "Automatic cut-off valve or pressure switch issue.",
        resolution: "Solenoid valve replacement and pump pressure tuning.",
      },
    ],
  },
  {
    appliance: "Air Purifier",
    symptoms: [
      {
        label: "Air quality indicator ring stays red for hours",
        probableCause: "HEPA filter is full of dust or sensor is dusty.",
        resolution: "Genuine True HEPA filter replacement and dust sensor cleaning.",
      },
      {
        label: "Blower fan makes unusual noise or airflow is weak",
        probableCause: "Dust buildup inside fan wheel or motor.",
        resolution: "Internal cleaning and silent motor lubrication.",
      },
      {
        label: "Unpleasant odor coming from the purified air",
        probableCause: "Activated carbon filter has reached its lifespan.",
        resolution: "Original carbon filter renewal for fresh odor-free air.",
      },
    ],
  },
];

export default function DiagnosticAssistant() {
  const [selectedApplianceIdx, setSelectedApplianceIdx] = useState<number>(0);
  const [selectedSymptomIdx, setSelectedSymptomIdx] = useState<number>(0);

  const activeAppliance = SIMPLE_DIAGNOSTIC_DATA[selectedApplianceIdx];
  const activeSymptom = activeAppliance.symptoms[selectedSymptomIdx];

  const whatsappMessage = `Hello Arihant Electronics, I checked your online diagnostic for my ${activeAppliance.appliance}. Issue: "${activeSymptom.label}". Please send a technician to inspect it in Udaipur.`;

  return (
    <section id="diagnostic" className="py-24 bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] border-t border-[#d2d2d7] dark:border-white/10 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#86868b] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff]" />
            <span>Self Help &amp; Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-4">
            Identify the issue in seconds. <br />
            <span className="font-semibold text-[#86868b]">Simple appliance assistant.</span>
          </h2>
          <p className="text-base sm:text-[17px] text-[#86868b] leading-[1.47]">
            Select what you are noticing to understand the simple cause and request a fast home visit in Udaipur.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-[28px] bg-white dark:bg-[#161617] border border-[#d2d2d7]/80 dark:border-white/10 shadow-sm">
          {/* Step 1: Select Appliance */}
          <div className="mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-3">
              Step 1: Choose Your Appliance
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {SIMPLE_DIAGNOSTIC_DATA.map((item, idx) => {
                const isSelected = idx === selectedApplianceIdx;
                return (
                  <button
                    key={item.appliance}
                    onClick={() => {
                      setSelectedApplianceIdx(idx);
                      setSelectedSymptomIdx(0);
                    }}
                    className={`p-3.5 rounded-full text-xs sm:text-[13px] font-normal border text-center transition-all ${
                      isSelected
                        ? "bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-black border-transparent font-medium shadow-sm"
                        : "bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] border-[#d2d2d7] dark:border-white/15 hover:border-[#86868b]"
                    }`}
                  >
                    {item.appliance}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Symptom */}
          <div className="mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-3">
              Step 2: What Are You Experiencing?
            </div>
            <div className="space-y-2">
              {activeAppliance.symptoms.map((sym, idx) => {
                const isSelected = idx === selectedSymptomIdx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedSymptomIdx(idx)}
                    className={`w-full text-left p-4 rounded-[18px] border text-xs sm:text-sm transition-all flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-white dark:bg-[#1d1d1f] border-[#0071e3] dark:border-[#2997ff] text-[#1d1d1f] dark:text-[#f5f5f7] shadow-sm font-medium"
                        : "bg-[#f5f5f7]/60 dark:bg-black/60 border-[#d2d2d7]/60 dark:border-white/10 text-[#86868b] hover:border-[#86868b]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-[#0071e3] dark:text-[#2997ff]" : "text-[#86868b]"}`} />
                      <span>{sym.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Assessment Output Card */}
          <div className="p-6 sm:p-7 rounded-[22px] bg-[#f5f5f7] dark:bg-black border border-[#d2d2d7] dark:border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div>
                  <span className="text-[11px] text-[#86868b] uppercase font-semibold">Probable Cause</span>
                  <p className="text-base sm:text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mt-0.5">
                    {activeSymptom.probableCause}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-[#86868b] uppercase font-semibold">How We Fix It</span>
                  <p className="text-xs sm:text-sm text-[#86868b] mt-0.5 leading-relaxed">
                    {activeSymptom.resolution}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-2.5 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#d2d2d7] dark:border-white/10 lg:pl-6">
                <a
                  href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-normal transition-all flex items-center justify-center gap-2 shadow-sm text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Technician on WhatsApp</span>
                </a>

                <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-[#86868b] pt-1">
                  <span>Call:</span>
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="text-[#0071e3] dark:text-[#2997ff] hover:underline"
                  >
                    {BRAND.phone}
                  </a>
                  <span>•</span>
                  <a
                    href={`tel:${BRAND.phoneSecondaryRaw}`}
                    className="text-[#0071e3] dark:text-[#2997ff] hover:underline"
                  >
                    {BRAND.phoneSecondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
