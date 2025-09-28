import { Button } from "@/components/ui/button";
import { Scissors, Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Salão Elegância</h3>
            </div>
            <p className="text-muted-foreground">
              Transformando sua beleza com excelência e cuidado há mais de 10 anos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@salaoelegancia.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Rua da Beleza, 123 - Centro</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Seg - Sex: 8h às 18h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Sábado: 8h às 16h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Domingo: Fechado</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; 2024 Salão Elegância. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;