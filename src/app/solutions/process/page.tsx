"use client";

import { Settings } from "lucide-react";

export default function ProcessOptimizationPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 mb-8">
            <Settings className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Process Optimization</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">Streamline Operations, Maximize Efficiency</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Use AI to analyze, model, and optimize your manufacturing processes. Facilis.AI helps you identify bottlenecks, improve throughput, and achieve operational excellence.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Bottleneck Analysis</span>
              <span className="vercel-text-secondary">Identify and resolve process bottlenecks to increase throughput.</span>
            </li>
            <li className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Process Simulation</span>
              <span className="vercel-text-secondary">Model and simulate process changes before implementation.</span>
            </li>
            <li className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Continuous Improvement</span>
              <span className="vercel-text-secondary">Leverage AI for ongoing process monitoring and optimization.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Process Optimization in Action</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI enables next-level process optimization with:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>AI-Driven Root Cause Analysis:</b> Rapidly identify the true drivers of inefficiency.</li>
            <li><b>Process Mining:</b> Visualize and analyze every step in your workflow for hidden bottlenecks.</li>
            <li><b>Adaptive Control:</b> Automatically adjust process parameters in real time for optimal results.</li>
            <li><b>Digital Twins:</b> Test process changes virtually before deploying on the shop floor.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Improvement Example: 15% Throughput Gain</h3>
            <p className="vercel-text-secondary">
              By leveraging adaptive control and process mining, a manufacturer increased throughput by 15% and reduced process variability by 25% using Facilis.AI.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 