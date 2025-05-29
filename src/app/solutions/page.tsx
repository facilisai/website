"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Wrench, Settings, CheckCircle, Zap, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const solutionData = [
  {
    name: "Yield Improvement",
    description: "Optimize production yields and reduce waste with AI-driven insights.",
    icon: TrendingUp,
    href: "/solutions/yield",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Predictive Maintenance",
    description: "Prevent equipment failures before they occur using predictive analytics.",
    icon: Wrench,
    href: "/solutions/maintenance",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "Process Optimization",
    description: "Streamline operations for maximum efficiency and throughput.",
    icon: Settings,
    href: "/solutions/process",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    name: "Quality Control",
    description: "Ensure consistent product quality with real-time monitoring.",
    icon: CheckCircle,
    href: "/solutions/quality",
    gradient: "from-pink-500 to-fuchsia-500"
  },
  {
    name: "Energy Efficiency",
    description: "Reduce energy consumption and costs with smart optimization.",
    icon: Zap,
    href: "/solutions/energy",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    name: "Supply Chain Management",
    description: "Optimize supply chain operations with intelligent automation.",
    icon: Truck,
    href: "/solutions/supply-chain",
    gradient: "from-indigo-500 to-blue-700"
  }
];

export default function SolutionsPage() {
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
              Solutions
            </h2>
            <p className="text-xl vercel-text-secondary max-w-3xl mx-auto text-body">
              AI-powered solutions tailored to the most critical challenges in manufacturing.
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
          {solutionData.map((solution, index) => (
            <motion.div
              key={solution.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <Card className="vercel-card clean-hover h-full">
                <CardContent className="p-8 space-y-6">
                  {/* Icon with gradient */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl heading-secondary vercel-text-primary group-hover:vercel-accent transition-colors">
                      {solution.name}
                    </h3>
                    <p className="vercel-text-secondary text-body leading-relaxed">
                      {solution.description}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between vercel-text-secondary hover:vercel-text-primary hover:bg-neutral-900 p-0 h-auto py-3"
                    >
                      <Link href={solution.href} className="flex items-center justify-between">
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