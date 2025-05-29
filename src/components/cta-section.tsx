"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const ctaOptions = [
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "See our platform in action with a personalized demonstration",
      action: "Book Demo",
      href: "/contact?type=demo"
    },
    {
      icon: Phone,
      title: "Expert Consultation",
      description: "Discuss your specific manufacturing challenges with our team",
      action: "Talk to Expert",
      href: "/contact?type=consultation"
    },
    {
      icon: MessageCircle,
      title: "Get Started",
      description: "Begin your AI transformation journey with a discovery call",
      action: "Contact Us",
      href: "/contact"
    }
  ];

  return (
    <section className="py-32 bg-black border-t border-neutral-900 soft-gradient-shadow-blue">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-5xl md:text-6xl heading-primary gradient-text-blue leading-tight">
              Ready to Transform
              <br />
              Your Operations?
            </h2>
            <p className="text-xl vercel-text-secondary max-w-3xl mx-auto text-body leading-relaxed">
              Join the manufacturing leaders who are already seeing{" "}
              <span className="vercel-text-primary font-semibold">2-3M in annual savings</span> and{" "}
              <span className="vercel-text-primary font-semibold">10x ROI increases</span> with Facilis.AI
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <Card className="vercel-card clean-hover h-full">
                <CardContent className="p-8 space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    {option.icon === Calendar && <Calendar className="w-6 h-6 text-blue-500" />}
                    {option.icon === Phone && <Phone className="w-6 h-6 text-emerald-400" />}
                    {option.icon === MessageCircle && <MessageCircle className="w-6 h-6 text-amber-400" />}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl heading-secondary vercel-text-primary group-hover:vercel-accent transition-colors">
                      {option.title}
                    </h3>
                    <p className="vercel-text-secondary text-body leading-relaxed">
                      {option.description}
                    </p>

                    <Button
                      asChild
                      className="w-full vercel-button-primary h-11 text-base font-medium"
                    >
                      <Link href={option.href} className="flex items-center justify-center gap-2">
                        {option.action}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="vercel-card p-12">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl heading-primary vercel-text-primary">
                  Don't Let Your Data Go to Waste
                </h3>
                <p className="text-xl vercel-text-secondary text-body leading-relaxed">
                  Stop watching substantial investments in data and IoT infrastructure
                  result in unutilized data. Transform your operations today with
                  AI that delivers tangible ROI from day one.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="vercel-button-primary h-12 px-8 text-lg font-medium"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Request Live Demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="vercel-button-secondary h-12 px-8 text-lg font-medium"
                >
                  <Link href="/products">Explore Products</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-neutral-800">
                <p className="text-sm vercel-text-secondary mb-4">Trusted by manufacturing leaders worldwide</p>
                <div className="flex items-center justify-center space-x-8 opacity-60">
                  <div className="vercel-text-secondary text-sm">Enterprise Ready</div>
                  <div className="w-1 h-1 bg-neutral-600 rounded-full" />
                  <div className="vercel-text-secondary text-sm">SOC 2 Compliant</div>
                  <div className="w-1 h-1 bg-neutral-600 rounded-full" />
                  <div className="vercel-text-secondary text-sm">24/7 Support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
