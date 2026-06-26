import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Blog from '../components/Blog';

export default function BlogPage() {
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
            <BookOpen className="w-16 h-16 mx-auto text-[#D4AF37] mb-6 animate-pulse" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-black text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f8f0dd]">Blog</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover insights, tips, and the profound wisdom of Vastu Shastra to elevate your everyday life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Component */}
      <Blog hideHeader />

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-600 mb-10">Connect with our experts today and embark on a journey towards harmony and prosperity.</p>
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(184, 134, 11, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="/contact" 
            className="inline-block bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold text-lg px-12 py-4 rounded-full shadow-xl transition-all"
          >
            Book a Consultation
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
