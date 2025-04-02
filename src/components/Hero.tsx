
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";

const Hero = () => {
  const { trackCTAClick } = useAnalytics();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    trackCTAClick("Book a Free Growth Audit", "Hero Section");
  };

  const handleSecondaryClick = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    trackCTAClick("Explore Our Services", "Hero Section");
  };

  return (
    <section aria-labelledby="hero-heading" className="min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-asentica-beige-light to-white">
      <div className="container-custom z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="hero-heading" className="heading-xl mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Unlock Medspa Growth with <span className="text-asentica-gold">AI-Driven</span> Marketing & Trusted Treatments
          </h1>
          <p className="paragraph mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Asentica helps you attract better clients, boost retention, and stand out with high-performing products and modern marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              className="btn-primary" 
              onClick={scrollToContact}
              aria-label="Book a Free Growth Audit - scroll to contact form"
            >
              Book a Free Growth Audit
            </Button>
            <Button 
              variant="outline" 
              className="border-asentica-brown text-asentica-brown hover:bg-asentica-beige"
              onClick={handleSecondaryClick}
              aria-label="Explore Our Services - scroll to services section"
            >
              Explore Our Services
            </Button>
          </div>
          <p className="text-sm text-asentica-brown/70 mt-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            Partnered with top medspas & aesthetic leaders in the U.S. and Korea.
          </p>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-8 text-center animate-fade-in" style={{ animationDelay: "1s" }}>
        <a 
          href="#services" 
          className="inline-block text-asentica-brown hover:text-asentica-brown/70 transition-colors"
          aria-label="Scroll down to services section"
        >
          <span className="block mb-2 text-sm">Discover More</span>
          <ArrowDown className="mx-auto animate-bounce" aria-hidden="true" size={24} />
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-24 w-72 h-72 bg-asentica-beige rounded-full opacity-20 blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 -left-12 w-48 h-48 bg-asentica-gold rounded-full opacity-10 blur-2xl" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
