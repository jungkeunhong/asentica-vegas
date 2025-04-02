
import React, { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { ContactForm } from "./contact/ContactForm";
import { ContactSuccessMessage } from "./contact/ContactSuccessMessage";
import { ContactFormSkeleton } from "./contact/ContactFormSkeleton";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate form loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmitSuccess = () => {
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 bg-asentica-beige-light" aria-labelledby="contact-heading">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 id="contact-heading" className="heading-lg mb-4">Ready to Grow Your Medspa?</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Schedule a free consultation with our team of medspa growth specialists.
            </p>
          </AnimatedSection>

          {isSuccess ? (
            <ContactSuccessMessage onReset={handleReset} />
          ) : (
            isLoading ? (
              <ContactFormSkeleton />
            ) : (
              <AnimatedSection className="bg-white p-8 rounded-lg shadow-sm">
                <ContactForm onSubmitSuccess={handleSubmitSuccess} />
              </AnimatedSection>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
