
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  clinicName: z.string().min(2, { message: "Clinic name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  interests: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      clinicName: "",
      email: "",
      interests: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data submitted:", data);
      
      // Show success state
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "We've received your inquiry and will be in touch soon.",
      });
      
      // Reset form after submission
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-asentica-beige-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Ready to Grow Your Medspa?</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Schedule a free consultation with our team of medspa growth specialists.
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center p-8 bg-white rounded-lg shadow-sm animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="heading-md mb-4">Thank You!</h3>
              <p className="paragraph mb-6">
                We've received your information and will be in touch shortly to discuss how we can help grow your medspa business.
              </p>
              <Button 
                onClick={() => setIsSuccess(false)}
                className="btn-primary"
              >
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-in">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="clinicName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Clinic Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Glow Aesthetics" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jane@glowmedical.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Areas of Interest</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Marketing, Products, Training, etc." 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your medspa and what you're looking to achieve..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="btn-primary w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Book a Free Growth Audit"}
                    </Button>
                    <p className="text-xs text-center mt-3 text-muted-foreground">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
