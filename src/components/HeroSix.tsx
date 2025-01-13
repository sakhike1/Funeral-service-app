
import {
  Church,
  Clock,
  HeartHandshake,
  
  Flower2,
  Car,
  Users,
  Sparkles,
  LucideIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const ServiceCard = ({ icon: Icon, title, description, details  }: { icon: LucideIcon, title: string, description: string, details: string[], index: number }) => {


  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6, type: "spring" }
    }
  };

  return (
    <motion.div 
      
      initial="hidden"
      animate="visible"
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
      <div className="relative bg-white p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-100">
        <motion.div 
          className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full w-16 h-16 flex items-center justify-center mb-6"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
        >
          <Icon className="w-8 h-8 text-indigo-600" />
        </motion.div>
        
        <h4 className="text-xl font-semibold text-gray-800 mb-3">{title}</h4>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-3">
          {details.map((detail, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="flex items-center space-x-3 text-gray-600"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>{detail}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const FuneralServicesSection = () => {
  const services = [
    {
      icon: Church,
      title: "Traditional Funeral Service",
      description: "A dignified ceremony honoring your loved one's life with traditional customs and rituals.",
      details: [
        "Viewing and visitation options",
        "Religious or non-religious ceremony",
        "Musical tribute arrangements",
        "Traditional casket options",
        "Memorial keepsakes"
      ]
    },
    {
      icon: Flower2,
      title: "Memorial Services",
      description: "A personalized celebration of life that reflects your loved one's unique journey.",
      details: [
        "Customized memorial displays",
        "Video tribute creation",
        "Memory sharing ceremony",
        "Guest book and prayer cards",
        "Photography services"
      ]
    },
    {
      icon: Clock,
      title: "Immediate Services",
      description: "Compassionate assistance for those requiring prompt arrangements.",
      details: [
        "24/7 professional care",
        "Transportation services",
        "Document preparation",
        "Cremation options",
        "Express arrangements"
      ]
    },
    {
      icon: HeartHandshake,
      title: "Pre-Planning Services",
      description: "Thoughtful preparation to ensure your wishes are honored and loved ones are unburdened.",
      details: [
        "Personal consultation",
        "Documentation of wishes",
        "Payment planning options",
        "Family notification plan",
        "Regular plan updates"
      ]
    },
    {
      icon: Car,
      title: "Professional Services",
      description: "Comprehensive support services ensuring a dignified farewell.",
      details: [
        "Funeral procession",
        "Cemetery coordination",
        "Flower arrangements",
        "Monument selection",
        "Insurance processing"
      ]
    },
    {
      icon: Users,
      title: "Family Care Services",
      description: "Supporting families before, during, and after the service.",
      details: [
        "Grief counseling referrals",
        "Estate planning guidance",
        "Benefits assistance",
        "Support group access",
        "Anniversary remembrance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-8"
          >
            <HeartHandshake className="w-10 h-10 text-indigo-600" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-light text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Compassionate Care for
            <span className="block font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Life's Final Journey
            </span>
          </motion.h1>
          
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We provide dignified and professional funeral services, ensuring every detail 
            is handled with the utmost care and respect for your loved ones.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <AnimatePresence>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="mt-16 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FuneralServicesSection;