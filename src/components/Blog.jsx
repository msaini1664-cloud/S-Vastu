import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog({ hideHeader = false, limit }) {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: "post-1",
      title: "5 Vastu Tips for a Peaceful Bedroom",
      excerpt: "Discover how the right placement of your bed and subtle color changes can drastically improve your sleep quality and bring harmony to your personal relationships.",
      content: "A peaceful bedroom is the foundation of a healthy life. According to Vastu Shastra, your bedroom should ideally be in the South-West corner of the house. This direction is associated with Earth, bringing stability and grounding energy. \n\n1. Bed Placement: Place your bed so that your head points South or East. \n2. Colors: Use soothing colors like light pink, light blue, or earthy tones. Avoid dark or aggressive colors like bright red or black. \n3. Mirrors: Ensure no mirrors face the bed directly. \n4. Clutter: Keep the space under your bed entirely clear to let energy flow. \n5. Electronics: Minimize electronic devices in the bedroom to reduce electromagnetic fields that disrupt rest.",
      date: "May 12, 2026",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "post-2",
      title: "How to Choose the Right Colors for Your Home Office",
      excerpt: "Colors have a profound impact on productivity and mood. Learn which shades attract success and focus according to ancient Vastu principles.",
      content: "The modern home office is a place of focus, wealth generation, and creativity. The colors you surround yourself with can either enhance your productivity or drain your energy.\n\nFor a home office, Vastu recommends light and vibrant colors. Light green is considered highly auspicious as it represents the energy of Mercury, which governs intellect and commerce. Light yellow or cream are also excellent choices as they keep the environment bright, promoting alertness and clear decision-making.\n\nAvoid dark blues and blacks, as they can induce lethargy and hinder the flow of wealth.",
      date: "April 28, 2026",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop"
    }
    ,
    {
      id: "post-3",
      title: "The Science Behind the 16 Vastu Zones",
      excerpt: "Vastu is not magic, it's architectural science. We break down the 16 elemental zones of a property and explain how balancing them influences your daily life.",
      content: "Vastu Shastra divides a space into 16 distinct zones, each governed by specific elements and cosmic energies. Understanding these zones is the first step to diagnosing problems in your home or office.\n\nFor example, the North-East zone is governed by Water and is responsible for clarity of mind and vision. If this zone is blocked or heavily loaded, occupants may suffer from mental fog or lack of foresight.\n\nConversely, the South-East zone is the Fire zone, governing cash flow and vitality. A water element (like a sink or blue color) here can severely impact financial stability. Balancing these 16 zones ensures a harmonious and prosperous environment.",
      date: "April 15, 2026",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
    }
    ,
    {
      id: "post-4",
      title: "The Science Behind the 16 Vastu Zones",
      excerpt: "Vastu is not magic, it's architectural science. We break down the 16 elemental zones of a property and explain how balancing them influences your daily life.",
      content: "Vastu Shastra divides a space into 16 distinct zones, each governed by specific elements and cosmic energies. Understanding these zones is the first step to diagnosing problems in your home or office.\n\nFor example, the North-East zone is governed by Water and is responsible for clarity of mind and vision. If this zone is blocked or heavily loaded, occupants may suffer from mental fog or lack of foresight.\n\nConversely, the South-East zone is the Fire zone, governing cash flow and vitality. A water element (like a sink or blue color) here can severely impact financial stability. Balancing these 16 zones ensures a harmonious and prosperous environment.",
      date: "April 15, 2026",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
    }
    ,
    {
      id: "post-5",
      title: "The Science Behind the 16 Vastu Zones",
      excerpt: "Vastu is not magic, it's architectural science. We break down the 16 elemental zones of a property and explain how balancing them influences your daily life.",
      content: "Vastu Shastra divides a space into 16 distinct zones, each governed by specific elements and cosmic energies. Understanding these zones is the first step to diagnosing problems in your home or office.\n\nFor example, the North-East zone is governed by Water and is responsible for clarity of mind and vision. If this zone is blocked or heavily loaded, occupants may suffer from mental fog or lack of foresight.\n\nConversely, the South-East zone is the Fire zone, governing cash flow and vitality. A water element (like a sink or blue color) here can severely impact financial stability. Balancing these 16 zones ensures a harmonious and prosperous environment.",
      date: "April 15, 2026",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
    }
    ,
    {
      id: "post-6",
      title: "The Science Behind the 16 Vastu Zones",
      excerpt: "Vastu is not magic, it's architectural science. We break down the 16 elemental zones of a property and explain how balancing them influences your daily life.",
      content: "Vastu Shastra divides a space into 16 distinct zones, each governed by specific elements and cosmic energies. Understanding these zones is the first step to diagnosing problems in your home or office.\n\nFor example, the North-East zone is governed by Water and is responsible for clarity of mind and vision. If this zone is blocked or heavily loaded, occupants may suffer from mental fog or lack of foresight.\n\nConversely, the South-East zone is the Fire zone, governing cash flow and vitality. A water element (like a sink or blue color) here can severely impact financial stability. Balancing these 16 zones ensures a harmonious and prosperous environment.",
      date: "April 15, 2026",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const displayedPosts = limit ? posts.slice(0, limit) : posts;
  const hasMore = limit && posts.length > limit;

  return (
    <section id="blog" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        {!hideHeader && (
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
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <motion.div
              layoutId={post.id}
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col group cursor-pointer"
              onClick={() => setSelectedPost(post)}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <motion.div className="relative h-56 overflow-hidden">
                <motion.img
                  layoutId={`img-${post.id}`}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-sm font-bold text-[#D4AF37]">{post.date}</span>
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <motion.h3 layoutId={`title-${post.id}`} className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B8860B] transition-colors leading-tight">
                  {post.title}
                </motion.h3>
                <motion.p layoutId={`excerpt-${post.id}`} className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm">
                  {post.excerpt}
                </motion.p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-[#D4AF37] pb-1 self-start group-hover:text-[#B8860B] group-hover:border-[#B8860B] transition-colors">
                  Read Article
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-gray-900 font-bold rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              View All Posts
            </Link>
          </div>
        )}

      </div>

      {/* Expanded Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[101] px-4 pointer-events-none">
              <motion.div
                layoutId={selectedPost.id}
                className="bg-[#FFF9EB] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] border border-[#D4AF37]/20 w-full max-w-3xl max-h-[90vh] flex flex-col pointer-events-auto relative"
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-[#B8860B] p-2 rounded-full backdrop-blur-md shadow-sm transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="overflow-y-auto no-scrollbar">
                  <motion.div className="relative h-64 sm:h-80 w-full shrink-0">
                    <motion.img
                      layoutId={`img-${selectedPost.id}`}
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-md">
                      <span className="text-sm font-bold text-[#D4AF37]">{selectedPost.date}</span>
                    </div>
                  </motion.div>

                  <div className="p-8 sm:p-12">
                    <motion.h3 layoutId={`title-${selectedPost.id}`} className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                      {selectedPost.title}
                    </motion.h3>
                    <motion.p layoutId={`excerpt-${selectedPost.id}`} className="text-lg text-[#B8860B] font-medium mb-8 leading-relaxed italic">
                      {selectedPost.excerpt}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-700 space-y-6 text-base sm:text-lg leading-relaxed whitespace-pre-line"
                    >
                      {selectedPost.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
