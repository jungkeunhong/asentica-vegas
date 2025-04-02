
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChartLineUp, Zap, Shield, Globe } from "lucide-react";

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => (
  <Card className="border-0 shadow-none hover:bg-asentica-beige/10 transition-colors">
    <CardContent className="p-6 flex items-start">
      <div className="mr-4 bg-asentica-beige/30 p-3 rounded-full">
        <Icon className="h-6 w-6 text-asentica-brown" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-asentica-brown mb-1">{title}</h3>
        <p className="text-foreground/80 text-sm">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-asentica-beige-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Built for Busy Medspa Operators</h2>
          <p className="paragraph max-w-2xl mx-auto text-foreground/80">
            We understand the unique challenges medspas face in today's competitive landscape.
            Our solutions are designed with your business needs in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <BenefitCard
              icon={ChartLineUp}
              title="Proven Results"
              description="Designed to increase patient bookings and ROI"
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <BenefitCard
              icon={Zap}
              title="Fast Execution"
              description="Plug-and-play support with ready-to-launch tools"
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <BenefitCard
              icon={Shield}
              title="Trusted by Experts"
              description="Our team includes clinical advisors and ex-consultants"
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <BenefitCard
              icon={Globe}
              title="Global Sourcing"
              description="Korean innovations + global treatments you can trust"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
