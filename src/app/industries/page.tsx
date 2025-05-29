"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, FlaskConical, Pill, Mountain, Cpu, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const industryData = [
  {
    name: "Food & Beverages",
    description: "Optimize production processes, ensure quality control, and reduce waste.",
    icon: Factory,
    href: "/industries/food-beverage",
    gradient: "from-green-400 to-lime-500"
  },
  {
    name: "Chemicals & Petrochemicals",
    description: "Enhance safety, efficiency, and yield in chemical manufacturing.",
    icon: FlaskConical,
    href: "/industries/chemicals",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    name: "Pharmaceuticals",
    description: "Ensure compliance, quality, and efficiency in drug manufacturing.",
    icon: Pill,
    href: "/industries/pharma",
    gradient: "from-pink-400 to-fuchsia-500"
  },
  {
    name: "Mining & Materials",
    description: "Optimize extraction, processing, and material handling operations.",
    icon: Mountain,
    href: "/industries/mining",
    gradient: "from-yellow-500 to-amber-600"
  },
  {
    name: "Semiconductors",
    description: "Precision manufacturing for high-tech semiconductor production.",
    icon: Cpu,
    href: "/industries/semiconductors",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    name: "Oil & Gas",
    description: "Enhance operational efficiency and safety in energy production.",
    icon: Fuel,
    href: "/industries/oil-gas",
    gradient: "from-orange-500 to-red-500"
  }
];

export default function IndustriesPage() {
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

  return (
    <section className="py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-5xl md:text-6xl heading-primary vercel-text-primary">
              Industries
            </h2>
            <p className="text-xl vercel-text-secondary max-w-3xl mx-auto text-body">
              Delivering tailored AI solutions across diverse manufacturing sectors, helping enterprises achieve operational excellence.
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
          {industryData.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <Card className="vercel-card clean-hover h-full">
                <CardContent className="p-8 space-y-6">
                  {/* Icon with gradient */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${industry.gradient} flex items-center justify-center`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
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
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 