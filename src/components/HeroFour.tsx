import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Flower, Star, Sun } from 'lucide-react';
import Image from '../assets/images/candle.jpg';
import Image1 from '../assets/images/flowers.jpg';
import Image2 from '../assets/images/light.jpg';

function App() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const serviceItems = [
    {
      id: 1,
      title: "Memorial Services",
      description: "Personalized ceremonies that honor and celebrate the unique life of your loved one",
      icon: Heart,
      image: Image,
    },
    {
      id: 2,
      title: "Peaceful Gardens",
      description: "Serene memorial gardens and gathering spaces for quiet reflection and remembrance",
      icon: Flower,
      image: Image1,
    },
    {
      id: 3,
      title: "Compassionate Care",
      description: "Supporting families with dignity and understanding during their time of loss",
      icon: Star,
      image: Image2
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const glowVariants = {
    idle: {
      opacity: 0.5,
      scale: 1
    },
    hover: {
      opacity: 0.8,
      scale: 1.2,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Gentle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-300/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 15 + 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Subtle cursor effect */}
      <motion.div
        className="hidden md:block fixed w-[300px] h-[300px] rounded-full pointer-events-none"
        animate={{
          x: cursorPosition.x - 150,
          y: cursorPosition.y - 150,
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, rgba(147, 51, 234, 0) 70%)"
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
          <motion.div
            className="inline-flex items-center justify-center space-x-2 mb-4"
            whileHover="hover"
            initial="idle"
            animate="idle"
          >
            <Sun className="w-6 h-6 text-purple-600" />
            <motion.span variants={glowVariants} className="text-purple-600 font-medium">
              With Honor & Respect
            </motion.span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Celebrating Lives Well Lived
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing compassionate funeral services and creating meaningful tributes 
            to honor the precious memories of your loved ones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative rounded-xl overflow-hidden bg-white shadow-xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: hoveredId === item.id ? 0.8 : 0.6 }}
              />
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: hoveredId === item.id ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-2 mb-2"
                >
                  <item.icon className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </motion.div>
                <motion.p
                  className="text-white/90 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-left"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium
              hover:bg-gray-700 transition-colors duration-300 shadow-lg
              hover:shadow-gray-500/25"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;