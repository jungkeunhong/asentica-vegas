
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    quote: "Working with Asentica transformed our medspa. Their AI-driven approach helped us identify the perfect client base and increased our bookings by 75% in just three months.",
    author: "Sarah Johnson",
    position: "Owner, Radiance Medspa",
    stats: {
      value: "75%",
      label: "Increase in Bookings"
    }
  },
  {
    id: 2,
    quote: "The exclusive treatments Asentica provided gave us a true competitive edge in our market. Our clients love the results, and we've seen a 60% increase in repeat business.",
    author: "Michael Chen",
    position: "Director, Glow Aesthetic Clinic",
    stats: {
      value: "60%",
      label: "Increase in Client Retention"
    }
  },
  {
    id: 3,
    quote: "Asentica's operational guidance helped us streamline our processes, reducing wait times and improving the overall client experience. Our revenue has grown by 40% year-over-year.",
    author: "Emily Rodriguez",
    position: "Manager, Pure Skin Solutions",
    stats: {
      value: "40%",
      label: "Revenue Growth"
    }
  }
];

const Results = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Measurable Results</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Our partners experience significant growth in client acquisition, retention, and revenue. Here's what they say about working with Asentica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-asentica-beige hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-6 text-center">
                  <div className="text-4xl font-bold text-asentica-gold mb-1">{testimonial.stats.value}</div>
                  <div className="text-sm uppercase tracking-wider text-foreground/70">{testimonial.stats.label}</div>
                </div>
                <blockquote className="mb-6 text-foreground/80 italic text-center">"{testimonial.quote}"</blockquote>
                <div className="text-center">
                  <div className="font-semibold text-asentica-brown">{testimonial.author}</div>
                  <div className="text-sm text-foreground/70">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
