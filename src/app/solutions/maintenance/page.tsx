"use client";

import { Wrench } from "lucide-react";

export default function PredictiveMaintenancePage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-8">
            <Wrench className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Predictive Maintenance</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">Prevent Downtime, Boost Reliability</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Use advanced analytics and machine learning to predict equipment failures before they happen. Facilis.AI helps you schedule maintenance proactively, reduce unplanned downtime, and extend asset life.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Failure Prediction</span>
              <span className="vercel-text-secondary">Detect early warning signs of equipment issues and prevent costly breakdowns.</span>
            </li>
            <li className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Maintenance Scheduling</span>
              <span className="vercel-text-secondary">Optimize maintenance intervals to minimize disruption and maximize uptime.</span>
            </li>
            <li className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Spare Parts Optimization</span>
              <span className="vercel-text-secondary">Ensure the right parts are available when needed, reducing inventory costs.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Next-Gen Predictive Maintenance</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI brings predictive maintenance to the next level:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Sensor Fusion:</b> Combine data from vibration, temperature, and process sensors for a holistic view.</li>
            <li><b>AI-Driven RUL Prediction:</b> Accurately estimate Remaining Useful Life (RUL) for critical assets.</li>
            <li><b>Prescriptive Maintenance:</b> Get actionable recommendations, not just alerts.</li>
            <li><b>Digital Twins:</b> Simulate failure scenarios and maintenance strategies virtually.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Downtime Reduction: 50% Less Unplanned Downtime</h3>
            <p className="vercel-text-secondary">
              A large plant used Facilis.AI to implement sensor fusion and prescriptive maintenance, cutting unplanned downtime in half and saving millions in lost production.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 