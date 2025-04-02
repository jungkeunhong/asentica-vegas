
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const approachSteps = [
  {
    id: 1,
    number: "01",
    title: "Analysis",
    description: "We evaluate your current performance and market position to identify growth opportunities."
  },
  {
    id: 2,
    number: "02",
    title: "Strategy",
    description: "Develop a customized growth plan leveraging AI insights and industry expertise."
  },
  {
    id: 3,
    number: "03",
    title: "Implementation",
    description: "Execute marketing campaigns and integrate exclusive treatments into your service offerings."
  },
  {
    id: 4,
    number: "04",
    title: "Optimization",
    description: "Continuously refine strategies based on performance data to maximize ROI."
  }
];

const Approach = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="approach" className="py-20 bg-asentica-beige-light relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Data-Driven Approach</h2>
          <p className="paragraph max-w-2xl mx-auto">
            We follow a proven methodology to transform your medspa into a growth-oriented business with measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachSteps.map((step, index) => (
            <div
              key={step.id}
              ref={el => cardRefs.current[index] = el}
              className="opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="border-none bg-white h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="text-3xl font-bold text-asentica-gold mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-asentica-brown mb-3">{step.title}</h3>
                  <p className="text-foreground/80 text-base">{step.description}</p>
                  {index < approachSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-[2px] bg-asentica-gold transform translate-x-4"></div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-asentica-beige-light"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-asentica-beige-light"></div>
    </section>
  );
};

export default Approach;
