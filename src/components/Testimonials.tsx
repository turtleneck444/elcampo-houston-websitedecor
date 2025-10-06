import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Award, Shield, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    title: "Small Business Owner",
    location: "El Campo, TX",
    text: "Their enterprise-level service transformed our mobile device management. Fast turnaround, professional expertise, and competitive pricing. An invaluable partner for our business operations.",
    rating: 5,
    verified: true,
  },
  {
    name: "James Wilson",
    title: "Operations Manager",
    location: "Houston West, TX",
    text: "Outstanding technical expertise and customer service. The flexible payment options and corporate account management have been game-changing for our organization. Highly professional team.",
    rating: 5,
    verified: true,
  },
  {
    name: "Sarah Chen",
    title: "IT Director",
    location: "Houston South, TX",
    text: "Exceptional carrier unlocking and device services. Their certified technicians resolved complex issues others couldn't. A reliable, professional partner we trust with all our mobile solutions.",
    rating: 5,
    verified: true,
  },
];

const trustBadges = [
  { icon: Shield, label: "BBB Accredited", sublabel: "A+ Rating" },
  { icon: Award, label: "Certified Techs", sublabel: "Factory Trained" },
  { icon: CheckCircle2, label: "Guaranteed Work", sublabel: "90-Day Warranty" },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm">CLIENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real experiences from businesses and individuals who rely on our 
            enterprise-grade mobile solutions and exceptional service delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all group border-2 hover:border-accent/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-accent/30 mb-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-accent font-semibold">{testimonial.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{testimonial.location}</p>
                    </div>
                    {testimonial.verified && (
                      <div className="flex items-center gap-1 bg-accent/10 px-3 py-1 rounded-full">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span className="text-xs font-semibold text-accent">Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 shadow-premium">
          <h3 className="text-3xl font-bold text-center text-primary-foreground mb-10">
            Certified Excellence & Quality Assurance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary-foreground mb-1">{badge.label}</h4>
                <p className="text-primary-foreground/70">{badge.sublabel}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-primary-foreground/80 text-lg">
              Join thousands of satisfied customers who trust us with their mobile solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
