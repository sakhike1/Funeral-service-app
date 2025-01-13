
import { motion } from 'framer-motion';
import { 
  Heart, 
  Phone, 
  Calendar, 
  ClipboardList, 
  Users, 
  Handshake,
  Brain,
  Sparkles
} from 'lucide-react';

const GriefSupportSection = () => {
  const steps = [
    {
      icon: Phone,
      title: "24/7 AI-Powered Support",
      description: "Our advanced AI system works alongside our compassionate team to provide immediate assistance and guidance whenever you need it."
    },
    {
      icon: Calendar,
      title: "Smart Consultation Planning",
      description: "Our intelligent scheduling system helps find the perfect time for a consultation, adapting to your needs and preferences."
    },
    {
      icon: ClipboardList,
      title: "Automated Document Processing",
      description: "Advanced AI assists in streamlining paperwork, ensuring accurate and efficient handling of all necessary documentation."
    },
    {
      icon: Users,
      title: "Personalized Family Care",
      description: "AI-driven analysis helps match you with the most suitable support groups and counselors for your specific situation."
    },
    {
      icon: Heart,
      title: "Intelligent Memorial Design",
      description: "Our AI helps create personalized tributes by analyzing memories and preferences to honor your loved one uniquely."
    },
    {
      icon: Handshake,
      title: "Continuous AI Support",
      description: "Our AI system evolves with your needs, providing relevant resources and support throughout your journey."
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
    <div className="font-sans bg-gray-900 min-h-screen relative overflow-hidden px-6 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20"
            initial={{ opacity: 0.2, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0, 1, 0],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-blue-400" />
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-light mb-6 leading-tight">
          
           
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Life's Most Difficult Moments
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Our AI-powered platform works alongside our compassionate team to provide
            personalized guidance and support through each step of your journey.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col items-start gap-4 bg-black/50 p-6 rounded-lg backdrop-blur-lg border border-white/10 group-hover:border-white/20 transition-all relative z-10">
                <motion.div 
                  className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-white text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
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
          <button 
            type="button"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium text-lg rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Connect with AI Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GriefSupportSection;