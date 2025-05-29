"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Video, Calendar, ArrowRight, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResourcesPage() {
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const resourceCategories = [
    {
      title: "Blog Posts",
      icon: BookOpen,
      description: "Latest insights on manufacturing AI and industry trends",
      gradient: "from-blue-600 to-cyan-500",
      count: "25+"
    },
    {
      title: "Whitepapers",
      icon: FileText,
      description: "In-depth technical analysis and research findings",
      gradient: "from-purple-600 to-violet-500",
      count: "8"
    },
    {
      title: "Case Studies",
      icon: FileText,
      description: "Real-world implementations and success stories",
      gradient: "from-green-600 to-emerald-500",
      count: "12"
    },
    {
      title: "Webinars",
      icon: Video,
      description: "Expert discussions and product demonstrations",
      gradient: "from-orange-600 to-red-500",
      count: "15+"
    }
  ];

  const featuredResources = [
    {
      type: "Whitepaper",
      title: "The Future of Manufacturing: AI-Driven Optimization Strategies",
      description: "A comprehensive analysis of how artificial intelligence is transforming manufacturing operations, featuring case studies from Fortune 500 companies.",
      readTime: "12 min read",
      date: "December 2024",
      category: "AI Strategy",
      featured: true,
      downloadUrl: "#"
    },
    {
      type: "Case Study",
      title: "How Acme Manufacturing Achieved 35% Efficiency Gains with Facilis.AI",
      description: "Learn how a leading chemical manufacturer implemented our AI platform to optimize their production processes and reduce waste.",
      readTime: "8 min read",
      date: "November 2024",
      category: "Customer Success",
      featured: true,
      downloadUrl: "#"
    },
    {
      type: "Blog Post",
      title: "Predictive Maintenance: The Key to Zero Downtime Manufacturing",
      description: "Explore how AI-powered predictive maintenance is revolutionizing equipment reliability and operational efficiency in modern factories.",
      readTime: "6 min read",
      date: "November 2024",
      category: "Technology",
      featured: false,
      downloadUrl: "#"
    }
  ];

  const recentPosts = [
    {
      title: "5 Signs Your Manufacturing Plant Needs AI Automation",
      category: "Operations",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      excerpt: "Discover the key indicators that suggest your manufacturing facility would benefit from AI-powered automation solutions."
    },
    {
      title: "ROI Calculator: Measuring the Impact of Manufacturing AI",
      category: "Business Value",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      excerpt: "Learn how to calculate and demonstrate the return on investment for AI implementations in manufacturing environments."
    },
    {
      title: "Data Quality: The Foundation of Successful Manufacturing AI",
      category: "Technology",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      excerpt: "Understanding why high-quality data is essential for AI success and how to ensure your data meets the requirements."
    },
    {
      title: "Industry 4.0: Preparing Your Workforce for AI Integration",
      category: "Workforce",
      date: "Dec 8, 2024",
      readTime: "8 min read",
      excerpt: "Strategies for training and preparing your manufacturing workforce for successful AI adoption and digital transformation."
    },
    {
      title: "Cybersecurity in AI-Powered Manufacturing Environments",
      category: "Security",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      excerpt: "Best practices for maintaining security and protecting sensitive data in connected manufacturing systems."
    },
    {
      title: "Sustainable Manufacturing Through AI Optimization",
      category: "Sustainability",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      excerpt: "How artificial intelligence can help manufacturers reduce environmental impact while improving operational efficiency."
    }
  ];

  const upcomingWebinars = [
    {
      title: "Live Demo: AI-Powered Quality Control in Action",
      date: "January 15, 2025",
      time: "2:00 PM PST",
      presenter: "Dr. Sarah Chen, VP of Product",
      description: "See how our AI quality control system detects defects in real-time and reduces waste by up to 40%."
    },
    {
      title: "Manufacturing AI Trends for 2025",
      date: "January 22, 2025",
      time: "11:00 AM PST",
      presenter: "Yousef Mohassab, CEO",
      description: "Join our CEO for insights on the biggest AI trends that will shape manufacturing in the coming year."
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-24 bg-black border-b border-neutral-900 soft-gradient-shadow-blue relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 border border-blue-400/20">
                <BookOpen className="w-4 h-4 text-blue-400 mr-3" />
                <span className="text-sm font-medium text-blue-100">Knowledge Hub</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight gradient-text-blue">
                <span className="block text-white mb-2">Manufacturing AI</span>
                <span className="block gradient-text-blue">Resources</span>
              </h1>
              <p className="text-xl md:text-2xl vercel-text-secondary max-w-4xl mx-auto leading-relaxed font-light">
                Explore our comprehensive library of insights, research, and practical guidance
                for implementing AI in manufacturing environments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {resourceCategories.map((cat) => (
              <Card key={cat.title} className="vercel-card clean-hover h-full">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
                    <cat.icon className="w-6 h-6" style={{ color: `var(--tw-gradient-stops, #6366f1)` }} />
                  </div>
                  <h3 className="text-lg heading-secondary vercel-text-primary mb-2 gradient-text-blue">{cat.title}</h3>
                  <p className="vercel-text-secondary text-body mb-2 text-center">{cat.description}</p>
                  <span className="text-xs vercel-accent font-medium">{cat.count} resources</span>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-gradient-to-b from-transparent to-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Featured Resources
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
                Our most popular and impactful content for manufacturing professionals
              </p>
            </motion.div>

            <div className="space-y-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  variants={itemVariants}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="group"
                >
                  <Card className={`glass-effect border-white/10 hover:border-blue-400/30 transition-all duration-300 ${
                    resource.featured ? 'ring-2 ring-blue-500/20' : ''
                  }`}>
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-4 gap-6 items-center">
                        <div className="lg:col-span-3 space-y-4">
                          <div className="flex items-center space-x-4">
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                              {resource.type}
                            </span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                              {resource.category}
                            </span>
                            {resource.featured && (
                              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                                Featured
                              </span>
                            )}
                          </div>

                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {resource.title}
                          </h3>

                          <p className="text-slate-300 font-light leading-relaxed">
                            {resource.description}
                          </p>

                          <div className="flex items-center space-x-4 text-slate-400 text-sm">
                            <span>{resource.date}</span>
                            <span>•</span>
                            <span>{resource.readTime}</span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <Button
                            asChild
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300"
                          >
                            <Link href={resource.downloadUrl} className="flex items-center gap-2">
                              <Download className="w-4 h-4" />
                              Download
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            <Link href="#" className="flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              Read Online
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

      {/* Recent Blog Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                  Latest Blog Posts
                </h2>
                <p className="text-xl text-slate-300 font-light">
                  Stay updated with the latest insights and trends
                </p>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Link href="/resources/blog">View All Posts</Link>
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass-effect border-white/10 h-full hover:border-blue-400/30 transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-slate-400 text-sm">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-slate-300 font-light text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4">
                        <span className="text-slate-400 text-sm">{post.date}</span>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-blue-400 hover:text-white hover:bg-blue-500/20 p-0"
                        >
                          <Link href="#" className="flex items-center gap-1">
                            Read More
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
                Join our experts for live discussions and product demonstrations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass-effect border-white/10 h-full hover:border-blue-400/30 transition-all duration-300">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-8 h-8 text-blue-400" />
                        <div>
                          <div className="text-lg font-bold text-white">{webinar.date}</div>
                          <div className="text-blue-300">{webinar.time}</div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {webinar.title}
                      </h3>

                      <p className="text-slate-300 font-light leading-relaxed">
                        {webinar.description}
                      </p>

                      <div className="text-slate-400 text-sm">
                        Presented by <span className="text-blue-300 font-medium">{webinar.presenter}</span>
                      </div>

                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
                      >
                        <Link href="/contact">Register Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
