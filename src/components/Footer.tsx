import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-professional-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-accent mb-4">Crestpoint Energy</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Leading energy brokerage firm helping businesses optimize their energy 
              costs and navigate complex energy markets with confidence.
            </p>
            <div className="text-sm text-primary-foreground/60">
              <p>Licensed Energy Broker</p>
              <p>NAESB Certified | CEM Qualified</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-accent transition-smooth">Market Analysis</a></li>
              <li><a href="#services" className="hover:text-accent transition-smooth">Cost Optimization</a></li>
              <li><a href="#services" className="hover:text-accent transition-smooth">Contract Negotiation</a></li>
              <li><a href="#services" className="hover:text-accent transition-smooth">Risk Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#expertise" className="hover:text-accent transition-smooth">About Us</a></li>
              <li><a href="#expertise" className="hover:text-accent transition-smooth">Expertise</a></li>
              <li><a href="#contact" className="hover:text-accent transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Careers</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Crestpoint Energy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;