import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#FDFBF7] overflow-hidden">
      
      {/* Subtle Background Elements to mimic the watercolor feel */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Border Box */}
        <div className="border border-[#D4AF37]/40 rounded-2xl p-8 sm:p-12 lg:p-16 bg-white/40 backdrop-blur-md shadow-xl">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Book Your Consultation Today
            </h2>
            <p className="text-gray-700 text-base leading-relaxed max-w-4xl mx-auto">
              Whether you are looking for Vastu for home, Vastu for office, or need guidance on effective Vastu products, S Vastu Solution is your one-stop destination. With our result-driven approach and commitment to client satisfaction, we are proud to be recognized as a trusted Vastu consultant in Zirakpur, Chandigarh, and Panchkula.
            </p>
          </div>

          {/* Form */}
          <form className="max-w-3xl mx-auto space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white border border-[#D4AF37]/60 rounded-full px-6 py-3.5 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-shadow text-gray-800 placeholder-gray-500 font-medium" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white border border-[#D4AF37]/60 rounded-full px-6 py-3.5 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-shadow text-gray-800 placeholder-gray-500 font-medium" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full bg-white border border-[#D4AF37]/60 rounded-full px-6 py-3.5 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-shadow text-gray-800 placeholder-gray-500 font-medium" 
              />
              <input 
                type="text" 
                placeholder="State" 
                className="w-full bg-white border border-[#D4AF37]/60 rounded-full px-6 py-3.5 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-shadow text-gray-800 placeholder-gray-500 font-medium" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input 
                type="text" 
                placeholder="Type of Problem you are facing" 
                className="w-full bg-white border border-[#D4AF37]/60 rounded-full px-6 py-3.5 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-shadow text-gray-800 placeholder-gray-500 font-medium" 
              />
              <input 
                type="text" 
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.value === "" ? e.target.type = "text" : null)}
                placeholder="Preferred Date" 
                className="w-full bg-white border border-[#D4AF37]/60 rounded-full px-6 py-3.5 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-shadow text-gray-800 placeholder-gray-500 font-medium" 
              />
            </div>

            <div>
              <input 
                type="text" 
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => (e.target.value === "" ? e.target.type = "text" : null)}
                placeholder="PreferredTime" 
                className="w-full bg-white border border-[#D4AF37]/60 rounded-full px-6 py-3.5 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-shadow text-gray-800 placeholder-gray-500 font-medium" 
              />
            </div>

            <div className="pt-6">
              <button 
                type="button" 
                className="w-full bg-[#C19B54] hover:bg-[#B8860B] text-white font-bold rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Book Now
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}
