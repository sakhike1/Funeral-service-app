import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Heart, Calendar, Phone } from 'lucide-react';
import Image from '../assets/images/girl-hugging-her-mother-outdoors.jpg';

// Define an interface for ServiceCard props
interface ServiceCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
  isActive: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description, delay, isActive }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, delay }}
    className="h-full relative"
  >
    <div
      className={`group h-full rounded-lg transition-all duration-700 overflow-hidden ${
        isActive ? 'shadow-lg shadow-purple-500/20' : 'shadow-md shadow-stone-800/10'
      }`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/80 via-purple-800/20 to-stone-900/80" />
      </div>
      <div className="relative p-8 h-full backdrop-blur-sm">
        <div className="relative w-16 h-16 mb-6">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Icon className={`w-12 h-12 ${isActive ? 'text-purple-200' : 'text-stone-300'} transition-colors duration-500`} />
          </motion.div>
        </div>
        <div className="space-y-3">
          <h3 className={`text-xl font-serif font-medium ${isActive ? 'text-purple-50' : 'text-stone-100'} transition-colors duration-500`}>
            {title}
          </h3>
          <p className={`${isActive ? 'text-purple-200' : 'text-stone-300'} leading-relaxed transition-colors duration-500`}>{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const HeroSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      Icon: Truck,
      title: 'Dignified Transportation',
      description: "Providing gentle and respectful transportation of the deceased to the nearest or preferred mortuary.",
    },
    {
      Icon: Heart,
      title: 'Compassionate Care',
      description: "Offering gentle guidance and understanding through life's most challenging moments.",
    },
    {
      Icon: Calendar,
      title: 'Pre-Planning',
      description: 'Thoughtful preparation to ensure peace of mind for you and your family.',
    },
    {
      Icon: Phone,
      title: '24/7 Support',
      description: 'Here for you at any hour, providing caring assistance when you need it most.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: 'easeOut' },
    },
  };

  return (
    <div className="font-serif bg-stone-50">
      <div className="grid lg:grid-cols-2 items-center min-h-[85vh]">
        <motion.div initial="hidden" animate="visible" variants={fadeInUpVariants} className="max-lg:order-1 px-8 lg:px-16 py-20 lg:py-28">
          <h1 className="text-stone-800 lg:text-5xl text-3xl font-light leading-tight">
            Ensuring Dignified and Reliable Transportation Services
          </h1>
          <p className="text-stone-600 mt-8 text-lg leading-relaxed">
            At Gold Tears Send Off, we offer dignified and reliable transportation services for deceased individuals. Our mission is to ensure a seamless and respectful transfer of the deceased from the place of death to the nearest or preferred mortuary or morgue.
          </p>

          <motion.div className="mt-12 flex gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
            {isClient && (
              <Link to="/contact" className="block">
                <button
                  type="button"
                  className="bg-stone-800 text-stone-50 px-8 py-3 rounded-full shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer z-50 relative"
                >
                  Contact Us
                </button>
              </Link>
            )}

            {isClient && (
              <Link to="/service" className="block">
                <button
                  type="button"
                  className="border border-stone-300 text-stone-800 px-8 py-3 rounded-full shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer z-50 relative"
                >
                  Learn More
                </button>
              </Link>
            )}
          </motion.div>
        </motion.div>

        <motion.div className="lg:h-[700px] relative overflow-hidden" initial="hidden" animate="visible" variants={imageVariants}>
          <img src={Image} className="w-full h-full object-cover" alt="Peaceful Memorial Garden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </motion.div>
      </div>

      <div className="w-full bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="text-center mb-16">
            <h2 className="text-3xl font-light text-stone-100">Our Services</h2>
            <p className="mt-4 text-stone-400">Supporting you with dignity and compassion</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={0.4 + index * 0.2} isActive={index === activeIndex} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;