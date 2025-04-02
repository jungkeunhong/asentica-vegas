
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const { trackCTAClick } = useAnalytics();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    trackCTAClick("Book a Free Growth Audit", "Hero Section");
  };

  const handleSecondaryClick = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    trackCTAClick("Explore Our Services", "Hero Section");
  };

  // Parallax effect styles
  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
  };

  return (
    <section aria-labelledby="hero-heading" className="min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-asentica-beige-light to-white">
      <div className="container-custom z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h1 id="hero-heading" className="heading-xl mb-6">
              Unlock Medspa Growth with <span className="text-asentica-gold">AI-Driven</span> Marketing & Trusted Treatments
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="paragraph mb-8 max-w-2xl mx-auto">
              Asentica helps you attract better clients, boost retention, and stand out with high-performing products and modern marketing strategies.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="btn-primary hover-glow" 
                onClick={scrollToContact}
                aria-label="Book a Free Growth Audit - scroll to contact form"
              >
                Book a Free Growth Audit
              </Button>
              <Button 
                variant="outline" 
                className="border-asentica-brown text-asentica-brown hover:bg-asentica-beige transition-all duration-300"
                onClick={handleSecondaryClick}
                aria-label="Explore Our Services - scroll to services section"
              >
                Explore Our Services
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <p className="text-sm text-asentica-brown/70 mt-6">
              Partnered with top medspas & aesthetic leaders in the U.S. and Korea.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection delay={0.8} className="absolute left-0 right-0 bottom-8 text-center">
        <a 
          href="#services" 
          className="inline-block text-asentica-brown hover:text-asentica-brown/70 transition-colors"
          aria-label="Scroll down to services section"
        >
          <span className="block mb-2 text-sm">Discover More</span>
          <ArrowDown className="mx-auto animate-bounce" aria-hidden="true" size={24} />
        </a>
      </AnimatedSection>
      
      {/* Decorative elements with parallax effect */}
      <div 
        className="absolute top-1/3 -right-24 w-72 h-72 bg-asentica-beige rounded-full opacity-20 blur-3xl" 
        aria-hidden="true"
        style={parallaxStyle}
      ></div>
      <div 
        className="absolute bottom-1/4 -left-12 w-48 h-48 bg-asentica-gold rounded-full opacity-10 blur-2xl" 
        aria-hidden="true"
        style={{
          transform: `translateY(${-scrollPosition * 0.15}px)`,
        }}
      ></div>
    </section>
  );
};

export default Hero;
