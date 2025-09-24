import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your Energy Costs?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Get a free energy analysis and discover how much you could be saving. 
            Our experts are ready to help you navigate the energy market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-background/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-professional-dark">
                Get Your Free Energy Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Company Name" />
              <Input type="email" placeholder="Email Address" />
              <Input type="tel" placeholder="Phone Number" />
              <Textarea 
                placeholder="Tell us about your energy needs..."
                rows={4}
              />
              <Button size="lg" className="w-full gradient-primary text-primary-foreground">
                Request Free Analysis
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-primary-foreground/80">(555) 123-ENERGY</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-primary-foreground/80">info@crestpointenergy.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-primary-foreground/80">
                      123 Energy Plaza<br />
                      Houston, TX 77002
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-primary-foreground/80">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3">Why Choose Crestpoint Energy?</h4>
              <ul className="space-y-2 text-primary-foreground/90">
                <li>• No upfront costs or hidden fees</li>
                <li>• Proven track record of significant savings</li>
                <li>• Transparent pricing and contract terms</li>
                <li>• Ongoing support and market monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;