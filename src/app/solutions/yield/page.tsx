"use client";

import { TrendingUp } from "lucide-react";

export default function YieldImprovementPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-8">
            <TrendingUp className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Yield Improvement</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">Maximize Output, Minimize Waste</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Leverage AI-driven insights to optimize production yields, reduce scrap, and ensure every batch meets your quality standards. Facilis.AI empowers manufacturers to unlock hidden value in their processes.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Batch Process Optimization</span>
              <span className="vercel-text-secondary">Reduce off-spec product and increase first-pass yield in batch manufacturing.</span>
            </li>
            <li className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Real-Time Parameter Tuning</span>
              <span className="vercel-text-secondary">Continuously adjust process parameters to maximize throughput and minimize waste.</span>
            </li>
            <li className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Root Cause Analysis</span>
              <span className="vercel-text-secondary">Identify and eliminate sources of yield loss using AI-powered analytics.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Advanced Yield Strategies</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI leverages advanced AI/ML techniques to drive yield improvement beyond traditional methods. Our platform integrates:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Multivariate Process Control:</b> Monitor and optimize dozens of variables simultaneously for holistic process improvement.</li>
            <li><b>Predictive Analytics:</b> Anticipate yield losses before they occur and take proactive action.</li>
            <li><b>Digital Twins:</b> Simulate process changes in a virtual environment to identify optimal settings without risk.</li>
            <li><b>Continuous Feedback Loops:</b> Real-time learning and adjustment to maximize first-pass yield.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Case Study: 18% Yield Increase</h3>
            <p className="vercel-text-secondary">
              A global manufacturer used Facilis.AI to implement predictive analytics and digital twins, resulting in an 18% increase in first-pass yield and a 30% reduction in scrap within six months.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 