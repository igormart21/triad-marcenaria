import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Award, 
  Calendar, 
  Target,
  Quote,
  Star,
  CheckCircle,
  Heart
} from "lucide-react";
import founderPhoto from "@/assets/enhanced_PHOTO-2025-10-27-14-52-53.png";

const FounderSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "29 anos de experiência",
      description: "No mercado de móveis sob medida e marcenaria artesanal"
    },
    {
      icon: Target,
      title: "Especialista em Design",
      description: "Formação em design de interiores e arquitetura"
    },
    {
      icon: CheckCircle,
      title: "Certificações Técnicas",
      description: "Certificado em técnicas avançadas de marcenaria"
    },
    {
      icon: Heart,
      title: "Paixão pela Excelência",
      description: "Comprometido com a qualidade e satisfação dos clientes"
    }
  ];

  const values = [
    "Qualidade acima de tudo",
    "Transparência no atendimento",
    "Inovação constante",
    "Compromisso com prazos",
    "Satisfação garantida",
    "Trabalho artesanal"
  ];

  return (
    <section className="py-24 bg-warm-brown">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary">
            CONHEÇA O FUNDADOR
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Por trás da Triad Marcenaria está{" "}
            <span className="font-semibold text-primary">um profissional dedicado</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Um profissional com 29 anos de experiência no mercado de móveis sob medida, 
            sempre comprometido com a excelência e satisfação dos clientes.
          </p>
        </div>

        {/* Founder Profile */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Photo and Basic Info */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="w-72 h-72 mx-auto lg:mx-0 mb-6">
                <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-primary via-primary/80 to-amber-800 shadow-2xl">
                  <div className="w-full h-full rounded-full ring-4 ring-amber-900/20 shadow-inner">
                    <Avatar className="w-full h-full border-4 border-warm-brown/40 shadow-xl">
                      <AvatarImage src={founderPhoto} alt="Thiago Ferreira - Fundador da Triad Marcenaria" className="object-cover" />
                      <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
                        TF
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-semibold text-foreground mb-2">
                Thiago Ferreira
              </h3>
              <p className="text-xl text-primary font-medium mb-4">
                Administrador e Fundador
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Fundado desde 2015 em Colombo PR</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Fundado desde 2011 em São Paulo</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg italic text-foreground mb-4">
                  "Nossa missão é transformar sonhos em realidade através da beleza e 
                  funcionalidade dos móveis sob medida, sempre com excelência e transparência."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Thiago Ferreira, Fundador da Triad Marcenaria
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio and Achievements */}
          <div className="space-y-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  Sobre a Triad Marcenaria
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Triad Marcenaria nasceu em São Paulo, iniciando sua jornada no mercado de 
                  móveis sob medida com a missão de oferecer qualidade e excelência.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Com 29 anos de experiência no mercado de móveis sob medida, 
                  Thiago Ferreira é o responsável por transformar a Triad Marcenaria em 
                  uma referência de qualidade e confiança na região.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sua paixão pela excelência e atenção aos detalhes garantem que cada 
                  projeto seja executado com o mais alto padrão de qualidade, sempre 
                  priorizando a satisfação e confiança dos clientes.
                </p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-foreground">
                Suas Conquistas
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start p-4 bg-muted/30 rounded-lg">
                    <achievement.icon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Valores que Guiam o Trabalho
              </h3>
              <p className="text-muted-foreground">
                Os princípios que orientam cada projeto e cada decisão na Triad Marcenaria
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center p-3 bg-background rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Converse diretamente com o fundador sobre seu projeto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999?text=Olá! Gostaria de conversar sobre um projeto de móveis sob medida."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
                Falar com a Triad
            </a>
            <a 
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ver Projetos Realizados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
