"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  ExternalLink, 
  Globe, 
  ShieldCheck, 
  ShoppingBag, 
  CalendarCheck, 
  ArrowRight,
  LayoutTemplate
} from "lucide-react";

const sneakPeekProjects = [
  {
    id: "kelolamasjid",
    title: "kelolamasjid.com",
    subtitle: "Sistem Manajemen Masjid Modern",
    category: "Featured Application",
    badgeColor: "bg-zhen-lightest/60 text-zhen-default border-zhen-light/30",
    icon: ShieldCheck,
    iconColor: "text-zhen-default",
    description: "Platform digital terintegrasi untuk pembukuan keuangan transparan, inventaris, dan publikasi kegiatan masjid.",
    image: "/kelolamasjid.png",
    domain: "kelolamasjid.com",
    url: "https://kelolamasjid.com",
    tags: ["Next.js", "Robust Database", "Admin Panel"],
    accentBorder: "hover:border-zhen-default/40",
  },
  {
    id: "ninashop",
    title: "NinaShop",
    subtitle: "Dekorasi Rumah & Perabotan Premium",
    category: "E-Commerce & Catalog",
    badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
    icon: ShoppingBag,
    iconColor: "text-pink-600",
    description: "Showcase e-commerce interaktif produk furnitur dan dekorasi rumah dengan keranjang belanja & WhatsApp order.",
    image: "/ninashop.png",
    domain: "ninashoptjq.vercel.app",
    url: "https://ninashoptjq.vercel.app/",
    tags: ["Digital Catalog", "WhatsApp Checkout", "Responsive"],
    accentBorder: "hover:border-pink-400/50",
  },
  {
    id: "rizkyorganizer",
    title: "Rizky Organizer",
    subtitle: "Sewa Tenda & Dekorasi Pernikahan",
    category: "Event Services & Rental",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    icon: CalendarCheck,
    iconColor: "text-amber-600",
    description: "Website profil dan portofolio bento-grid elegan untuk penyedia sewa tenda dan dekorasi acara di Belitung.",
    image: "/rizkyorganizer.png",
    domain: "rizkyorganizer.vercel.app",
    url: "https://rizkyorganizer.vercel.app/",
    tags: ["Bento Gallery", "Event Packages", "Fast Booking"],
    accentBorder: "hover:border-amber-400/50",
  },
];

export default function WorkSneakPeekSection() {
  return (
    <section id="work" className="py-24 px-4 bg-slate-50/70 border-y border-slate-100 scroll-mt-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-zhen-lightest/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-zhen-light/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zhen-lightest/60 text-zhen-default text-xs font-bold tracking-widest uppercase mb-4 border border-zhen-light/20">
              <Sparkles className="w-3.5 h-3.5 text-zhen-default" />
              Sneak Peek Portofolio
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zhen-dark tracking-tight">
              Hasil Karya &amp; Proyek Pilihan
            </h2>
            <p className="text-slate-600 mt-3 text-base md:text-lg max-w-xl font-normal leading-relaxed">
              Berikut sekilas website dan platform digital yang telah kami kembangkan. Anda dapat langsung meninjau karya kami tanpa harus berpindah halaman.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-zhen-default font-bold text-sm rounded-xl border-2 border-zhen-default/20 hover:border-zhen-default hover:bg-zhen-default hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-fit"
          >
            Buka Halaman Portofolio Penuh
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sneakPeekProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group ${project.accentBorder} hover:-translate-y-1.5`}
              >
                {/* Browser Mockup Top Header */}
                <div className="bg-slate-900 p-4 relative overflow-hidden">
                  <div className="bg-slate-800/90 px-3 py-2 rounded-t-lg flex items-center gap-2 border border-slate-700/60">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="mx-auto flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-0.5 rounded text-[11px] text-slate-400 font-mono border border-slate-700/50 truncate max-w-[190px]">
                      <Globe className={`w-3 h-3 ${project.iconColor}`} />
                      {project.domain}
                    </div>
                  </div>

                  {/* Screenshot Thumbnail */}
                  <div className="aspect-[16/10] relative w-full overflow-hidden bg-slate-100 rounded-b-lg border-x border-b border-slate-700/60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${project.badgeColor}`}>
                        <Icon className={`w-3.5 h-3.5 ${project.iconColor}`} />
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-zhen-dark group-hover:text-zhen-default transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-600 text-sm font-normal leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-zhen-default hover:text-zhen-dark hover:underline"
                      >
                        Kunjungi Website
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <Link
                        href="/work"
                        className="text-xs font-semibold text-slate-400 hover:text-zhen-default transition-colors"
                      >
                        Lihat Detail →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Bar */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-zhen-dark">
              Ingin melihat spesifikasi lengkap dan portofolio lainnya?
            </h4>
            <p className="text-slate-600 text-sm mt-1">
              Kunjungi halaman Discover Our Work untuk detail menyeluruh setiap proyek.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
            <Link
              href="/work"
              className="px-6 py-3 bg-zhen-default text-white rounded-xl font-bold text-sm hover:bg-zhen-dark transition-all shadow hover:shadow-md"
            >
              Halaman Portofolio Penuh
            </Link>
            <a
              href="https://wa.me/6281272374141?text=Halo%20Zhen%20Dev,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all shadow hover:shadow-md flex items-center gap-1.5"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
