import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const ExpertiseSection = () => {
  const expertise = [
    "Commercial & Industrial Energy Procurement",
    "Deregulated Market Navigation",
    "Renewable Energy Solutions",
    "Demand Response Programs",
    "Energy Auditing & Efficiency",
    "Risk Management & Hedging",
    "Utility Bill Analysis",
    "Load Forecasting & Analysis"
  ];

  const achievements = [
    { metric: "$50M+", label: "Client Savings Generated" },
    { metric: "15+", label: "Years Experience" },
    { metric: "500+", label: "Projects Completed" },
    { metric: "98%", label: "Client Retention Rate" }
  ];

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-6">
              Industry-Leading
              <br />
              <span className="text-energy-blue">Energy Expertise</span>
            </h2>
            
            <p className="text-xl text-professional-medium mb-8 leading-relaxed">
              With over 15 years of experience in energy markets, our team brings 
              deep expertise across all aspects of energy procurement, risk management, 
              and cost optimization. We've helped hundreds of clients navigate complex 
              energy challenges and achieve significant cost savings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-professional-dark">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-4 py-2">NAESB Certified</Badge>
              <Badge variant="secondary" className="px-4 py-2">CEM Qualified</Badge>
              <Badge variant="secondary" className="px-4 py-2">RESA Member</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gradient-subtle rounded-lg shadow-card">
                <div className="text-4xl md:text-5xl font-bold text-energy-blue mb-2">
                  {achievement.metric}
                </div>
                <div className="text-professional-medium font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;