"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Calendar, MessageCircle, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    industry: "",
    phone: "",
    message: "",
    requestType: "demo"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized demonstration of our platform",
      action: "Book Now"
    },
    {
      icon: MessageCircle,
      title: "Expert Consultation",
      description: "Discuss your specific manufacturing challenges",
      action: "Talk to Expert"
    },
    {
      icon: Phone,
      title: "Direct Call",
      description: "Speak directly with our solutions team",
      action: "Call Now"
    }
  ];

  const industries = [
    "Food & Beverages",
    "Chemicals & Petrochemicals",
    "Pharmaceuticals",
    "Mining & Materials",
    "Semiconductors",
    "Oil & Gas",
    "Automotive",
    "Aerospace",
    "Other"
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span className="text-sm vercel-text-secondary">Let's Transform Your Operations</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block vercel-text-primary">Get in</span>
                <span className="block vercel-accent">Touch</span>
              </h1>

              <p className="text-xl md:text-2xl vercel-text-secondary max-w-4xl mx-auto leading-relaxed">
                Ready to see how Facilis.AI can transform your manufacturing operations?
                Let's schedule a personalized demonstration.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold vercel-text-primary mb-4">
                How Can We Help?
              </h2>
              <p className="text-xl vercel-text-secondary max-w-3xl mx-auto">
                Choose the best way to connect with our team
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  variants={itemVariants}
                  className="group clean-hover"
                >
                  <Card className="vercel-card h-full">
                    <CardContent className="p-8 text-center space-y-6">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                        <method.icon className="w-8 h-8 vercel-text-primary" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold vercel-text-primary">
                          {method.title}
                        </h3>
                        <p className="vercel-text-secondary">{method.description}</p>
                      </div>
                      <Button className="w-full vercel-button-primary">
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-2 gap-16"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="vercel-card">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold vercel-text-primary mb-3">
                        Request a Demo
                      </h2>
                      <p className="vercel-text-secondary">
                        Fill out the form below and our team will get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            placeholder="Full Name *"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-neutral-950 border-neutral-800 vercel-text-primary placeholder:text-neutral-500"
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-neutral-950 border-neutral-800 vercel-text-primary placeholder:text-neutral-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            placeholder="Company Name *"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="bg-neutral-950 border-neutral-800 vercel-text-primary placeholder:text-neutral-500"
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="Job Title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="bg-neutral-950 border-neutral-800 vercel-text-primary placeholder:text-neutral-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Select onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                            <SelectTrigger className="bg-neutral-950 border-neutral-800 vercel-text-primary">
                              <SelectValue placeholder="Select Industry" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-950 border-neutral-800">
                              {industries.map((industry) => (
                                <SelectItem key={industry} value={industry} className="vercel-text-primary hover:bg-neutral-900">
                                  {industry}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Input
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-neutral-950 border-neutral-800 vercel-text-primary placeholder:text-neutral-500"
                          />
                        </div>
                      </div>

                      <div>
                        <Textarea
                          placeholder="Tell us about your manufacturing challenges and what you'd like to see in the demo..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-neutral-950 border-neutral-800 vercel-text-primary placeholder:text-neutral-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full vercel-button-primary py-3"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Request Demo
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold vercel-text-primary mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 vercel-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold vercel-text-primary mb-1">Office</h3>
                      <p className="vercel-text-secondary">
                        440 N. Wolfe Road<br />
                        Sunnyvale, CA 94085
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 vercel-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold vercel-text-primary mb-1">Phone</h3>
                      <p className="vercel-text-secondary">+1 (555) FACILIS</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 vercel-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold vercel-text-primary mb-1">Email</h3>
                      <p className="vercel-text-secondary">contact@facilis.ai</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <Card className="vercel-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold vercel-text-primary mb-4">Office Hours</h3>
                  <div className="space-y-2 vercel-text-secondary">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="vercel-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold vercel-text-primary mb-4">What to Expect</h3>
                  <ul className="space-y-3 vercel-text-secondary">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Response within 24 hours</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>Personalized demo tailored to your needs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span>Detailed discussion of your requirements</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      <span>Custom solution recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
