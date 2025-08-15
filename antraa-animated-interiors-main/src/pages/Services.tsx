import { useEffect } from "react";
import { Home, Building, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Link } from "react-router-dom";
import SpecializedServices from "@/components/SpecializedServices";

const Services = () => {
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

  const mainServices = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home transformations including living rooms, bedrooms, kitchens, and bathrooms.",
      features: ["Space Planning", "Custom Furniture", "Color Consultation", "Lighting Design"],
      price: "Starting from ₹2,50,000"
    },
    {
      icon: Building,
      title: "Commercial Design",
      description: "Professional office spaces, retail stores, restaurants, and hospitality venues.",
      features: ["Brand Integration", "Functional Layout", "Employee Wellness", "Client Experience"],
      price: "Starting from ₹5,00,000"
    },
    {
      icon: Palette,
      title: "Complete Renovation",
      description: "Full-scale renovation projects from concept to completion with project management.",
      features: ["Structural Changes", "Permit Assistance", "Contractor Coordination", "Timeline Management"],
      price: "Custom Quote"
    }
  ];


  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with an in-depth discussion about your vision, needs, and budget to understand your unique requirements."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our team creates detailed design concepts, mood boards, and 3D visualizations to bring your vision to life."
    },
    {
      step: "03",
      title: "Design Refinement",
      description: "We refine the design based on your feedback, ensuring every detail aligns with your expectations."
    },
    {
      step: "04",
      title: "Implementation",
      description: "Professional execution with careful project management, quality control, and timely delivery."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section size="lg" className="hero-gradient">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-on-scroll">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive interior design solutions tailored to transform your space 
              into a reflection of your unique style and functional needs.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Services */}
      <Section size="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card 
                key={service.title} 
                className="bg-card hover-lift animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="text-center mb-4">
                      <p className="font-semibold text-primary">{service.price}</p>
                    </div>
                    <Button variant="luxury" className="w-full" asChild>
                      <Link to="/contact">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Specialized Services */}
      <SpecializedServices />

      {/* Process Section */}
      <Section size="lg">
        <Container>
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach that ensures your project is completed efficiently 
              while maintaining the highest standards of quality and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={step.step} 
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-luxury-bronze mb-8">
              Let's discuss your vision and create a personalized design solution 
              that transforms your space into something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Services;