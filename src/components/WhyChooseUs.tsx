import { Shield, Clock, Award, DollarSign, TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Rapid Turnaround",
    description: "Industry-leading service times with same-day completion on 85% of repairs. Time-sensitive solutions that keep your business moving.",
    metric: "< 2 Hours",
    metricLabel: "Average Repair Time",
  },
  {
    icon: Shield,
    title: "Comprehensive Warranty",
    description: "Extended warranty coverage backed by our quality assurance program. Lifetime guarantee on workmanship and premium parts.",
    metric: "90 Days",
    metricLabel: "Parts Warranty",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description: "Factory-trained technicians with advanced certifications. Continuous training on latest mobile technologies and repair methodologies.",
    metric: "15+ Years",
    metricLabel: "Combined Experience",
  },
  {
    icon: TrendingUp,
    title: "Competitive Solutions",
    description: "Enterprise pricing structures with flexible payment options. Volume discounts and corporate account management available.",
    metric: "30% Savings",
    metricLabel: "vs. OEM Repairs",
  },
];

const stats = [
  { value: "15,000+", label: "Devices Serviced", icon: Users },
  { value: "99.2%", label: "Customer Satisfaction", icon: CheckCircle2 },
  { value: "24/7", label: "Support Available", icon: Zap },
  { value: "3", label: "Strategic Locations", icon: Award },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm">COMPETITIVE ADVANTAGE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Why Industry Leaders Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unparalleled expertise, cutting-edge technology, and unwavering commitment 
            to excellence set us apart as Texas's premier mobile solutions provider.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border-2 border-border hover:border-accent/50 transition-all hover:shadow-xl bg-card/50 backdrop-blur-sm"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-accent">{feature.metric}</span>
                    <span className="text-sm text-muted-foreground">{feature.metricLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 shadow-premium">
          <h3 className="text-3xl font-bold text-center text-primary-foreground mb-12">
            Proven Track Record of Excellence
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
