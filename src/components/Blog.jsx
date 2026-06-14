export default function Blog() {
  const posts = [
    {
      title: "5 Vastu Tips for a Peaceful Bedroom",
      excerpt: "Discover how the right placement of your bed and subtle color changes can drastically improve your sleep quality and bring harmony to your personal relationships.",
      date: "May 12, 2026",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "How to Choose the Right Colors for Your Home Office",
      excerpt: "Colors have a profound impact on productivity and mood. Learn which shades attract success and focus according to ancient Vastu principles.",
      date: "April 28, 2026",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Science Behind the 16 Vastu Zones",
      excerpt: "Vastu is not magic, it's architectural science. We break down the 16 elemental zones of a property and explain how balancing them influences your daily life.",
      date: "April 15, 2026",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#B8860B] font-serif italic tracking-wider text-2xl sm:text-3xl">Our Insights</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Latest from the <span className="text-[#B8860B]">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            Stay updated with expert tips, scientific explanations, and practical remedies for everyday Vastu compliance.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <span className="text-sm font-bold text-[#D4AF37]">{post.date}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B8860B] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm">
                  {post.excerpt}
                </p>
                
                {/* Read More Link */}
                <button className="flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-[#D4AF37] pb-1 self-start hover:text-[#B8860B] transition-colors">
                  Read Article
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-gray-900 font-bold rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
            View All Posts
          </button>
        </div>

      </div>
    </section>
  );
}
