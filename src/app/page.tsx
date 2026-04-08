"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TechStackSection from "@/components/home/TechStackSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import AboutSection from "@/components/home/AboutSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white text-zhen-dark selection:bg-zhen-lightest selection:text-zhen-default">
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <AboutSection />
      <ExpertiseSection />
      <ProcessSection />
      <WhyUsSection />
      {/* <TestimonialSection /> */}
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
