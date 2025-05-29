"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Users, Target, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TeamPage() {
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

  const leadership = [
    {
      name: "Yousef Mohassab",
      title: "CEO & Co-Founder",
      degree: "Ph.D. Metallurgical Engineering",
      image: "https://ext.same-assets.com/237784960/2266414492.jpeg",
      bio: "Yousef brings over 15 years of manufacturing analytics expertise to Facilis.AI. As former Chief AI Officer at Koch Industries, he led digital transformation initiatives across multiple manufacturing facilities, resulting in over $100M in operational savings. His deep understanding of manufacturing challenges and AI capabilities drives Facilis.AI's vision of making advanced AI accessible to all manufacturers.",
      experience: [
        "15+ years in Manufacturing Analytics",
        "Former Chief AI Officer at Koch Industries",
        "PhD in Metallurgical Engineering",
        "Led $100M+ in operational savings initiatives"
      ],
      expertise: ["Manufacturing Operations", "AI Strategy", "Digital Transformation", "Process Optimization"],
      linkedin: "https://linkedin.com/in/yousefmohassab"
    },
    {
      name: "Maher Lahmar",
      title: "CTO & Co-Founder",
      degree: "Ph.D. Industrial Engineering",
      image: "https://ext.same-assets.com/237784960/2209097893.jpeg",
      bio: "Maher is a seasoned technology leader with over 20 years of experience in AI and data science. As former Head of Data Science at Google, he architected large-scale machine learning systems serving billions of users. His expertise in building robust, scalable AI platforms is instrumental in developing Facilis.AI's cutting-edge agentic AI technology for manufacturing.",
      experience: [
        "20+ years in AI and Data Science",
        "Former Head of Data Science at Google",
        "PhD in Industrial Engineering",
        "Built ML systems serving billions of users"
      ],
      expertise: ["Machine Learning", "Data Science", "Platform Architecture", "Scalable Systems"],
      linkedin: "https://linkedin.com/in/maherlahmar"
    },
    {
      name: "Peter Decuypere",
      title: "Head of Optimization",
      degree: "Ph.D. Automatic Control Engineering",
      image: "https://ext.same-assets.com/237784960/3477774410.png",
      bio: "Peter is a world-renowned expert in process optimization with 25+ years of experience in manufacturing engineering. At Koch Industries, he developed breakthrough optimization algorithms that improved plant efficiency by up to 15%. His deep domain expertise ensures that Facilis.AI's solutions address real-world manufacturing challenges with proven methodologies.",
      experience: [
        "25+ years in Process Optimization",
        "Senior Engineer at Koch Industries",
        "PhD in Automatic Control Engineering",
        "Achieved 15%+ efficiency improvements"
      ],
      expertise: ["Process Control", "Optimization Algorithms", "Manufacturing Systems", "Automation"],
      linkedin: "https://linkedin.com/in/peter-de-cuypere"
    }
  ];

  const culture = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Every team member is passionate about transforming manufacturing through AI",
      stats: "100% alignment on our mission to make AI accessible"
    },
    {
      icon: Users,
      title: "Diverse Expertise",
      description: "Our team combines deep manufacturing knowledge with cutting-edge AI expertise",
      stats: "50+ years combined manufacturing experience"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "We encourage experimentation and bold thinking to solve complex problems",
      stats: "20% time dedicated to innovation projects"
    },
    {
      icon: Award,
      title: "Excellence Mindset",
      description: "We set high standards and continuously push boundaries in everything we do",
      stats: "95%+ customer satisfaction rating"
    }
  ];

  const teamStats = [
    { label: "Team Members", value: "25+" },
    { label: "PhD Holders", value: "40%" },
    { label: "Manufacturing Experience", value: "50+ years" },
    { label: "Patents Filed", value: "12" }
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
                <Users className="w-4 h-4 text-blue-400 mr-3" />
                <span className="text-sm font-medium text-blue-100">Meet Our Team</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight gradient-text-blue">
                <span className="block text-white mb-2">World-Class</span>
                <span className="block gradient-text-blue">Experts</span>
              </h1>
              <p className="text-xl md:text-2xl vercel-text-secondary max-w-4xl mx-auto leading-relaxed font-light">
                Our team combines decades of manufacturing expertise with cutting-edge AI research
                to solve the world's most complex industrial challenges.
              </p>
            </motion.div>
            {/* Team Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl md:text-5xl heading-primary gradient-text-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm vercel-text-secondary font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Leadership Team */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-20"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text-blue mb-6">
                Leadership Team
              </h2>
              <p className="text-xl vercel-text-secondary max-w-3xl mx-auto font-light">
                Industry pioneers with proven track records in manufacturing transformation and AI innovation
              </p>
            </motion.div>
            <div className="space-y-16">
              {leadership.map((leader, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={leader.name}
                    variants={itemVariants}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
                  >
                    {/* Photo and Basic Info */}
                    <div className={`${isEven ? "" : "lg:col-start-2"}`}>
                      <Card className="vercel-card clean-hover overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative h-96 bg-neutral-900 border border-neutral-800">
                            <img
                              src={leader.image}
                              alt={leader.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>
                          <div className="p-8 space-y-4">
                            <h3 className="text-2xl heading-secondary vercel-text-primary group-hover:vercel-accent transition-colors">
                              {leader.name}
                            </h3>
                            <p className="vercel-accent font-medium">
                              {leader.title}
                            </p>
                            <p className="vercel-text-secondary text-body leading-relaxed">
                              {leader.bio}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {leader.expertise.map((exp) => (
                                <span key={exp} className="px-3 py-1 rounded-full text-xs font-medium gradient-text-blue bg-neutral-900 border border-neutral-800">
                                  {exp}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-4 pt-4">
                              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                                <Linkedin className="w-5 h-5" />
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* Experience List */}
                    <div className="space-y-6">
                      <div className="vercel-card p-8 bg-neutral-900 border border-neutral-800">
                        <h4 className="text-lg heading-secondary vercel-text-primary mb-2">Experience</h4>
                        <ul className="space-y-2">
                          {leader.experience.map((exp, expIndex) => (
                            <li key={expIndex} className="vercel-text-secondary text-body">
                              • {exp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            {/* Culture Section */}
            <motion.div variants={itemVariants} className="mt-32 text-center">
              <h2 className="text-3xl md:text-4xl heading-primary gradient-text-blue mb-6">
                Our Culture
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                {culture.map((item) => (
                  <Card key={item.title} className="vercel-card clean-hover h-full">
                    <CardContent className="p-8 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
                        {item.icon === Target && <Target className="w-6 h-6 text-emerald-400" />}
                        {item.icon === Users && <Users className="w-6 h-6 text-indigo-400" />}
                        {item.icon === Zap && <Zap className="w-6 h-6 text-pink-400" />}
                        {item.icon === Award && <Award className="w-6 h-6 text-yellow-400" />}
                      </div>
                      <h3 className="text-lg heading-secondary vercel-text-primary mb-2">{item.title}</h3>
                      <p className="vercel-text-secondary text-body mb-2">{item.description}</p>
                      <span className="text-xs vercel-accent font-medium">{item.stats}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
