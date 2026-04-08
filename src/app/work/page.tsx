"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, ChevronLeft, ExternalLink, ShieldCheck, Database, LayoutTemplate, Globe, UserCheck } from "lucide-react";

export default function WorkPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white text-zhen-dark selection:bg-zhen-lightest selection:text-zhen-default">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/90 border-b border-zhen-lightest/50">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Code2 className="w-8 h-8 text-zhen-default" strokeWidth={2.5} />
          <span className="text-xl font-bold tracking-wider text-zhen-dark">ZHEN DEV</span>
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm text-zhen-default font-semibold hover:bg-zhen-lightest/40 px-4 py-2 rounded-full transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-zhen-lightest/20 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 -left-10 w-72 h-72 bg-zhen-lightest/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="absolute top-40 -right-10 w-96 h-96 bg-zhen-light/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-black mb-6 text-zhen-dark"
          >
            Discover Our <span className="text-zhen-default drop-shadow-sm">Work</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-24 h-1 bg-zhen-light mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zhen-dark/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            A showcase of the premium digital experiences we've sculpted from raw code. 
            Delivering excellence and tailored solutions for our clients.
          </motion.p>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl overflow-hidden border border-zhen-lightest shadow-xl flex flex-col lg:flex-row group relative"
        >
          {/* Decorative glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-zhen-lightest via-zhen-light to-zhen-default rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>

          {/* Project Details */}
          <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1 relative bg-white z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zhen-lightest/50 text-zhen-default font-bold text-xs tracking-widest uppercase mb-6 w-fit">
              <ShieldCheck className="w-4 h-4" />
              Featured Application
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-zhen-dark group-hover:text-zhen-default transition-colors">
              kelolamasjid.com
            </h2>
            
            <p className="text-zhen-dark/80 mb-8 leading-relaxed text-lg font-light">
              A comprehensive and modern management platform tailored for mosque administration. 
              Designed to seamlessly handle operational activities, streamline financial 
              recordings, and foster better community engagement through an intuitive digital interface.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-200 flex items-center gap-2 shadow-sm">
                <LayoutTemplate className="w-4 h-4 text-zhen-default" />
                Next.js Frontend
              </span>
              <span className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-200 flex items-center gap-2 shadow-sm">
                <Database className="w-4 h-4 text-zhen-default" />
                Robust Database
              </span>
              <span className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-200 flex items-center gap-2 shadow-sm">
                <UserCheck className="w-4 h-4 text-zhen-default" />
                Admin Dashboard
              </span>
            </div>

            <a
              href="https://kelolamasjid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zhen-default text-white rounded-xl font-bold hover:bg-zhen-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-fit"
            >
              Visit Platform 
              <ExternalLink className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>

          {/* Project Visual */}
          <div className="lg:w-1/2 bg-[#1B262C] p-8 lg:p-12 relative overflow-hidden order-1 lg:order-2 flex items-center justify-center min-h-[400px] z-10">
             {/* Decorative abstract elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-zhen-light opacity-20 rounded-full blur-3xl mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-zhen-default opacity-30 rounded-full blur-3xl mix-blend-screen" />
            
            {/* Browser Mockup */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-xl bg-white shadow-2xl overflow-hidden border border-white/20"
            >
              <div className="bg-slate-100 px-4 py-3 border-b flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="mx-auto flex items-center gap-2 bg-white px-3 py-1 rounded-md text-xs text-slate-500 font-mono shadow-sm border border-slate-200">
                  <Globe className="w-3 h-3 text-slate-400" />
                  kelolamasjid.com
                </div>
              </div>
              <div className="aspect-[4/3] relative w-full h-full overflow-hidden bg-white">
                 <img
                    src="/kelolamasjid.png"
                    alt="Kelola Masjid Dashboard"
                    className="w-full h-full object-cover object-top"
                 />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Collaboration Call */}
      <section className="py-20 px-4 bg-zhen-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Want to see your project here?</h2>
          <p className="text-zhen-lightest mb-10 text-lg font-light">
            We are always looking for new challenges and exciting projects to collaborate on.
          </p>
          <a
            href="mailto:bhellazhen.dev@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zhen-dark font-bold text-lg rounded-xl hover:bg-zhen-lightest transition-colors shadow-lg"
          >
            Start a Project with Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-white border-t border-zhen-lightest">
        <div className="flex items-center justify-center gap-1 mb-2">
          <Globe className="w-5 h-3 text-zhen-light" />
          <span className="font-semibold text-zhen-dark">Zhen Dev Software House</span>
        </div>
        <p className="text-zhen-default text-sm">
          &copy; {new Date().getFullYear()} Zhen Dev. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
