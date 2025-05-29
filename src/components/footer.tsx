"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
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

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Facilis AI Agent", href: "/products/ai-agent" },
        { name: "App Marketplace", href: "/products/marketplace" },
        { name: "Platform Overview", href: "/products" },
        { name: "Pricing", href: "/pricing" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Yield Improvement", href: "/solutions/yield" },
        { name: "Predictive Maintenance", href: "/solutions/maintenance" },
        { name: "Process Optimization", href: "/solutions/process" },
        { name: "Energy Efficiency", href: "/solutions/energy" },
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Food & Beverages", href: "/industries/food-beverage" },
        { name: "Chemicals", href: "/industries/chemicals" },
        { name: "Pharmaceuticals", href: "/industries/pharma" },
        { name: "Semiconductors", href: "/industries/semiconductors" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/resources/blog" },
        { name: "Case Studies", href: "/resources/case-studies" },
        { name: "Whitepapers", href: "/resources/whitepapers" },
        { name: "Documentation", href: "/resources/docs" },
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/facilis-ai", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/facilis_ai", icon: Twitter },
    { name: "GitHub", href: "https://github.com/facilis-ai", icon: Github },
  ];

  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Company info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-[134px] h-[134px] flex items-center justify-center">
                  <Image src="/logo.svg" alt="Facilis.AI Logo" width={134} height={134} priority className="transition-transform duration-200" />
                </div>
              </div>

              <p className="vercel-text-secondary text-body leading-relaxed max-w-md">
                Making advanced AI accessible for manufacturers. Transform your operations
                with agentic AI that delivers measurable ROI in days, not months.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 vercel-text-secondary">
                  <MapPin className="w-5 h-5 vercel-accent" />
                  <span className="text-sm">440 N. Wolfe Road, Sunnyvale, CA 94085</span>
                </div>
                <div className="flex items-center space-x-3 vercel-text-secondary">
                  <Mail className="w-5 h-5 vercel-accent" />
                  <Link href="mailto:contact@facilis.ai" className="text-sm hover:vercel-text-primary transition-colors">
                    contact@facilis.ai
                  </Link>
                </div>
                <div className="flex items-center space-x-3 vercel-text-secondary">
                  <Phone className="w-5 h-5 vercel-accent" />
                  <Link href="tel:+1-555-FACILIS" className="text-sm hover:vercel-text-primary transition-colors">
                    +1 (555) FACILIS
                  </Link>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center vercel-text-secondary hover:vercel-text-primary hover:bg-neutral-800 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation sections */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-8">
              {footerSections.map((section) => (
                <motion.div key={section.title} variants={itemVariants} className="space-y-4">
                  <h3 className="vercel-text-primary font-semibold text-sm uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="vercel-text-secondary hover:vercel-text-primary transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-neutral-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="vercel-text-secondary text-sm">
              © {new Date().getFullYear()} Facilis.AI. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="vercel-text-secondary hover:vercel-text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="vercel-text-secondary hover:vercel-text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="vercel-text-secondary hover:vercel-text-primary transition-colors">
                Security
              </Link>
              <Link href="/legal" className="vercel-text-secondary hover:vercel-text-primary transition-colors">
                Legal
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
