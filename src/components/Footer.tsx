import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Houston Phone</h3>
            <p className="text-primary-foreground/80">
              Bill Pay & Repair Center
            </p>
            <p className="text-primary-foreground/80 mt-2">
              All Carriers • Bill Pay • Unlocks • Repairs
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Phone className="h-5 w-5" />
              <span>(832) 991-6859</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Locations</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">El Campo, Houston West, Houston South</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Houston Phone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
