import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="diferenciais">
        <DifferentialsSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <div id="contato">
        <CTASection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
