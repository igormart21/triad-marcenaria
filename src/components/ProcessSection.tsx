import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Ruler, 
  Hammer, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Package,
  Shield
} from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Consulta Inicial",
      description: "Conversamos sobre suas necessidades, preferências e orçamento para entender seu projeto e criar a solução ideal.",
      details: [
        "Análise do espaço disponível",
        "Definição do estilo desejado",
        "Discussão sobre funcionalidades",
        "Avaliação do orçamento"
      ],
      color: "bg-blue-500"
    },
    {
      number: "02",
      icon: Ruler,
      title: "Medição e Orçamento",
      description: "Fazemos a medição precisa do local e elaboramos um orçamento detalhado sem compromisso, incluindo projeto 3D.",
      details: [
        "Medição técnica precisa",
        "Projeto 3D personalizado",
        "Orçamento detalhado",
        "Apresentação da proposta"
      ],
      color: "bg-green-500"
    },
    {
      number: "03",
      icon: Hammer,
      title: "Fabricação e Instalação",
      description: "Fabricamos seu produto com precisão artesanal e realizamos a instalação com equipe especializada.",
      details: [
        "Fabricação artesanal",
        "Controle de qualidade",
        "Instalação profissional",
        "Ajustes finais"
      ],
      color: "bg-purple-500"
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Entrega e Garantia",
      description: "Entregamos seu projeto pronto e oferecemos garantia completa para sua tranquilidade e satisfação.",
      details: [
        "Entrega finalizada",
        "Garantia de 2 anos",
        "Suporte pós-venda",
        "Satisfação garantida"
      ],
      color: "bg-orange-500"
    }
  ];

  const timeline = [
    { phase: "Planejamento", duration: "1-2 dias", icon: Clock },
    { phase: "Projeto", duration: "3-5 dias", icon: Users },
    { phase: "Fabricação", duration: "7-15 dias", icon: Package },
    { phase: "Instalação", duration: "1-3 dias", icon: Shield }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary">
            COMO FUNCIONA NOSSO PROCESSO
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Da ideia ao resultado final,{" "}
            <span className="font-semibold text-primary">acompanhamos cada etapa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Um processo estruturado e transparente que garante qualidade, prazo e 
            satisfação em cada projeto de móveis sob medida.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {step.number}
                  </div>
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-background rounded-2xl p-8 shadow-sm">
          <h3 className="text-3xl font-semibold text-center mb-12 text-foreground">
            Cronograma Médio do Projeto
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {item.phase}
                </h4>
                <p className="text-sm text-primary font-medium">
                  {item.duration}
                </p>
                {index < timeline.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center border-0 shadow-md">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Prazos Respeitados
              </h4>
              <p className="text-muted-foreground text-sm">
                Cronograma detalhado e acompanhamento constante para garantir a entrega no prazo.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Comunicação Transparente
              </h4>
              <p className="text-muted-foreground text-sm">
                Atualizações regulares sobre o progresso do projeto e comunicação direta.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Qualidade Garantida
              </h4>
              <p className="text-muted-foreground text-sm">
                Controle rigoroso de qualidade em cada etapa do processo de fabricação.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
