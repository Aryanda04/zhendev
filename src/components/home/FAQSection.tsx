import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Berapa lama waktu pembuatan website?",
      answer: "Waktu pengerjaan sangat bergantung pada kompleksitas proyek. Untuk Landing Page atau Company Profile biasanya memakan waktu 1-2 minggu, sementara Custom Web App bisa memakan waktu 1-3 bulan."
    },
    {
      question: "Apakah biaya sudah termasuk domain & hosting?",
      answer: "Ya, sebagian besar paket kami sudah termasuk dukungan pendaftaran domain dan hosting selama 1 tahun pertama. Anda tinggal terima beres!"
    },
    {
      question: "Bagaimana jika ada error atau bug setelah website selesai?",
      answer: "Kami memberikan garansi pemeliharaan (maintenance) secara gratis selama 1-3 bulan pertama (tergantung paket) untuk memastikan website Anda berjalan 100% sempurna tanpa bug."
    },
    {
      question: "Apakah bisa request desain kustom sesuka hati?",
      answer: "Tentu! Kami mengedepankan pendekatan 100% Customized. Sebelum koding dimulai, kami akan memastikan Anda menyetujui desain UI/UX yang kami ajukan."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zhen-dark">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-zhen-light mx-auto rounded-full mb-6" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-lg text-zhen-dark pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-zhen-default transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-zhen-dark/80 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
