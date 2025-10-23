import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ctaVideo from "@/assets/cta-background.mp4";

const CTASection = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de receber um orçamento exclusivo para meu projeto.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative py-32 overflow-hidden">
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
          <source src={ctaVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/85 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-light text-primary-foreground mb-8 leading-tight">
            Transforme seu espaço com{" "}
            <span className="font-semibold text-accent">móveis sob medida</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Entre em contato e receba um orçamento exclusivo para seu projeto
          </p>

          <Button 
            size="lg"
            asChild
            variant="success"
            className="font-medium text-lg px-12 py-7 rounded-none shadow-accent transition-all duration-300 hover:scale-105"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-6 w-6" />
              Fale conosco no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
