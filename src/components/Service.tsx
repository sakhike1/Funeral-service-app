
import { Heart, Clock, Flower2, Users, Camera, Church, Moon, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicePage = () => {
  const services = [
    {
      title: "Traditional Funeral Services",
      icon: <Church className="w-10 h-10" />,
      description: "Comprehensive traditional funeral services honoring your loved one's legacy with dignity and respect.",
      features: ["Chapel Service", "Visitation", "Graveside Ceremony", "Memorial Books", "Online Obituary"],
      gradient: "from-blue-50 via-gray-50 to-purple-50"
    },
    {
      title: "Celebration of Life",
      icon: <Heart className="w-10 h-10" />,
      description: "A personalized celebration focusing on your loved one's life, achievements, and cherished memories.",
      features: ["Custom Theme", "Photo Displays", "Video Tributes", "Memory Sharing", "Personal Touches"],
      gradient: "from-rose-50 via-gray-50 to-purple-50"
    },
    {
      title: "Memorial Services",
      icon: <Flower2 className="w-10 h-10" />,
      description: "Thoughtfully planned memorial services that bring comfort and healing to family and friends.",
      features: ["Flexible Timing", "Various Venues", "Memorial Displays", "Guest Books", "Live Streaming"],
      gradient: "from-purple-50 via-gray-50 to-blue-50"
    },
    {
      title: "Pre-Planning Services",
      icon: <Clock className="w-10 h-10" />,
      description: "Compassionate guidance in planning ahead to ensure your wishes are honored and loved ones are cared for.",
      features: ["Personal Consultation", "Documentation", "Payment Plans", "Family Support", "24/7 Assistance"],
      gradient: "from-gray-50 via-blue-50 to-purple-50"
    }
  ];

  const additionalServices = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Professional Photography",
      description: "Capture meaningful moments with dignity"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Grief Counseling",
      description: "Professional support for families"
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "After-Care Program",
      description: "Ongoing support and resources"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Cultural Services",
      description: "Honoring diverse traditions"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-orange-300 via-stone-100 to-gray-300 text-black py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-8 text-center leading-tight">
            Honoring Life's Journey
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Providing compassionate and personalized funeral services to honor your loved ones with dignity and respect.
          </p>
        </motion.div>
      </div>

      {/* Main Services Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg p-10 border border-gray-100`}
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 rounded-full bg-white shadow-md text-gray-800">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-gray-800 text-white py-4 rounded-full hover:bg-gray-700 transition-all duration-300 text-lg font-medium shadow-md hover:shadow-xl">
                Learn More
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-4xl font-serif text-center mb-16">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8 rounded-xl shadow-lg text-center "
              >
                <div className="inline-block p-4 rounded-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-purple-50 to-fuchsia-600 text-gray-800 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl text-gray-400 font-serif mb-3">{service.title}</h3>
                <p className="text-gray-100">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 bg-gradient-to-l from-yellow-100 via-violet-700 to-sky-700 rounded-xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-serif mb-6">Need Assistance?</h2>
          <p className="text-m text-gray-300 mb-8 max-w-2xl mx-auto">
            Our compassionate team is available 24/7 to help you with any questions or concerns.
          </p>
          <button className="bg-white text-gray-900 px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;