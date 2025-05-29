"use client";

import { motion } from "framer-motion";
import { Bot, Store, Zap, Shield, Cpu, Network, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductsPage() {
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

  const agentFeatures = [
    {
      icon: Zap,
      title: "Lightning-Fast Development",
      description: "Generate production-ready code and prototypes in seconds, not hours"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built with enterprise-grade security and compliance standards"
    },
    {
      icon: Cpu,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning models trained on manufacturing data"
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description: "Connect with databases, APIs, and cloud services effortlessly"
    }
  ];

  const marketplaceFeatures = [
    {
      icon: Store,
      title: "Curated App Library",
      description: "Browse hundreds of pre-built AI applications for manufacturing"
    },
    {
      icon: Zap,
      title: "One-Click Deployment",
      description: "Deploy apps to your workspace or cloud infrastructure instantly"
    },
    {
      icon: Cpu,
      title: "Custom Workflows",
      description: "Customize applications to fit your specific processes and data"
    },
    {
      icon: Network,
      title: "Community Driven",
      description: "Share solutions and collaborate with the manufacturing community"
    }
  ];

  const benefits = [
    "2-3M annual FTE cost savings",
    "10x increase in ROI",
    "80% reduction in operational downtime",
    "50% faster time-to-market",
    "24/7 automated monitoring",
    "Real-time optimization"
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">
                <Sparkles className="w-4 h-4 vercel-accent mr-2" />
                <span className="text-sm vercel-text-primary">Revolutionary AI Products</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight heading-primary">
                <span className="block vercel-text-primary">Our</span>
                <span className="block vercel-accent">Products</span>
              </h1>

              <p className="text-xl md:text-2xl vercel-text-secondary max-w-4xl mx-auto leading-relaxed">
                Discover our flagship AI solutions that are transforming manufacturing
                operations worldwide with measurable results.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-2 gap-16"
          >
            {/* Facilis AI Agent */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="vercel-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="h-40 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center">
                        <Bot className="w-10 h-10 vercel-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold vercel-text-primary mb-3 heading-secondary">
                        Facilis AI Agent
                      </h2>
                      <p className="vercel-text-secondary leading-relaxed">
                        Your AI-powered engineering partner, designed to supercharge your
                        productivity and creativity. Whether you're building apps, automating
                        workflows, or exploring new ideas, our agent brings together advanced AI,
                        intuitive tools, and seamless integrations.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold vercel-accent">
                        Why Facilis AI Agent?
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="vercel-text-secondary">Generate production-ready code and prototypes in seconds</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="vercel-text-secondary">Automate repetitive tasks and focus on innovation</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="vercel-text-secondary">Collaborate with AI to solve complex problems</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="vercel-text-secondary">Integrate with databases, APIs, and cloud services effortlessly</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                      <p className="vercel-text-secondary italic">
                        "Unleash your potential with a platform that adapts to you."
                      </p>
                    </div>

                    <Button
                      asChild
                      className="w-full vercel-button-primary clean-hover"
                    >
                      <Link href="/products/ai-agent" className="flex items-center justify-center gap-2">
                        Explore AI Agent
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* App Marketplace (AMP) */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="vercel-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="h-40 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center">
                        <Store className="w-10 h-10 vercel-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold vercel-text-primary mb-3 heading-secondary">
                        App Marketplace (AMP)
                      </h2>
                      <p className="vercel-text-secondary leading-relaxed">
                        Your gateway to a universe of ready-to-use, AI-powered applications.
                        Instantly deploy, customize, and scale apps for analytics, automation,
                        visualization, and more—all from a single, unified platform.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold vercel-accent">
                        Why AMP?
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="vercel-text-secondary">Browse a curated marketplace of powerful AI apps</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="vercel-text-secondary">One-click deploy to your workspace or cloud</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="vercel-text-secondary">Customize apps to fit your workflow and data</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="vercel-text-secondary">Collaborate and share solutions with the community</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                      <p className="vercel-text-secondary italic">
                        "Transform your ideas into reality with the power of the AMP ecosystem."
                      </p>
                    </div>

                    <Button
                      asChild
                      className="w-full vercel-button-primary clean-hover"
                    >
                      <Link href="/products/marketplace" className="flex items-center justify-center gap-2">
                        Explore Marketplace
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
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
              <h2 className="text-4xl md:text-5xl font-bold vercel-text-primary mb-4 heading-primary">
                Product Features
              </h2>
              <p className="text-xl vercel-text-secondary max-w-3xl mx-auto">
                Both products work together to provide a comprehensive AI platform
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* AI Agent Features */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold vercel-text-primary flex items-center gap-3 heading-secondary">
                  <Bot className="w-8 h-8 vercel-accent" />
                  AI Agent Features
                </h3>
                <div className="grid gap-4">
                  {agentFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="flex items-start space-x-4 p-4 rounded-lg vercel-card clean-hover"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <feature.icon className="w-6 h-6 vercel-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold vercel-text-primary">{feature.title}</h4>
                        <p className="text-sm vercel-text-secondary">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Marketplace Features */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold vercel-text-primary flex items-center gap-3 heading-secondary">
                  <Store className="w-8 h-8 vercel-accent" />
                  Marketplace Features
                </h3>
                <div className="grid gap-4">
                  {marketplaceFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="flex items-start space-x-4 p-4 rounded-lg vercel-card clean-hover"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <feature.icon className="w-6 h-6 vercel-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold vercel-text-primary">{feature.title}</h4>
                        <p className="text-sm vercel-text-secondary">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <h2 className="text-4xl md:text-5xl font-bold vercel-text-primary mb-4 heading-primary">
                Proven Results
              </h2>
              <p className="text-xl vercel-text-secondary max-w-3xl mx-auto">
                Our clients consistently achieve remarkable improvements across key metrics
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="vercel-card">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                        <span className="vercel-text-secondary font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="vercel-card rounded-3xl p-12">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold vercel-text-primary heading-secondary">
                  Ready to transform your operations?
                </h2>
                <p className="text-xl vercel-text-secondary">
                  Experience the power of our AI products with a personalized demonstration
                  tailored to your manufacturing challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="vercel-button-primary px-8 py-3 clean-hover"
                  >
                    <Link href="/contact">Request Live Demo</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="vercel-button-secondary px-8 py-3 clean-hover"
                  >
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
