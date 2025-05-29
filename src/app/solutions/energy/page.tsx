"use client";

import { Zap } from "lucide-react";

export default function EnergyEfficiencyPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mb-8">
            <Zap className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Energy Efficiency</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">Reduce Costs, Improve Sustainability</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Use AI to monitor and optimize energy consumption across your operations. Facilis.AI helps you lower costs, reduce emissions, and achieve your sustainability goals.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Real-Time Energy Monitoring</span>
              <span className="vercel-text-secondary">Track energy usage at every stage of production and identify inefficiencies.</span>
            </li>
            <li className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Demand Response Optimization</span>
              <span className="vercel-text-secondary">Automatically adjust operations to reduce peak demand charges.</span>
            </li>
            <li className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Sustainability Reporting</span>
              <span className="vercel-text-secondary">Generate accurate reports for regulatory compliance and ESG goals.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Deep Dive: AI for Sustainable Energy</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Our platform goes beyond monitoring to deliver true energy intelligence:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Real-Time Load Balancing:</b> Dynamically shift loads to optimize for cost and sustainability.</li>
            <li><b>Anomaly Detection:</b> Instantly flag abnormal consumption patterns to prevent waste.</li>
            <li><b>Carbon Footprint Tracking:</b> Monitor emissions and progress toward ESG goals.</li>
            <li><b>Renewables Integration:</b> Seamlessly blend solar, wind, and other sources into your energy mix.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Impact Story: 22% Energy Savings</h3>
            <p className="vercel-text-secondary">
              A leading facility used Facilis.AI to implement real-time load balancing and anomaly detection, achieving a 22% reduction in energy costs and a measurable drop in carbon emissions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 