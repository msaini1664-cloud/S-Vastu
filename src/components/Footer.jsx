
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/S.Vastu-logo.webp';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A192F] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative SVG */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[#D4AF37]">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="bg-white p-3 inline-block rounded-xl">
              <img src={logo} alt="S Vastu Solution Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              S Vastu Solution is the most trusted Vastu consulting service in Chandigarh, Zirakpur, and Panchkula. We bring ancient architectural wisdom to modern spaces.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors text-sm font-bold">Fb</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors text-sm font-bold">Ig</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors text-sm font-bold">Tw</a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Residential Vastu', 'Commercial Vastu', 'Numerology', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 text-sm">
                    <span className="text-[#D4AF37] text-xs">▸</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/20 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  123 Harmony Lane, Sector 14,<br/>
                  Chandigarh, 160014<br/>
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 text-sm hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:info@svastusolution.com" className="text-gray-400 text-sm hover:text-white transition-colors">info@svastusolution.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/20 pb-2 inline-block">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive free Vastu tips and cosmic updates.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              />
              <button type="submit" className="bg-[#D4AF37] text-white font-bold rounded-lg px-4 py-3 hover:bg-[#B8860B] transition-colors shadow-lg">
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} S Vastu Solution. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
