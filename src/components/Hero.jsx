import { motion } from 'framer-motion';
import heroVideo from '../assets/A_cinematic_slow_panning_K_v.mp4';
import { Globe, Droplets, Flame, Wind, Sparkles } from 'lucide-react';

export default function Hero() {
  const elements = [
    {
      icon: <Globe className="w-8 h-8 text-[#DCC197]" strokeWidth={1.5} />,
      title: "Earth (Prithvi)",
      desc: "The foundation of stability and strength in your environment."
    },
    {
      icon: <Droplets className="w-8 h-8 text-[#DCC197]" strokeWidth={1.5} />,
      title: "Water (Jal)",
      desc: "Represents fluidity, emotions, and the flow of prosperity."
    },
    {
      icon: <Flame className="w-8 h-8 text-[#DCC197]" strokeWidth={1.5} />,
      title: "Fire (Agni)",
      desc: "The energy of transformation, passion, and illumination."
    },
    {
      icon: <Wind className="w-8 h-8 text-[#DCC197]" strokeWidth={1.5} />,
      title: "Air (Vayu)",
      desc: "The breath of life, movement, and communication."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#DCC197]" strokeWidth={1.5} />,
      title: "Space (Akasha)",
      desc: "The container of all elements, representing expansion and connection."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-60 sm:pb-56 lg:pb-48 overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          src={heroVideo}
        />
        {/* Simple dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center -mt-8 lg:-mt-16"
      >
        <motion.p 
          variants={itemVariants}
          className="text-[#DCC197] font-medium text-xs sm:text-sm md:text-base mb-6 drop-shadow-md uppercase tracking-[0.3em]"
        >
          Trusted Vastu Consultant in Chandigarh & Zirakpur, Panchkula
        </motion.p>

        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl"
        >
          Welcome to <br className="block sm:hidden" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCC197] to-[#FCEABB] italic font-semibold">S Vastu Solution</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 font-light drop-shadow-md tracking-wide leading-relaxed px-2"
        >
          Align your space with natural forces to attract peace, prosperity, and positive vibrations.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#DCC197] text-[#1E242C] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase px-8 py-4 sm:px-12 sm:py-5 hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(220,193,151,0.3)] rounded-sm"
        >
          Discover More
        </motion.button>
      </motion.div>

      {/* Bottom 5 Elements Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full z-20 flex justify-center px-2 sm:px-4"
      >
        <div className="w-full max-w-[95rem] bg-[#1C2028]/95 backdrop-blur-md text-white shadow-[0_-10px_40px_rgba(0,0,0,0.3)] rounded-t-xl sm:rounded-t-2xl border-t border-[#DCC197]/20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 p-4 sm:p-8 lg:p-10">
            {elements.map((item, i) => (
              <div key={i} className={`flex flex-col items-center text-center gap-2 sm:gap-4 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 cursor-pointer group ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#DCC197]/10 group-hover:border-[#DCC197]/40 transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(220,193,151,0.2)]">
                  <div className="group-hover:scale-110 transition-transform duration-300 transform scale-75 sm:scale-100">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#DCC197] font-semibold text-[11px] sm:text-sm md:text-base mb-1 sm:mb-2 uppercase tracking-wider">{item.title}</h3>
                  <p className="hidden sm:block text-gray-400 text-[10px] md:text-[13px] leading-relaxed max-w-[220px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}