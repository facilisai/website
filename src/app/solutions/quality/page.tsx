"use client";

import { CheckCircle } from "lucide-react";

export default function QualityControlPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-500 mb-8">
            <CheckCircle className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Quality Control</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">Ensure Consistent Product Quality</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Monitor, analyze, and control product quality in real time. Facilis.AI enables manufacturers to detect deviations, reduce defects, and maintain the highest standards.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Automated Defect Detection</span>
              <span className="vercel-text-secondary">Use AI vision to spot defects and anomalies in real time.</span>
            </li>
            <li className="bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Statistical Process Control</span>
              <span className="vercel-text-secondary">Monitor process variables and maintain quality thresholds.</span>
            </li>
            <li className="bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Root Cause Analysis</span>
              <span className="vercel-text-secondary">Quickly identify and address sources of quality variation.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Quality Intelligence: Beyond Inspection</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI empowers manufacturers to move from reactive to predictive quality control:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Predictive Quality:</b> Use AI to forecast quality issues before they occur.</li>
            <li><b>AI-Powered SPC:</b> Advanced statistical process control with real-time anomaly detection.</li>
            <li><b>Automated Root Cause:</b> Instantly identify the source of defects and recommend corrective actions.</li>
            <li><b>Closed-Loop Feedback:</b> Continuously improve quality with automated learning from every batch.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Defect Reduction Story: 40% Fewer Defects</h3>
            <p className="vercel-text-secondary">
              A major producer used Facilis.AI to implement predictive quality and closed-loop feedback, reducing defects by 40% and improving customer satisfaction scores.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 