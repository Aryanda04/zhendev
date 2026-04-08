import React from "react";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 mt-12 text-center border-t border-zhen-lightest bg-white">
      <div className="flex items-center justify-center gap-1 mb-2">
        <Globe className="w-5 h-3 text-zhen-light" />
        <span className="font-semibold text-zhen-dark">Zhen Dev Software House</span>
      </div>
      <p className="text-zhen-default text-sm">
        &copy; {new Date().getFullYear()} Zhen Dev. All rights reserved.
      </p>
    </footer>
  );
}
