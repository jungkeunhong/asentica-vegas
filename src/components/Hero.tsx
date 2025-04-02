
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-asentica-beige-light to-white">
      <div className="container-custom z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Grow Your Medspa with <span className="text-asentica-gold">AI-Powered</span> Solutions
          </h1>
          <p className="paragraph mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Asentica combines AI-driven marketing expertise with exclusive treatment solutions to help medspas attract qualified clients, optimize operations, and maximize revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button className="btn-primary">Schedule a Consultation</Button>
            <Button variant="outline" className="border-asentica-brown text-asentica-brown hover:bg-asentica-beige">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-8 text-center animate-fade-in" style={{ animationDelay: "1s" }}>
        <a href="#services" className="inline-block text-asentica-brown hover:text-asentica-brown/70 transition-colors">
          <span className="block mb-2 text-sm">Discover More</span>
          <ArrowDown className="mx-auto animate-bounce" size={24} />
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-24 w-72 h-72 bg-asentica-beige rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-12 w-48 h-48 bg-asentica-gold rounded-full opacity-10 blur-2xl"></div>
    </section>
  );
};

export default Hero;
