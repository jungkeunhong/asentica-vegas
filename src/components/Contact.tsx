
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-asentica-beige-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-lg mb-4">Ready to Grow Your Medspa?</h2>
            <p className="paragraph mb-8">
              Schedule a consultation with our team to learn how Asentica can help you attract more qualified clients, optimize your operations, and increase revenue.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 text-asentica-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-asentica-brown mb-1">Email Us</h3>
                  <p className="text-foreground/80">growth@asentica.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-asentica-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-asentica-brown mb-1">Call Us</h3>
                  <p className="text-foreground/80">(888) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-asentica-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-asentica-brown mb-1">Visit Us</h3>
                  <p className="text-foreground/80">123 Growth Avenue, Suite 100<br />San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-asentica-brown mb-6">Get in Touch</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    className="border-asentica-beige focus:border-asentica-gold focus:ring-asentica-gold/20" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    className="border-asentica-beige focus:border-asentica-gold focus:ring-asentica-gold/20"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="business" className="block text-sm font-medium text-foreground/70 mb-1">
                  Business Name
                </label>
                <Input 
                  id="business" 
                  placeholder="Enter your business name" 
                  className="border-asentica-beige focus:border-asentica-gold focus:ring-asentica-gold/20" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your goals and challenges..." 
                  className="border-asentica-beige focus:border-asentica-gold focus:ring-asentica-gold/20 min-h-[120px]" 
                />
              </div>
              
              <Button className="btn-primary w-full">Submit Request</Button>
              <p className="text-sm text-foreground/60 mt-4 text-center">
                We'll respond to your inquiry within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
