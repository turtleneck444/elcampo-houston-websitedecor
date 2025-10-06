import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Unlock, DollarSign, ShoppingBag, Wrench, Battery, ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Display Technology Services",
    description: "Precision screen restoration using OEM-grade components. Advanced diagnostics and quality-assured replacements with manufacturer warranties.",
    features: ["Same-day service", "90-day warranty", "OEM parts"],
  },
  {
    icon: Battery,
    title: "Power Management Solutions",
    description: "Comprehensive battery and charging system diagnostics. Certified replacement services to optimize device performance and longevity.",
    features: ["Battery health analysis", "Charging port repair", "Performance optimization"],
  },
  {
    icon: Unlock,
    title: "Carrier Network Solutions",
    description: "Enterprise-level carrier unlocking services. Full compatibility with major telecommunications providers and international networks.",
    features: ["All carriers supported", "Same-day processing", "Permanent unlocking"],
  },
  {
    icon: DollarSign,
    title: "Payment Processing Center",
    description: "Streamlined bill payment services for all major carriers. Secure transaction processing with instant confirmation and receipt documentation.",
    features: ["All carriers accepted", "Instant processing", "Digital receipts"],
  },
  {
    icon: ShoppingBag,
    title: "Premium Accessories",
    description: "Curated selection of certified mobile accessories. Protection solutions, charging systems, and enhancement products from leading manufacturers.",
    features: ["Top brands", "Quality guaranteed", "Expert guidance"],
  },
  {
    icon: Smartphone,
    title: "Comprehensive Device Repair",
    description: "Full-spectrum repair services for all mobile device issues. Advanced troubleshooting with industry-leading success rates and turnaround times.",
    features: ["Expert diagnostics", "Complex repairs", "Parts in stock"],
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-amber-500/10 px-6 py-3 rounded-full mb-6 border border-accent/20 shadow-sm">
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-accent font-bold text-sm tracking-wide">COMPREHENSIVE SOLUTIONS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Enterprise Service <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Industry-leading mobile device services backed by <span className="font-semibold text-foreground">certified technicians</span>, 
            premium components, and unwavering quality standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-accent/50 transition-all hover:shadow-2xl group bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-primary transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-12 shadow-premium">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Can't Find What You Need?
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
              Our expert team handles specialized requests and custom solutions. 
              Contact us to discuss your specific requirements.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-xl">
              <Phone className="mr-2 h-5 w-5" />
              Speak With a Specialist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
