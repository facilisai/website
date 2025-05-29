import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { createPortal } from "react-dom";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

// --- BEGIN SEARCH INDEX ---
// This index is built from all visible page content (titles, headings, main text)
const SEARCH_INDEX = [
  // Home
  {
    title: "Home",
    href: "/",
    snippet: "Transform your industrial operations with Agentic AI that understands your processes, optimizes in real-time, and delivers measurable ROI in days, not months.",
    page: "Home",
    date: undefined,
  },
  // About
  {
    title: "About",
    href: "/about",
    snippet: "We're revolutionizing manufacturing with AI that understands your domain, optimizes your processes, and delivers results from day one. Learn about our mission, values, and leadership.",
    page: "About",
    date: undefined,
  },
  {
    title: "What's in the name?",
    href: "/about",
    snippet: "Facilis, Latin for 'easy', is at the heart of everything we do. Our mission is to make advanced AI accessible for manufacturers, empowering them to make data-informed decisions seamlessly and effortlessly.",
    page: "About",
    date: undefined,
  },
  {
    title: "What inspired us?",
    href: "/about",
    snippet: "Facilis.ai was born from a persistent disappointment of watching AI and analytics initiatives fall short from tackling manufacturing operation challenges.",
    page: "About",
    date: undefined,
  },
  {
    title: "What we are building?",
    href: "/about",
    snippet: "Our vision is to develop a platform that harnesses cutting-edge AI and machine learning to enable decision-makers to build their own AI-powered applications, tailored to their daily challenges.",
    page: "About",
    date: undefined,
  },
  {
    title: "Our Values",
    href: "/about",
    snippet: "The principles that guide everything we do: Accessibility, Results-Driven, Innovation, Partnership.",
    page: "About",
    date: undefined,
  },
  // Products
  {
    title: "Products",
    href: "/products",
    snippet: "Discover our flagship AI solutions that are transforming manufacturing operations worldwide with measurable results. Explore Facilis AI Agent and App Marketplace (AMP).",
    page: "Products",
    date: undefined,
  },
  {
    title: "Facilis AI Agent",
    href: "/products",
    snippet: "Your AI-powered engineering partner, designed to supercharge your productivity and creativity. Generate production-ready code and prototypes in seconds.",
    page: "Products",
    date: undefined,
  },
  {
    title: "App Marketplace (AMP)",
    href: "/products",
    snippet: "Your gateway to a universe of ready-to-use, AI-powered applications. Instantly deploy, customize, and scale apps for analytics, automation, visualization, and more.",
    page: "Products",
    date: undefined,
  },
  // Resources
  {
    title: "Resources",
    href: "/resources",
    snippet: "Explore our comprehensive library of insights, research, and practical guidance for implementing AI in manufacturing environments. Blog posts, whitepapers, case studies, webinars, and more.",
    page: "Resources",
    date: undefined,
  },
  {
    title: "Featured Resources",
    href: "/resources",
    snippet: "Our most popular and impactful content for manufacturing professionals.",
    page: "Resources",
    date: undefined,
  },
  // Solutions
  {
    title: "Solutions",
    href: "/solutions",
    snippet: "AI-powered solutions for yield, quality, process, maintenance, supply chain, and energy. Achieve operational excellence with Facilis.AI.",
    page: "Solutions",
    date: undefined,
  },
  // Team
  {
    title: "Team",
    href: "/team",
    snippet: "Meet the Facilis.AI team: world-class experts in AI, manufacturing, and process optimization, dedicated to your success.",
    page: "Team",
    date: undefined,
  },
  // Contact
  {
    title: "Contact",
    href: "/contact",
    snippet: "Ready to see how Facilis.AI can transform your manufacturing operations? Schedule a personalized demonstration or connect with our team.",
    page: "Contact",
    date: undefined,
  },
  {
    title: "How Can We Help?",
    href: "/contact",
    snippet: "Choose the best way to connect with our team: Schedule Demo, Expert Consultation, Direct Call.",
    page: "Contact",
    date: undefined,
  },
  {
    title: "Request a Demo",
    href: "/contact",
    snippet: "Fill out the form below and our team will get back to you within 24 hours.",
    page: "Contact",
    date: undefined,
  },
  // Careers
  {
    title: "Careers",
    href: "/careers",
    snippet: "Join our mission to revolutionize manufacturing with AI. Explore open roles in engineering, product, customer success, and more.",
    page: "Careers",
    date: undefined,
  },
  // Industries Overview
  {
    title: "Industries",
    href: "/industries",
    snippet: "Delivering tailored AI solutions across diverse manufacturing sectors, helping enterprises achieve operational excellence.",
    page: "Industries",
    date: undefined,
  },
  // Oil & Gas
  {
    title: "Oil & Gas",
    href: "/industries/oil-gas",
    snippet: "AI for Oil & Gas Operations. Enhance operational efficiency and safety in energy production with AI-driven monitoring, predictive maintenance, and process optimization.",
    page: "Industries",
    date: undefined,
  },
  {
    title: "Pipeline Monitoring",
    href: "/industries/oil-gas",
    snippet: "Detect leaks and anomalies in pipelines with real-time AI analytics.",
    page: "Oil & Gas",
    date: undefined,
  },
  {
    title: "Production Optimization",
    href: "/industries/oil-gas",
    snippet: "Maximize output and minimize downtime in upstream and downstream operations.",
    page: "Oil & Gas",
    date: undefined,
  },
  {
    title: "Safety Incident Prevention",
    href: "/industries/oil-gas",
    snippet: "Predict and prevent safety incidents with AI-powered risk analysis.",
    page: "Oil & Gas",
    date: undefined,
  },
  // Chemicals & Petrochemicals
  {
    title: "Chemicals & Petrochemicals",
    href: "/industries/chemicals",
    snippet: "Safer, More Efficient Chemical Manufacturing. Enhance safety, efficiency, and yield in chemical production with AI-driven process control and predictive analytics.",
    page: "Industries",
    date: undefined,
  },
  {
    title: "Process Safety Monitoring",
    href: "/industries/chemicals",
    snippet: "Detect hazardous conditions and prevent incidents in real time.",
    page: "Chemicals & Petrochemicals",
    date: undefined,
  },
  {
    title: "Yield Optimization (Chemicals)",
    href: "/industries/chemicals",
    snippet: "Maximize output and minimize waste with advanced process analytics.",
    page: "Chemicals & Petrochemicals",
    date: undefined,
  },
  {
    title: "Predictive Asset Maintenance",
    href: "/industries/chemicals",
    snippet: "Reduce downtime and extend equipment life with predictive maintenance.",
    page: "Chemicals & Petrochemicals",
    date: undefined,
  },
  // Pharmaceuticals
  {
    title: "Pharmaceuticals",
    href: "/industries/pharma",
    snippet: "AI for Pharma Manufacturing. Ensure compliance, quality, and efficiency in drug manufacturing with AI-powered monitoring, documentation, and process optimization.",
    page: "Industries",
    date: undefined,
  },
  {
    title: "Batch Record Automation",
    href: "/industries/pharma",
    snippet: "Automate documentation and compliance for every batch produced.",
    page: "Pharmaceuticals",
    date: undefined,
  },
  {
    title: "Quality by Design",
    href: "/industries/pharma",
    snippet: "Use AI to design and monitor processes for consistent product quality.",
    page: "Pharmaceuticals",
    date: undefined,
  },
  {
    title: "Deviation Detection",
    href: "/industries/pharma",
    snippet: "Detect and address process deviations in real time.",
    page: "Pharmaceuticals",
    date: undefined,
  },
  // Mining & Materials
  {
    title: "Mining & Materials",
    href: "/industries/mining",
    snippet: "AI for Mining & Materials. Optimize extraction, processing, and material handling operations with AI-driven analytics and automation.",
    page: "Industries",
    date: undefined,
  },
  {
    title: "Ore Grade Prediction",
    href: "/industries/mining",
    snippet: "Use AI to predict ore quality and optimize extraction processes.",
    page: "Mining & Materials",
    date: undefined,
  },
  {
    title: "Equipment Health Monitoring",
    href: "/industries/mining",
    snippet: "Monitor and predict equipment failures to reduce downtime.",
    page: "Mining & Materials",
    date: undefined,
  },
  {
    title: "Material Flow Optimization",
    href: "/industries/mining",
    snippet: "Optimize material transport and handling for efficiency and safety.",
    page: "Mining & Materials",
    date: undefined,
  },
  // Semiconductors
  {
    title: "Semiconductors",
    href: "/industries/semiconductors",
    snippet: "Precision for High-Tech Manufacturing. Achieve precision and yield in semiconductor manufacturing with AI-powered process control, defect detection, and predictive maintenance.",
    page: "Industries",
    date: undefined,
  },
  {
    title: "Defect Detection",
    href: "/industries/semiconductors",
    snippet: "Use AI vision to detect micro-defects in wafers and chips.",
    page: "Semiconductors",
    date: undefined,
  },
  {
    title: "Yield Optimization (Semiconductors)",
    href: "/industries/semiconductors",
    snippet: "Maximize yield and minimize scrap with process analytics.",
    page: "Semiconductors",
    date: undefined,
  },
  {
    title: "Predictive Maintenance (Semiconductors)",
    href: "/industries/semiconductors",
    snippet: "Prevent equipment failures and reduce downtime in fabs.",
    page: "Semiconductors",
    date: undefined,
  },
  // Food & Beverages
  {
    title: "Food & Beverages",
    href: "/industries/food-beverage",
    snippet: "Smarter Food & Beverage Manufacturing. Improve product quality, reduce waste, and ensure food safety with AI-powered process optimization and real-time monitoring.",
    page: "Industries",
    date: undefined,
  },
  {
    title: "Recipe Optimization",
    href: "/industries/food-beverage",
    snippet: "Use AI to optimize ingredient ratios for taste, cost, and consistency.",
    page: "Food & Beverages",
    date: undefined,
  },
  {
    title: "Quality Assurance Automation",
    href: "/industries/food-beverage",
    snippet: "Automate quality checks and reduce human error in production lines.",
    page: "Food & Beverages",
    date: undefined,
  },
  {
    title: "Shelf Life Prediction",
    href: "/industries/food-beverage",
    snippet: "Predict and extend product shelf life with advanced analytics.",
    page: "Food & Beverages",
    date: undefined,
  },
  // Add more entries for other pages/sections as needed...
];
// --- END SEARCH INDEX ---

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
    if (!open) {
      setQuery("");
      setSelected(0);
    }
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        setSelected((s) => Math.max(s - 1, 0));
        e.preventDefault();
      } else if (e.key === "Enter") {
        if (filtered[selected]) {
          window.location.href = filtered[selected].href;
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, selected, query]);

  // --- REAL SEARCH LOGIC ---
  const filtered = query
    ? SEARCH_INDEX.filter((r) =>
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.snippet.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_INDEX;

  // Only render portal on client
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-xl mx-auto rounded-2xl shadow-2xl bg-white/80 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 backdrop-blur-lg"
            style={{ boxShadow: "0 8px 40px 0 rgba(0,0,0,0.18)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Search bar */}
            <div className="flex items-center px-6 pt-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
              <Search className="w-5 h-5 text-neutral-400 mr-3" />
              <input
                ref={inputRef}
                className="flex-1 bg-transparent outline-none text-lg text-neutral-900 dark:text-white placeholder:text-neutral-400"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.stopPropagation()}
              />
              <button
                onClick={onClose}
                className="ml-4 p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-neutral-400" />
              </button>
            </div>
            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto px-2 py-2">
              {filtered.length === 0 ? (
                <div className="text-center text-neutral-400 py-12 text-lg">No results found.</div>
              ) : (
                <ul>
                  {filtered.map((item, i) => (
                    <li key={item.title + item.href}>
                      <Link
                        href={item.href}
                        className={`flex flex-col items-start px-4 py-3 rounded-xl transition-all duration-150 cursor-pointer space-y-1 ${
                          i === selected
                            ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200"
                            : "hover:bg-neutral-100 dark:hover:bg-neutral-800/60 text-neutral-900 dark:text-white"
                        }`}
                        onMouseEnter={() => setSelected(i)}
                        onClick={onClose}
                        tabIndex={-1}
                      >
                        <span className="font-medium text-base truncate max-w-[90%]">{item.title}</span>
                        <span className="text-xs text-neutral-400 whitespace-nowrap">{item.page || item.href}</span>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">{item.snippet}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Footer actions */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 bg-white/60 dark:bg-neutral-900/60 rounded-b-2xl">
              <div>
                <span className="font-semibold">↵</span> Go
                <span className="ml-4 font-semibold">Esc</span> Close
              </div>
              <div>
                <span className="font-semibold">↑↓</span> Navigate
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modal, typeof window !== 'undefined' ? document.body : (null as any));
} 