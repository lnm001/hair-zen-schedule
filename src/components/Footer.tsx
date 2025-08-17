import { Button } from "@/components/ui/button";
import { Scissors, Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-subtle border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="gradient-hero p-2 rounded-lg shadow-soft">
                <Scissors className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Salon Elegância</h3>
                <p className="text-xs text-muted-foreground">Beleza & Estilo</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando sua beleza com profissionalismo, carinho e as melhores 
              técnicas do mercado há mais de 10 anos.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@salonelegancia.com</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Rua das Flores, 123<br />Vila Madalena, São Paulo</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Horário de Funcionamento</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Segunda a Sexta: 9h às 19h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Sábados: 9h às 17h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Domingos: Fechado</span>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Siga-nos</h4>
            <div className="flex space-x-2">
              <Button variant="soft" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="soft" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Acompanhe nossas novidades e dicas de beleza
              </p>
              <Button variant="elegant" size="sm" className="w-full">
                @salonelegancia
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Salon Elegância. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;