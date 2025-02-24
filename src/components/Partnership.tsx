import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HandshakeIcon, UsersIcon, Users2Icon, Building2Icon, HeartHandshakeIcon } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Funeral Homes Network",
    icon: <HandshakeIcon className="w-16 h-16 text-purple-400" />,
    description: "Trusted partnerships with leading funeral service providers"
  },
  {
    id: 2,
    name: "Healthcare Institutions",
    icon: <Building2Icon className="w-16 h-16 text-blue-400" />,
    description: "Collaborations with hospitals and healthcare facilities"
  },
  {
    id: 3,
    name: "Community Organizations",
    icon: <UsersIcon className="w-16 h-16 text-pink-400" />,
    description: "Strong ties with local community support groups"
  },
  {
    id: 4,
    name: "Transportation Services",
    icon: <Users2Icon className="w-16 h-16 text-orange-400" />,
    description: "Professional transportation network partners"
  },
  {
    id: 5,
    name: "Support Services",
    icon: <HeartHandshakeIcon className="w-16 h-16 text-green-400" />,
    description: "Comprehensive support service partnerships"
  }
];

const Partnership = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12 text-white">
          Our Trusted Partners
        </h2>
        
        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute flex flex-col items-center text-center"
            >
              <div className="p-6 rounded-full bg-gray-900 shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300 border border-gray-800">
                {partners[currentIndex].icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {partners[currentIndex].name}
              </h3>
              <p className="text-gray-300 max-w-md">
                {partners[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-400 w-6' 
                  : 'bg-gray-700 hover:bg-purple-600'
              }`}
              aria-label={`Show partner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partnership;