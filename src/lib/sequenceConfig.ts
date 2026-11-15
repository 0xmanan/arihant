// Sequence frame mapping using the user's supplied assets

function linspace(start: number, stop: number, num: number): number[] {
  const step = (stop - start) / (num - 1);
  return Array.from({ length: num }, (_, i) => Math.round(start + step * i));
}

// 60 frames: Assembled (240) -> Exploding -> Peak Exploded View (1)
const explodeDown = linspace(240, 1, 60);

// 60 frames: Peak Exploded View (1) -> Reassembling -> Assembled (240)
const assembleUp = linspace(1, 240, 60);

// Combined 120-frame seamless cinematic loop
export const SEQUENCE_FRAME_NUMBERS = [...explodeDown, ...assembleUp];

export const TOTAL_FRAMES = SEQUENCE_FRAME_NUMBERS.length; // 120

export function getFramePath(frameIndex: number): string {
  const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));
  const originalFrameNumber = SEQUENCE_FRAME_NUMBERS[clampedIndex];
  const padded = String(originalFrameNumber).padStart(3, "0");
  return `/sequence/ezgif-frame-${padded}.jpg`;
}

// Key storytelling phases mapped to scroll progress (0.0 to 1.0)
export const STORY_PHASES = [
  {
    phase: 1,
    range: [0.0, 0.18],
    tagline: "ARIHANT ELECTRONICS & ELECTRICALS",
    title: "Technology Deserves Expert Care",
    subtitle:
      "Professional repair, installation, and maintenance solutions for the electronics and home appliances you depend on every single day.",
    badge: "Official Service Center • Udaipur",
  },
  {
    phase: 2,
    range: [0.20, 0.48],
    tagline: "ENGINEERING & EXPERTISE",
    title: "Precision Behind Every Repair",
    subtitle:
      "Every electronic device is a complex engineering system. Our approach focuses on accurate diagnosis, component-level micro-repair, and OEM-calibrated restoration.",
    badge: "Exploded Engineering Architecture",
  },
  {
    phase: 3,
    range: [0.50, 0.72],
    tagline: "COMPREHENSIVE APPLIANCE CARE",
    title: "Engineered Care for Every Appliance",
    subtitle:
      "From high-refresh LED displays to inverter cooling systems, washing machines, and water purifiers—we deliver manufacturer-grade technical precision.",
    badge: "6 Specialized Appliance Divisions",
  },
  {
    phase: 4,
    range: [0.74, 0.88],
    tagline: "AUTHORIZED SERVICE PARTNERS",
    title: "Trusted Technology. Professional Care.",
    subtitle:
      "Proud authorized service partner for TCL, Atomberg, AKAI, Amstrad, and Sharp. Verified technical standards and genuine OEM replacement parts.",
    badge: "5 Leading Global Brands",
  },
  {
    phase: 5,
    range: [0.90, 1.0],
    tagline: "REASSEMBLED PERFECTION",
    title: "Your Appliances. Our Expertise.",
    subtitle:
      "Professional care for the technology that makes your everyday life better. Reliable service, transparent pricing, every single time.",
    badge: "Udaipur, Rajasthan • +91 9460804045",
  },
];
