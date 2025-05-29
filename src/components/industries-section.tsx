"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, FlaskConical, Pill, Mountain, Cpu, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function IndustriesSection() {
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

  const industries = [
    {
      name: "Food & Beverages",
      description: "Optimize production processes, ensure quality control, and reduce waste",
      icon: Factory,
      href: "/industries/food-beverage"
    },
    {
      name: "Chemicals & Petrochemicals",
      description: "Enhance safety, efficiency, and yield in chemical manufacturing",
      icon: FlaskConical,
      href: "/industries/chemicals"
    },
    {
      name: "Pharmaceuticals",
      description: "Ensure compliance, quality, and efficiency in drug manufacturing",
      icon: Pill,
      href: "/industries/pharma"
    },
    {
      name: "Mining & Materials",
      description: "Optimize extraction, processing, and material handling operations",
      icon: Mountain,
      href: "/industries/mining"
    },
    {
      name: "Semiconductors",
      description: "Precision manufacturing for high-tech semiconductor production",
      icon: Cpu,
      href: "/industries/semiconductors"
    },
    {
      name: "Oil & Gas",
      description: "Enhance operational efficiency and safety in energy production",
      icon: Fuel,
      href: "/industries/oil-gas"
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
            <h2 className="text-5xl md:text-6xl heading-primary gradient-text-blue">
              Industries We Serve
            </h2>
            <p className="text-xl vercel-text-secondary max-w-3xl mx-auto text-body">
              Delivering tailored AI solutions across diverse manufacturing sectors,
              helping enterprises achieve operational excellence.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <Card className="vercel-card clean-hover h-full">
                <CardContent className="p-8 space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    {industry.icon === Factory && <Factory className="w-6 h-6 text-emerald-400" />}
                    {industry.icon === FlaskConical && <FlaskConical className="w-6 h-6 text-cyan-400" />}
                    {industry.icon === Pill && <Pill className="w-6 h-6 text-pink-400" />}
                    {industry.icon === Mountain && <Mountain className="w-6 h-6 text-amber-400" />}
                    {industry.icon === Cpu && <Cpu className="w-6 h-6 text-indigo-400" />}
                    {industry.icon === Fuel && <Fuel className="w-6 h-6 text-orange-400" />}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl heading-secondary vercel-text-primary group-hover:vercel-accent transition-colors">
                      {industry.name}
                    </h3>
                    <p className="vercel-text-secondary text-body leading-relaxed">
                      {industry.description}
                    </p>

                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between vercel-text-secondary hover:vercel-text-primary hover:bg-neutral-900 p-0 h-auto py-3"
                    >
                      <Link href={industry.href} className="flex items-center justify-between">
                        <span className="text-sm font-medium pl-[10px]">Learn More</span>
                        <span className="flex items-center justify-center min-w-[44px] min-h-[44px] ml-2">
                          <ArrowRight className="w-11 h-11 group-hover:translate-x-1 transition-transform" strokeWidth={2.7} />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "6", label: "Industries Served" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "24x", label: "Faster Implementation" },
              { value: "95%", label: "Client Satisfaction" }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl heading-primary vercel-text-primary">
                  {stat.value}
                </div>
                <div className="text-sm vercel-text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <div className="vercel-card p-12">
            <h3 className="text-2xl heading-secondary vercel-text-primary mb-6">
              Don't See Your Industry?
            </h3>
            <p className="vercel-text-secondary mb-8 max-w-2xl mx-auto text-body">
              Our platform is designed to adapt to any manufacturing environment.
              Let's discuss how we can transform your specific industrial processes.
            </p>
            <Button
              asChild
              className="vercel-button-primary h-11 px-6 text-base font-medium"
            >
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
