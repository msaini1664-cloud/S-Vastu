

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[95vh] flex items-center justify-center overflow-hidden">
      
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
           src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
           alt="Vastu interior" 
           className="w-full h-full object-cover transform scale-105"
         />
         {/* Deep Overlay for contrast */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/80 to-[#0A192F]/95"></div>
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 border-[1px] border-[#D4AF37]/20 rounded-full"></div>
        <div className="absolute -top-12 -left-12 w-96 h-96 border-[1px] border-[#D4AF37]/10 rounded-full"></div>
        <div className="absolute bottom-10 -right-24 w-[500px] h-[500px] border-[1px] border-[#D4AF37]/10 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Top Badge (Left Aligned) */}
        <div className="flex justify-start w-full">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#D4AF37]/30 bg-white/5 backdrop-blur-md mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] font-semibold text-sm tracking-[0.25em] uppercase">
              S Vastu Solution
            </span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mb-8">
          Harmonize Your <br/>
          <span className="font-serif italic tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FCEABB] to-[#D4AF37]">
            Space & Spirit
          </span>
        </h1>
        
        {/* Paragraph */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light mb-12">
          Unlock the true potential of your home and workspace. 
          Through the ancient wisdom of <strong className="text-white font-semibold">Vastu Shastra</strong>, we align your surroundings with natural forces to attract peace, prosperity, and positive energy.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="w-full sm:w-auto px-10 py-4 lg:py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            Book Consultation
          </button>
          <button className="group w-full sm:w-auto px-10 py-4 lg:py-5 bg-transparent text-white border border-white/30 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white hover:text-[#0A192F] flex items-center justify-center gap-2">
            Explore Services
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

      </div>

      {/* Stats Bar at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-lg border-t border-white/10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 py-6">
            <div className="text-center px-4">
              <p className="text-3xl font-bold text-[#D4AF37] mb-1">500+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Spaces Harmonized</p>
            </div>
            <div className="text-center px-4">
              <p className="text-3xl font-bold text-[#D4AF37] mb-1">100%</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Positive Energy</p>
            </div>
            <div className="text-center px-4 hidden md:block">
              <p className="text-3xl font-bold text-[#D4AF37] mb-1">15+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="text-center px-4 hidden md:block">
              <p className="text-3xl font-bold text-[#D4AF37] mb-1">24/7</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Support</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
