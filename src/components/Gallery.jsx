export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
      alt: "Luxury Living Room"
    },
    {
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      alt: "Modern Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
      alt: "Elegant Bedroom"
    },
    {
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
      alt: "Architectural Design"
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      alt: "Spacious Hall"
    },
    {
      src: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop",
      alt: "Office Space Vastu"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#B8860B] font-serif italic tracking-wider text-2xl sm:text-3xl">Our Work</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Project <span className="text-[#B8860B]">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            A glimpse into the spaces we have transformed through the power of Vastu Shastra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative h-64 overflow-hidden rounded-2xl cursor-pointer">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
