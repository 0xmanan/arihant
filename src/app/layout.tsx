import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/lib/constants";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: `${BRAND.name} | Authorized Electronics Sales & Service Center Udaipur`,
  description:
    "Official Authorized Service Partner & Sales Center in Udaipur for TCL, Atomberg, AKAI, Amstrad, and Sharp. Buy brand new LED TVs, ACs, Refrigerators, Washing Machines, Water Purifiers & Air Purifiers. Fast doorstep service and genuine parts.",
  keywords: [
    "Arihant Electronics Udaipur",
    "Authorized Service Partner Udaipur",
    "TCL Authorized Service Center Udaipur",
    "Atomberg Water Purifier Service Udaipur",
    "AKAI Authorized Service Center Udaipur",
    "Amstrad AC Service Udaipur",
    "Sharp Air Purifier Service Udaipur",
    "LED TV Repair in Udaipur",
    "Buy LED TV in Udaipur",
    "AC Repair in Udaipur",
    "Buy AC in Udaipur",
    "Washing Machine Repair Udaipur",
    "Refrigerator Repair Udaipur",
    "Water Purifier RO Service Udaipur",
    "Air Purifier Repair Udaipur",
    "Vikas Jain Arihant Electronics",
  ],
  authors: [{ name: BRAND.owner }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  openGraph: {
    title: `${BRAND.name} — Udaipur, Rajasthan`,
    description:
      "Authorized Sales & Service Center for TCL, Atomberg, AKAI, Amstrad & Sharp in Udaipur.",
    url: "https://arihantelectronics.in",
    siteName: BRAND.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    "name": BRAND.name,
    "telephone": [BRAND.phone, BRAND.phoneSecondary],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address,
      "addressLocality": BRAND.city,
      "addressRegion": BRAND.state,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.5854,
      "longitude": 73.7125,
    },
    "founder": {
      "@type": "Person",
      "name": BRAND.owner,
    },
    "areaServed": BRAND.intercityAreas,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
