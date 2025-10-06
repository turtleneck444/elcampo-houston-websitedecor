import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our top priority. We go above and beyond to ensure you're happy with our service.",
  },
  {
    icon: Target,
    title: "Quality Service",
    description: "We use only the best parts and the latest repair techniques to ensure long-lasting results.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description: "We're proud to serve the Texas community and build lasting relationships with our customers.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We stay up-to-date with the latest technology and repair methods to serve you better.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent py-20 px-4 text-primary-foreground">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Houston Phone</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Your trusted partner for phone repairs and services since day one
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Houston Phone began with a simple mission: to provide honest, affordable, and professional phone repair services to the Texas community. What started as a single location in El Campo has grown into three thriving repair centers serving customers across the region.
                </p>
                <p>
                  We understand how important your phone is to your daily life. That's why we're committed to providing fast, reliable service with quality parts and expert technicians. Whether you need a screen replacement, battery service, or help unlocking your device, we're here to help.
                </p>
                <p>
                  Our team of certified technicians has years of experience working with all major phone brands and models. We stay current with the latest repair techniques and technology to ensure we can handle any issue that comes our way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-lg">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-5xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-xl text-muted-foreground">Repairs Completed</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="text-5xl font-bold text-primary mb-2">3</div>
                <div className="text-xl text-muted-foreground">Texas Locations</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-5xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-xl text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
