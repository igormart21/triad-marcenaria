import { Quote, Star, Calendar, Home, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    text: "Qualidade excepcional e atenção aos detalhes. O projeto da nossa cozinha superou todas as expectativas. Cada gaveta, cada acabamento, tudo pensado com precisão. A Triad transformou nossa casa em um verdadeiro lar.",
    author: "Mariana Costa",
    role: "Arquiteta",
    project: "Cozinha Gourmet",
    rating: 5,
    date: "2023",
    avatar: "MC"
  },
  {
    text: "Profissionalismo do início ao fim. A equipe entendeu exatamente nossa visão e entregou um escritório sob medida impecável, no prazo combinado. Recomendo sem hesitação!",
    author: "Ricardo Almeida",
    role: "Empresário",
    project: "Escritório Corporativo",
    rating: 5,
    date: "2023",
    avatar: "RA"
  },
  {
    text: "Móveis que transformaram completamente nosso apartamento. Design sofisticado, materiais premium e um atendimento personalizado incomparável. Vale cada centavo investido.",
    author: "Paula e Fernando",
    role: "Cliente Residencial",
    project: "Apartamento Completo",
    rating: 5,
    date: "2023",
    avatar: "PF"
  },
  {
    text: "O banheiro ficou espetacular! A Triad conseguiu criar um ambiente luxuoso e funcional. A qualidade dos materiais e o acabamento são impecáveis. Superou todas as expectativas.",
    author: "Ana Paula Costa",
    role: "Designer de Interiores",
    project: "Banheiro Premium",
    rating: 5,
    date: "2023",
    avatar: "AC"
  },
  {
    text: "Trabalho impecável! A bancada da minha cozinha ficou sensacional. Equipe profissional e pontual. O resultado final é exatamente o que eu imaginava e muito mais.",
    author: "Carlos Mendes",
    role: "Proprietário Residencial",
    project: "Cozinha Planejada",
    rating: 5,
    date: "2023",
    avatar: "CM"
  },
  {
    text: "Parceria de confiança para todos os meus projetos comerciais. Qualidade excepcional e prazos respeitados. A Triad é sinônimo de excelência em móveis sob medida.",
    author: "Roberto Silva",
    role: "Arquiteto",
    project: "Projeto Comercial",
    rating: 5,
    date: "2023",
    avatar: "RS"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary">
            O QUE DIZEM NOSSOS CLIENTES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Depoimentos que{" "}
            <span className="font-semibold text-primary">comprovam nossa excelência</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mais de 500 clientes satisfeitos que confiaram na Triad Marcenaria 
            para transformar seus espaços com móveis únicos e de qualidade.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src="/api/placeholder/40/40" alt={testimonial.author} />
                      <AvatarFallback className="text-sm font-semibold bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </div>

                {/* Project Type */}
                <div className="mt-4 pt-4 border-t border-muted">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Home className="w-3 h-3 mr-1" />
                    <span>{testimonial.project}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="bg-background rounded-2xl p-8 shadow-sm text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Avaliação Geral dos Clientes
            </h3>
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-bold text-foreground">5.0</span>
            </div>
            <p className="text-muted-foreground">
              Baseado em mais de 500 avaliações de clientes satisfeitos
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Indicações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
