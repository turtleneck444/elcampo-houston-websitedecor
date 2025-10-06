import { Button } from "@/components/ui/button";
import { Phone, Shield, Award, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/30 to-white py-20 px-4 md:py-28">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Professional Badge - Mobile Optimized */}
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 bg-accent/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-accent/30 hover:border-accent/50 transition-all cursor-default shadow-sm hover:shadow-md">
            <Award className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
            <span className="text-accent font-bold text-[10px] sm:text-xs md:text-sm tracking-wide">TEXAS'S PREMIER MOBILE SOLUTIONS PROVIDER</span>
          </div>
          
          {/* Headline - Mobile Optimized */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight px-2">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 md:mb-3 font-bold bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              HOUSTON PHONE
            </span>
            <span className="block mb-1 md:mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Enterprise-Grade Mobile</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent via-accent to-amber-500 bg-clip-text text-transparent">
                Solutions & Services
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-accent/30 via-accent/60 to-accent/30 rounded-full"></div>
            </span>
          </h1>
          
          {/* Subheadline - Mobile Optimized */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-4xl leading-relaxed px-4">
            Industry-leading mobile device management, repair, and telecommunications services. 
            Trusted by <span className="font-bold text-foreground">thousands across Texas</span> with certified expertise and guaranteed results.
          </p>
          
          {/* Trust Metrics - Mobile Optimized */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-10 md:mb-12 max-w-4xl w-full px-2">
            <div className="group cursor-default bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-border hover:border-accent/50 transition-all hover:shadow-xl">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-accent to-amber-500 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform">15K+</div>
              <div className="text-muted-foreground font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">Devices Serviced</div>
            </div>
            <div className="group cursor-default bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-border hover:border-accent/50 transition-all hover:shadow-xl">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-accent to-amber-500 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform">99%</div>
              <div className="text-muted-foreground font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">Success Rate</div>
            </div>
            <div className="group cursor-default bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-border hover:border-accent/50 transition-all hover:shadow-xl">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-accent to-amber-500 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-muted-foreground font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">Support Available</div>
            </div>
          </div>
          
          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-14 w-full max-w-2xl px-4">
            <a href="tel:8329916859" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-6 md:py-8 bg-accent hover:bg-amber-500 text-primary font-bold shadow-xl hover:shadow-2xl transition-all active:scale-95 md:hover:scale-105 md:hover:-translate-y-1 group touch-manipulation"
              >
                <Phone className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform" />
                <span className="whitespace-nowrap">(832) 991-6859</span>
                <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-6 md:py-8 border-2 border-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all active:scale-95 md:hover:scale-105 md:hover:-translate-y-1 font-bold group touch-manipulation"
            >
              <TrendingUp className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-y-[-2px] transition-transform" />
              <span className="whitespace-nowrap">View Locations</span>
            </Button>
          </div>
          
          {/* Trust Bar - Mobile Optimized */}
          <div className="bg-gradient-to-r from-white via-secondary/50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-border shadow-lg max-w-5xl w-full backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-8">
              <div className="flex items-center gap-3 group cursor-default w-full md:w-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-bold text-foreground text-sm md:text-base">Certified Technicians</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Factory Trained Experts</div>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-border flex-shrink-0"></div>
              
              <div className="flex items-center gap-3 group cursor-default w-full md:w-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-bold text-foreground text-sm md:text-base">90-Day Warranty</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Quality Guaranteed</div>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-border flex-shrink-0"></div>
              
              <div className="flex items-center gap-3 group cursor-default w-full md:w-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-bold text-foreground text-sm md:text-base">3 Locations</div>
                  <div className="text-xs md:text-sm text-muted-foreground">El Campo • Houston West • Houston South</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
