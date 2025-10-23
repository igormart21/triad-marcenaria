import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  Home, 
  Star,
  Award,
  TrendingUp,
  CheckCircle,
  Heart
} from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Calendar,
      number: "10+",
      label: "Anos de Experiência",
      description: "No mercado de móveis sob medida",
      color: "text-blue-500"
    },
    {
      icon: Users,
      number: "500+",
      label: "Clientes Satisfeitos",
      description: "Projetos entregues com excelência",
      color: "text-green-500"
    },
    {
      icon: Home,
      number: "1000+",
      label: "Projetos Realizados",
      description: "Cozinhas, banheiros e móveis",
      color: "text-purple-500"
    },
    {
      icon: Star,
      number: "5.0",
      label: "Avaliação Média",
      description: "Satisfação dos nossos clientes",
      color: "text-yellow-500"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Certificação de Qualidade",
      description: "Reconhecimento pela excelência em móveis sob medida"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Constante",
      description: "Expansão contínua e melhoria dos serviços"
    },
    {
      icon: CheckCircle,
      title: "100% de Satisfação",
      description: "Garantia de qualidade em todos os projetos"
    },
    {
      icon: Heart,
      title: "Compromisso Social",
      description: "Responsabilidade social e sustentabilidade"
    }
  ];

  return (
    <section className="py-24 bg-warm-brown">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary">
            NÚMEROS QUE COMPROVAM NOSSA EXCELÊNCIA
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Resultados que{" "}
            <span className="font-semibold text-primary">falam por si só</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mais de 10 anos de empresa transformando espaços e superando 
            expectativas com qualidade, inovação e compromisso.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`mx-auto mb-6 p-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors w-fit`}>
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-background rounded-2xl p-8 shadow-sm">
          <h3 className="text-3xl font-semibold text-center mb-12 text-foreground">
            Nossas Conquistas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-12">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-6 italic">
                "A Triad Marcenaria transformou nossa casa em um verdadeiro lar. 
                A qualidade dos móveis e o atendimento excepcional superaram todas 
                as nossas expectativas."
              </blockquote>
              <div className="text-lg text-muted-foreground">
                <strong className="text-foreground">Maria Silva</strong> - Cliente há 3 anos
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
