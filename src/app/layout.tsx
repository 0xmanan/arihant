import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND } from "@/lib/constants";
import { ThemeProvider } from "@/context/ThemeContext";
import { FAQS } from "@/lib/faqs";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: "Arihant Electronics & Electricals | Authorized Sales & Service Udaipur",
    template: "%s | Arihant Electronics & Electricals Udaipur",
  },
  description:
    "Arihant Electronics & Electricals Udaipur — Official Authorized Service Partner & Sales Showroom for TCL, Atomberg, AKAI, Amstrad & Sharp. 25+ years trusted experience. Doorstep repair for LED TV, AC, Fridge, Washing Machine & Purifiers across Udaipur, Rajsamand, Banswara, Dungarpur, and Gogunda.",
  keywords: [
    "Arihant",
    "Arihant Electronics",
    "Arihant Electricals",
    "Arihant Electronics Udaipur",
    "Arihant Udaipur",
    "Arihant Electronics & Electricals",
    "Arihant service center",
    "Arihant showroom",
    "Arihant TV repair",
    "Arihant AC repair",
    "Arihant washing machine repair",
    "Arihant refrigerator repair",
    "Arihant RO water purifier",
    "Arihant Sector 8 Udaipur",
    "Arihant Tilak Nagar Udaipur",
    "Vikas Jain Arihant",
    "Vikas Jain Arihant Electronics Udaipur",
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
    "Electronics Repair Rajsamand",
    "Electronics Repair Banswara",
    "Electronics Repair Dungarpur",
  ],
  authors: [{ name: BRAND.owner, url: BRAND.siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
  applicationName: "Arihant Electronics",
  category: "Electronics Sales and Repair Services",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  openGraph: {
    title: "Arihant Electronics & Electricals — Authorized Sales & Service Udaipur",
    description:
      "Official Authorized Service Partner for TCL, Atomberg, AKAI, Amstrad & Sharp in Udaipur. 25+ Years of trusted doorstep repair and genuine appliance sales.",
    url: BRAND.siteUrl,
    siteName: "Arihant Electronics & Electricals",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-appliances.jpg",
        width: 1200,
        height: 675,
        alt: "Arihant Electronics & Electricals Udaipur",
      },
      {
        url: "/logo-dark.jpg",
        width: 800,
        height: 800,
        alt: "Arihant Electronics Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arihant Electronics & Electricals Udaipur",
    description:
      "Authorized Sales & Service Center for TCL, Atomberg, AKAI, Amstrad & Sharp. 25+ Years Experience.",
    images: ["/hero-appliances.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ElectronicsStore", "HomeGoodsStore", "LocalBusiness"],
        "@id": `${BRAND.siteUrl}/#localbusiness`,
        name: BRAND.name,
        alternateName: [
          "Arihant",
          "Arihant Electronics",
          "Arihant Electricals",
          "Arihant Electronics Udaipur",
          "Arihant Sales and Service Center",
        ],
        url: BRAND.siteUrl,
        logo: `${BRAND.siteUrl}/logo-dark.jpg`,
        image: `${BRAND.siteUrl}/hero-appliances.jpg`,
        hasMap: BRAND.googleMapsUrl,
        telephone: [BRAND.phone, BRAND.phoneSecondary],
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
        address: {
          "@type": "PostalAddress",
          streetAddress: BRAND.address,
          addressLocality: BRAND.city,
          addressRegion: BRAND.state,
          postalCode: "313002",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 24.558459,
          longitude: 73.710545,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:30",
            closes: "20:30",
          },
        ],
        founder: {
          "@type": "Person",
          name: BRAND.owner,
          jobTitle: "Founder & Director",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "385",
          bestRating: "5",
          worstRating: "1",
        },
        areaServed: BRAND.intercityAreas.map((city) => ({
          "@type": "City",
          name: city,
        })),
        brand: [
          { "@type": "Brand", name: "TCL" },
          { "@type": "Brand", name: "Atomberg" },
          { "@type": "Brand", name: "AKAI" },
          { "@type": "Brand", name: "Amstrad" },
          { "@type": "Brand", name: "Sharp" },
        ],
        sameAs: [
          BRAND.googleMapsUrl,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BRAND.siteUrl}/#website`,
        url: BRAND.siteUrl,
        name: "Arihant Electronics & Electricals",
        publisher: {
          "@id": `${BRAND.siteUrl}/#localbusiness`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${BRAND.siteUrl}/#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Geo Meta Tags for Google Local Search */}
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Udaipur, Rajasthan, India" />
        <meta name="geo.position" content="24.558459;73.710545" />
        <meta name="ICBM" content="24.558459, 73.710545" />

        {/* Structured Data (JSON-LD Rich Snippets) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
