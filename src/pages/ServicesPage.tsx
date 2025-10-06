import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Unlock, DollarSign, ShoppingBag, Wrench, Battery, Phone } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Screen Replacements",
    description: "Professional screen repair for all phone models including iPhone, Samsung, LG, and more.",
    features: ["LCD & OLED screens", "Same-day service", "90-day warranty", "Original quality parts"],
    price: "Starting at $79",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    description: "Restore your phone's battery life with genuine replacement batteries.",
    features: ["All phone models", "Fast turnaround", "Battery health check", "Warranty included"],
    price: "Starting at $49",
  },
  {
    icon: Unlock,
    title: "Phone Unlocking",
    description: "Unlock your phone to use with any carrier. All models and carriers supported.",
    features: ["All carriers", "Permanent unlock", "Same-day service", "Legal & safe"],
    price: "Starting at $29",
  },
  {
    icon: DollarSign,
    title: "Bill Payment Services",
    description: "Convenient bill payment center for all major carriers. Pay in person with multiple payment options.",
    features: ["All carriers accepted", "Cash payments", "Card payments", "Instant processing"],
    price: "Free service",
  },
  {
    icon: Smartphone,
    title: "Water Damage Repair",
    description: "Specialized water damage restoration with advanced drying and cleaning techniques.",
    features: ["Free diagnostics", "Component repair", "Data recovery", "No-fix, no-fee"],
    price: "Starting at $69",
  },
  {
    icon: ShoppingBag,
    title: "Accessories & Parts",
    description: "Wide selection of phone accessories including cases, chargers, screen protectors, and more.",
    features: ["Premium brands", "Competitive prices", "Expert recommendations", "Installation available"],
    price: "Varies",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full border border-accent/30">
              <Smartphone className="h-4 w-4 text-accent" />
              <span className="text-accent font-bold text-sm tracking-wide">COMPREHENSIVE SOLUTIONS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Enterprise Service Portfolio</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Professional mobile device services backed by certified technicians and premium quality standards
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-white">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 shadow-premium text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">Ready to Experience Excellence?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Visit any of our three strategic locations or contact our expert team today
              </p>
              <a href="tel:8329916859">
                <Button size="lg" className="bg-accent hover:bg-amber-500 text-primary font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <Phone className="mr-2 h-5 w-5" />
                  (832) 991-6859
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
