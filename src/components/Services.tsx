
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Layers, HeartHandshake } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  bulletPoints 
}: { 
  icon: React.ElementType; 
  title: string; 
  bulletPoints: string[] 
}) => (
  <Card className="border-asentica-beige hover:shadow-md transition-shadow duration-300">
    <CardHeader className="pb-2">
      <div className="h-12 w-12 rounded-full bg-asentica-beige flex items-center justify-center mb-4">
        <Icon className="text-asentica-brown h-6 w-6" />
      </div>
      <CardTitle className="text-xl text-asentica-brown">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-asentica-gold mr-2">•</span>
            <CardDescription className="text-foreground/80">{point}</CardDescription>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">How We Help Your Medspa Grow</h2>
          <p className="paragraph max-w-2xl mx-auto text-foreground/80">
            Our comprehensive approach combines cutting-edge technology with industry expertise
            to deliver measurable growth for your medspa business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <ServiceCard 
              icon={BrainCircuit}
              title="AI-Powered Marketing Engine"
              bulletPoints={[
                "Targeted campaigns, client segmentation, and automated follow-ups",
                "Content & influencer partnerships that convert"
              ]}
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <ServiceCard 
              icon={Layers}
              title="Curated Treatment Portfolio"
              bulletPoints={[
                "Access to effective skincare products, injectables, and tech from Korea and beyond",
                "Always clinically validated, business-aligned"
              ]}
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <ServiceCard 
              icon={HeartHandshake}
              title="Full-Service Support"
              bulletPoints={[
                "Branding, onboarding, training, and conversion strategy",
                "No fluff, just results"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
