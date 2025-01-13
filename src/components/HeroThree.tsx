
import { motion } from 'framer-motion';
import { Flower, Heart, Feather } from 'lucide-react';
import Image from '../assets/images/istockphoto-1481648899-612x612.jpg';

function App() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 0, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowAnimation = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background gradient */}
      <div className="absolute inset-0 " />
      
      {/* Main content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-8"
            >
              <motion.div 
                variants={glowAnimation} 
                animate="visible"
                className="flex items-center gap-3 text-purple-400"
              >
                <Feather className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wider">Compassionate Care</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Celebrating Lives
                <br />
                <span className="text-purple-400">With Dignity & Grace</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                In times of loss, we stand beside you with unwavering support and understanding. 
                Our dedicated team helps create meaningful ceremonies that honor and celebrate 
                the precious memories of your loved ones.
              </p>

              <motion.div 
                className="flex flex-wrap gap-4 mt-8"
                variants={fadeIn}
              >
                <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Plan a Service
                </button>
                <button className="border border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full text-purple-400 font-medium transition-all duration-300">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>

            {/* Right column - Image and floating elements */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative"
            >
              <motion.div
                variants={floatAnimation}
                animate="visible"
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={Image}
                  alt="Memorial Garden"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                variants={floatAnimation}
                animate="visible"
                className="absolute -top-10 -right-10 text-purple-400"
              >
                <Flower className="w-20 h-20 opacity-50" />
              </motion.div>
              
              <motion.div
                variants={glowAnimation}
                animate="visible"
                className="absolute -bottom-5 -left-5 p-6 bg-purple-900/30 backdrop-blur-lg rounded-2xl"
              >
                <p className="text-sm text-purple-200">
                  "In the garden of memory, we meet to remember those we love."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;