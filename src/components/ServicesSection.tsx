import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  ChefHat, 
  Bath, 
  Briefcase, 
  BookOpen, 
  Sofa,
  Hammer,
  Palette,
  Settings,
  Shield
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Cozinhas Sob Medida",
      description: "Cozinhas planejadas com design exclusivo, acabamento impecável e durabilidade excepcional. Materiais premium e funcionalidade otimizada.",
      features: ["Design personalizado", "Materiais premium", "Acabamento impecável", "Funcionalidade otimizada"]
    },
    {
      icon: Bath,
      title: "Banheiros Premium",
      description: "Banheiros planejados com elegância e sofisticação, combinando funcionalidade e beleza em cada detalhe.",
      features: ["Design sofisticado", "Organização inteligente", "Materiais resistentes", "Acabamento luxuoso"]
    },
    {
      icon: Home,
      title: "Quartos e Closets",
      description: "Quartos e closets planejados para maximizar o espaço e organizar seu dia a dia com estilo e praticidade.",
      features: ["Maximização de espaço", "Organização inteligente", "Design moderno", "Funcionalidade prática"]
    },
    {
      icon: Briefcase,
      title: "Escritórios Corporativos",
      description: "Escritórios e ambientes corporativos sob medida, criando espaços profissionais e produtivos.",
      features: ["Design profissional", "Produtividade otimizada", "Materiais corporativos", "Funcionalidade empresarial"]
    },
    {
      icon: Sofa,
      title: "Salas e Ambientes",
      description: "Salas de estar, jantar e ambientes sociais com móveis únicos que refletem sua personalidade.",
      features: ["Design exclusivo", "Conforto garantido", "Estilo personalizado", "Harmonia visual"]
    },
    {
      icon: BookOpen,
      title: "Bibliotecas e Estantes",
      description: "Bibliotecas e estantes sob medida para organizar seus livros e objetos com elegância e funcionalidade.",
      features: ["Organização inteligente", "Design clássico", "Capacidade otimizada", "Estética refinada"]
    }
  ];

  const specialties = [
    {
      icon: Hammer,
      title: "Corte e Acabamento",
      description: "Especialização em corte, polimento e instalação de móveis sob medida com materiais nacionais e importados."
    },
    {
      icon: Palette,
      title: "Design Personalizado",
      description: "Projetos únicos desenvolvidos especialmente para seu espaço, estilo de vida e necessidades específicas."
    },
    {
      icon: Settings,
      title: "Instalação Completa",
      description: "Serviço completo de instalação com equipe especializada e equipamentos modernos para perfeição total."
    },
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "Garantia estendida em todos os nossos produtos e serviços para sua tranquilidade e confiança."
    }
  ];

  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 text-accent border-accent/30">
            SERVIÇOS EM MARCENARIA
          </Badge>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 tracking-tight">
            Soluções completas em{" "}
            <span className="font-medium text-accent">móveis sob medida</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Especializados em projetos residenciais e comerciais com móveis sob medida, 
            oferecemos atendimento personalizado, fabricação artesanal e garantia total 
            em todos os nossos produtos e serviços.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-medium text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialties */}
        <div className="bg-card rounded-2xl p-12 shadow-sm">
          <h3 className="text-3xl font-medium text-center mb-16 text-foreground">
            Nossas Especialidades
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors w-fit">
                  <specialty.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-medium mb-2 text-foreground">
                  {specialty.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
