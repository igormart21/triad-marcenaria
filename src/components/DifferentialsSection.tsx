import { Ruler, Leaf, Clock, Shield } from "lucide-react";

const differentials = [
  {
    icon: Ruler,
    title: "Design 3D exclusivo",
    description: "Visualize seu projeto antes da execução com renderização 3D realista"
  },
  {
    icon: Leaf,
    title: "Materiais nobres e sustentáveis",
    description: "Madeiras selecionadas e fornecedores certificados"
  },
  {
    icon: Clock,
    title: "Entrega pontual",
    description: "Cronograma rigoroso e cumprimento de prazos garantido"
  },
  {
    icon: Shield,
    title: "Garantia e suporte total",
    description: "Acompanhamento completo e assistência pós-entrega"
  }
];

const DifferentialsSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Excelência em <span className="font-semibold text-accent">cada detalhe</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                  <item.icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
