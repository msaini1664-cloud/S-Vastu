import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
      alt: "Luxury Living Room",
      category: "Residential"
    },
    {
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      alt: "Modern Interior",
      category: "Vastu Compliant"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
      alt: "Elegant Bedroom",
      category: "Residential"
    },
    {
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
      alt: "Architectural Design",
      category: "Commercial"
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      alt: "Spacious Hall",
      category: "Vastu Compliant"
    },
    {
      src: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop",
      alt: "Office Space Vastu",
      category: "Commercial"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0B152A] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#D4AF37] font-serif italic tracking-widest uppercase text-sm sm:text-base block mb-3">Our Masterpieces</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-2 mb-6 tracking-tight">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f8f0dd]">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg sm:text-xl font-light">
            A visual journey through the spaces we have energized and transformed with authentic Vastu principles.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 sm:gap-8 sm:space-y-8"
        >
          {images.map((image, index) => {
            const heights = ['h-96', 'h-64', 'h-[26rem]', 'h-[22rem]', 'h-80', 'h-[28rem]'];
            const heightClass = heights[index % heights.length];
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-[0_20px_50px_rgba(253,224,71,0.3)] border-2 border-yellow-300/80 break-inside-avoid ${heightClass}`}
              >
                {/* Image with zoom effect */}
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Premium Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B152A] via-[#0B152A]/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-hidden">
                  <div className="transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
                      <span className="text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-white font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-md">
                      {image.alt}
                    </h3>
                  </div>
                  
                  {/* Expand Icon - Animated */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 delay-100">
                    <Maximize2 className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                </div>
                
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B152A] font-bold py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transform hover:-translate-y-1">
            View All Projects
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}
