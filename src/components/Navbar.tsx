import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-navbar.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "5541996787569";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de mais informações.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "sobre" },
    { label: "Serviços", id: "servicos" },
    { label: "Diferenciais", id: "diferenciais" },
    { label: "Processo", id: "processo" },
    { label: "Portfólio", id: "portfolio" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Triad Marcenaria" 
              className="h-24 md:h-28 lg:h-32 w-auto cursor-pointer transition-opacity hover:opacity-80"
              onClick={() => scrollToSection("hero")}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium relative group transition-colors ${
                  isScrolled 
                    ? 'text-foreground/70 hover:text-accent' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-accent' : 'bg-white'
                }`}></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              asChild
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                isScrolled 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
              }`}
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'hover:bg-muted' 
                : 'hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 space-y-2 border-t border-border bg-white/95 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-sm text-foreground/70 hover:text-accent hover:bg-muted transition-colors font-medium rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <Button 
                asChild
                className="w-full bg-green-600 text-white hover:bg-green-700 rounded-full"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mr-2" />
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
