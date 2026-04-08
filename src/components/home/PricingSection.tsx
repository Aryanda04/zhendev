import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Landing Page",
      price: "Rp 1.500.000",
      description: "Perfect for single product campaigns or event pages.",
      features: [
        "1 Page Custom Design",
        "Mobile Responsive",
        "SEO Optimization",
        "Contact Form integration",
        "Free 1 Year Hosting",
      ],
      popular: false
    },
    {
      name: "Company Profile",
      price: "Rp 3.500.000",
      description: "Establish a strong professional online presence for your business.",
      features: [
        "Up to 5 Pages (Home, About, etc.)",
        "Premium UI/UX Design",
        "CMS Integration (Blog)",
        "Advanced SEO setup",
        "Free Domain & Hosting (1 Yr)",
        "1 Month Support"
      ],
      popular: true
    },
    {
      name: "Custom Web App",
      price: "Custom",
      description: "Complex platforms like e-commerce, dashboards, or portals.",
      features: [
        "Unlimited Pages",
        "Custom Database Architecture",
        "User Authentication & Roles",
        "Payment Gateway Integration",
        "Scalable Cloud Hosting",
        "3 Months Priority Support"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4 bg-zhen-lightest/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zhen-dark">Transparent Pricing</h2>
          <div className="w-24 h-1 bg-zhen-light mx-auto rounded-full mb-6" />
          <p className="text-lg text-zhen-default max-w-2xl mx-auto">
            Choose a package that fits your needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border flex flex-col h-full bg-white transition-all hover:shadow-xl ${
                plan.popular ? "border-zhen-default shadow-lg scale-100 md:scale-105 z-10" : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zhen-default text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-zhen-dark mb-2">{plan.name}</h3>
                <p className="text-zhen-dark/60 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-black text-zhen-dark">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-zhen-dark/60 font-medium">/project</span>}
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-zhen-dark/80">
                      <Check className="w-5 h-5 text-zhen-default shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href="mailto:bhellazhen.dev@gmail.com"
                className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${
                  plan.popular 
                    ? "bg-zhen-default text-white hover:bg-zhen-dark" 
                    : "bg-zhen-lightest/30 text-zhen-dark hover:bg-zhen-lightest"
                }`}
              >
                Choose Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
