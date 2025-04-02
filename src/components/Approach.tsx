import React from "react";
import { ChartLine, TrendingUp, Monitor } from "lucide-react"; // Fixed the icon import

const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Proven Approach</h2>
          <p className="paragraph max-w-2xl mx-auto">
            We combine cutting-edge AI technology with proven marketing strategies to deliver exceptional results for your medspa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI-Driven Marketing */}
          <div className="text-center p-6 rounded-lg shadow-md bg-asentica-beige-light/50 hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-asentica-gold/20 mx-auto mb-4">
              <ChartLine className="h-8 w-8 text-asentica-gold" />
            </div>
            <h3 className="heading-md mb-2">AI-Driven Marketing</h3>
            <p className="paragraph-sm">
              Attract high-value clients with personalized campaigns and data-driven insights.
            </p>
          </div>

          {/* Enhanced Client Retention */}
          <div className="text-center p-6 rounded-lg shadow-md bg-asentica-beige-light/50 hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-asentica-gold/20 mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-asentica-gold" />
            </div>
            <h3 className="heading-md mb-2">Enhanced Client Retention</h3>
            <p className="paragraph-sm">
              Boost loyalty and repeat business with tailored experiences and engagement strategies.
            </p>
          </div>

          {/* Performance Monitoring */}
          <div className="text-center p-6 rounded-lg shadow-md bg-asentica-beige-light/50 hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-asentica-gold/20 mx-auto mb-4">
              <Monitor className="h-8 w-8 text-asentica-gold" />
            </div>
            <h3 className="heading-md mb-2">Performance Monitoring</h3>
            <p className="paragraph-sm">
              Track your success with real-time analytics and transparent reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
