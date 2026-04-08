import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-zhen-default" />,
      title: "Discovery & Planning",
      description: "We start by understanding your goals, target audience, and project requirements to create a solid technical roadmap."
    },
    {
      icon: <PenTool className="w-8 h-8 text-zhen-default" />,
      title: "UI/UX Design",
      description: "Our designers craft intuitive, modern, and beautiful interfaces tailored precisely to your brand identity."
    },
    {
      icon: <Code2 className="w-8 h-8 text-zhen-default" />,
      title: "Development",
      description: "We translate the designs into pixel-perfect, highly optimized code using the latest scalable technologies."
    },
    {
      icon: <Rocket className="w-8 h-8 text-zhen-default" />,
      title: "Testing & Launch",
      description: "Rigorous quality assurance ensures a bug-free experience before we smoothly deploy your project to the world."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zhen-dark">How We Work</h2>
          <div className="w-24 h-1 bg-zhen-light mx-auto rounded-full mb-6" />
          <p className="text-lg text-zhen-default max-w-2xl mx-auto">
            A transparent, streamlined process designed to deliver excellence from the first meeting to the final launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-zhen-lightest transition-all"
            >
              {/* Step Number Background */}
              <div className="absolute -top-4 -right-2 text-8xl font-black text-slate-100/50 -z-10 select-none">
                0{index + 1}
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-zhen-dark mb-3">{step.title}</h3>
              <p className="text-zhen-dark/70 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
