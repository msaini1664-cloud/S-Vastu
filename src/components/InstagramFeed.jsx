import { useEffect } from 'react';
import { motion } from 'framer-motion';

const InstagramIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function InstagramFeed() {
  useEffect(() => {
    // Dynamically load the Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    // Safely remove watermark and duplicate titles using text matching
    const interval = setInterval(() => {
      // Hide Free Widget Badge
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        if (link.textContent.includes('Free Instagram Feed Widget') || link.href.includes('elfsight.com/instagram-feed-instashow')) {
          link.style.display = 'none';
        }
      });
      
      // Hide Duplicate "Follow us on Instagram" text from Elfsight
      const elements = document.querySelectorAll('div, a, span, h1, h2, h3');
      elements.forEach(el => {
        if (el.textContent.trim() === 'Follow us on Instagram' && !el.closest('.max-w-3xl')) {
          el.style.display = 'none';
        }
      });
    }, 500);

    return () => {
      clearInterval(interval);
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="instagram-feed" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <InstagramIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#E1306C]" />
            <span className="text-[#B8860B] font-serif italic tracking-wider text-xl sm:text-2xl">Follow Us</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 text-center"
          >
            On Instagram
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 sm:w-32 h-1 bg-[#D4AF37] mx-auto rounded-full shadow-sm"
          />
        </div>

        {/* Elfsight Widget Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="w-full relative z-10 mb-12"
        >
          <div className="elfsight-app-7b460780-ff7a-4bdc-ab7d-331a4ed961a6" data-elfsight-app-lazy></div>
        </motion.div>
      </div>
    </section>
  );
}
