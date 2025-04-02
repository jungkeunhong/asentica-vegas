
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Results = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="heading-lg mb-6">We Know Aesthetics. And Growth.</h2>
            <p className="paragraph mb-6">
              Asentica is a U.S.-based growth partner for modern medspas. We combine AI-powered marketing, global product curation, and hands-on advisory to help you grow faster—with less stress.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-asentica-beige-light border-0">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-asentica-brown mb-2">94%</div>
                  <p className="text-sm text-foreground/80">Client retention rate</p>
                </CardContent>
              </Card>
              <Card className="bg-asentica-beige-light border-0">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-asentica-brown mb-2">48%</div>
                  <p className="text-sm text-foreground/80">Average revenue increase</p>
                </CardContent>
              </Card>
              <Card className="bg-asentica-beige-light border-0">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-asentica-brown mb-2">3.2x</div>
                  <p className="text-sm text-foreground/80">Client acquisition</p>
                </CardContent>
              </Card>
              <Card className="bg-asentica-beige-light border-0">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-asentica-brown mb-2">27+</div>
                  <p className="text-sm text-foreground/80">Exclusive treatments</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-asentica-beige/20 p-8 rounded-xl animate-fade-in">
            <div className="mb-4 text-asentica-gold">★★★★★</div>
            <p className="text-lg italic mb-6">
              "Asentica transformed our client acquisition strategy. Our bookings increased by 37% within the first two months, and we've seen a noticeable improvement in client retention."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-asentica-beige flex items-center justify-center mr-4">
                <span className="text-asentica-brown font-semibold">JD</span>
              </div>
              <div>
                <div className="font-semibold">Dr. Jennifer Davis</div>
                <div className="text-sm text-foreground/70">Glow Medspa, California</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
