
import { Target, Compass, Sun, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Compass className="w-6 h-6 text-[#D4AF37]" />,
      title: "Scientific Approach",
      description: "We combine ancient Vastu wisdom with logical, scientific explanations for modern living."
    },
    {
      icon: <Target className="w-6 h-6 text-[#D4AF37]" />,
      title: "No Demolition",
      description: "Our remedies focus on color therapy, elemental balancing, and objects without structural changes."
    },
    {
      icon: <Sun className="w-6 h-6 text-[#D4AF37]" />,
      title: "Energy Balancing",
      description: "We identify and neutralize negative earth energies to maximize positive cosmic vibrations."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
      title: "Proven Results",
      description: "Hundreds of satisfied clients across Chandigarh, Zirakpur, and Panchkula."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAFAFA] -skew-x-12 transform translate-x-20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Image Side (Left) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 w-full h-full min-h-[400px] lg:min-h-[550px]">
              <img 
                src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1600&auto=format&fit=crop" 
                alt="Vastu Consultation" 
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white z-10">
                <p className="text-5xl sm:text-6xl font-extrabold text-[#D4AF37] mb-1">15+</p>
                <p className="text-base sm:text-lg tracking-widest uppercase font-bold text-gray-200">Years of Excellence</p>
              </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#B8860B] rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#B8860B] rounded-br-3xl -z-10"></div>
          </div>

          {/* Text Side (Right) */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-[#B8860B] font-serif italic tracking-wider text-2xl sm:text-3xl">About S Vastu Solution</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
                Transforming Lives Through <span className="text-[#B8860B]">Cosmic Alignment</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Based in the tricity of Chandigarh, Zirakpur, and Panchkula, S Vastu Solution has been a trusted beacon for those seeking harmony, prosperity, and success. We believe that your space is a reflection of your subconscious mind. 
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                Our expert consultations bridge the gap between ancient architectural science and modern lifestyles, ensuring that you receive the maximum benefits of Vastu without the need for extensive demolitions or renovations.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-4 p-6 bg-white border border-[#D4AF37]/20 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#FDF9F1] flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="flex items-center gap-2 text-[#B8860B] font-bold text-lg hover:text-[#9A7009] transition-colors group">
                Read Our Full Story
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
