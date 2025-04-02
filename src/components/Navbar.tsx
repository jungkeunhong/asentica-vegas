
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-asentica-brown">
              Asentica
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <a href="#services" className="text-asentica-brown/90 hover:text-asentica-brown transition-colors">
                Services
              </a>
              <a href="#approach" className="text-asentica-brown/90 hover:text-asentica-brown transition-colors">
                Our Approach
              </a>
              <a href="#results" className="text-asentica-brown/90 hover:text-asentica-brown transition-colors">
                Results
              </a>
              <a href="#contact" className="text-asentica-brown/90 hover:text-asentica-brown transition-colors">
                Contact
              </a>
            </div>
            <Button className="btn-primary">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-asentica-brown" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-asentica-brown/90 hover:text-asentica-brown transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#approach" 
                className="text-asentica-brown/90 hover:text-asentica-brown transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Our Approach
              </a>
              <a 
                href="#results" 
                className="text-asentica-brown/90 hover:text-asentica-brown transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Results
              </a>
              <a 
                href="#contact" 
                className="text-asentica-brown/90 hover:text-asentica-brown transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button className="btn-primary w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
