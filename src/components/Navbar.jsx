import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/S.Vastu-logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Info (Sticky on PC) */}
      <div className="bg-[#B8860B] text-white py-2 px-4 sm:px-8 flex-col md:flex-row justify-between items-center hidden md:flex sticky top-0 z-[60] shadow-md">
        <p className="text-sm font-medium tracking-wide">
          Welcome to S Vastu Solution – Trusted Vastu Consultant in Chandigarh & Zirakpur, Panchkula
        </p>
        <div className="flex gap-6 mt-2 md:mt-0 text-sm font-medium">
          <a href="tel:+910000000000" className="flex items-center gap-1.5 hover:text-yellow-200 transition-colors">
            <Phone size={14} /> +91 98765 43210
          </a>
          <a href="mailto:info@svastusolution.com" className="flex items-center gap-1.5 hover:text-yellow-200 transition-colors">
            <Mail size={14} /> info@svastusolution.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="w-full font-sans shadow-sm sticky md:relative top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group">
              {/* Using the logo you uploaded, make sure to save it as logo.png in the public folder */}
              <img
                src={logo}
                alt="S Vastu Solution Logo"
                className="h-16 sm:h-20 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* Fallback if image is missing */}
              <div className="hidden text-2xl font-bold text-[#B8860B]">S VASTU</div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 lg:space-x-10 items-center">
              {['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-[#B8860B] font-semibold text-base transition-colors duration-300 relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8860B] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white px-7 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-[#B8860B]/30 transition-all duration-300 transform hover:-translate-y-0.5">
                Book Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-[#B8860B] focus:outline-none p-2 rounded-md transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            <p className="text-xs text-gray-500 mb-4 pb-3 border-b text-center px-4">
              Welcome to S Vastu Solution – Trusted Vastu Consultant in Chandigarh & Zirakpur, Panchkula
            </p>
            {['Home', 'About Us', 'Services', 'Gallery', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-800 hover:text-[#B8860B] hover:bg-orange-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 px-2">
              <button className="w-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-lg transition-all shadow-md">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
