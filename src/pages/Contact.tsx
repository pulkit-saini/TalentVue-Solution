import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import emailjs from '@emailjs/browser'; // Import EmailJS

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Get data from the form
    // Note: keys here (name, email, etc.) must match the {{variables}} in your EmailJS template
    const templateParams = {
      from_name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      from_email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      phone: (e.currentTarget.elements.namedItem('phone') as HTMLInputElement).value,
      company: (e.currentTarget.elements.namedItem('company') as HTMLInputElement).value,
      subject: (e.currentTarget.elements.namedItem('subject') as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    // 2. Send email using EmailJS
    // Replace these placeholders with your actual IDs from the EmailJS dashboard
    const SERVICE_ID = 'service_1wwxdve';
    const TEMPLATE_ID = 'template_e9jougn';
    const PUBLIC_KEY = 'fI08jdPuLpFvWp6A8';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("Message sent successfully! We'll get back to you soon.");
        (e.target as HTMLFormElement).reset(); // Clear the form
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Have a question or need assistance? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. Our team is ready to assist you 
                  with your inquiries and requirements.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                        <p className="text-muted-foreground">
                          TalentVue Solution Pvt Ltd<br />
                          SA/5, Shastri Nagar<br />
                          Ghaziabad, Uttar Pradesh 201002<br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                          +91 9958789784
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          info.talentvuesolutions@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold mb-4">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Saturday: 9:00 AM - 2:00 PM IST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required disabled={isSubmitting} />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 9876543210" disabled={isSubmitting} />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" placeholder="Your Company" disabled={isSubmitting} />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" name="subject" placeholder="How can we help you?" required disabled={isSubmitting} />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Tell us more about your inquiry..." 
                        rows={6}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7654321098765!2d77.4246890153053!3d28.687654982404237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1b8ae7e3dcf%3A0x3b5c5a5a5a5a5a5a!2sShastri%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201002!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TalentVue Solution Office Location"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;