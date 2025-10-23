import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Home Office Premium",
    location: "São Paulo"
  },
  {
    image: portfolio2,
    title: "Sala de Estar Moderna",
    location: "Alphaville"
  },
  {
    image: portfolio3,
    title: "Cozinha Gourmet",
    location: "Vila Olímpia"
  },
  {
    image: portfolio4,
    title: "Living Integrado",
    location: "Jardins"
  },
  {
    image: portfolio5,
    title: "Quarto Infantil",
    location: "Morumbi"
  },
  {
    image: portfolio6,
    title: "Sala de Jantar",
    location: "Itaim Bibi"
  },
  {
    image: portfolio7,
    title: "Home Theater",
    location: "Perdizes"
  },
  {
    image: portfolio8,
    title: "Bar Residencial",
    location: "Pinheiros"
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Nossos <span className="font-semibold text-accent">projetos</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Cada ambiente é único, pensado e executado com precisão milimétrica
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {portfolioItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden aspect-square rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-primary-foreground/80 font-light">{item.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 backdrop-blur-sm border-accent/20 hover:bg-accent hover:text-accent-foreground" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/80 backdrop-blur-sm border-accent/20 hover:bg-accent hover:text-accent-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
