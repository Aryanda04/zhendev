import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Pengurus Masjid",
      role: "Client @kelolamasjid.com",
      content: "Membangun sistem Kelola Masjid bersama Zhen Dev adalah pengalaman luar biasa. Koordinasi sangat mudah, desain rapi, dan sistem dibuat sangat profesional sesuai dengan yang kami harapkan.",
    },
    {
      name: "Budi Santoso",
      role: "Business Owner",
      content: "Website company profile saya selesai lebih cepat dari target dengan hasil visual yang melampaui ekspektasi. Sangat direkomendasikan untuk Anda yang butuh web premium!",
    },
  ];

  return (
    <section className="py-24 px-4 bg-zhen-default text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-zhen-lightest mx-auto rounded-full mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/20 rotate-180" />
              <p className="text-lg leading-relaxed font-light mb-8 relative z-10">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                <div className="w-12 h-12 rounded-full bg-zhen-lightest text-zhen-dark font-bold flex items-center justify-center text-xl">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testi.name}</h4>
                  <p className="text-white/70 text-sm">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
