
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-asentica-brown text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Asentica</h3>
            <p className="text-white/80 mb-4">
              Premium growth solutions for medspas, combining AI-powered marketing with exclusive treatment innovations.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">AI Marketing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Exclusive Treatments</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Operations Optimization</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Growth Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Industry Reports</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/70">growth@asentica.com</li>
              <li className="text-white/70">(888) 123-4567</li>
              <li className="text-white/70">123 Growth Avenue<br />San Francisco, CA 94103</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Asentica. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
