import { Button } from "@/components/ui/button";
import { Scissors, Phone, MapPin } from "lucide-react";
const Header = () => {
  return <header className="gradient-subtle border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="gradient-hero p-2 rounded-lg shadow-soft">
              <Scissors className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Mota Cabeleireiro</h1>
              <p className="text-xs text-muted-foreground">Beleza & Estilo</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#servicos" className="text-foreground hover:text-primary transition-smooth">
              Serviços
            </a>
            <a href="#agendar" className="text-foreground hover:text-primary transition-smooth">
              Agendar
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-smooth">
              Contato
            </a>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(11) 99999-9999</span>
            </div>
            <Button variant="elegant" size="sm">
              Agendar Agora
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;