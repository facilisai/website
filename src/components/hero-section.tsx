"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { CommandPalette } from "./search-command-palette";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  // Command palette state
  const [showPalette, setShowPalette] = useState(false);

  // Keyboard shortcut handler (CMD+K or CTRL+K)
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      setShowPalette((v) => !v);
    }
    if (e.key === 'Escape') {
      setShowPalette(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black soft-gradient-shadow-multicolor">
      {/* Command Palette Modal */}
      <CommandPalette open={showPalette} onClose={() => setShowPalette(false)} />
      {/* Subtle morphing gradient hue background (bottom right, navy/indigo/blue-violet) */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Subtle dot pattern like Vercel */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
        {/* Morphing gradient hue - bottom right only */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
            initial={{ opacity: 0.18, scale: 1 }}
            animate={{
              opacity: [0.18, 0.22, 0.18],
              scale: [1, 1.12, 1],
              rotate: [0, 8, -8, 0],
              x: [0, 60, -60, 0],
              y: [0, 40, -40, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[-20vw] bottom-[-20vh] w-[90vw] h-[70vh] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(ellipse at 80% 80%, #1e293b 0%, #6366f1 40%, #312e81 80%, transparent 100%)"
            }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
          style={{ marginTop: '-25px' }}
        >
          {/* Badge - Vercel style */}
          <motion.div variants={itemVariants} className="flex justify-center" style={{ paddingTop: 0 }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              <span className="text-sm font-medium text-neutral-400">Revolutionizing Industrial AI</span>
            </div>
          </motion.div>

          {/* Main headline - Clean typography like Vercel */}
          <motion.div variants={itemVariants} className="space-y-8" style={{ marginTop: 15 }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl heading-primary vercel-text-primary">
              Manufacturing
              <br />
              <span className="gradient-text-blue">Operations</span>
              <br />
              <span className="vercel-gradient-text">Reimagined</span>
            </h1>
          </motion.div>

          {/* Subtitle - Vercel style */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl vercel-text-secondary max-w-4xl mx-auto text-body"
            style={{ marginTop: 15, marginBottom: 20 }}
          >
            Transform your industrial operations with{" "}
            <span className="vercel-accent font-medium">Agentic AI</span> that
            understands your processes, optimizes in real-time, and delivers{" "}
            <span className="vercel-accent font-medium">measurable ROI</span> in days.
          </motion.p>

          {/* CTA Buttons - Vercel style */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              asChild
              size="lg"
              className="vercel-button-primary px-8 py-4 text-lg h-auto"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Request Live Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="vercel-button-secondary px-8 py-4 text-lg h-auto"
            >
              <Link href="/products" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Overview
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
