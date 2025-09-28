import { Button } from "@/components/ui/button";
import { Calendar, Star, MapPin } from "lucide-react";
import heroImage from "@/assets/salon-hero.jpg";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Beleza & Elegância
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Transforme seu visual conosco. Agende seu horário e descubra o melhor de você.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="elegant" size="lg" className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Agendar Agora
          </Button>
          <Button variant="soft" size="lg" className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Nossa Localização
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-amber-400">
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <span className="ml-2 text-white/90">Avaliação 5 estrelas</span>
        </div>
      </div>
    </section>
  );
};
export default Hero;