import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Clock, 
  Shield, 
  Wrench, 
  Users, 
  DollarSign,
  Award,
  CheckCircle
} from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Materiais selecionados e acabamento impecável garantindo durabilidade e beleza excepcionais em cada projeto.",
      color: "text-yellow-500"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Prazos cumpridos com eficiência, respeitando o cronograma do seu projeto sem comprometer a qualidade.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Garantia",
      description: "Garantia estendida em todos os nossos produtos e serviços para sua tranquilidade e confiança.",
      color: "text-green-500"
    },
    {
      icon: Wrench,
      title: "Instalação Completa",
      description: "Serviço completo de instalação com equipe especializada e equipamentos modernos.",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Consultoria especializada para encontrar a solução perfeita para seu projeto e necessidades.",
      color: "text-pink-500"
    },
    {
      icon: DollarSign,
      title: "Melhor Preço da Região",
      description: "Preços competitivos sem comprometer a qualidade dos materiais e serviços oferecidos.",
      color: "text-emerald-500"
    }
  ];

  const guarantees = [
    "Garantia sob defeitos de fabricação",
    "Suporte técnico especializado",
    "Substituição em caso de defeito",
    "Instalação profissional garantida",
    "Materiais certificados e de qualidade"
  ];

  return (
    <section className="py-24 bg-warm-brown">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary">
            POR QUE ESCOLHER A TRIAD MARCENARIA?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Nossos diferenciais que fazem a{" "}
            <span className="font-semibold text-primary">diferença no seu projeto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mais de 10 anos de empresa, qualidade comprovada e compromisso com a 
            excelência em cada detalhe do seu projeto de móveis sob medida.
          </p>
        </div>

        {/* Main Differentials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((differential, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`mx-auto mb-6 p-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors w-fit`}>
                  <differential.icon className={`h-10 w-10 ${differential.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {differential.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {differential.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantees Section */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Award className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-semibold mb-4 text-foreground">
              Nossa Garantia de Qualidade
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprometemo-nos com a excelência em cada projeto, oferecendo garantias 
              que demonstram nossa confiança na qualidade dos nossos serviços.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center p-4 bg-background rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {guarantee}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;