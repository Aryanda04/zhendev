import React from "react";
import { motion } from "framer-motion";
import { Rocket, Mail } from "lucide-react";

export default function CTASection() {
  return (
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
          <a
            href="mailto:bhellazhen.dev@gmail.com"
            className="relative z-10 px-8 py-4 bg-zhen-lightest text-zhen-dark font-bold text-lg rounded-xl hover:bg-white transition-colors shadow-lg flex w-fit items-center gap-2 mx-auto"
          >
            <Mail className="w-5 h-5 text-zhen-default" />
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
