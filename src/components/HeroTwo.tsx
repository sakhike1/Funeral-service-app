import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  price: string;
  period: string;
  index: number;
}

const ServiceOfferings = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const deliveryServices: Omit<Service, 'index'>[] = [
    {
      title: "Standard Delivery",
      description: "Reliable and cost-effective service for transporting deceased individuals. Designed for funeral parlours seeking an economical option. Operates within a set timeframe, providing flexibility and convenience for less time-sensitive transfers. Includes tracking options.",
      price: "R1,500",
      period: "per Transfer",
    },
    {
      title: "Express Delivery",
      description: "Faster transportation service for urgent or time-sensitive transfers. Prioritizes deliveries to ensure quicker turnaround times. Ideal for funeral homes and hospitals needing quick solutions.",
      price: "R2,500",
      period: "per transfer",
    },
    {
      title: "Same-Day Delivery",
      description: "Designed for critical needs requiring transport within hours of placing the order. Valuable for immediate transfers. Utilizes an efficient and responsive fleet for real-time dispatch and delivery.",
      price: "R3,500",
      period: "per transfer",
    },
  ];

  const ServiceCard = ({ title, description, price, period, index }: Service) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-between items-start relative overflow-hidden"
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
    >
      <div className="flex-1 pr-4 relative z-10 mb-4 md:mb-0">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          {hoveredCard === index && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="text-blue-500" size={20} />
            </motion.div>
          )}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="text-left md:text-right min-w-[120px] relative z-10">
        <span className="text-xl font-bold text-blue-600">{price}</span>
        <span className="block text-sm text-gray-600">{period}</span>
      </div>
      {hoveredCard === index && (
        <motion.div
          className="absolute inset-0 bg-blue-100 opacity-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );

  return (
    <div className="max-w-7xl mt-20 mx-auto p-4 sm:p-8 mb-24 bg-gray-50 rounded-2xl">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Our Services</h1>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 gap-6"
        layout
      >
        {deliveryServices.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceOfferings;