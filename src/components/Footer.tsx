import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-navbar.png";
const Footer = () => {
  const whatsappNumber = "5541996787569";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  return <footer className="bg-primary/80 text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Coluna Esquerda - Logo e Mapa */}
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <div>
              <img src={logo} alt="7 Marcenaria" className="h-40 w-auto" />
            </div>

            {/* Mapa */}
            <div className="rounded-lg overflow-hidden w-64 h-64 shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.138505116119!2d-49.21288902422373!3d-25.29348832971484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dceb6daa5e5f9f%3A0x1b3c6e3b4c5d6e7f!2sRua%20Zilda%20Arns%20Neumann%2C%201033%20-%20Ro%C3%A7a%20Grande%2C%20Colombo%20-%20PR%2C%2083404-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Triad Marcenaria" />
            </div>
          </div>

          {/* Coluna Direita - Informações */}
          <div className="space-y-8">
            {/* Contatos */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent mb-4">Contatos</h3>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-light">(41) 99678-7569</span>
              </a>
              <a href="mailto:tgondarski@yahoo.com" className="inline-flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                <span className="font-light">tgondarski@yahoo.com</span>
              </a>
            </div>

            {/* Endereço */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent mb-4">Endereço</h3>
              <div className="inline-flex items-start gap-3 text-primary-foreground/90">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="font-light leading-relaxed">
                  Rua Zilda Arns Neumann, 1033<br />
                  Roça Grande - Colombo PR
                </p>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group" aria-label="Facebook">
                  <Facebook className="h-6 w-6 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
                </a>
                <a href="https://www.instagram.com/triad_marcenaria?utm_source=qr&igsh=MWgyaHk1NTVyMHkydw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group" aria-label="Instagram">
                  <Instagram className="h-6 w-6 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright e Links */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70 font-light">
              © 2025 7 Marcenaria. Todos os direitos reservados.
            </p>
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-light">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;