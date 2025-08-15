import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { 
  Ruler, 
  Building, 
  Palette, 
  Sofa, 
  Lightbulb, 
  Paintbrush, 
  Home, 
  Settings,
  ClipboardList,
  Camera,
  Hammer,
  Wrench
} from "lucide-react";

const SpecializedServices = () => {
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

  const specializedServices = [
    {
      icon: Ruler,
      title: "Space Planning & Concept Development",
      image: "/src/assets/modern-living-room.jpg",
      services: [
        "Client Consultation – Understanding needs, style preferences, budget",
        "Site Measurement & Analysis – Measuring existing space and noting limitations",
        "Layout Planning – Deciding room arrangements, furniture placement",
        "Mood Boards – Visualizing the theme, colors, and style",
        "Concept Design – Sketches, digital mockups, or 3D renders of the design"
      ]
    },
    {
      icon: Building,
      title: "Structural & Architectural Work",
      image: "/src/assets/modern-kitchen-design.jpg",
      services: [
        "Partitioning Walls – Adding/removing walls to modify space",
        "False Ceiling Design – POP, gypsum, or wooden ceilings",
        "Flooring Work – Tiles, marble, wood, vinyl, carpet",
        "Lighting Layout – Placement of lights for functionality and ambience",
        "Window & Door Design – Frames, shutters, blinds, curtains"
      ]
    },
    {
      icon: Palette,
      title: "Material & Finish Selection",
      image: "/src/assets/luxury-bathroom.jpg",
      services: [
        "Color Scheme Selection – Walls, accents, and furniture finishes",
        "Furniture Materials – Wood, metal, glass, fabric choices",
        "Surface Finishes – Laminates, veneers, paints, wallpapers, texture paints",
        "Upholstery & Fabrics – Sofa, curtains, cushions",
        "Floor & Wall Tiles – Selection for bathrooms, kitchens, living spaces"
      ]
    },
    {
      icon: Sofa,
      title: "Custom Furniture & Fixture Design",
      image: "/src/assets/cozy-bedroom.jpg",
      services: [
        "Modular Kitchen Design – Cabinets, storage, countertops",
        "Wardrobes & Storage Units – Functional and aesthetic",
        "TV Units & Entertainment Walls",
        "Study Tables, Shelving Units, Display Racks",
        "Custom Sofas, Beds, Dining Tables"
      ]
    },
    {
      icon: Lightbulb,
      title: "Lighting & Electrical Work",
      image: "/src/assets/office-workspace.jpg",
      services: [
        "Ambient Lighting – General room lighting",
        "Task Lighting – Study lights, kitchen work lights",
        "Accent Lighting – Spotlights, wall washers, LED strips",
        "Decorative Lighting – Chandeliers, pendant lights",
        "Electrical Points Planning – Switches, sockets, automation systems"
      ]
    },
    {
      icon: Paintbrush,
      title: "Décor & Styling",
      image: "/src/assets/dining-room.jpg",
      services: [
        "Wall Art & Frames – Paintings, murals, photo walls",
        "Indoor Plants & Greenery – Live or artificial plants",
        "Decorative Accessories – Lamps, vases, rugs, sculptures",
        "Curtains, Blinds, and Drapes",
        "Tableware & Decorative Trays for staged homes"
      ]
    },
    {
      icon: Home,
      title: "Specialized Areas",
      image: "/src/assets/portfolio-bathroom.jpg",
      services: [
        "Bathroom Interior Design – Vanity units, fittings, tiles",
        "Kitchen Interior Design – Modular kitchens, pantry storage",
        "Office/Workstation Design – Ergonomic layouts, partitions",
        "Commercial Interiors – Restaurants, hotels, showrooms",
        "Outdoor / Terrace Spaces – Decking, seating, landscaping"
      ]
    },
    {
      icon: Settings,
      title: "Technical & Execution Work",
      image: "/src/assets/portfolio-office.jpg",
      services: [
        "3D Rendering & Visualization – Digital models before execution",
        "Vendor Coordination – Working with carpenters, painters, electricians",
        "Budget Planning & Cost Estimation",
        "Timeline Management – Ensuring project finishes on time",
        "Quality Checks & Final Handover"
      ]
    }
  ];

  return (
    <Section variant="elegant" size="lg">
      <Container>
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Specialized <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive interior design services covering every aspect of your project, 
            from initial concept to final execution with meticulous attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {specializedServices.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-card/80 backdrop-blur-sm border-primary/10 hover-lift animate-on-scroll overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-display">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SpecializedServices;