import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-navbar.png";
const Footer = () => {
  const whatsappNumber = "5515997429824";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  return <footer className="bg-primary/80 text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Coluna Esquerda - Logo e Mapa */}
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <div>
              <img src={logo} alt="7 Marcenaria" className="h-32 w-auto" />
            </div>

            {/* Mapa */}
            <div className="rounded-lg overflow-hidden w-64 h-64 shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5!2d-47.5!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzAwLjAiUyA0N8KwMzAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização 7 Marcenaria" />
            </div>
          </div>

          {/* Coluna Direita - Informações */}
          <div className="space-y-8">
            {/* Contatos */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent mb-4">Contatos</h3>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-light">(31) 99678-7569</span>
              </a>
            </div>

            {/* Endereço */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent mb-4">Endereço</h3>
              <div className="inline-flex items-start gap-3 text-primary-foreground/90">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="font-light leading-relaxed">
                  R. Rosa Maria de Oliveira, 401<br />
                  Jardim Zulmira
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