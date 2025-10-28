import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Star,
  Award
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      info: "(41) 99678-7569",
      description: "Atendimento de segunda a sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "tgondarski@yahoo.com",
      description: "Respondemos em até 24 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua Zilda Arns Neumann, 1033 Roça Grande - Colombo PR",
      description: "Atendendo todo o estado do Paraná, Santa Catarina e algumas regiões do estado de São Paulo"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 8h às 18h",
      description: "Sábados: 8h às 12h"
    }
  ];

  const projectTypes = [
    "Cozinha Sob Medida",
    "Banheiro Premium",
    "Quarto e Closet",
    "Escritório Corporativo",
    "Sala e Ambientes",
    "Biblioteca e Estantes",
    "Projeto Completo",
    "Outro"
  ];

  return (
    <section className="py-24 bg-warm-brown">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary">
            SOLICITE SEU ORÇAMENTO
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Entre em Contato
          </h2>
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-yellow-500 fill-current mr-2" />
            <span className="text-2xl font-bold text-primary">MELHOR PREÇO DA REGIÃO!</span>
            <Star className="h-8 w-8 text-yellow-500 fill-current ml-2" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar seu espaço? Solicite um orçamento gratuito e 
            sem compromisso. Nossa equipe especializada está pronta para ajudar você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">
                Solicite seu Orçamento Gratuito
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input 
                      placeholder="Seu nome completo" 
                      required 
                      className="border-muted-foreground/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone *
                    </label>
                    <Input 
                      placeholder="(11) 99999-9999" 
                      required 
                      className="border-muted-foreground/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="border-muted-foreground/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Projeto *
                  </label>
                  <Select>
                    <SelectTrigger className="border-muted-foreground/20">
                      <SelectValue placeholder="Selecione o tipo de projeto" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type, index) => (
                        <SelectItem key={index} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea 
                    placeholder="Descreva seu projeto, necessidades e preferências..."
                    rows={4}
                    required
                    className="border-muted-foreground/20"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Orçamento Sem Compromisso
                </Button>

                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Orçamento gratuito e sem compromisso</span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((contact, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {contact.info}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp CTA */}
            <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-green-100">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  FALAR COM A TRIAD MARCENARIA PELO WHATSAPP
                </h3>
                <p className="text-green-700 mb-4">
                  Resposta rápida e atendimento personalizado
                </p>
                <Button 
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold"
                >
                  <a 
                    href="https://wa.me/5541996787569?text=Olá! Gostaria de solicitar um orçamento para móveis sob medida."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Abrir WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Garantia de Qualidade
                </h3>
                <p className="text-muted-foreground text-sm">
                  Garantia de 2 anos em todos os móveis e instalação profissional incluída
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
