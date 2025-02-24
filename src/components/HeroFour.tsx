import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Heart, 
  Truck, 
  Phone, 
  Map, 
  Shield, 
  Clock,
  MonitorSmartphone
} from 'lucide-react';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 1,
      title: "Nationwide Transportation",
      description: "Dignified transport services from place of death to mortuaries across the country",
      icon: Truck
    },
    {
      id: 2,
      title: "Real-Time Tracking",
      description: "Advanced digital platform providing immediate updates and location tracking",
      icon: MonitorSmartphone
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Round-the-clock compassionate customer service and coordination",
      icon: Clock
    },
    {
      id: 4,
      title: "International Services",
      description: "Expanding reach across SADC for international transportation needs",
      icon: Globe
    }
  ];

  const objectives = [
    {
      id: 5,
      title: "Nationwide Network",
      description: "Building partnerships with funeral parlors across Africa",
      icon: Map
    },
    {
      id: 6,
      title: "Digital Excellence",
      description: "Leveraging technology for seamless service delivery",
      icon: MonitorSmartphone
    },
    {
      id: 7,
      title: "Compassionate Care",
      description: "Ensuring dignity and respect in every interaction",
      icon: Heart
    },
    {
      id: 8,
      title: "Ultimate Protection",
      description: "Maintaining the highest standards of care and professionalism",
      icon: Shield
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Ambient floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-300/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Subtle cursor glow effect */}
      <motion.div
        className="hidden md:block fixed w-[300px] h-[300px] rounded-full pointer-events-none"
        animate={{
          x: cursorPosition.x - 150,
          y: cursorPosition.y - 150,
          background: "radial-gradient(circle, rgba(218, 165, 32, 0.05) 0%, rgba(218, 165, 32, 0) 70%)"
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <motion.div
        className="container mx-auto px-4 py-16 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gold Tears Send Off
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Providing dignified and compassionate transportation services across Africa. 
            We ensure every deceased individual is transported with the utmost care and respect.
          </p>
        </motion.div>

        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mb-8 text-center"
          variants={itemVariants}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5, backgroundColor: "#fafafa" }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <motion.div
                className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <service.icon className="w-6 h-6 text-amber-600" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mb-8 text-center"
          variants={itemVariants}
        >
          Our Objectives
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {objectives.map((objective) => (
            <motion.div
              key={objective.id}
              variants={itemVariants}
              whileHover={{ y: -5, backgroundColor: "#fafafa" }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <motion.div
                className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <objective.icon className="w-6 h-6 text-amber-600" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {objective.title}
              </h3>
              <p className="text-gray-600">
                {objective.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-left"
          variants={itemVariants}
        >
          <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 text-white px-8 py-3 rounded-full font-medium
              hover:bg-amber-700 transition-colors duration-300 shadow-lg
              hover:shadow-amber-500/25 inline-flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Contact Us 24/7</span>
          </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;