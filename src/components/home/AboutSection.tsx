import React from "react";
import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Abstract Visual Profile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 relative flex justify-center"
        >
          <div className="relative w-72 h-80 rounded-[2rem] bg-gradient-to-br from-zhen-lightest to-zhen-default rotate-3 overflow-hidden shadow-2xl group cursor-pointer">
            {/* Founder Image */}
            <img 
              src="/founder.png" 
              alt="Founder of Zhen Dev" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />
            {/* Thematic overlay */}
            <div className="absolute inset-0 bg-zhen-default/30 mix-blend-color group-hover:opacity-0 transition-opacity duration-700" />
            
            {/* Text that fades out on hover */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white z-10 group-hover:opacity-0 transition-opacity duration-500">
              <h3 className="text-xl font-black tracking-widest drop-shadow-md">ZHEN DEV</h3>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zhen-dark">
            The Creator Behind <br/>
            <span className="text-zhen-default">Zhen Dev</span>
          </h2>
          <p className="text-lg text-zhen-dark/80 leading-relaxed mb-6">
            Halo! Saya adalah talenta independen *(Solo Web Developer)* di balik 
            <strong> Zhen Dev</strong>. Berawal dari semangat untuk membantu bisnis memiliki pijakan digital, 
            saya mendedikasikan diri untuk merancang dan membangun website premium dengan fokus pada performa, 
            estetika, dan pengalaman pengguna (UX).
          </p>
          <p className="text-lg text-zhen-dark/80 leading-relaxed mb-8">
            Sebagai developer independen, saya mengerjakan proyek Anda dengan perhatian penuh. 
            Saya percaya bahwa website bukan sekadar kumpulan kode, melainkan karya seni yang bertugas 
            mewakili <em>brand</em> Anda di dunia digital. Itulah mengapa setiap desain dan fitur 
            saya rancang secara personal untuk mencapai visi Anda.
          </p>
          

        </motion.div>
      </div>
    </section>
  );
}
