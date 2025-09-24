import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern energy infrastructure" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Energy Experts
            <br />
            <span className="text-accent">Delivering Results</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Navigate complex energy markets with confidence. Our proven strategies 
            have saved clients millions in energy costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Free Analysis
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">$50M+ Saved</h3>
              <p className="text-primary-foreground/80 text-sm">In client energy costs</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">15+ Years</h3>
              <p className="text-primary-foreground/80 text-sm">Industry experience</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">500+</h3>
              <p className="text-primary-foreground/80 text-sm">Successful projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;