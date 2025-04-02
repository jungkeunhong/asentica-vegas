
import React from "react";
import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./ContactForm";

interface ContactFormFieldsProps {
  control: Control<FormValues>;
}

export const ContactFormFields: React.FC<ContactFormFieldsProps> = ({ control }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormControl>
                <Input 
                  id="name" 
                  placeholder="Jane Smith" 
                  {...field} 
                  aria-required="true" 
                  className="focus:ring-2 focus:ring-asentica-gold/30 transition-shadow" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="clinicName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="clinicName">Clinic Name</FormLabel>
              <FormControl>
                <Input 
                  id="clinicName" 
                  placeholder="Glow Aesthetics" 
                  {...field} 
                  aria-required="true" 
                  className="focus:ring-2 focus:ring-asentica-gold/30 transition-shadow" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormControl>
              <Input 
                id="email" 
                type="email" 
                placeholder="jane@glowmedical.com" 
                {...field} 
                aria-required="true" 
                className="focus:ring-2 focus:ring-asentica-gold/30 transition-shadow" 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="interests"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="interests">Areas of Interest</FormLabel>
            <FormControl>
              <Input 
                id="interests"
                placeholder="Marketing, Products, Training, etc." 
                {...field} 
                className="focus:ring-2 focus:ring-asentica-gold/30 transition-shadow"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormControl>
              <Textarea 
                id="message"
                placeholder="Tell us about your medspa and what you're looking to achieve..." 
                className="min-h-[120px] focus:ring-2 focus:ring-asentica-gold/30 transition-shadow" 
                {...field} 
                aria-required="true"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
