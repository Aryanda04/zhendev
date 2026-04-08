import React from "react";
import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/90 border-b border-zhen-lightest/50">
      <div className="flex items-center gap-2">
        <Code2 className="w-8 h-8 text-zhen-default" strokeWidth={2.5} />
        <span className="text-xl font-bold tracking-wider text-zhen-dark">ZHEN DEV</span>
      </div>
    </nav>
  );
}
