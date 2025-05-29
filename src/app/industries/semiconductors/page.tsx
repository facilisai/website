"use client";

import { Cpu } from "lucide-react";

export default function SemiconductorsIndustryPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-8">
            <Cpu className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Semiconductors</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">Precision for High-Tech Manufacturing</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Achieve precision and yield in semiconductor manufacturing with AI-powered process control, defect detection, and predictive maintenance.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Defect Detection</span>
              <span className="vercel-text-secondary">Use AI vision to detect micro-defects in wafers and chips.</span>
            </li>
            <li className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Yield Optimization</span>
              <span className="vercel-text-secondary">Maximize yield and minimize scrap with process analytics.</span>
            </li>
            <li className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Predictive Maintenance</span>
              <span className="vercel-text-secondary">Prevent equipment failures and reduce downtime in fabs.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">AI for Precision Semiconductor Manufacturing</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI brings advanced AI/ML to semiconductor fabs:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Defect Pattern Recognition:</b> Use AI vision to detect and classify micro-defects in real time.</li>
            <li><b>Yield Prediction & Optimization:</b> Forecast yield and optimize process parameters for maximum output.</li>
            <li><b>Equipment Health Analytics:</b> Predict and prevent tool failures to minimize downtime.</li>
            <li><b>Process Digital Twins:</b> Simulate and optimize process changes before deployment.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Case Study: 28% Yield Gain</h3>
            <p className="vercel-text-secondary">
              A semiconductor fab used Facilis.AI for defect pattern recognition and yield optimization, increasing yield by 28% and reducing scrap rates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 