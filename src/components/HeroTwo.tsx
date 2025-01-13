
import { motion } from 'framer-motion';
import Image from '../assets/images/istockphoto-1347838937-612x612.jpg';
import { Link} from 'react-router-dom';

const HeroFour = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const imageFloat = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="px-6 py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Image - Now first on big screens */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageFloat}
            className="relative order-1"
          >
            <img
              src={Image}
              alt="Memorial Garden"
              className="rounded-lg shadow-2xl w-full object-cover h-[500px] transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg" />
          </motion.div>

          {/* Text Content - Now second on big screens */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6 order-2"
          >
            <motion.h1
              className="text-black lg:text-4xl md:text-3xl text-2xl font-serif mb-4 leading-relaxed"
            >
              Honoring Lives with Dignity & Grace
            </motion.h1>

            <motion.p
              className="text-gray-600 mt-6 text-lg leading-relaxed font-light"
            >
              During life's most challenging moments, we're here to provide compassionate support and guidance. Our dedicated team helps you create meaningful tributes that celebrate and honor your loved ones' cherished memories.
            </motion.p>

            <motion.div
              className="mt-12 space-x-4"
              variants={fadeIn}
            >
              <Link to="/plan-ahead">
              <button
                type='button'
                className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 font-medium text-base rounded-full px-6 py-3"
              >
                Plan a Service
              </button>
              </Link>
             
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroFour;