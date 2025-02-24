import {Link} from 'react-router-dom';
import { 
  Car, 
  Clock, 
  Shield, 
  Phone, 
  Building2, 
  Users,
  HeartHandshake,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const TransportServiceSection = () => {
  const services = [
    {
      icon: Clock,
      title: "24/7 Available Service",
      description: "Round-the-clock availability ensuring immediate response and assistance whenever you need our services."
    },
    {
      icon: Car,
      title: "Professional Transportation",
      description: "Specialized vehicles equipped with all necessary features to ensure dignified and respectful transportation."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured services with trained professionals following strict protocols."
    },
    {
      icon: Building2,
      title: "Institution Partners",
      description: "Trusted partner for hospitals, healthcare facilities, and funeral homes, providing reliable transfer services."
    },
    {
      icon: Phone,
      title: "Easy Booking",
      description: "Simple and efficient booking process through our advanced application, available on mobile and web platforms."
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Compassionate support team available to assist families and answer questions throughout the process."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="font-sans bg-slate-900 min-h-screen relative overflow-hidden px-6 py-16">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <HeartHandshake className="w-8 h-8 text-blue-800" />
            <Sparkles className="w-8 h-8 text-pink-600" />
          </div>
          <h2 className="text-slate-100 text-4xl md:text-5xl font-light mb-6 leading-tight">
            Professional & Dignified
            <span className="font-semibold block text-blue-700">
              Transportation Services
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Providing respectful and reliable transportation services with the support
            of advanced technology to ensure dignity and peace of mind.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
                <motion.div 
                  className="p-3 bg-slate-100 rounded-full inline-block mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-6 h-6 text-slate-700" />
                </motion.div>
                <div>
                  <h4 className="text-slate-900 text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link to="/contact">
          <button 
            type="button"
            className="bg-slate-700 hover:bg-slate-600 text-white font-medium text-lg rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            Request Transportation Service
          </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TransportServiceSection;