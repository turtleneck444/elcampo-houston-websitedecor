import { Shield, Clock, Award, DollarSign } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast Service",
    description: "Most repairs completed same day. We value your time.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All repairs backed by our warranty. Your satisfaction is guaranteed.",
  },
  {
    icon: Award,
    title: "Expert Technicians",
    description: "Certified professionals with years of experience.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates with flexible payment plans available.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Houston Phone?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best service in Texas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
