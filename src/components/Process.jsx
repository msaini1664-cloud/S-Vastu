
import { PhoneCall, Map, FileText, Sparkles } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <PhoneCall className="w-8 h-8 text-[#D4AF37]" />,
      title: "1. Initial Consultation",
      description: "We begin with a detailed discussion about your space, the challenges you are facing, and your specific goals for the consultation."
    },
    {
      icon: <Map className="w-8 h-8 text-[#D4AF37]" />,
      title: "2. Site Analysis",
      description: "Our experts visit your site or analyze your floor plans to map out the 16 Vastu zones and identify elemental imbalances."
    },
    {
      icon: <FileText className="w-8 h-8 text-[#D4AF37]" />,
      title: "3. Custom Remedies",
      description: "You receive a comprehensive report with practical, non-destructive remedies like color therapy, mirrors, and specific object placements."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
      title: "4. Energy Activation",
      description: "We guide you through the implementation of the remedies and follow up to ensure the positive energy flow is fully activated."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#B8860B] font-serif italic tracking-wider text-2xl sm:text-3xl">How It Works</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Our <span className="text-[#B8860B]">Consultation Process</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A seamless, scientific, and transparent approach to harmonizing your environment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 h-full">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" 
                alt="Consultation Process" 
                className="w-full h-full object-cover min-h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#B8860B] rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#B8860B] rounded-br-3xl -z-10"></div>
          </div>

          {/* Steps blocks */}
          <div className="w-full lg:w-1/2 space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-5 p-6 bg-white border border-[#D4AF37]/20 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#FDF9F1] flex items-center justify-center border border-[#D4AF37]/10">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
