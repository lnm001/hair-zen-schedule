import { Button } from "@/components/ui/button";
import { Clock, Star } from "lucide-react";
import serviceCut from "@/assets/service-cut.jpg";
import serviceColor from "@/assets/service-color.jpg";
import serviceStyle from "@/assets/service-style.jpg";
const services = [{
  id: 1,
  name: "Corte & Finalização",
  description: "Cortes modernos e personalizados para realçar sua personalidade",
  price: "A partir de R$ 80",
  duration: "1h",
  image: serviceCut,
  popular: false
}, {
  id: 2,
  name: "Coloração & Luzes",
  description: "Transformação completa com cores vibrantes e técnicas avançadas",
  price: "A partir de R$ 150",
  duration: "2h-3h",
  image: serviceColor,
  popular: true
}, {
  id: 3,
  name: "Penteados & Styling",
  description: "Penteados elegantes para eventos especiais e ocasiões únicas",
  price: "A partir de R$ 100",
  duration: "1h30",
  image: serviceStyle,
  popular: false
}];
const Services = () => {
  return <section id="servicos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => <div key={service.id} className="gradient-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-smooth relative overflow-hidden group">
              {service.popular && <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Mais Procurado
                </div>}

              {/* Service Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-48 object-cover group-hover:scale-105 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Service Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {service.name}
                </h3>
                
                <p className="text-muted-foreground">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {service.price}
                  </div>
                </div>

                <Button variant={service.popular ? "elegant" : "soft"} className="w-full">
                  Agendar Serviço
                </Button>
              </div>
            </div>)}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>;
};
export default Services;