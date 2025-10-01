import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import crestpointLogo from "@/assets/crestpoint-logo.jpg";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={crestpointLogo} alt="Crestpoint Energy" className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-energy-blue hidden sm:block">
              Crestpoint Energy
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-professional-dark hover:text-energy-blue transition-smooth">
              Services
            </a>
            <a href="#expertise" className="text-professional-dark hover:text-energy-blue transition-smooth">
              Expertise
            </a>
            <a href="#about" className="text-professional-dark hover:text-energy-blue transition-smooth">
              About
            </a>
            <a href="#contact" className="text-professional-dark hover:text-energy-blue transition-smooth">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              Get Consultation
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;