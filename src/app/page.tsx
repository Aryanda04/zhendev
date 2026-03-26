"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, MonitorPlay, Presentation, Terminal, MapPin, ChevronRight, CheckCircle2, Rocket, Mail, Globe } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white text-zhen-dark selection:bg-zhen-lightest selection:text-zhen-default">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/90 border-b border-zhen-lightest/50">
        <div className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-zhen-default" strokeWidth={2.5} />
          <span className="text-xl font-bold tracking-wider text-zhen-dark">ZHEN DEV</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zhen-default font-medium bg-zhen-lightest/40 px-3 py-1.5 rounded-full border border-zhen-lightest">
          <MapPin className="w-4 h-4 text-zhen-light" />
          Tanjungpandan, Belitung
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 -left-10 w-72 h-72 bg-zhen-lightest/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="absolute top-40 -right-10 w-96 h-96 bg-zhen-light/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-zhen-default/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />

        <div className="z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zhen-default/20 bg-zhen-lightest/40 text-zhen-dark shadow-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zhen-default opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-zhen-default"></span>
              </span>
              <span className="text-sm font-bold tracking-wide uppercase">Software House</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-zhen-dark leading-[1.1]"
            >
              ZHEN <span className="text-zhen-default drop-shadow-sm">DEV</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-zhen-dark/80 mb-10 max-w-lg font-light leading-relaxed"
            >
              We sculpt raw code into <span className="font-semibold text-zhen-dark">premium digital experiences</span>. 
              Elevate your brand with our world-class website development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#specialization"
                className="flex justify-center items-center gap-2 px-8 py-4 bg-zhen-default rounded-xl font-bold text-lg text-white hover:bg-zhen-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Discover Our Work
                <ChevronRight className="w-5 h-5 flex-shrink-0" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center gap-2 px-8 py-4 bg-white border-2 border-zhen-lightest rounded-xl font-bold text-lg text-zhen-dark hover:bg-zhen-lightest/30 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <Terminal className="w-5 h-5" />
                Let's Talk
              </a>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Mock Code Editor Window */}
            <div className="relative z-10 w-full max-w-lg mx-auto bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden border border-zhen-dark/20">
              <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-black/20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs text-gray-400 font-mono">build_website.tsx</div>
              </div>
              <div className="p-6 text-sm font-mono text-gray-300 leading-relaxed overflow-hidden">
                <span className="text-pink-400">const</span> <span className="text-blue-400">Company</span> = <span className="text-yellow-300">&#123;</span><br/>
                &nbsp;&nbsp;name: <span className="text-green-300">"Zhen Dev"</span>,<br/>
                &nbsp;&nbsp;location: <span className="text-green-300">"Tanjungpandan"</span>,<br/>
                &nbsp;&nbsp;specialty: <span className="text-green-300">"Modern Websites"</span>,<br/>
                &nbsp;&nbsp;status: <span className="text-orange-300">"Ready to build"</span><br/>
                <span className="text-yellow-300">&#125;</span>;<br/><br/>
                <span className="text-pink-400">function</span> <span className="text-blue-400">animateSuccess</span>() <span className="text-yellow-300">&#123;</span><br/>
                &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-gray-300">import</span>(<span className="text-green-300">"@/magic"</span>);<br/>
                <span className="text-yellow-300">&#125;</span><br/>
                <span className="animate-pulse text-white">_</span>
              </div>
            </div>

            {/* Floating Elements Background */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-5 bg-white rounded-2xl shadow-xl border border-zhen-lightest/70 z-20"
            >
              <Code2 className="w-10 h-10 text-zhen-light" />
            </motion.div>
            <motion.div 
              animate={{ y: [15, -15, 15] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 p-5 bg-zhen-default rounded-2xl shadow-xl border border-white/10 z-20"
            >
              <MonitorPlay className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialization Section */}
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

      {/* Workflow / Why Us Section */}
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

      {/* Call to Action */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-zhen-dark text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-10 transform rotate-12">
              <Rocket className="w-64 h-64 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-zhen-lightest mb-10 relative z-10 max-w-2xl mx-auto font-light">
              Let's collaborate to bring your vision to life. Based in Belitung, serving the world.
            </p>
            <button className="relative z-10 px-8 py-4 bg-zhen-lightest text-zhen-dark font-bold text-lg rounded-xl hover:bg-white transition-colors shadow-lg flex items-center gap-2 mx-auto">
              <Mail className="w-5 h-5 text-zhen-default" />
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-zhen-lightest bg-white">
        <div className="flex items-center justify-center gap-2 mb-4">
           <Globe className="w-5 h-5 text-zhen-light" />
           <span className="font-semibold text-zhen-dark">Zhen Dev Software House</span>
        </div>
        <p className="text-zhen-default text-sm">
          &copy; {new Date().getFullYear()} Zhen Dev. All rights reserved. <br/>
          Proudly based in Tanjungpandan, Belitung.
        </p>
      </footer>
    </main>
  );
}
