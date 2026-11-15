import Navbar from "@/components/Navbar";
import AppleHero from "@/components/AppleHero";
import SalesSection from "@/components/SalesSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import AuthorizedPartners from "@/components/AuthorizedPartners";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceProcess from "@/components/ServiceProcess";
import DiagnosticAssistant from "@/components/DiagnosticAssistant";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] selection:bg-[#0071e3] selection:text-white transition-colors duration-200">
      {/* Navigation with Theme Switcher */}
      <Navbar />

      {/* Hero: ARIHANT ELECTRONICS & ELECTRICALS (Prominent & Themed) */}
      <AppleHero />

      {/* Authorized Service: Fast Doorstep Repair Across Udaipur */}
      <ServicesShowcase />

      {/* Sales Showroom: Buy New Appliances with Official Warranty */}
      <SalesSection />

      {/* Authorized Service Partners (TCL, Atomberg, AKAI, Amstrad, Sharp) */}
      <AuthorizedPartners />

      {/* About Arihant & 15+ Years Legacy */}
      <AboutSection />

      {/* Why Choose Arihant & Honest Comparison */}
      <WhyChooseUs />

      {/* 4-Step Technical Workflow */}
      <ServiceProcess />

      {/* Simple Diagnostic Assistant */}
      <DiagnosticAssistant />

      {/* Contact, Location & Instant Request */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </main>
  );
}
