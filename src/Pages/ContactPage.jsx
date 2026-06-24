import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import Contact from '../components/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-[#0B152A] py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 -left-40 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[100px]"
          ></motion.div>
          <motion.div 
            animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 -right-40 w-96 h-96 bg-[#38bdf8] rounded-full mix-blend-screen filter blur-[100px]"
          ></motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PhoneCall className="w-16 h-16 mx-auto text-[#D4AF37] mb-6 animate-pulse" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-black text-white mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f8f0dd]">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Reach out to us to schedule a consultation and bring perfect Vastu harmony to your home or workspace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

    </div>
  );
}
