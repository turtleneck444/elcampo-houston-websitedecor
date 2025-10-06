import { Phone, MapPin, Mail, Clock, Shield, Award, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Display Repair",
    "Battery Replacement",
    "Carrier Unlocking",
    "Bill Payment",
    "Accessories",
    "Device Diagnostics",
  ];

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Houston Phone" className="h-16 w-auto mb-6" />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Texas's premier mobile solutions provider. Enterprise-grade services backed by certified expertise and guaranteed results.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5 text-accent hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5 text-accent hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5 text-accent hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent transition-all group-hover:w-4"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group cursor-pointer">
                    <span className="w-0 h-0.5 bg-accent transition-all group-hover:w-4"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:8329916859" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent group-hover:text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Call Us</p>
                  <p className="font-semibold">(832) 991-6859</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Hours</p>
                  <p className="font-semibold">Mon-Sat: 10AM-7PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Locations</p>
                  <p className="font-semibold">3 Texas Locations</p>
                  <p className="text-sm mt-1">El Campo, Houston West, Houston South</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-primary-foreground/10 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm text-primary-foreground/80">BBB Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-sm text-primary-foreground/80">Certified Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm text-primary-foreground/80">90-Day Warranty</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Houston Phone. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
