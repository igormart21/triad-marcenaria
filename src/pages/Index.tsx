import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import FounderSection from "@/components/FounderSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* About Section */}
      <div id="sobre">
        <AboutSection />
      </div>

      {/* Services Section */}
      <div id="servicos">
        <ServicesSection />
      </div>

      {/* Differentials Section */}
      <div id="diferenciais">
        <DifferentialsSection />
      </div>

      {/* Process Section */}
      <div id="processo">
        <ProcessSection />
      </div>

      {/* Stats Section */}
      <div id="numeros">
        <StatsSection />
      </div>

      {/* Founder Section */}
      <div id="fundador">
        <FounderSection />
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <PortfolioSection />
      </div>

      {/* Testimonials Section */}
      <div id="depoimentos">
        <TestimonialsSection />
      </div>

      {/* Contact Section */}
      <div id="contato">
        <ContactSection />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
