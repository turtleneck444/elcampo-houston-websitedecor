import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-accent py-20 px-4 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <img 
            src={logo} 
            alt="Houston Phone - Bill Pay & Repair Center" 
            className="w-full max-w-md mb-8 drop-shadow-2xl"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Your Trusted Phone Repair & Bill Pay Center
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl">
            Professional phone repairs, unlocking services, and bill payment solutions. 
            All carriers supported with flexible payment plans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (832) 991-6859
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-xl"
            >
              View Our Locations
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-primary-foreground font-semibold text-lg mb-2">
              3 Convenient Locations Serving Texas
            </p>
            <p className="text-primary-foreground/80">
              El Campo • Houston West • Houston South
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
