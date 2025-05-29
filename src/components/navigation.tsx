"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CommandPalette } from "./search-command-palette";

const solutions = [
  {
    title: "Yield Improvement",
    href: "/solutions/yield",
    description: "Optimize production yields and reduce waste"
  },
  {
    title: "Predictive Maintenance",
    href: "/solutions/maintenance",
    description: "Prevent equipment failures before they occur"
  },
  {
    title: "Process Optimization",
    href: "/solutions/process",
    description: "Streamline operations for maximum efficiency"
  },
  {
    title: "Quality Control",
    href: "/solutions/quality",
    description: "Ensure consistent product quality"
  },
  {
    title: "Energy Efficiency",
    href: "/solutions/energy",
    description: "Reduce energy consumption and costs"
  },
  {
    title: "Supply Chain Management",
    href: "/solutions/supply-chain",
    description: "Optimize supply chain operations"
  }
];

const industries = [
  {
    title: "Food & Beverages",
    href: "/industries/food-beverage",
    description: "Optimize production and ensure quality"
  },
  {
    title: "Chemicals & Petrochemicals",
    href: "/industries/chemicals",
    description: "Enhance safety and efficiency"
  },
  {
    title: "Pharmaceuticals",
    href: "/industries/pharma",
    description: "Ensure compliance and quality"
  },
  {
    title: "Mining & Materials",
    href: "/industries/mining",
    description: "Optimize extraction and processing"
  },
  {
    title: "Semiconductors",
    href: "/industries/semiconductors",
    description: "Precision manufacturing solutions"
  },
  {
    title: "Oil & Gas",
    href: "/industries/oil-gas",
    description: "Enhance operational efficiency"
  }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPalette, setShowPalette] = useState(false);

  // Keyboard shortcut handler (CMD+K or CTRL+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowPalette((v) => !v);
      }
      if (e.key === 'Escape') {
        setShowPalette(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-neutral-800"
    >
      <CommandPalette open={showPalette} onClose={() => setShowPalette(false)} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Home">
            <div className="w-[104px] h-[104px] flex items-center justify-center">
              <Image src="/logo.svg" alt="Facilis.AI Logo" width={106} height={106} priority className="transition-transform duration-200 group-hover:scale-105" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="vercel-text-secondary hover:vercel-text-primary bg-transparent text-sm font-medium">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[300px] bg-neutral-900 border border-neutral-800 rounded-lg">
                      <Link
                        href="/about"
                        className="group block p-3 rounded-md hover:bg-neutral-800 transition-colors duration-200"
                      >
                        <div className="text-sm font-medium vercel-text-primary group-hover:vercel-accent transition-colors">
                          About Us
                        </div>
                        <div className="text-xs vercel-text-muted mt-1">
                          Our mission, vision, and company story
                        </div>
                      </Link>
                      <Link
                        href="/team"
                        className="group block p-3 rounded-md hover:bg-neutral-800 transition-colors duration-200"
                      >
                        <div className="text-sm font-medium vercel-text-primary group-hover:vercel-accent transition-colors">
                          Leadership Team
                        </div>
                        <div className="text-xs vercel-text-muted mt-1">
                          Meet our world-class experts and advisors
                        </div>
                      </Link>
                      <Link
                        href="/careers"
                        className="group block p-3 rounded-md hover:bg-neutral-800 transition-colors duration-200"
                      >
                        <div className="text-sm font-medium vercel-text-primary group-hover:vercel-accent transition-colors">
                          Careers
                        </div>
                        <div className="text-xs vercel-text-muted mt-1">
                          Join our mission to transform manufacturing
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/products" className="vercel-text-secondary hover:vercel-text-primary transition-colors duration-200 text-sm font-medium px-3 py-2">
                    Products
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="vercel-text-secondary hover:vercel-text-primary bg-transparent text-sm font-medium">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[400px] bg-neutral-900 border border-neutral-800 rounded-lg">
                      <div className="grid grid-cols-1 gap-2">
                        {solutions.slice(0, 6).map((solution) => (
                          <Link
                            key={solution.title}
                            href={solution.href}
                            className="group block p-3 rounded-md hover:bg-neutral-800 transition-colors duration-200"
                          >
                            <div className="text-sm font-medium vercel-text-primary group-hover:vercel-accent transition-colors">
                              {solution.title}
                            </div>
                            <div className="text-xs vercel-text-muted mt-1">
                              {solution.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="vercel-text-secondary hover:vercel-text-primary bg-transparent text-sm font-medium">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[400px] bg-neutral-900 border border-neutral-800 rounded-lg">
                      <div className="grid grid-cols-1 gap-2">
                        {industries.map((industry) => (
                          <Link
                            key={industry.title}
                            href={industry.href}
                            className="group block p-3 rounded-md hover:bg-neutral-800 transition-colors duration-200"
                          >
                            <div className="text-sm font-medium vercel-text-primary group-hover:vercel-accent transition-colors">
                              {industry.title}
                            </div>
                            <div className="text-xs vercel-text-muted mt-1">
                              {industry.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="w-6" />
            <button
              type="button"
              onClick={() => setShowPalette(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium border border-neutral-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ minWidth: 120 }}
            >
              <Search className="w-4 h-4 mr-1 text-neutral-400" />
              <span>Search</span>
              <span className="ml-2 px-2 py-0.5 rounded bg-neutral-900 text-xs font-mono text-neutral-400 border border-neutral-700">⌘ K</span>
            </button>
            <Button
              asChild
              className="vercel-button-primary h-9 px-4 text-sm font-medium"
            >
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="vercel-text-secondary hover:vercel-text-primary h-9 w-9 p-0"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-800 py-4"
          >
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="vercel-text-muted text-sm font-medium">Company</div>
                <div className="pl-4 space-y-2">
                  <Link href="/about" className="block vercel-text-secondary hover:vercel-text-primary transition-colors text-sm">
                    About
                  </Link>
                  <Link href="/team" className="block vercel-text-secondary hover:vercel-text-primary transition-colors text-sm">
                    Team
                  </Link>
                  <Link href="/careers" className="block vercel-text-secondary hover:vercel-text-primary transition-colors text-sm">
                    Careers
                  </Link>
                </div>
              </div>
              <Link href="/products" className="vercel-text-secondary hover:vercel-text-primary transition-colors text-sm">
                Products
              </Link>
              <div className="space-y-2">
                <div className="vercel-text-muted text-sm font-medium">Solutions</div>
                <div className="pl-4 space-y-2">
                  {solutions.slice(0, 3).map((solution) => (
                    <Link
                      key={solution.title}
                      href={solution.href}
                      className="block vercel-text-secondary hover:vercel-text-primary transition-colors text-sm"
                    >
                      {solution.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="vercel-text-muted text-sm font-medium">Industries</div>
                <div className="pl-4 space-y-2">
                  {industries.slice(0, 3).map((industry) => (
                    <Link
                      key={industry.title}
                      href={industry.href}
                      className="block vercel-text-secondary hover:vercel-text-primary transition-colors text-sm"
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPalette(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium border border-neutral-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Search className="w-4 h-4 mr-1 text-neutral-400" />
                <span>Search</span>
                <span className="ml-2 px-2 py-0.5 rounded bg-neutral-900 text-xs font-mono text-neutral-400 border border-neutral-700">⌘ K</span>
              </button>
              <Button
                asChild
                className="vercel-button-primary w-full h-9 text-sm font-medium"
              >
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
