"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code2, 
  ChevronLeft, 
  ExternalLink, 
  ShieldCheck, 
  Database, 
  LayoutTemplate, 
  Globe, 
  UserCheck,
  ShoppingBag,
  Sparkles,
  CalendarCheck,
  Smartphone,
  MessageCircle,
  Layers,
  ArrowUpRight
} from "lucide-react";

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
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zhen-lightest/60 text-zhen-default text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-zhen-default" />
            Portofolio &amp; Showcase
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-6xl font-black mb-6 text-zhen-dark tracking-tight"
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
            className="text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Koleksi karya digital premium, website modern, dan platform solusi bisnis yang kami rancang dengan presisi, performa tinggi, dan estetika visual terbaik.
          </motion.p>
        </div>
      </section>

      {/* Featured Application Showcase */}
      <section className="pt-20 pb-12 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zhen-default mb-2">
            <span className="w-8 h-[2px] bg-zhen-default inline-block" />
            Flagship Product
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zhen-dark">
            Featured Platform
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "150px" }}
          transition={{ duration: 0.5 }}
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
            
            <h3 className="text-3xl lg:text-4xl font-black mb-4 text-zhen-dark group-hover:text-zhen-default transition-colors">
              kelolamasjid.com
            </h3>
            
            <p className="text-slate-600 mb-8 leading-relaxed text-base lg:text-lg font-normal">
              Platform manajemen masjid komprehensif dan modern untuk operasional harian, pembukuan keuangan transparan, inventaris, dan keterlibatan komunitas jamaah melalui antarmuka web yang terintegrasi.
            </p>
            
            <div className="flex flex-wrap gap-2.5 mb-10">
              <span className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs">
                <LayoutTemplate className="w-4 h-4 text-zhen-default" />
                Next.js Frontend
              </span>
              <span className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs">
                <Database className="w-4 h-4 text-zhen-default" />
                Robust Database
              </span>
              <span className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-200 flex items-center gap-2 shadow-xs">
                <UserCheck className="w-4 h-4 text-zhen-default" />
                Admin Dashboard
              </span>
            </div>

            <a
              href="https://kelolamasjid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zhen-default text-white rounded-xl font-bold hover:bg-zhen-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-fit text-sm md:text-base"
            >
              Visit Platform 
              <ExternalLink className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>

          {/* Project Visual */}
          <div className="lg:w-1/2 bg-[#1B262C] p-8 lg:p-12 relative overflow-hidden order-1 lg:order-2 flex items-center justify-center min-h-[380px] lg:min-h-[440px] z-10">
            {/* Decorative abstract elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-zhen-light opacity-20 rounded-full blur-3xl mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-zhen-default opacity-30 rounded-full blur-3xl mix-blend-screen" />
            
            {/* Browser Mockup */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-xl bg-white shadow-2xl overflow-hidden border border-white/20"
            >
              <div className="bg-slate-100 px-4 py-3 border-b flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="mx-auto flex items-center gap-2 bg-white px-3 py-1 rounded-md text-xs text-slate-500 font-mono shadow-xs border border-slate-200">
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

      {/* Hasil Karya Saya / Client Works Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Hasil Karya &amp; Website Klien
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zhen-dark tracking-tight mb-4">
            Proyek &amp; Karya Pilihan
          </h2>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Eksplorasi ragam website interaktif yang telah kami bangun dengan sentuhan desain elegan, performa tinggi, dan pengalaman pengguna optimal.
          </p>
        </div>

        <div className="space-y-16">
          {/* Project 1: NinaShop */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col lg:flex-row group relative hover:border-pink-300 transition-colors duration-500"
          >
            {/* Ambient hover glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 via-rose-100 to-zhen-lightest rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-1000" />

            {/* Visual / Mockup Side */}
            <div className="lg:w-1/2 bg-gradient-to-br from-slate-900 via-[#2A1820] to-[#1a1016] p-8 lg:p-12 relative overflow-hidden flex items-center justify-center min-h-[380px] lg:min-h-[440px] z-10">
              {/* Background gradient orbs */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl mix-blend-screen" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-600 opacity-25 rounded-full blur-3xl mix-blend-screen" />
              
              {/* Browser Mockup */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-md rounded-xl bg-white shadow-2xl overflow-hidden border border-white/20"
              >
                <div className="bg-slate-100 px-4 py-3 border-b flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mx-auto flex items-center gap-2 bg-white px-3 py-1 rounded-md text-xs text-slate-500 font-mono shadow-xs border border-slate-200">
                    <Globe className="w-3 h-3 text-pink-500" />
                    ninashoptjq.vercel.app
                  </div>
                </div>
                <div className="aspect-[4/3] relative w-full h-full overflow-hidden bg-slate-50">
                  <img
                    src="/ninashop.png"
                    alt="NinaShop Website Preview"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* Details Side */}
            <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center relative bg-white z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 text-pink-700 font-bold text-xs tracking-wider uppercase mb-5 w-fit border border-pink-200">
                <ShoppingBag className="w-4 h-4 text-pink-600" />
                E-Commerce &amp; Digital Catalog
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-2 text-zhen-dark group-hover:text-pink-600 transition-colors">
                NinaShop
              </h3>
              <p className="text-base font-semibold text-pink-600 mb-4 tracking-wide">
                Dekorasi Rumah &amp; Perabotan Premium
              </p>
              
              <p className="text-slate-600 mb-6 leading-relaxed text-base font-normal">
                Website e-commerce dan katalog digital interaktif untuk brand furnitur dan dekorasi hunian berkelas. Menampilkan showcase produk meja konsul, ambal turki, permadani, dan prasmanan dengan antarmuka estetik, keranjang belanja interaktif, serta integrasi pemesanan WhatsApp yang mudah dan cepat.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3.5 py-1.5 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-xs">
                  <LayoutTemplate className="w-3.5 h-3.5 text-pink-500" />
                  Next.js App
                </span>
                <span className="px-3.5 py-1.5 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-xs">
                  <ShoppingBag className="w-3.5 h-3.5 text-pink-500" />
                  Digital Catalog
                </span>
                <span className="px-3.5 py-1.5 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-xs">
                  <MessageCircle className="w-3.5 h-3.5 text-pink-500" />
                  WhatsApp Direct Order
                </span>
                <span className="px-3.5 py-1.5 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-xs">
                  <Smartphone className="w-3.5 h-3.5 text-pink-500" />
                  Ultra Responsive
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://ninashoptjq.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-pink-600 text-white rounded-xl font-bold hover:bg-pink-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
                >
                  Kunjungi NinaShop 
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                </a>
                <span className="text-xs text-slate-400 font-mono">
                  ninashoptjq.vercel.app
                </span>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Rizky Organizer */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col lg:flex-row group relative hover:border-amber-300 transition-colors duration-500"
          >
            {/* Ambient hover glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 via-orange-100 to-zhen-lightest rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-1000" />

            {/* Details Side (Left on desktop) */}
            <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1 relative bg-white z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 font-bold text-xs tracking-wider uppercase mb-5 w-fit border border-amber-200">
                <CalendarCheck className="w-4 h-4 text-amber-600" />
                Event Services &amp; Rental
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-2 text-zhen-dark group-hover:text-amber-700 transition-colors">
                Rizky Organizer
              </h3>
              <p className="text-base font-semibold text-amber-700 mb-4 tracking-wide">
                Sewa Tenda &amp; Dekorasi Pernikahan, Aqiqah, Khitanan
              </p>
              
              <p className="text-slate-600 mb-6 leading-relaxed text-base font-normal">
                Website portofolio bisnis dan layanan sewa perlengkapan acara terkemuka di Tanjungpandan, Belitung. Dilengkapi galeri bento-grid untuk dokumentasi pelaminan dan tenda pesta, rincian paket acara transparan, serta akses konsultasi gratis langsung ke tim organizer.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3.5 py-1.5 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-xs">
                  <LayoutTemplate className="w-3.5 h-3.5 text-amber-600" />
                  Next.js Showcase
                </span>
                <span className="px-3.5 py-1.5 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-xs">
                  <Layers className="w-3.5 h-3.5 text-amber-600" />
                  Bento Grid Gallery
                </span>
                <span className="px-3.5 py-1.5 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-xs">
                  <CalendarCheck className="w-3.5 h-3.5 text-amber-600" />
                  Event Packages
                </span>
                <span className="px-3.5 py-1.5 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-xs">
                  <MessageCircle className="w-3.5 h-3.5 text-amber-600" />
                  Direct Consultation
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://rizkyorganizer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
                >
                  Kunjungi Rizky Organizer 
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                </a>
                <span className="text-xs text-slate-400 font-mono">
                  rizkyorganizer.vercel.app
                </span>
              </div>
            </div>

            {/* Visual / Mockup Side (Right on desktop) */}
            <div className="lg:w-1/2 bg-gradient-to-br from-[#1d1523] via-[#2d1b2f] to-[#160e1d] p-8 lg:p-12 relative overflow-hidden order-1 lg:order-2 flex items-center justify-center min-h-[380px] lg:min-h-[440px] z-10">
              {/* Background gradient orbs */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500 opacity-20 rounded-full blur-3xl mix-blend-screen" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl mix-blend-screen" />
              
              {/* Browser Mockup */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-md rounded-xl bg-white shadow-2xl overflow-hidden border border-white/20"
              >
                <div className="bg-slate-100 px-4 py-3 border-b flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mx-auto flex items-center gap-2 bg-white px-3 py-1 rounded-md text-xs text-slate-500 font-mono shadow-xs border border-slate-200">
                    <Globe className="w-3 h-3 text-amber-500" />
                    rizkyorganizer.vercel.app
                  </div>
                </div>
                <div className="aspect-[4/3] relative w-full h-full overflow-hidden bg-slate-50">
                  <img
                    src="/rizkyorganizer.png"
                    alt="Rizky Organizer Website Preview"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Call */}
      <section className="py-20 px-4 bg-zhen-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-zhen-lightest text-xs font-bold tracking-widest uppercase mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-zhen-lightest" />
            Let's Build Together
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Want to see your project here?</h2>
          <p className="text-zhen-lightest mb-10 text-lg font-light leading-relaxed">
            Kami siap mewujudkan website impian dan platform digital bisnis Anda dengan standar kualitas tertinggi.
          </p>
          <a
            href="https://wa.me/6281272374141?text=Halo%20Zhen%20Dev,%20saya%20tertarik%20untuk%20bekerja%20sama%20membuat%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            Start a Project with Us (WhatsApp)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-white border-t border-zhen-lightest">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Globe className="w-4 h-4 text-zhen-light" />
          <span className="font-semibold text-zhen-dark">Zhen Dev Software House</span>
        </div>
        <p className="text-zhen-default text-sm">
          &copy; {new Date().getFullYear()} Zhen Dev. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

