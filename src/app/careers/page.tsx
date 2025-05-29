"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Zap, Heart, Trophy, Coffee, Laptop, DollarSign, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
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

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Industry-leading salaries with equity options and performance bonuses"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance with wellness programs"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and unlimited PTO"
    },
    {
      icon: Laptop,
      title: "Remote-First",
      description: "Work from anywhere with optional office space in Sunnyvale"
    },
    {
      icon: Trophy,
      title: "Growth Opportunities",
      description: "Learning stipend, conference attendance, and career development"
    },
    {
      icon: Coffee,
      title: "Team Culture",
      description: "Collaborative environment with regular team events and offsites"
    }
  ];

  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / Sunnyvale, CA",
      type: "Full-time",
      description: "Lead the development of our core AI agents and machine learning models for manufacturing optimization.",
      requirements: ["5+ years in AI/ML", "Python, TensorFlow/PyTorch", "Manufacturing domain knowledge preferred"],
      level: "Senior"
    },
    {
      title: "Full Stack Engineer",
      department: "Engineering",
      location: "Remote / Sunnyvale, CA",
      type: "Full-time",
      description: "Build scalable web applications and APIs for our AI-powered manufacturing platform.",
      requirements: ["4+ years full-stack development", "React, Node.js, TypeScript", "Cloud platforms (AWS/GCP)"],
      level: "Mid-Senior"
    },
    {
      title: "Manufacturing Solutions Engineer",
      department: "Customer Success",
      location: "Remote / Sunnyvale, CA",
      type: "Full-time",
      description: "Work directly with enterprise customers to implement and optimize AI solutions for their manufacturing processes.",
      requirements: ["Manufacturing engineering background", "Customer-facing experience", "Technical problem-solving skills"],
      level: "Mid-Senior"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Sunnyvale, CA",
      type: "Full-time",
      description: "Drive product strategy and roadmap for our AI marketplace and agent platform.",
      requirements: ["5+ years product management", "B2B SaaS experience", "Technical background preferred"],
      level: "Senior"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Sunnyvale, CA",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
      requirements: ["4+ years DevOps/SRE", "Kubernetes, Docker, Terraform", "AWS/GCP experience"],
      level: "Mid-Senior"
    },
    {
      title: "Data Scientist",
      department: "Data Science",
      location: "Remote / Sunnyvale, CA",
      type: "Full-time",
      description: "Analyze manufacturing data to uncover insights and improve our AI models' performance.",
      requirements: ["PhD/MS in quantitative field", "Python, SQL, statistical modeling", "Manufacturing data experience a plus"],
      level: "Mid-Senior"
    }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in manufacturing AI"
    },
    {
      icon: Users,
      title: "Customer Obsession",
      description: "Every decision starts with how we can better serve our customers"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We set high standards and continuously strive to exceed them"
    },
    {
      icon: Heart,
      title: "Collaboration",
      description: "We believe the best solutions come from diverse perspectives working together"
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800">
                <Briefcase className="w-4 h-4 vercel-accent mr-3" />
                <span className="text-sm font-medium vercel-text-secondary">Join Our Mission</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="block vercel-text-primary mb-2">Build the Future of</span>
                <span className="block vercel-accent">Manufacturing AI</span>
              </h1>

              <p className="text-xl md:text-2xl vercel-text-secondary max-w-4xl mx-auto leading-relaxed font-light">
                Join a team of world-class engineers, researchers, and domain experts
                transforming how the world's largest manufacturers operate.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="vercel-button-primary clean-hover px-10 py-4 text-lg font-medium"
              >
                <Link href="#openings">View Open Positions</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
              <h2 className="text-4xl md:text-5xl font-bold vercel-text-primary mb-6">
                Our Values
              </h2>
              <p className="text-xl vercel-text-secondary max-w-3xl mx-auto font-light">
                The principles that guide how we work, innovate, and grow together
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="group clean-hover"
                >
                  <Card className="vercel-card h-full">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                        <value.icon className="w-8 h-8 vercel-text-primary" />
                      </div>
                      <h3 className="text-xl font-bold vercel-text-primary">
                        {value.title}
                      </h3>
                      <p className="vercel-text-secondary font-light leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              <h2 className="text-4xl md:text-5xl font-bold vercel-text-primary mb-6">
                Why Facilis.AI?
              </h2>
              <p className="text-xl vercel-text-secondary max-w-3xl mx-auto font-light">
                We invest in our people with competitive benefits and a culture that fosters growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="group clean-hover"
                >
                  <Card className="vercel-card h-full">
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                          <benefit.icon className="w-6 h-6 vercel-text-primary" />
                        </div>
                        <h3 className="text-xl font-bold vercel-text-primary">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="vercel-text-secondary font-light leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold vercel-text-primary mb-6">
                Open Positions
              </h2>
              <p className="text-xl vercel-text-secondary max-w-3xl mx-auto font-light">
                Join our team and help build the future of manufacturing AI
              </p>
            </motion.div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  variants={itemVariants}
                  className="group clean-hover"
                >
                  <Card className="vercel-card">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-4 gap-6 items-center">
                        <div className="lg:col-span-2 space-y-3">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-2xl font-bold vercel-text-primary">
                              {job.title}
                            </h3>
                            <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 vercel-text-secondary rounded-full text-sm font-medium">
                              {job.level}
                            </span>
                          </div>
                          <div className="flex items-center space-x-6 vercel-text-secondary">
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4" />
                              <span className="text-sm">{job.department}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{job.type}</span>
                            </div>
                          </div>
                          <p className="vercel-text-secondary font-light leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold vercel-text-primary">Key Requirements</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="text-sm vercel-text-secondary flex items-start space-x-2">
                                <span className="w-1 h-1 vercel-accent rounded-full mt-2 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex justify-end">
                          <Button
                            asChild
                            className="vercel-button-primary clean-hover px-8 py-3 font-medium"
                          >
                            <Link href={`/careers/apply?position=${encodeURIComponent(job.title)}`}>
                              Apply Now
                            </Link>
                          </Button>
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
                <h2 className="text-3xl md:text-4xl font-bold vercel-text-primary">
                  Don't see the right role?
                </h2>
                <p className="text-xl vercel-text-secondary font-light">
                  We're always looking for exceptional talent. Send us your resume
                  and let us know how you'd like to contribute to our mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="vercel-button-primary clean-hover px-10 py-4 text-lg font-medium"
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="vercel-button-secondary clean-hover px-10 py-4 text-lg font-medium"
                  >
                    <Link href="mailto:careers@facilis.ai">Send Resume</Link>
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