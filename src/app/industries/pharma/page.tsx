"use client";

import { Pill } from "lucide-react";

export default function PharmaIndustryPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 mb-8">
            <Pill className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Pharmaceuticals</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">AI for Pharma Manufacturing</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Ensure compliance, quality, and efficiency in drug manufacturing with AI-powered monitoring, documentation, and process optimization.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-pink-400/10 to-fuchsia-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Batch Record Automation</span>
              <span className="vercel-text-secondary">Automate documentation and compliance for every batch produced.</span>
            </li>
            <li className="bg-gradient-to-r from-pink-400/10 to-fuchsia-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Quality by Design</span>
              <span className="vercel-text-secondary">Use AI to design and monitor processes for consistent product quality.</span>
            </li>
            <li className="bg-gradient-to-r from-pink-400/10 to-fuchsia-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Deviation Detection</span>
              <span className="vercel-text-secondary">Detect and address process deviations in real time.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">AI-Enhanced Pharma Manufacturing</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI empowers pharma with advanced AI/ML for quality, compliance, and efficiency:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Continuous Process Verification:</b> Monitor and control every batch in real time for compliance.</li>
            <li><b>Deviation Root Cause Analysis:</b> Instantly identify and address sources of process deviations.</li>
            <li><b>Automated Documentation:</b> Streamline batch records and regulatory submissions with AI.</li>
            <li><b>Predictive Quality:</b> Forecast and prevent quality issues before they occur.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Case Study: 35% Faster Release</h3>
            <p className="vercel-text-secondary">
              A pharmaceutical manufacturer used Facilis.AI for continuous process verification and automated documentation, reducing batch release times by 35% and improving audit readiness.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 