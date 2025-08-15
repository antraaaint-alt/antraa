import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import heroImage from "@/assets/hero-interior.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioOffice from "@/assets/portfolio-office.jpg";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

  const features = [
    {
      icon: Eye,
      title: "Visionary Design",
      description: "Creating spaces that reflect your unique style and personality"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Using only the finest materials and luxury finishes"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Personalized service tailored to your specific needs"
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized excellence in interior design innovation"
    }
  ];

  const portfolioItems = [
    {
      image: portfolioBedroom,
      title: "Luxury Bedroom Suite",
      category: "Residential"
    },
    {
      image: portfolioKitchen,
      title: "Modern Kitchen Design",
      category: "Residential"
    },
    {
      image: portfolioOffice,
      title: "Executive Office Space",
      category: "Commercial"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section size="xl" className="relative min-h-screen flex items-center hero-gradient">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury Interior Design"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 fade-in">
              <span className="text-gradient">ANTRAA</span>
            </h1>
            <div className="text-2xl md:text-4xl font-serif mb-8 text-luxury-charcoal slide-in-left stagger-1">
              Transforming Spaces into
              <span className="block text-gradient font-bold">Luxury Experiences</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl slide-in-left stagger-2">
              Award-winning interior design services that blend sophistication with 
              functionality. Let us create your dream space with our expertise in 
              luxury residential and commercial design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 slide-in-up stagger-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section variant="elegant" size="lg">
        <Container>
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Why Choose <span className="text-gradient">ANTRAA</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference of working with a design team that understands 
              luxury, quality, and the art of creating extraordinary spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="bg-card/60 backdrop-blur-sm border-primary/10 hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio Preview */}
      <Section size="lg">
        <Container>
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our latest interior design masterpieces that showcase 
              our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.title} 
                className="group overflow-hidden bg-card hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-primary-glow">{item.category}</p>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/portfolio">
                View Complete Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="luxury" size="lg">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-luxury-charcoal">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-luxury-bronze mb-8">
              Let's discuss your vision and create something extraordinary together. 
              Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;