import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section className="py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-zhen-dark">Why Choose Zhen Dev?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {[
            "100% Customized solutions",
            "Performance optimized code",
            "Modern tech stack (Next.js & Tailwind)",
            "Scalable and secure architecture",
            "Dedicated ongoing support",
            "Local expertise in Belitung"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-zhen-lightest/20 border border-zhen-lightest">
              <CheckCircle2 className="w-6 h-6 text-zhen-light flex-shrink-0" />
              <span className="text-lg font-medium text-zhen-dark">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
