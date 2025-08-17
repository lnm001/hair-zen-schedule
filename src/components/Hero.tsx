import { Button } from "@/components/ui/button";
import { Calendar, Star, MapPin } from "lucide-react";
import heroImage from "@/assets/salon-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground">5.0 • 120+ avaliações</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Sua beleza em 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> mãos experientes</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Transforme seu visual com nossos profissionais especializados. 
            Oferecemos cortes modernos, coloração exclusiva e tratamentos 
            personalizados em um ambiente acolhedor e sofisticado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="elegant" size="lg" className="text-base">
              <Calendar className="h-5 w-5 mr-2" />
              Agendar Horário
            </Button>
            <Button variant="soft" size="lg" className="text-base">
              Ver Serviços
            </Button>
          </div>

          <div className="flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Rua das Flores, 123 - Vila Madalena</span>
            </div>
            <div className="text-sm">
              Seg-Sáb: 9h às 19h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;