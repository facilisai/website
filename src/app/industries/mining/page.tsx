"use client";

import { Mountain } from "lucide-react";

export default function MiningIndustryPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 mb-8">
            <Mountain className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Mining & Materials</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">AI for Mining & Materials</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Optimize extraction, processing, and material handling operations with AI-driven analytics and automation.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-yellow-500/10 to-amber-600/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Ore Grade Prediction</span>
              <span className="vercel-text-secondary">Use AI to predict ore quality and optimize extraction processes.</span>
            </li>
            <li className="bg-gradient-to-r from-yellow-500/10 to-amber-600/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Equipment Health Monitoring</span>
              <span className="vercel-text-secondary">Monitor and predict equipment failures to reduce downtime.</span>
            </li>
            <li className="bg-gradient-to-r from-yellow-500/10 to-amber-600/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Material Flow Optimization</span>
              <span className="vercel-text-secondary">Optimize material transport and handling for efficiency and safety.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">AI-Powered Mining & Materials Innovation</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI brings next-gen AI/ML to mining and materials operations:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Ore Body Modeling:</b> Use AI to predict ore quality and optimize extraction strategies.</li>
            <li><b>Autonomous Equipment Monitoring:</b> Monitor and control fleets for safety and efficiency.</li>
            <li><b>Process Automation:</b> Automate material handling and processing for higher throughput.</li>
            <li><b>Environmental Impact Reduction:</b> Track and minimize emissions and waste with real-time analytics.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Case Study: 18% Throughput Gain</h3>
            <p className="vercel-text-secondary">
              A mining operator used Facilis.AI for ore body modeling and autonomous equipment monitoring, increasing throughput by 18% and reducing environmental impact.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 