import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Terminal, Code2, MonitorPlay } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 -left-10 w-72 h-72 bg-zhen-lightest/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      <div className="absolute top-40 -right-10 w-96 h-96 bg-zhen-light/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-zhen-default/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />

      <div className="z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
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
            <Link
              href="/work"
              className="flex justify-center items-center gap-2 px-8 py-4 bg-zhen-default rounded-xl font-bold text-lg text-white hover:bg-zhen-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Discover Our Work
              <ChevronRight className="w-5 h-5 flex-shrink-0" />
            </Link>
            <a
              href="mailto:bhellazhen.dev@gmail.com"
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
              <span className="text-pink-400">const</span> <span className="text-blue-400">Company</span> = <span className="text-yellow-300">&#123;</span><br />
              &nbsp;&nbsp;name: <span className="text-green-300">"Zhen Dev"</span>,<br />
              &nbsp;&nbsp;location: <span className="text-green-300">"Tanjungpandan"</span>,<br />
              &nbsp;&nbsp;specialty: <span className="text-green-300">"Modern Websites"</span>,<br />
              &nbsp;&nbsp;status: <span className="text-orange-300">"Ready to build"</span><br />
              <span className="text-yellow-300">&#125;</span>;<br /><br />
              <span className="text-pink-400">function</span> <span className="text-blue-400">animateSuccess</span>() <span className="text-yellow-300">&#123;</span><br />
              &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-gray-300">import</span>(<span className="text-green-300">"@/magic"</span>);<br />
              <span className="text-yellow-300">&#125;</span><br />
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
  );
}
