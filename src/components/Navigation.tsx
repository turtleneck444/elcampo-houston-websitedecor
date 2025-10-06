import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-white via-slate-50 to-white border-b-2 border-accent/20 sticky top-0 z-50 backdrop-blur-xl shadow-premium">
      <div className="container mx-auto px-4">
        {/* Premium Top Bar */}
        <div className="hidden md:flex items-center justify-between py-3 border-b border-accent/10 bg-gradient-to-r from-accent/5 via-transparent to-accent/5">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent animate-pulse" />
              <span className="font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Texas's Premier Mobile Solutions Provider</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:8329916859" className="flex items-center gap-2 text-foreground hover:text-accent transition-all font-bold group">
              <div className="p-2 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              (832) 991-6859
            </a>
            <div className="h-8 w-px bg-border"></div>
            <span className="font-semibold text-muted-foreground">Mon-Sat: 10AM-7PM</span>
          </div>
        </div>

        {/* Premium Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/30 transition-all"></div>
              <img 
                src={logo} 
                alt="Houston Phone - Enterprise Mobile Solutions" 
                className="h-20 w-auto relative z-10 transition-transform group-hover:scale-110 drop-shadow-2xl" 
              />
            </div>
            <div className="hidden lg:block">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent leading-tight">
                HOUSTON PHONE
              </div>
              <div className="text-xs font-semibold text-accent tracking-wider">ENTERPRISE SOLUTIONS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all hover:text-accent relative ${
                  isActive(link.path)
                    ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-accent" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in border-t border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 text-sm font-semibold rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-accent text-primary"
                    : "text-foreground hover:bg-accent/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4 space-y-3">
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-primary font-bold">
                <Phone className="mr-2 h-4 w-4" />
                (832) 991-6859
              </Button>
              <p className="text-xs text-center text-muted-foreground">Mon-Sat: 10AM-7PM</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
