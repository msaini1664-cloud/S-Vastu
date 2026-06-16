import nareshImage from '../assets/ER. Naresh Kumar.webp';
import supriyaImage from '../assets/ER. Supriya.webp';

export default function Founders() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Meet the <span className="text-[#B8860B]">Experts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our expert consultants bring decades of experience in Vastu Shastra and structural alignment.
          </p>
        </div>

        <div className="space-y-20">
          
          {/* Founder 1: ER. Naresh Kumar */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
                ER. <span className="font-semibold text-gray-900">Naresh Kumar</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Er. Naresh Kumar, a highly experienced <strong className="text-gray-900">Vastu Shastra</strong> expert with over <strong className="text-gray-900">36 years of expertise</strong>, holds a <strong className="text-gray-900">Civil Engineer</strong> degree. With a deep understanding of architectural science and traditional Vastu principles, he has helped countless individuals create harmonious living and working spaces.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                His vast knowledge and practical approach ensure that every structure is aligned with positive energy, bringing prosperity, peace, and success. Whether it's a home, office, or commercial space, his guidance helps in achieving balance and stability through the power of <strong className="text-gray-900">Vastu Shastra</strong>.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src={nareshImage} 
                  alt="Er. Naresh Kumar" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

          {/* Founder 2: ER. Supriya */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src={supriyaImage} 
                  alt="Er. Supriya" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
                ER. <span className="font-semibold text-gray-900">Supriya</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Supriya holds a <strong className="text-gray-900">M.Tech degree</strong> along with a <strong className="text-gray-900">PG Diploma in Vedic Vastu</strong> and a <strong className="text-gray-900">Postgraduate qualification in Nutrology</strong>. With <strong className="text-gray-900">over 5 years of experience</strong>, she specializes in <strong className="text-gray-900">Vedic Vastu and Nutrology</strong>, helping individuals create balanced living spaces and achieve overall well-being.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Her expertise in <strong className="text-gray-900">Vedic Vastu</strong> allows her to guide people in harmonizing their homes and workplaces for better energy flow, positivity, and success. Additionally, her knowledge of <strong className="text-gray-900">Nutrology</strong> helps in promoting a healthier lifestyle.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
