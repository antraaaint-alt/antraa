import { useEffect } from "react";
import { Award, Heart, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Link } from "react-router-dom";
import priyaPortrait from "@/assets/priya-portrait.jpg";

const About = () => {
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

  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every project is approached with genuine passion and dedication to creating exceptional spaces."
    },
    {
      icon: Target,
      title: "Vision & Innovation",
      description: "We bring fresh perspectives and innovative solutions to every design challenge."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Building lasting relationships through collaborative design processes and exceptional service."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Award-winning designs that have earned recognition in the interior design industry."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section size="lg" className="hero-gradient">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                About <span className="text-gradient">ANTRAA</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded with a vision to transform ordinary spaces into extraordinary 
                experiences, ANTRAA represents the pinnacle of luxury interior design. 
                Our approach combines artistic vision with practical functionality, 
                creating spaces that not only look beautiful but enhance the way you live and work.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="relative z-10">
                <img
                  src={priyaPortrait}
                  alt="Priya Prajapati - Interior Designer"
                  className="w-full max-w-md mx-auto rounded-xl shadow-elegant hover:shadow-hover transition-shadow duration-500"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-xl -z-10 blur-xl"></div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Founder Section */}
      <Section variant="elegant" size="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Meet <span className="text-gradient">Priya Prajapati</span>
            </h2>
            <h3 className="text-2xl font-serif text-luxury-bronze mb-8">Founder & Lead Designer</h3>
            
            <div className="text-lg text-muted-foreground space-y-6 text-left max-w-3xl mx-auto">
              <p>
                With over 4 years of experience in luxury interior design, Priya Prajapati 
                has established herself as a visionary in creating spaces that seamlessly 
                blend aesthetics with functionality. Her journey began with a passion for 
                transforming everyday environments into extraordinary experiences.
              </p>
              
              <p>
                Priya's design philosophy centers on understanding the unique lifestyle 
                and preferences of each client, ensuring that every space tells a personal 
                story while maintaining the highest standards of luxury and sophistication. 
                Her expertise spans residential, commercial, and hospitality projects.
              </p>
              
              <p>
                Having worked with prestigious clients across various sectors, Priya brings 
                a wealth of knowledge in space planning, color theory, and luxury materials. 
                Her commitment to excellence and attention to detail has earned her recognition 
                in the interior design community and numerous satisfied clients.
              </p>
            </div>

            <div className="mt-12">
              <Button variant="luxury" size="lg" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section size="lg">
        <Container>
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every space we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="bg-card/60 backdrop-blur-sm border-primary/10 hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section variant="luxury" size="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-display font-bold mb-6 text-luxury-charcoal">Our Mission</h3>
              <p className="text-lg text-luxury-bronze mb-6 leading-relaxed">
                To create extraordinary interior spaces that enhance the quality of life 
                for our clients while pushing the boundaries of design innovation. We are 
                committed to delivering personalized luxury experiences that exceed expectations.
              </p>
              <p className="text-luxury-bronze leading-relaxed">
                Every project is an opportunity to transform not just a space, but the way 
                people interact with their environment, creating lasting memories and 
                meaningful connections.
              </p>
            </div>

            <div className="animate-on-scroll">
              <h3 className="text-3xl font-display font-bold mb-6 text-luxury-charcoal">Our Vision</h3>
              <p className="text-lg text-luxury-bronze mb-6 leading-relaxed">
                To be recognized as the leading luxury interior design firm, known for our 
                innovative approach, exceptional craftsmanship, and unwavering commitment 
                to client satisfaction. We envision a future where design transcends aesthetics 
                to create truly transformative experiences.
              </p>
              <p className="text-luxury-bronze leading-relaxed">
                We aspire to set new standards in the industry through sustainable practices, 
                cutting-edge design solutions, and a deep understanding of our clients' evolving needs.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;