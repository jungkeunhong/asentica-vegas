
import React from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-asentica-brown text-white">
      <div className="container-custom">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Asentica</h3>
            <p className="text-sm text-white/80 mb-6">
              Empowering medspas with AI-driven marketing and trusted treatments for sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@asentica.com" className="text-white/80 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  123 Growth Avenue, Suite 500<br />
                  San Francisco, CA 94105
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+18889876543" className="text-sm text-white/80 hover:text-white">
                  (888) 987-6543
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@asentica.com" className="text-sm text-white/80 hover:text-white">
                  info@asentica.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#services" className="block text-sm text-white/80 hover:text-white transition-colors">
                Our Services
              </a>
              <a href="#approach" className="block text-sm text-white/80 hover:text-white transition-colors">
                Why Choose Us
              </a>
              <a href="#results" className="block text-sm text-white/80 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-sm text-white/80 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/80 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Asentica. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-xs text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/80 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
