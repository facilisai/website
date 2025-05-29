"use client";

import { Factory } from "lucide-react";

export default function FoodBeverageIndustryPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-green-400 to-lime-500 mb-8">
            <Factory className="w-8 h-8 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Food & Beverages</span>
          </div>
          <h1 className="text-5xl md:text-6xl heading-primary vercel-text-primary mb-8">Smarter Food & Beverage Manufacturing</h1>
          <p className="text-xl vercel-text-secondary max-w-2xl mx-auto mb-8">
            Improve product quality, reduce waste, and ensure food safety with AI-powered process optimization and real-time monitoring.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">Example Use Cases</h2>
          <ul className="space-y-6">
            <li className="bg-gradient-to-r from-green-400/10 to-lime-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Recipe Optimization</span>
              <span className="vercel-text-secondary">Use AI to optimize ingredient ratios for taste, cost, and consistency.</span>
            </li>
            <li className="bg-gradient-to-r from-green-400/10 to-lime-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Quality Assurance Automation</span>
              <span className="vercel-text-secondary">Automate quality checks and reduce human error in production lines.</span>
            </li>
            <li className="bg-gradient-to-r from-green-400/10 to-lime-500/10 rounded-lg p-6">
              <span className="block text-lg font-semibold vercel-text-primary mb-2">Shelf Life Prediction</span>
              <span className="vercel-text-secondary">Predict and extend product shelf life with advanced analytics.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl heading-secondary vercel-text-primary mb-6">AI-Driven Food & Beverage Excellence</h2>
          <p className="vercel-text-secondary text-lg mb-6">
            Facilis.AI leverages advanced AI/ML to transform food and beverage manufacturing:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base vercel-text-secondary mb-6">
            <li><b>Real-Time Quality Monitoring:</b> Instantly detect deviations and ensure every batch meets standards.</li>
            <li><b>Predictive Shelf Life:</b> Use AI to forecast and extend product shelf life, reducing waste.</li>
            <li><b>Recipe Optimization:</b> Continuously refine recipes for taste, cost, and consistency using data-driven insights.</li>
            <li><b>Supply Chain Traceability:</b> Track ingredients from source to shelf for full transparency and compliance.</li>
          </ul>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h3 className="text-xl vercel-text-primary mb-2 font-semibold">Case Study: 25% Waste Reduction</h3>
            <p className="vercel-text-secondary">
              A major food producer used Facilis.AI to implement real-time quality monitoring and predictive shelf life analytics, reducing waste by 25% and improving product consistency across global facilities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 