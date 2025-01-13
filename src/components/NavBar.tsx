import  { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Phone, HeartHandshake, Calendar, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Home', icon: <Home className="w-5 h-5" />, path: '/' },
    { title: 'Service', icon: <HeartHandshake className="w-5 h-5" />, path: '/service' },
    { title: 'Obituaries', icon: <Users className="w-5 h-5" />, path: '/obituaries' },
    { title: 'Plan Ahead', icon: <Calendar className="w-5 h-5" />, path: '/plan-ahead' },
    { title: 'Contact', icon: <Phone className="w-5 h-5" />, path: '/contact' },
    { title: 'Available 24/7', icon: <Clock className="w-5 h-5" />, phone: '1-800-555-0000' },
  ];

  const bannerMessages = [
    { text: '24/7 Emergency Services Available: 1-800-555-0000', bgClass: 'bg-gradient-to-r from-gray-900 to-gray-800' },
    { text: 'Call Us Anytime: 1-800-555-0000', bgClass: 'bg-gradient-to-r from-gray-800 to-gray-700' },
    { text: 'Immediate Assistance: 1-800-555-0000', bgClass: 'bg-gradient-to-r from-gray-700 to-gray-600' },
    { text: 'We Are Here For You: 1-800-555-0000', bgClass: 'bg-gradient-to-r from-gray-600 to-gray-500' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % bannerMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="relative min-w-full">
      <motion.div
        initial={{ height: 40 }}
        animate={{ height: scrolled ? 0 : 40 }}
        className="overflow-hidden"
      >
        <div className={`w-full ${bannerMessages[bannerIndex].bgClass} text-white h-10`}>
          <div className="container mx-auto px-4 h-full flex items-center justify-center text-sm">
            <motion.span 
              key={bannerIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="font-medium"
            >
              {bannerMessages[bannerIndex].text.split(': ')[0]}: {' '}
              <a href="tel:1-800-555-0000" className="hover:text-amber-300 transition-colors duration-300">
                {bannerMessages[bannerIndex].text.split(': ')[1]}
              </a>
            </motion.span>
          </div>
        </div>
      </motion.div>

      <motion.nav
        animate={{ 
          backgroundColor: scrolled ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.9)',
          boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
        }}
        className="sticky top-0 w-full z-40 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl font-serif text-slate-800">Golden tears</span>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.slice(0, -1).map((item) => (
                <Link 
                  key={item.title}
                  to={item.path || '/'} 
                >
                  <motion.div
                    className={`flex items-center space-x-2 ${
                      scrolled 
                        ? 'text-slate-700 hover:text-slate-900' 
                        : 'text-slate-700 hover:text-slate-900 hover:border-b-2 hover:border-slate-900'
                    } px-3 py-2 ${
                      location.pathname === item.path ? 'text-blue-600' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.4 }}>
                      {item.icon}
                    </motion.div>
                    <span className="font-medium">{item.title}</span>
                  </motion.div>
                </Link>
              ))}
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 text-white px-6 py-2 rounded-full 
                            hover:from-indigo-700 hover:via-purple-700 hover:to-amber-600 transition-all duration-300 
                            shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <span>Callback request</span>
                </motion.button>
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-slate-700 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                  <span className="text-xl font-serif text-slate-800">Grace Memorial</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-slate-900 focus:outline-none p-2"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>
                
                <motion.div className="flex-1 overflow-y-auto">
                  {menuItems.map((item, index) => (
                    item.path ? (
                      <Link
                        key={item.title}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          className={`flex items-center space-x-3 px-4 py-4 text-slate-700 hover:bg-slate-50 border-b border-gray-100 ${
                            location.pathname === item.path ? 'bg-slate-50' : ''
                          }`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.4 }}>
                            {item.icon}
                          </motion.div>
                          <span className="font-medium">{item.title}</span>
                        </motion.div>
                      </Link>
                    ) : (
                      <motion.div
                        key={item.title}
                        className="flex items-center space-x-3 px-4 py-4 text-slate-700 border-b border-gray-100"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.4 }}>
                          {item.icon}
                        </motion.div>
                        <span className="font-medium">{item.title}</span>
                        {item.phone && (
                          <span className="ml-auto text-slate-600">{item.phone}</span>
                        )}
                      </motion.div>
                    )
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;