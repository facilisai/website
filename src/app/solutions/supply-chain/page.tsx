"use client";

import { Truck } from "lucide-react";

export default function SupplyChainManagementPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-indigo-500 to-blue-700 mb-8">
            <Truck className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Supply Chain Management</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">Optimize Your Supply Chain</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Use AI to forecast demand, optimize inventory, and streamline logistics. Facilis.AI helps you build a resilient, efficient, and data-driven supply chain.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-indigo-500/10 to-blue-700/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Demand Forecasting</span>
              <span className="vercel-text-secondary">Predict customer demand and optimize production planning.</span>
            </li>
            <li className="bg-gradient-to-r from-indigo-500/10 to-blue-700/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Inventory Optimization</span>
              <span className="vercel-text-secondary">Reduce stockouts and excess inventory with intelligent automation.</span>
            </li>
            <li className="bg-gradient-to-r from-indigo-500/10 to-blue-700/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Logistics Streamlining</span>
              <span className="vercel-text-secondary">Enhance delivery performance and reduce transportation costs.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">AI-Driven Supply Chain Transformation</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI enables a new era of supply chain management:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Multi-Echelon Optimization:</b> Optimize inventory and logistics across the entire network.</li>
            <li><b>AI-Powered Risk Management:</b> Predict and mitigate disruptions before they impact operations.</li>
            <li><b>Real-Time Visibility:</b> Track shipments, inventory, and demand in real time.</li>
            <li><b>Digital Twins:</b> Simulate supply chain scenarios for better planning and resilience.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Resilience Story: 3x Faster Recovery</h3>
            <p className="vercel-text-secondary">
              A global manufacturer used Facilis.AI to implement multi-echelon optimization and digital twins, enabling 3x faster recovery from supply chain disruptions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 