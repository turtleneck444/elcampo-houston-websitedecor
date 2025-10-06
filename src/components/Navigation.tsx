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
    <nav className="bg-background/95 border-b border-border sticky top-0 z-50 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border/50">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-4 w-4 text-accent" />
              <span className="font-semibold">Texas's Premier Mobile Solutions Provider</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:8329916859" className="text-muted-foreground hover:text-accent transition-colors font-semibold">
              <Phone className="h-4 w-4 inline mr-1" />
              (832) 991-6859
            </a>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Mon-Sat: 10AM-7PM</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Houston Phone - Enterprise Mobile Solutions" className="h-14 w-auto transition-transform group-hover:scale-105" />
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
