"use client";

import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
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

  const leadership = [
    {
      name: "Yousef Mohassab, Ph.D.",
      title: "CEO, Co-Founder",
      experience: [
        "15+ YOE in Manufacturing Analytics",
        "PhD, Metallurgical Engineering",
        "Chief AI Officer, Koch Industries"
      ],
      image: "https://ext.same-assets.com/237784960/2266414492.jpeg"
    },
    {
      name: "Maher Lahmar, Ph.D.",
      title: "CTO, Co-Founder",
      experience: [
        "20+ YOE in AI and Data Science",
        "PhD, Industrial Engineering",
        "Head of Data Science, Google"
      ],
      image: "https://ext.same-assets.com/237784960/2209097893.jpeg"
    },
    {
      name: "Peter Decuypere, Ph.D.",
      title: "Head of Optimization",
      experience: [
        "25+ YOE in Process Optimization",
        "PhD, Automatic Control Eng.",
        "Sr. Engineer, Koch Industries"
      ],
      image: "https://ext.same-assets.com/237784960/3477774410.png"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Accessibility",
      description: "Making advanced AI accessible for all manufacturers, regardless of technical expertise"
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Delivering measurable ROI and tangible improvements in manufacturing operations"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing the boundaries of what's possible with industrial AI"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Working closely with clients to understand their unique challenges and goals"
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span className="text-sm vercel-text-secondary">Building the Digital Experts</span>
              </div>

              <h1 className="text-5xl md:text-7xl heading-primary vercel-text-primary leading-tight">
                About
                <br />
                Facilis.AI
              </h1>

              <p className="text-xl md:text-2xl vercel-text-secondary max-w-4xl mx-auto text-body leading-relaxed">
                We're revolutionizing manufacturing with AI that understands your domain,
                optimizes your processes, and delivers results from day one.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-20"
          >
            {/* What's in the name */}
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-4xl md:text-5xl heading-primary vercel-text-primary mb-8">
                What's in the name?
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl vercel-text-secondary text-body leading-relaxed">
                  <span className="vercel-text-primary font-semibold text-2xl">Facilis</span>,
                  Latin for 'easy', is at the heart of everything we do. Our mission is to make
                  advanced AI accessible for manufacturers, empowering them to make data-informed
                  decisions seamlessly and effortlessly. We accomplish this by building agents that
                  understand domain knowledge, optimize complex operations, manage interconnected
                  assets, and swiftly tackle critical issues.
                </p>
              </div>
            </motion.div>

            {/* What inspired us */}
            <motion.div variants={itemVariants}>
              <Card className="vercel-card">
                <CardContent className="p-12">
                  <h3 className="text-3xl md:text-4xl heading-primary vercel-text-primary mb-8 text-center">
                    What inspired us?
                  </h3>
                  <p className="text-lg vercel-text-secondary text-body leading-relaxed text-center max-w-5xl mx-auto">
                    Facilis.ai was born from a persistent disappointment of watching AI and analytics
                    initiatives fall short from tackling manufacturing operation challenges. Our founders
                    experienced firsthand the immense frustration when substantial investments in data
                    and IoT infrastructure resulted in an explosion of unutilized data. They also observed
                    how costly software implementations often took months to deliver tangible ROI. Even
                    when solutions did work, they rarely empowered field engineers and operators to
                    quickly resolve issues or adapt to the varied demands of daily operations. We created
                    Facilis.ai to finally bridge this gap.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* What we're building */}
            <motion.div variants={itemVariants}>
              <Card className="vercel-card">
                <CardContent className="p-12">
                  <h3 className="text-3xl md:text-4xl heading-primary vercel-text-primary mb-8 text-center">
                    What we are building?
                  </h3>
                  <p className="text-lg vercel-text-secondary text-body leading-relaxed text-center max-w-5xl mx-auto">
                    We believe AI presents an unparalleled opportunity for manufacturing enterprises to
                    revolutionize their operations at scale. Our vision is to develop a platform that
                    harnesses cutting-edge AI and machine learning to enable decision-makers to{" "}
                    <span className="vercel-text-primary font-semibold">build their own AI-powered applications</span>,
                    tailored to their daily challenges and deeply rooted in the context and knowledge
                    of their assets and processes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
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
              <h2 className="text-4xl md:text-5xl heading-primary vercel-text-primary mb-6">
                Our Values
              </h2>
              <p className="text-xl vercel-text-secondary max-w-3xl mx-auto text-body">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group"
                >
                  <Card className="vercel-card clean-hover h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-6 h-6 vercel-accent" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-2xl heading-secondary vercel-text-primary group-hover:vercel-accent transition-colors">
                            {value.title}
                          </h3>
                          <p className="vercel-text-secondary text-body leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
              <h2 className="text-4xl md:text-5xl heading-primary vercel-text-primary mb-6">
                Leadership Team
              </h2>
              <p className="text-xl vercel-text-secondary max-w-3xl mx-auto text-body">
                Industry veterans with decades of combined experience in manufacturing, AI, and optimization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group"
                >
                  <Card className="vercel-card clean-hover overflow-hidden">
                    <CardContent className="p-0">
                      {/* Photo */}
                      <div className="h-64 bg-neutral-900 relative overflow-hidden">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className="text-xl heading-secondary vercel-text-primary group-hover:vercel-accent transition-colors">
                            {leader.name}
                          </h3>
                          <p className="vercel-accent font-medium">
                            {leader.title}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold vercel-text-secondary uppercase tracking-wider">
                            Experience
                          </h4>
                          <ul className="space-y-1">
                            {leader.experience.map((exp, expIndex) => (
                              <li key={expIndex} className="text-sm vercel-text-secondary">
                                • {exp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            <div className="vercel-card p-12">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl heading-primary vercel-text-primary">
                  Ready to work with us?
                </h2>
                <p className="text-xl vercel-text-secondary text-body">
                  Let's discuss how Facilis.AI can transform your manufacturing operations
                  and deliver measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="vercel-button-primary h-12 px-8 text-lg font-medium"
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="vercel-button-secondary h-12 px-8 text-lg font-medium"
                  >
                    <Link href="/products">Explore Our Products</Link>
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
