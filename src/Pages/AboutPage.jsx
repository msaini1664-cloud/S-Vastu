import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Star, Eye, Shield, Target } from 'lucide-react';
import Founders from '../components/Founders';
import consultationImg from '../assets/consultation.png';

export default function AboutPage() {
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
            <Compass className="w-16 h-16 mx-auto text-[#D4AF37] mb-6 animate-pulse" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-black text-white mb-6">
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f8f0dd]">S-Vastu</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Bridging ancient cosmic wisdom with modern living to create spaces of profound harmony, prosperity, and joy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-[#D4AF37] font-semibold tracking-widest uppercase mb-2">Our Philosophy</h3>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Transforming Spaces, Elevating Lives</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  At S-Vastu Solution, we believe that the environment you surround yourself with profoundly impacts your destiny. Our expert consultations diagnose energetic imbalances and provide simple, non-destructive remedies to invite positive cosmic energy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FFF9EB] p-6 rounded-2xl border border-[#D4AF37]/20 shadow-lg shadow-[#D4AF37]/10 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all cursor-pointer"
                >
                  <Eye className="w-8 h-8 text-[#B8860B] mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-700">To create a world where every home and workplace is a sanctuary of peace and success.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FFF9EB] p-6 rounded-2xl border border-[#D4AF37]/20 shadow-lg shadow-[#D4AF37]/10 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all cursor-pointer"
                >
                  <Target className="w-8 h-8 text-[#B8860B] mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-700">Delivering authentic, scientific, and practical Vastu solutions tailored to modern lifestyles.</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 rounded-3xl transform rotate-3 scale-105"
              ></motion.div>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={consultationImg} 
                alt="Vastu Consultation" 
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Shield, title: "Integrity", desc: "Honest and transparent guidance without fear-mongering." },
              { icon: Star, title: "Excellence", desc: "Highest standards of service and profound expertise." },
              { icon: Compass, title: "Authenticity", desc: "Rooted in classical texts, adapted for modern architecture." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#B8860B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <Founders />

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
            href="/#contact" 
            className="inline-block bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold text-lg px-12 py-4 rounded-full shadow-xl transition-all"
          >
            Book a Consultation
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
