import React from "react";
import { motion } from "framer-motion";
import { MonitorPlay, Presentation, Terminal } from "lucide-react";

export default function ExpertiseSection() {
  return (
    <section id="specialization" className="py-24 px-4 bg-zhen-lightest/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zhen-dark">Our Expertise</h2>
          <div className="w-24 h-1 bg-zhen-light mx-auto rounded-full mb-6" />
          <p className="text-lg text-zhen-default max-w-2xl mx-auto">
            As a specialized software house, we focus our energy on mastering one primary domain: creating exceptional websites tailored to modern standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MonitorPlay className="w-10 h-10 text-white" />,
              title: "Web Development",
              description: "Building responsive, blazing-fast web applications using the latest frameworks like Next.js and React."
            },
            {
              icon: <Presentation className="w-10 h-10 text-white" />,
              title: "UI/UX Design",
              description: "Crafting visually stunning and intuitive interfaces that engage users and drive conversions."
            },
            {
              icon: <Terminal className="w-10 h-10 text-white" />,
              title: "System Integration",
              description: "Connecting your web platforms seamlessly with APIs, databases, and third-party services."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="group p-8 rounded-2xl bg-white border border-zhen-lightest hover:border-zhen-light transition-all shadow-sm hover:shadow-xl"
            >
              <div className="mb-6 p-4 bg-zhen-light rounded-xl inline-block shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zhen-dark">
                {feature.title}
              </h3>
              <p className="text-zhen-default leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
