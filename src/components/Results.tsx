
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const Results = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection animationType="slide-in-left">
            <h2 className="heading-lg mb-6">We Know Aesthetics. And Growth.</h2>
            <p className="paragraph mb-6">
              Asentica is a U.S.-based growth partner for modern medspas. We combine AI-powered marketing, global product curation, and hands-on advisory to help you grow faster—with less stress.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <AnimatedSection delay={0.2}>
                <Card className="bg-gradient-to-br from-asentica-beige-light to-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-asentica-brown mb-2">94%</div>
                    <p className="text-sm text-foreground/80">Client retention rate</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <Card className="bg-gradient-to-br from-asentica-beige-light to-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-asentica-brown mb-2">48%</div>
                    <p className="text-sm text-foreground/80">Average revenue increase</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <Card className="bg-gradient-to-br from-asentica-beige-light to-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-asentica-brown mb-2">3.2x</div>
                    <p className="text-sm text-foreground/80">Client acquisition</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5}>
                <Card className="bg-gradient-to-br from-asentica-beige-light to-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-asentica-brown mb-2">27+</div>
                    <p className="text-sm text-foreground/80">Exclusive treatments</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="slide-in-right" className="bg-gradient-to-br from-asentica-beige/30 to-asentica-beige/10 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="mb-4 text-asentica-gold">★★★★★</div>
            <p className="text-lg italic mb-6">
              "Asentica transformed our client acquisition strategy. Our bookings increased by 37% within the first two months, and we've seen a noticeable improvement in client retention."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-asentica-beige to-asentica-beige-light flex items-center justify-center mr-4 shadow-md">
                <span className="text-asentica-brown font-semibold">JD</span>
              </div>
              <div>
                <div className="font-semibold">Dr. Jennifer Davis</div>
                <div className="text-sm text-foreground/70">Glow Medspa, California</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Results;
