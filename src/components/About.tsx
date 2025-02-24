import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Peaceful sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Seamless and Compassionate Deceased Transportation
            </h1>
            <p className="text-[13px] text-gray-200 max-w-2xl mx-auto mb-8">
              At Gold Tears Send Off, we ensure dignity, care, and reliability during your time of need.
            </p>
            
            {/* Glowing Button */}
            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold
                         shadow-[0_0_15px_rgba(147,51,234,0.5)] 
                         hover:shadow-[0_0_30px_rgba(147,51,234,0.8)]
                         transition-shadow duration-300"
            >
              Contact Us Now
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <div
       
        
        className="w-full mx-auto bg-gray-700 px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
          About Gold Tears Send Off
        </h2>
        <p className="text-[13px] text-gray-50 text-center max-w-4xl mx-auto mb-8">
          Gold Tears Send Off (GTSO) specializes in providing dignified and reliable transportation services for deceased individuals. We partner with a trusted network of funeral parlours to ensure the seamless and respectful transfer of the deceased from the place of death to the nearest or preferred mortuary or morgue. Utilizing an advanced digital commerce platform, we deliver prompt, compassionate, and safe body transportation services nationwide. With a vision for future international expansion, we aim to support families, hospitals, and institutions with exceptional care.
        </p>
      </div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MapPin className="w-8 h-8 text-purple-600" />,
              title: "Nationwide Body Transportation",
              description:
                "Seamlessly transporting deceased individuals to the nearest or preferred mortuary with dignity and respect."
            },
            {
              icon: <Heart className="w-8 h-8 text-purple-600" />,
              title: "Partner Network Services",
              description:
                "Collaborating with funeral parlours and hospitals to ensure a reliable and efficient process."
            },
            {
              icon: <Mail className="w-8 h-8 text-purple-600" />,
              title: "Advanced Digital Platform",
              description:
                "Leveraging technology for real-time coordination and communication, ensuring convenience and peace of mind."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="bg-gray-700 py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              Here for You Anytime
            </h2>
            <p className="text-gray-200">
              Available 24/7, we ensure prompt assistance and compassionate care whenever you need us.
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:1234567890"
              className="flex items-center text-purple-200"
            >
              <Phone className="w-6 h-6 mr-2" />
              <span>083 123 4567</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
