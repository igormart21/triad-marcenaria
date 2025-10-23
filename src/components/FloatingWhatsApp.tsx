import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const FloatingWhatsApp = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <Button
      asChild
      size="lg"
      variant="success"
      className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full shadow-accent p-0 transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full"
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="h-9 w-9"
        />
      </a>
    </Button>
  );
};

export default FloatingWhatsApp;
