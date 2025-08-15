import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" }
  ];

  const services = [
    "Residential Design",
    "Commercial Design", 
    "Complete Renovation",
    "Space Planning",
    "Lighting Design",
    "Furniture Selection"
  ];

  return (
    <footer className="bg-luxury-charcoal text-luxury-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-display font-bold text-gradient mb-4 block">
              ANTRAA
            </Link>
            <p className="text-luxury-beige mb-6 leading-relaxed">
              Transforming spaces into luxury experiences with sophisticated design 
              solutions that blend aesthetics with functionality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-luxury-beige hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-luxury-beige">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Priya Prajapati</p>
                  <a 
                    href="tel:+919892545949" 
                    className="text-luxury-beige hover:text-primary transition-colors"
                  >
                    +91 98925 45949
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:antraaaint@gmail.com" 
                    className="text-luxury-beige hover:text-primary transition-colors"
                  >
                    antraaaint@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-luxury-beige">
                    Mumbai, Pune &<br />Surrounding Areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-luxury-bronze/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-luxury-beige text-sm">
              © {currentYear} ANTRAA Interior Design. All rights reserved.
            </div>
            <div className="flex items-center text-luxury-beige text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-primary" />
              <span>for beautiful spaces</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;