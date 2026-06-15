
import { Home, Building2, Factory, Hash, Monitor, Star, Map, Shield } from 'lucide-react';
import numerologyImg from '../assets/numerology.jpeg';
import yantraImg from '../assets/REMDIES.jpeg';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-white" />,
      title: "Residential Vastu",
      description: "Harmonize your home to attract health, wealth, and family peace. We analyze the placement of bedrooms, kitchens, and entrances to ensure optimal cosmic flow.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Building2 className="w-10 h-10 text-white" />,
      title: "Commercial Vastu",
      description: "Boost your business growth, employee productivity, and client retention by aligning your office, shop, or showroom with powerful Vastu principles.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Factory className="w-10 h-10 text-white" />,
      title: "Industrial Vastu",
      description: "Ensure smooth manufacturing processes, reduce machinery breakdowns, and maximize output by perfectly balancing the five elements in your factory.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Hash className="w-10 h-10 text-white" />,
      title: "Numerology Integration",
      description: "Combine the power of your numbers with Vastu. We provide personalized remedies based on your date of birth and planetary alignments.",
      image: numerologyImg,
      filter: "hue-rotate(-70deg) saturate(1.5) contrast(1.1)"
    },
    {
      icon: <Monitor className="w-10 h-10 text-white" />,
      title: "Online Consultation",
      description: "Get expert Vastu advice from anywhere in the world. We thoroughly analyze your floor plans and coordinate via video calls for accurate remedies.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Star className="w-10 h-10 text-white" />,
      title: "Astro-Vastu",
      description: "A powerful combination of Vedic Astrology and Vastu Shastra to provide highly personalized remedies based on your unique birth horoscope.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Map className="w-10 h-10 text-white" />,
      title: "Vastu for Land/Plots",
      description: "Ensure the land you buy is highly auspicious. We check the soil, shape, slopes, and energy fields before you invest in your dream project.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: "Remedies & Yantras",
      description: "Powerful, energized Vastu products like yantras, crystals, and pyramids specifically designed to fix defects without any structural demolition.",
      image: yantraImg
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#B8860B] font-serif italic tracking-wider text-2xl sm:text-3xl">Our Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Comprehensive <span className="text-[#B8860B]">Vastu Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            Whether you are building a new property, renovating, or facing unexplained challenges in an existing space, our specialized services provide the perfect remedy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  style={service.filter ? { filter: service.filter } : {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-8 pt-10 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B8860B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                
                {/* Button */}
                <button className="flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-[#D4AF37] pb-1 self-start hover:text-[#B8860B] transition-colors">
                  Explore Service
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
