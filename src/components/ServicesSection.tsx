import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calculator, FileText, Users, Lightbulb, Target } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Deep dive into energy market trends, pricing patterns, and risk assessment to optimize your energy strategy.",
    },
    {
      icon: Calculator,
      title: "Cost Optimization",
      description: "Identify cost-saving opportunities through rate analysis, demand management, and procurement strategies.",
    },
    {
      icon: FileText,
      title: "Contract Negotiation",
      description: "Expert negotiation of energy supply contracts to secure the best rates and terms for your organization.",
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Strategic advisory services to help you navigate deregulated markets and energy policy changes.",
    },
    {
      icon: Lightbulb,
      title: "Sustainability Solutions",
      description: "Green energy procurement and renewable energy strategies to meet your sustainability goals.",
    },
    {
      icon: Target,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for volatile energy markets.",
    },
  ];

  return (
    <section id="services" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-6">
            Expert Energy Services
          </h2>
          <p className="text-xl text-professional-medium max-w-2xl mx-auto">
            Comprehensive energy brokerage solutions tailored to maximize your savings 
            and minimize your risks in today's complex energy markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-professional-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-professional-medium leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;