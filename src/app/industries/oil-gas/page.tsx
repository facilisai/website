"use client";

import { Fuel } from "lucide-react";

export default function OilGasIndustryPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mb-8">
            <Fuel className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Oil & Gas</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">AI for Oil & Gas Operations</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Enhance operational efficiency and safety in energy production with AI-driven monitoring, predictive maintenance, and process optimization.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Pipeline Monitoring</span>
              <span className="vercel-text-secondary">Detect leaks and anomalies in pipelines with real-time AI analytics.</span>
            </li>
            <li className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Production Optimization</span>
              <span className="vercel-text-secondary">Maximize output and minimize downtime in upstream and downstream operations.</span>
            </li>
            <li className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Safety Incident Prevention</span>
              <span className="vercel-text-secondary">Predict and prevent safety incidents with AI-powered risk analysis.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">AI for Safer, Smarter Oil & Gas</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI delivers advanced AI/ML for oil & gas operations:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Predictive Asset Integrity:</b> Monitor pipelines and equipment to prevent failures and leaks.</li>
            <li><b>Production Optimization:</b> Use AI to maximize output and minimize downtime across assets.</li>
            <li><b>Safety Analytics:</b> Predict and prevent incidents with real-time risk analysis.</li>
            <li><b>Emissions Monitoring:</b> Track and reduce carbon footprint with automated reporting.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Case Study: 40% Incident Reduction</h3>
            <p className="vercel-text-secondary">
              An energy company used Facilis.AI for predictive asset integrity and safety analytics, reducing incidents by 40% and improving regulatory compliance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 