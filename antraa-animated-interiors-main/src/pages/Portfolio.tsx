import { useEffect, useState } from "react";
import { Eye, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Link } from "react-router-dom";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioOffice from "@/assets/portfolio-office.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    {
      id: 1,
      image: portfolioBedroom,
      title: "Luxury Master Bedroom",
      category: "residential",
      client: "Private Residence",
      description: "A serene bedroom sanctuary featuring custom furniture, premium textiles, and sophisticated lighting design.",
      features: ["Custom Headboard", "Premium Fabrics", "Mood Lighting", "Walk-in Closet"]
    },
    {
      id: 2,
      image: portfolioKitchen,
      title: "Modern Gourmet Kitchen",
      category: "residential",
      client: "Family Home",
      description: "Contemporary kitchen design with state-of-the-art appliances, marble countertops, and gold accents.",
      features: ["Marble Countertops", "Premium Appliances", "Custom Cabinetry", "Gold Hardware"]
    },
    {
      id: 3,
      image: portfolioOffice,
      title: "Executive Office Suite",
      category: "commercial",
      client: "Corporate Headquarters",
      description: "Professional workspace designed for productivity and prestige with luxury materials and ergonomic solutions.",
      features: ["Ergonomic Design", "Premium Materials", "Tech Integration", "Meeting Areas"]
    },
    {
      id: 4,
      image: portfolioBedroom,
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      client: "Luxury Hotel",
      description: "Welcoming lobby space that creates lasting first impressions with elegant seating and artistic elements.",
      features: ["Statement Lighting", "Custom Seating", "Art Curation", "Reception Design"]
    },
    {
      id: 5,
      image: portfolioKitchen,
      title: "Penthouse Living Room",
      category: "residential",
      client: "Luxury Penthouse",
      description: "Sophisticated living space with panoramic views, custom furniture, and curated art collection.",
      features: ["Panoramic Views", "Custom Furniture", "Art Collection", "Smart Home"]
    },
    {
      id: 6,
      image: portfolioOffice,
      title: "Retail Showroom",
      category: "commercial",
      client: "Fashion Boutique",
      description: "Elegant retail space designed to enhance product presentation and customer experience.",
      features: ["Product Display", "Customer Flow", "Brand Integration", "Lighting Design"]
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
    { key: "hospitality", label: "Hospitality" }
  ];

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section size="lg" className="hero-gradient">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-on-scroll">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our collection of stunning interior design projects that showcase 
              our commitment to luxury, functionality, and innovative design solutions.
            </p>
          </div>
        </Container>
      </Section>

      {/* Filter Section */}
      <Section size="sm">
        <Container>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <div className="flex items-center text-muted-foreground mr-4">
              <Filter className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {filters.map((filterOption) => (
              <Button
                key={filterOption.key}
                variant={filter === filterOption.key ? "luxury" : "ghost"}
                size="sm"
                onClick={() => setFilter(filterOption.key)}
                className="transition-all duration-300"
              >
                {filterOption.label}
              </Button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio Grid */}
      <Section size="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden bg-card hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="hero" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{item.client}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.features.map((feature) => (
                        <span 
                          key={feature} 
                          className="inline-block px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section variant="elegant" size="lg">
        <Container>
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Impact</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "100+", label: "Happy Clients" },
              { number: "8+", label: "Years Experience" },
              { number: "15+", label: "Awards Won" }
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="luxury" size="lg">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-luxury-charcoal">
              Inspired by Our Work?
            </h2>
            <p className="text-xl text-luxury-bronze mb-8">
              Let's create something extraordinary for your space. Schedule a consultation 
              to discuss your vision and see how we can bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Portfolio;