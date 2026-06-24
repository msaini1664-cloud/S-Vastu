import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import consultationImg from '../assets/consultation.png';
import Founders from './Founders';

export default function About() {
  const points = [
    "Personalized Vaastu Audits",
    "Home & Office Consultations",
    "Effective Remedial Solutions"
  ];

  return (
    <section id="about" className="pt-20 lg:pt-32 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={consultationImg}
                alt="Vastu Consultation Session"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.1]">
              Harmonize Your Home, Transform Your Life
            </h2>

            <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">
              <span className="font-semibold">VAASTU SOLUTIONS:</span> Ancient Wisdom for Modern Living. Expert consulting for positive energy, health, wealth, and peace.
            </p>

            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-800 text-lg font-medium">
                  <CheckSquare className="w-6 h-6 text-[#CD7D39] flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button className="bg-[#CD7D39] hover:bg-[#B66B2F] text-white font-medium text-lg px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Book Your Consultation
              </button>
            </div>
          </motion.div>

        </div>
      </div>
      <Founders />
    </section>
  );
}
