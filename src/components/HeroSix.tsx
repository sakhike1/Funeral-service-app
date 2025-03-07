import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {
  Truck,
  Clock,
  HeartHandshake,
  Shield,
  MapPin,
  Phone,
  Sparkles,
  LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
};

const ServiceCard = ({ icon: Icon, title, description, details }: ServiceCardProps) => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
      <div className="relative bg-white p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-100">
        <motion.div 
          className="p-4 bg-gradient-to-r from-blue-50 to-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-6"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
        >
          <Icon className="w-8 h-8 text-blue-600" />
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
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>{detail}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const TransportServices = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate("/contact"); // Navigate to the /contact route
  };

  const services = [
    {
      icon: Truck,
      title: "Professional Transport",
      description: "Dignified transportation services with real-time GPS tracking and status updates.",
      details: [
        "24/7 transportation availability",
        "GPS-enabled fleet tracking",
        "Climate-controlled vehicles",
        "Professional handling protocols",
        "Direct facility-to-facility transfer"
      ]
    },
    {
      icon: Clock,
      title: "Expedited Services",
      description: "Priority transport services for time-sensitive situations.",
      details: [
        "Rapid response team",
        "Express documentation processing",
        "Priority route planning",
        "Real-time status updates",
        "Dedicated transport coordinator"
      ]
    },
    {
      icon: HeartHandshake,
      title: "Healthcare Coordination",
      description: "Seamless coordination with healthcare facilities and funeral homes.",
      details: [
        "Direct facility communication",
        "Documentation management",
        "Transfer authorization handling",
        "Inter-facility coordination",
        "Digital paperwork processing"
      ]
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description: "Enhanced security measures ensuring safe and respectful transportation.",
      details: [
        "Secure vehicle systems",
        "Trained security personnel",
        "Chain of custody tracking",
        "Digital security protocols",
        "Verification procedures"
      ]
    },
    {
      icon: MapPin,
      title: "Geographic Coverage",
      description: "Extensive service coverage across multiple regions and facilities.",
      details: [
        "Nationwide transport services",
        "Rural area accessibility",
        "Interstate coordination",
        "Route optimization",
        "Multiple facility networks"
      ]
    },
    {
      icon: Phone,
      title: "Support Services",
      description: "Comprehensive support throughout the transportation process.",
      details: [
        "24/7 customer support",
        "Real-time status updates",
        "Digital documentation access",
        "Facility coordination assistance",
        "Emergency response team"
      ]
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-white font-sans">
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
            className="inline-block p-3 bg-gradient-to-r from-blue-50 to-gray-50 rounded-full mb-8"
          >
            <Truck className="w-10 h-10 text-blue-600" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-light text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Professional Transport
            <span className="block font-semibold bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent">
              With Digital Precision
            </span>
          </motion.h1>
          
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Golden Tears Send Off (GTS) envisions an Africa where every deceased individual is transported with the utmost dignity and care, leveraging advanced technology to provide seamless, compassionate, and reliable services.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <button
            onClick={handleClick} // Add the click handler
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-gray-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Request Transport Service
          </button>
        </motion.div>
      </div>
    </div>
  );
});

export default TransportServices;