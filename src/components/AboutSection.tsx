import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, Heart, Shield, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-32 bg-warm-brown">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 text-accent border-accent/30">
            SOBRE A TRIAD MARCENARIA
          </Badge>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 tracking-tight">
            Transformando sonhos em{" "}
            <span className="font-medium text-accent">móveis únicos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Com mais de 10 anos de empresa no mercado, a Triad Marcenaria se consolidou 
            como referência em móveis sob medida, oferecendo soluções premium com o melhor 
            custo-benefício da região.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-medium text-center mb-16 text-foreground">
            Nossa História
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Calendar className="h-6 w-6 text-accent mr-3" />
                  <span className="text-2xl font-bold text-primary">2011</span>
                </div>
                <h4 className="text-xl font-medium mb-3 text-foreground">São Paulo</h4>
                <p className="text-muted-foreground leading-relaxed">
                  A Triad Marcenaria nasceu em São Paulo, iniciando sua jornada no mercado 
                  de móveis sob medida com a missão de oferecer qualidade e excelência.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Calendar className="h-6 w-6 text-accent mr-3" />
                  <span className="text-2xl font-bold text-primary">2017</span>
                </div>
                <h4 className="text-xl font-medium mb-3 text-foreground">Expansão Regional</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Acreditando no potencial da região, a Triad expandiu seus serviços, 
                  sendo pioneira em móveis sob medida de alto padrão, trazendo inovação 
                  e qualidade para novos mercados.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Calendar className="h-6 w-6 text-accent mr-3" />
                  <span className="text-2xl font-bold text-primary">Hoje</span>
                </div>
                <h4 className="text-xl font-medium mb-3 text-foreground">Referência Consolidada</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Consolidada como referência em móveis sob medida, materiais nacionais 
                  e importados, continuamos inovando e oferecendo o melhor custo-benefício 
                  da região.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-4 text-foreground">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformar ambientes com móveis únicos, combinando qualidade superior 
                e preços acessíveis, sempre superando as expectativas dos nossos clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-4 text-foreground">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como a melhor empresa de móveis sob medida da região, 
                referência em qualidade, inovação e atendimento personalizado.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-4 text-foreground">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Qualidade, transparência, compromisso e satisfação do cliente são os 
                pilares do nosso trabalho, sempre priorizando a excelência em cada projeto.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Commitment */}
        <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
          <CardContent className="p-12 text-center">
            <Shield className="h-16 w-16 text-accent mx-auto mb-8" />
            <h3 className="text-2xl font-medium mb-6 text-foreground">
              Nosso Compromisso
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Atendimento personalizado, instalação profissional e garantia total em todos 
              os nossos produtos. Especializados em projetos residenciais e comerciais com 
              móveis sob medida, oferecemos consultoria especializada, fabricação artesanal 
              e garantia completa em todos os nossos produtos e serviços.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
