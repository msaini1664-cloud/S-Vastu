import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

const categories = ["All", "Residential", "Commercial", "Vastu Compliant"];

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury Living Room",
    category: "Residential",
    size: "wide" // Top left: col-span-2, row-span-1
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    alt: "Modern Interior",
    category: "Vastu Compliant",
    size: "small" // Top right: col-span-1, row-span-1
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    alt: "Elegant Bedroom",
    category: "Residential",
    size: "tall" // Bottom left: col-span-1, row-span-2
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
    alt: "Architectural Design",
    category: "Commercial",
    size: "tall" // Bottom middle: col-span-1, row-span-2
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: "Spacious Hall",
    category: "Vastu Compliant",
    size: "small" // Bottom right top: col-span-1, row-span-1
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop",
    alt: "Office Space Vastu",
    category: "Commercial",
    size: "small" // Bottom right bottom: col-span-1, row-span-1
  }
];

export default function Gallery({ hideHeader = false }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = images.filter(img => 
    activeCategory === "All" ? true : img.category === activeCategory
  );

  return (
    <section id="gallery" className={`py-24 relative overflow-hidden ${hideHeader ? 'bg-transparent' : 'bg-[#050A15]'}`}>
      {/* Abstract Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#38bdf8]/5 to-transparent rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-xs sm:text-sm font-medium tracking-wider uppercase">Portfolio</span>
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Project <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37]">Gallery</span>
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl font-light">
              A visual journey through spaces transformed by authentic Vastu principles, where energy meets elegance.
            </p>
          </motion.div>
        )}

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md ${
                activeCategory === category
                  ? "bg-[#D4AF37] text-[#050A15] shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                  : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Collage Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] max-w-5xl mx-auto"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((image) => {
              let spanClass = "";
              if (image.size === 'wide') spanClass = "md:col-span-2 md:row-span-1";
              else if (image.size === 'tall') spanClass = "md:col-span-1 md:row-span-2";
              else spanClass = "md:col-span-1 md:row-span-1";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                  key={image.id}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4AF37]/50 shadow-lg w-full ${spanClass}`}
                >
                <div className="absolute inset-0 bg-[#050A15]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out block"
                />
                
                {/* Overlay (Always visible text) */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050A15]/80 via-[#050A15]/10 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-semibold uppercase tracking-wider mb-2 backdrop-blur-md">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg leading-tight">
                      {image.alt}
                    </h3>
                  </div>
                  
                  {/* View Icon (Hover only) */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 delay-100 hover:bg-[#D4AF37] hover:border-[#D4AF37]">
                    <Maximize2 className="w-4 h-4 text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
