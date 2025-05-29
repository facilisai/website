"use client";

import { FlaskConical } from "lucide-react";

export default function ChemicalsIndustryPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mb-8">
            <FlaskConical className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Chemicals & Petrochemicals</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">Safer, More Efficient Chemical Manufacturing</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Enhance safety, efficiency, and yield in chemical production with AI-driven process control and predictive analytics.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Process Safety Monitoring</span>
              <span className="vercel-text-secondary">Detect hazardous conditions and prevent incidents in real time.</span>
            </li>
            <li className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Yield Optimization</span>
              <span className="vercel-text-secondary">Maximize output and minimize waste with advanced process analytics.</span>
            </li>
            <li className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Predictive Asset Maintenance</span>
              <span className="vercel-text-secondary">Reduce downtime and extend equipment life with predictive maintenance.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Advanced Chemical Manufacturing with AI</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI empowers chemical manufacturers with cutting-edge AI/ML:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Multivariate Process Control:</b> Optimize dozens of variables for safer, more efficient production.</li>
            <li><b>Predictive Maintenance:</b> Prevent equipment failures and reduce downtime with AI-driven insights.</li>
            <li><b>Process Simulation:</b> Use digital twins to test changes before implementation.</li>
            <li><b>Regulatory Compliance Automation:</b> Ensure safety and compliance with automated monitoring and reporting.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Case Study: 30% Downtime Reduction</h3>
            <p className="vercel-text-secondary">
              A global chemical company used Facilis.AI for predictive maintenance and process simulation, reducing unplanned downtime by 30% and improving safety compliance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 