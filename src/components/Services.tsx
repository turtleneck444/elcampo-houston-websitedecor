import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Unlock, DollarSign, ShoppingBag, Wrench, Battery } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Screen Replacements",
    description: "Expert screen repair for all phone models. Fast, reliable service with quality parts.",
  },
  {
    icon: Battery,
    title: "Battery & Charging Issues",
    description: "Fix charging problems and replace worn-out batteries to extend your phone's life.",
  },
  {
    icon: Unlock,
    title: "Unlocking for All Carriers",
    description: "Professional unlocking services compatible with all major carriers and phone models.",
  },
  {
    icon: DollarSign,
    title: "Bill Payment Services",
    description: "Convenient bill payment center for all major carriers. Pay your phone bill with ease.",
  },
  {
    icon: ShoppingBag,
    title: "Phone Accessories",
    description: "Wide selection of cases, screen protectors, chargers, and other quality accessories.",
  },
  {
    icon: Smartphone,
    title: "General Repairs",
    description: "Complete repair services for all phone issues. We fix what others can't.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete phone solutions under one roof. Professional service you can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
