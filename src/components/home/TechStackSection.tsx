import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Sparkles, Smartphone } from "lucide-react";

export default function TechStackSection() {
  const techs = [
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "Next.js", icon: <Layout className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Node.js", icon: <Server className="w-6 h-6" /> },
    { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
    { name: "Responsive", icon: <Smartphone className="w-6 h-6" /> },
  ];

  return (
    <section className="py-16 px-4 bg-white border-y border-zhen-lightest/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-bold tracking-widest text-zhen-light uppercase mb-8">
          Powered by Modern Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-50 border border-slate-100 text-zhen-dark shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-zhen-default">
                {tech.icon}
              </div>
              <span className="font-semibold">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
