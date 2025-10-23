import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroVideo from "@/assets/hero-background.mp4";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para móveis sob medida.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.log('Video failed to load, hiding element');
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Triad Marcenaria" 
              className="h-40 md:h-52 lg:h-64 w-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-primary-foreground tracking-tight leading-tight">
            Móveis sob medida com{" "}
            <span className="font-semibold text-accent">design e exclusividade</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light max-w-2xl mx-auto leading-relaxed">
            Projetos personalizados, acabamento premium e sofisticação em cada detalhe
          </p>

          <div className="pt-6">
            <Button 
              size="lg"
              asChild
              variant="success"
              className="font-medium text-lg px-12 py-7 rounded-none shadow-accent transition-all duration-300 hover:scale-105"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-6 w-6" />
                Solicite seu orçamento
              </a>
            </Button>
          </div>

          <div className="pt-12">
            <p className="text-sm text-primary-foreground/80 font-light tracking-wide uppercase">
              Mais de 10 anos de experiência em marcenaria de alto padrão
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
