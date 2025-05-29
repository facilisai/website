"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Store, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

// Types for chat demo
type AIMessage =
  | { type: "text"; content: string }
  | { type: "query"; content: string; result?: string }
  | { type: "chart" }
  | { type: "table" };
type ChatHistoryItem = {
  user: string;
  ai: AIMessage | null;
  aiText?: string;
  aiQueryAnim?: boolean;
};

// Utility for responsive SVG sizing
const CHART_WIDTH = 340;
const CHART_HEIGHT = 160;

export function ProductsSection() {
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

  const products = [
    {
      name: "Facilis AI Agent",
      description: "Your AI-powered engineering partner, designed to supercharge productivity and creativity. Build apps, automate workflows, and solve complex problems with advanced AI and seamless integrations.",
      icon: Bot,
      features: [
        "Generate production-ready code in seconds",
        "Automate repetitive tasks and focus on innovation",
        "Collaborate with AI to solve complex problems",
        "Integrate with databases, APIs, and cloud services"
      ],
      benefits: "Unleash your potential with a platform that adapts to you.",
      href: "/products/ai-agent"
    },
    {
      name: "App Marketplace (AMP)",
      description: "Your gateway to ready-to-use, AI-powered applications. Instantly deploy, customize, and scale apps for analytics, automation, and visualization—all from a unified platform.",
      icon: Store,
      features: [
        "Browse a curated marketplace of AI apps",
        "One-click deploy to workspace or cloud",
        "Customize apps to fit your workflow",
        "Collaborate and share with the community"
      ],
      benefits: "Transform ideas into reality with the AMP ecosystem.",
      href: "/products/marketplace"
    }
  ];

  return (
    <section className="py-32 bg-black soft-gradient-shadow-blue">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-5xl md:text-6xl heading-primary gradient-text-blue">
              Our Products
            </h2>
            <p className="text-xl vercel-text-secondary max-w-3xl mx-auto text-body">
              Two flagship products transforming how industrial enterprises
              approach AI and automation.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-32"
        >
          {products.map((product, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={product.name}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-20 items-center ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${isEven ? "" : "lg:col-start-2"}`}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                        <product.icon className="w-6 h-6 vercel-accent" />
                      </div>
                      <h3 className="text-3xl md:text-4xl heading-secondary vercel-text-primary">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-lg vercel-text-secondary text-body">
                      {product.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl heading-secondary vercel-text-primary">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, featureIndex) => (
                          <motion.li
                            key={`feature-${featureIndex}-${feature.slice(0, 20).replace(/\s+/g, '-')}`}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-5 h-5 vercel-accent mt-0.5 flex-shrink-0" />
                            <span className="vercel-text-secondary text-body">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="vercel-card p-6">
                      <p className="vercel-text-secondary text-body italic">
                        {product.benefits}
                      </p>
                    </div>

                    <Button
                      asChild
                      className="vercel-button-primary h-11 px-6 text-base font-medium"
                    >
                      <Link href={product.href} className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${isEven ? "" : "lg:col-start-1"} flex items-stretch h-full`}>
                  <Card className="vercel-card clean-hover flex flex-col h-full">
                    <CardContent className="p-0 flex-1 flex items-center justify-center">
                      <div
                        className={`w-full flex items-center justify-center h-full relative`}
                        style={{
                          minHeight: '220px',
                          height: '100%',
                          width: '100%',
                          maxWidth: '600px',
                          minWidth: '320px',
                          aspectRatio: '2/1',
                        }}
                      >
                        <div
                          className="relative flex items-center justify-center h-full w-full"
                          style={{ width: '100%', height: '100%' }}
                        >
                          <motion.div
                            className="absolute inset-0 rounded-lg blur-2xl opacity-70 w-full h-full"
                            style={{
                              zIndex: 1,
                              background: isEven
                                ? 'radial-gradient(ellipse at 50% 50%, rgba(251,191,36,0.7) 0%, rgba(244,114,182,0.6) 40%, rgba(245,158,66,0.5) 80%, transparent 100%)'
                                : 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.7) 0%, rgba(6,182,212,0.6) 40%, rgba(129,140,248,0.5) 80%, transparent 100%)'
                            }}
                            animate={{
                              opacity: [0.7, 0.9, 0.7],
                              scale: [0.92, 1, 0.92],
                            }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <div className="absolute inset-0 opacity-5 pointer-events-none">
                            <motion.div
                              className="w-full h-full"
                              style={{
                                backgroundImage:
                                  "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px)",
                              }}
                              animate={{ x: [0, 60, 0] }}
                              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            {product.name === "Facilis AI Agent" ? (
                              <AnimatedChatDemo />
                            ) : (
                              <AMPShowcaseDemo />
                            )}
                          </div>
                          <div className="absolute inset-0 z-0">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={`dot-${i}`}
                                className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
                                style={{
                                  left: `${30 + i * 20}%`,
                                  top: `${30 + i * 10}%`,
                                }}
                                animate={{
                                  opacity: [0.2, 0.6, 0.2],
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: i * 0.5,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <div className="vercel-card p-12">
            <h3 className="text-3xl heading-secondary vercel-text-primary mb-6">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-xl vercel-text-secondary mb-10 max-w-2xl mx-auto text-body">
              Discover how our products can revolutionize your industrial processes
              and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="vercel-button-primary h-11 px-6 text-base font-medium"
              >
                <Link href="/products">Explore All Products</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="vercel-button-secondary h-11 px-6 text-base font-medium"
              >
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- AI Agent Chat Demo ---
function AnimatedChatDemo() {
  const chatSequence = [
    { user: "How can I improve my plant's energy efficiency?", ai: "Analyzing... You can save 12% by optimizing compressor schedules." },
    { user: "Show me today's production summary.", ai: "Today's output: 8,200 units. No anomalies detected." },
    { user: "Any maintenance alerts?", ai: "All systems normal. No maintenance required today." },
    { user: "Summarize this week's performance.", ai: "Production up 5%. Energy use down 3%. Great job!" },
  ];

  const [step, setStep] = useState(0);
  const [userText, setUserText] = useState("");
  const [aiText, setAiText] = useState("");
  const [phase, setPhase] = useState<'user'|'ai'|'wait'>('user');

  // Reset on step change
  useEffect(() => {
    setUserText("");
    setAiText("");
    setPhase('user');
  }, [step]);

  // Animate user typing
  useEffect(() => {
    if (phase !== 'user') return;
    const msg = chatSequence[step].user;
    let idx = 0;
    const interval = setInterval(() => {
      setUserText(msg.slice(0, idx + 1));
      idx++;
      if (idx === msg.length) {
        clearInterval(interval);
        setTimeout(() => setPhase('ai'), 400);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [phase, step]);

  // Animate AI typing
  useEffect(() => {
    if (phase !== 'ai') return;
    const msg = chatSequence[step].ai;
    let idx = 0;
    const interval = setInterval(() => {
      setAiText(msg.slice(0, idx + 1));
      idx++;
      if (idx === msg.length) {
        clearInterval(interval);
        setTimeout(() => setPhase('wait'), 1200);
      }
    }, 22);
    return () => clearInterval(interval);
  }, [phase, step]);

  // Wait, then go to next step
  useEffect(() => {
    if (phase !== 'wait') return;
    const timeout = setTimeout(() => {
      setStep((s) => (s + 1) % chatSequence.length);
    }, 1200);
    return () => clearTimeout(timeout);
  }, [phase, step, chatSequence.length]);

  // Show all previous messages, plus current animating
  const visible = [];
  for (let i = 0; i < step; ++i) {
    visible.push({ user: chatSequence[i].user, ai: chatSequence[i].ai });
  }
  // Current animating
  visible.push({ user: userText, ai: aiText });

  return (
    <div className="flex flex-col justify-end items-center w-full h-full px-6 py-8 overflow-y-auto">
      {visible.map((msg, i) => (
        <div key={i} className="w-full flex flex-col gap-1 mb-2">
          {/* User bubble */}
          <div className="w-full flex justify-end">
            <div className="max-w-[80%] bg-neutral-900/80 border border-neutral-800 rounded-2xl px-5 py-3 text-right vercel-text-primary text-base shadow-lg">
              {msg.user}
              {i === visible.length - 1 && phase === 'user' && <span className="animate-pulse">|</span>}
            </div>
          </div>
          {/* AI bubble */}
          {msg.ai && (
            <div className="w-full flex justify-start">
              <div className="max-w-[85%] bg-white/10 border border-blue-400/20 rounded-2xl px-5 py-3 text-left text-white text-base shadow-lg">
                {msg.ai}
                {i === visible.length - 1 && phase === 'ai' && <span className="animate-pulse">|</span>}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// --- AMP Product Animation ---
// A beautiful, animated grid of app cards with glowing hover, staggered entrance, and floating effect
function AMPShowcaseDemo() {
  const apps = [
    { name: "Yield Analyzer", desc: "Boosts production yield with real-time analytics" },
    { name: "Energy Optimizer", desc: "Reduces energy costs with smart scheduling" },
    { name: "Quality Inspector", desc: "Detects defects using AI vision" },
    { name: "Downtime Tracker", desc: "Monitors and predicts equipment downtime" },
    { name: "Supply Chain AI", desc: "Optimizes inventory and logistics" },
    { name: "Smart Scheduler", desc: "AI-powered production scheduling" },
  ];
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number; w: number; h: number }>({ x: 0, y: 0, w: 0, h: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % apps.length);
    }, 1600);
    return () => clearInterval(interval);
  }, [apps.length]);

  // Update cursor position when active changes
  useLayoutEffect(() => {
    const ref = cardRefs.current[active];
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const parentRect = ref.parentElement?.getBoundingClientRect();
      if (parentRect) {
        // Center the cursor visually over the card, accounting for cursor size (40x40)
        const cursorW = 40, cursorH = 40;
        setCursorPos({
          x: rect.left - parentRect.left + rect.width / 2 - cursorW / 2,
          y: rect.top - parentRect.top + rect.height / 2 - cursorH / 2,
          w: rect.width,
          h: rect.height,
        });
      }
    }
  }, [active]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2 py-4 overflow-hidden">
      <div className="grid grid-cols-2 gap-4 w-full max-w-[380px] mx-auto relative overflow-visible" style={{ minHeight: 2 * 80 + 16 }}>
        {/* Cursor - absolutely positioned, animates to active card */}
        <motion.div
          style={{
            position: 'absolute',
            left: cursorPos.x,
            top: cursorPos.y,
            width: 48,
            height: 48,
            zIndex: 30,
            pointerEvents: 'none',
          }}
          animate={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Image src="/cursor.svg" alt="Cursor" width={48} height={48} priority draggable={false} style={{ pointerEvents: 'none', userSelect: 'none' }} />
        </motion.div>
        {apps.map((app, i) => (
          <motion.div
            key={app.name}
            ref={el => { cardRefs.current[i] = el; }}
            layout
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: i === active ? 1.08 : 1,
              boxShadow: i === active ? "0 0 32px 0 #fff6, 0 2px 16px #fff2" : "0 1px 8px #fff1",
              filter: i === active ? "brightness(1.15)" : "brightness(0.95)",
              zIndex: i === active ? 20 : 1,
            }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 180, damping: 18, duration: 0.7, delay: i * 0.06 }}
            className={`relative rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg transition-all duration-500 ${i === active ? "ring-2 ring-white/80 z-10" : "opacity-90"}`}
            style={{ minHeight: 80, maxWidth: '100%', overflow: 'visible' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-lg font-bold text-white/80">{app.name[0]}</span>
              </div>
              <span className="font-semibold text-white/90 text-base">{app.name}</span>
            </div>
            <div className="text-xs text-white/70 mt-2 leading-snug min-h-[32px]">{app.desc}</div>
            {/* Floating effect */}
            <motion.div
              animate={{
                y: [0, -4, 0, 4, 0],
                boxShadow: i === active ? "0 0 32px 0 #fff6, 0 2px 16px #fff2" : "0 1px 8px #fff1",
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none rounded-xl"
              style={{ zIndex: 1 }}
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-xs text-white/60 text-center max-w-xs">
        Explore ready-to-use AI apps for analytics, optimization, and more. AMP makes it easy to deploy, customize, and scale solutions for every workflow.
      </div>
    </div>
  );
}

function MiniLineChart() {
  // Simulated data for 7 days
  const data = [820, 900, 860, 950, 1020, 980, 1040];
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((v, i) => {
    const x = 32 + i * 48;
    const y = 140 - ((v - min) / (max - min + 1e-6)) * 80;
    return `${x},${y}`;
  }).join(" ");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[360px] mx-auto">
        <svg width="100%" height="160" viewBox="0 0 360 160" fill="none" className="rounded-xl shadow-lg border border-white/10 bg-white/5" style={{ display: 'block', width: '100%', height: 'auto' }}>
          <defs>
            <linearGradient id="gradwhite" x1="0" y1="0" x2="360" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.9" />
              <stop offset="1" stopColor="#e5e7eb" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Axes */}
          <line x1="32" y1="140" x2="328" y2="140" stroke="#e5e7eb" strokeWidth="2" />
          <line x1="32" y1="40" x2="32" y2="140" stroke="#e5e7eb" strokeWidth="2" />
          {/* Y axis labels */}
          {[0, 0.5, 1].map((t) => (
            <text key={t} x={10} y={140 - t * 80} fill="#e5e7eb" fontSize="12" fontFamily="Inter, sans-serif">{Math.round(min + (max - min) * t)}</text>
          ))}
          {/* X axis labels */}
          {days.map((d, i) => (
            <text key={d} x={32 + i * 48} y={155} fill="#e5e7eb" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle">{d}</text>
          ))}
          {/* Animated line */}
          <motion.polyline
            points={points}
            fill="none"
            stroke="url(#gradwhite)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ filter: 'drop-shadow(0 2px 8px #fff8)' }}
          />
          {/* Dots */}
          {data.map((v, i) => (
            <motion.circle
              key={i}
              cx={32 + i * 48}
              cy={140 - ((v - min) / (max - min + 1e-6)) * 80}
              r="5"
              fill="#fff"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.3, type: "spring" }}
            />
          ))}
        </svg>
        <div className="flex justify-between w-full mt-2 px-2 text-xs text-white font-mono">
          <span>Output (units)</span>
          <span>Week</span>
        </div>
      </div>
    </div>
  );
}

// Mini aesthetic table
function MiniTable() {
  const data = [
    { station: "Packaging", downtime: "1.2%" },
    { station: "Assembly", downtime: "0.6%" },
    { station: "Inspection", downtime: "0.3%" },
    { station: "Filling", downtime: "0.0%" },
  ];
  return (
    <div className="w-full">
      <table className="w-full text-xs text-left rounded-xl overflow-hidden border border-white/10 bg-white/5">
        <thead>
          <tr className="bg-white/10">
            <th className="px-4 py-3 font-semibold text-white">Station</th>
            <th className="px-4 py-3 font-semibold text-white">Downtime</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.station} className="border-t border-white/10">
              <td className="px-4 py-3 text-white/90">{row.station}</td>
              <td className="px-4 py-3 text-white/80">{row.downtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
