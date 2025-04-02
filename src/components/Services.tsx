
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "AI-Powered Marketing",
    description: "Target the right clients with precision using our AI-driven marketing strategies tailored specifically for medspa businesses.",
    features: [
      "Client acquisition & retention",
      "Data-driven campaign optimization",
      "Social media management",
      "SEO & content marketing"
    ]
  },
  {
    id: 2,
    title: "Exclusive Treatments",
    description: "Access curated, clinically-validated treatment solutions including Korean innovations to differentiate your medspa.",
    features: [
      "Korean aesthetic innovations",
      "Exclusive product access",
      "Staff training & certification",
      "Treatment protocol optimization"
    ]
  },
  {
    id: 3,
    title: "Operations Excellence",
    description: "Streamline your medspa operations to maximize efficiency, client satisfaction, and revenue.",
    features: [
      "Workflow optimization",
      "Client journey mapping",
      "Scheduling & resource management",
      "Performance analytics"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Comprehensive Growth Solutions</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Our services are designed to address every aspect of your medspa's growth journey, from attracting new clients to optimizing operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={service.id} className="border border-asentica-beige hover:shadow-md transition-shadow overflow-hidden group">
              <CardContent className="p-6">
                <div className="h-full flex flex-col">
                  <h3 className="heading-md mb-3">{service.title}</h3>
                  <p className="paragraph text-base mb-6">{service.description}</p>
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 text-asentica-gold">
                            <Check size={16} />
                          </span>
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-asentica-beige-light to-white"></div>
    </section>
  );
};

export default Services;
