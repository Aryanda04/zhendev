import React from "react";
import { Code2, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/90 border-b border-zhen-lightest/50">
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Code2 className="w-8 h-8 text-zhen-default" strokeWidth={2.5} />
        <span className="text-xl font-bold tracking-wider text-zhen-dark">ZHEN DEV</span>
      </Link>
      <div className="flex items-center gap-4">
        <a
          href="#work"
          className="text-sm font-semibold text-zhen-dark hover:text-zhen-default transition-colors hidden sm:inline-block px-3 py-1.5 rounded-lg hover:bg-slate-100/60"
        >
          Our Work
        </a>
        <Link
          href="/work"
          className="text-sm font-semibold text-zhen-default hover:text-zhen-dark transition-colors hidden sm:inline-block px-3 py-1.5 rounded-lg hover:bg-zhen-lightest/30"
        >
          Portfolio Page
        </Link>
        <a
          href="https://wa.me/6281272374141?text=Halo%20Zhen%20Dev,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-full transition-all shadow-sm hover:shadow"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Kami
        </a>
      </div>
    </nav>
  );
}
