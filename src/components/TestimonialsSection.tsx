import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Qualidade excepcional e atenção aos detalhes. O projeto da nossa cozinha superou todas as expectativas. Cada gaveta, cada acabamento, tudo pensado com precisão.",
    author: "Mariana Costa",
    role: "Arquiteta"
  },
  {
    text: "Profissionalismo do início ao fim. A equipe entendeu exatamente nossa visão e entregou um escritório sob medida impecável, no prazo combinado.",
    author: "Ricardo Almeida",
    role: "Empresário"
  },
  {
    text: "Móveis que transformaram completamente nosso apartamento. Design sofisticado, materiais premium e um atendimento personalizado incomparável.",
    author: "Paula e Fernando",
    role: "Cliente Residencial"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              O que dizem <span className="font-semibold text-accent">nossos clientes</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Quote className="w-12 h-12 text-accent mb-6 opacity-50" />
                <p className="text-lg font-light leading-relaxed mb-8 text-primary-foreground/90">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-primary-foreground/20 pt-6">
                  <p className="font-medium text-primary-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/70 font-light mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
