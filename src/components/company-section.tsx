"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function CompanySection() {
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

  const advantages = [
    {
      icon: Clock,
      title: "Rapid Implementation",
      description: "Deploy and see results in days, not months, with our streamlined AI platform"
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "Track tangible returns with clear metrics and performance indicators"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Industry veterans with 15+ years of manufacturing and AI expertise"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "2-3M annual savings and 10x ROI increases for our enterprise clients"
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
            <h2 className="text-5xl md:text-6xl heading-primary gradient-text-grey">
              Making AI Accessible
            </h2>
            <p className="text-xl vercel-text-secondary max-w-4xl mx-auto text-body leading-relaxed">
              <span className="vercel-text-primary font-semibold">Facilis</span>, Latin for 'easy',
              is at the heart of everything we do. Our mission is to make advanced AI accessible
              for manufacturers, empowering them to make data-informed decisions seamlessly and effortlessly.
            </p>
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 mb-32"
        >
          <motion.div variants={itemVariants}>
            <Card className="vercel-card h-full">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    <Target className="w-6 h-6 vercel-accent" />
                  </div>
                  <h3 className="text-2xl heading-secondary vercel-text-primary">Our Mission</h3>
                </div>
                <p className="vercel-text-secondary text-body leading-relaxed">
                  To bridge the gap between cutting-edge AI technology and practical manufacturing applications.
                  We empower field engineers and operators to quickly resolve issues and adapt to the varied
                  demands of daily operations through intelligent automation and domain expertise.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="vercel-card h-full">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    <Eye className="w-6 h-6 vercel-accent" />
                  </div>
                  <h3 className="text-2xl heading-secondary vercel-text-primary">Our Vision</h3>
                </div>
                <p className="vercel-text-secondary text-body leading-relaxed">
                  To revolutionize manufacturing operations at scale by developing a platform that harnesses
                  cutting-edge AI and machine learning. We enable decision-makers to build their own AI-powered
                  applications, tailored to their challenges and rooted in deep asset knowledge.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl heading-primary vercel-text-primary mb-6">
              Why Choose Facilis.AI?
            </h3>
            <p className="text-xl vercel-text-secondary max-w-3xl mx-auto text-body">
              Born from firsthand experience with the challenges of implementing AI in manufacturing environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <Card className="vercel-card clean-hover h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                        {advantage.icon === Clock && <Clock className="w-6 h-6 text-blue-400" />}
                        {advantage.icon === TrendingUp && <TrendingUp className="w-6 h-6 text-emerald-400" />}
                        {advantage.icon === Users && <Users className="w-6 h-6 text-amber-400" />}
                        {advantage.icon === Award && <Award className="w-6 h-6 text-violet-400" />}
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl heading-secondary vercel-text-primary group-hover:vercel-accent transition-colors">
                          {advantage.title}
                        </h4>
                        <p className="vercel-text-secondary text-body leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="vercel-card p-12 text-center">
            <blockquote className="text-2xl md:text-3xl vercel-text-primary italic mb-8 leading-relaxed font-light">
              "We created Facilis.AI to finally bridge the gap between substantial investments
              in data infrastructure and tangible ROI in manufacturing operations."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <span className="vercel-text-primary font-bold">F</span>
              </div>
              <div className="text-left">
                <div className="vercel-text-primary font-semibold">Facilis.AI Leadership Team</div>
                <div className="vercel-text-secondary text-sm">Manufacturing AI Experts</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
