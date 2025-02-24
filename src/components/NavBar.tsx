import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Phone, HeartHandshake, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import videoSrc from '../assets/images/11b993bf6320db647f28532dd16f68aa.mp4';
import logo from '../assets/images/logo.png';

interface MenuItem {
  title: string;
  icon: JSX.Element;
  path?: string;
  phone?: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const scrollToFooter = () => {
    const footerElement = document.getElementById('HeroSeven');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  const menuItems: MenuItem[] = [
    { title: 'Home', icon: <Home className="w-5 h-5" />, path: '/' },
    { title: 'Service', icon: <HeartHandshake className="w-5 h-5" />, path: '/service' },
    { title: 'About', icon: <Info className="w-5 h-5" />, path: '/About' },
    { title: 'Contact', icon: <Phone className="w-5 h-5" />, path: '/contact' },
    { title: 'Available 24/7', icon: <Clock className="w-5 h-5" />, phone: '083 123 4567' },
  ];

  const bannerMessages = [
    { 
      text: 'Compassionate Care When You Need It Most: Call 083 123 4567',
      bgClass: 'bg-gradient-to-r from-gray-800 to-gray-700' 
    },
    { 
      text: 'Global Dignity in Deceased Transportation: Call 083 123 4567',
      bgClass: 'bg-gradient-to-r from-gray-700 to-gray-600' 
    },
    { 
      text: 'Your Trusted Partner: Call 083 123 4567',
      bgClass: 'bg-gradient-to-r from-gray-600 to-gray-500' 
    },
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Banner rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % bannerMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Body scroll lock
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

  // Logo component with optimization
  const LogoImage = ({ className, style = {} }: { className?: string; style?: React.CSSProperties }) => (
    <img 
      src={logo} 
      alt="Company Logo" 
      className={`w-auto object-contain transition-transform duration-300 rounded-lg
                 filter contrast-125 saturate-105 ${className || ''}`}
      style={{
        imageRendering: '-webkit-optimize-contrast',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        ...style
      }}
      loading="eager"
      decoding="async"
    />
  );

  return (
    <div className="relative min-w-full">
      {/* Announcement Banner */}
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
              <a 
                href="tel:083 123 4567" 
                className="hover:text-amber-300 transition-colors duration-300"
              >
                {bannerMessages[bannerIndex].text.split(': ')[1]}
              </a>
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        animate={{ 
          backgroundColor: scrolled ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.9)',
          boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
        }}
        className="sticky top-0 w-full z-40 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogoImage className="h-12 md:h-14 lg:h-16" />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.slice(0, -1).map((item) => (
                <Link 
                  key={item.title}
                  to={item.path!} // Non-null assertion since we are sure path exists here
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <motion.div
                    className={`flex items-center space-x-2 ${
                      scrolled 
                        ? 'text-slate-700 hover:text-slate-900' 
                        : 'text-slate-700 hover:text-slate-900 hover:border-b-2 hover:border-slate-900'
                    } px-3 py-2 ${
                      location.pathname === item.path ? 'text-blue-600 font-semibold' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }} 
                      transition={{ duration: 0.4 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="font-medium">{item.title}</span>
                  </motion.div>
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link to="/RequestTransport">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                   
                    scrollToFooter();
                  }}
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-gray-500 text-white 
                           px-6 py-2 rounded-full hover:from-indigo-700 hover:via-purple-700 
                           hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl 
                           flex items-center space-x-2 focus:outline-none focus:ring-2 
                           focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span>Transportation Request</span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-slate-700 hover:text-slate-900 focus:outline-none 
                       focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 lg:hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.3), rgba(51, 65, 85, 0.3))'
              }}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 
                       lg:hidden flex flex-col overflow-hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-4 border-b">
                  <LogoImage className="h-10" />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-slate-900 focus:outline-none 
                             focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>
                
                {/* Mobile Menu Items */}
                <motion.div className="flex-1 overflow-y-auto">
                  {menuItems.map((item, index) => (
                    item.path ? (
                      <Link
                        key={item.title}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block focus:outline-none focus:bg-gray-50"
                      >
                        <motion.div
                          className={`flex items-center space-x-3 px-4 py-4 text-black
                                   hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))]
                                   from-amber-900 via-yellow-100 to-slate-50 border-b border-gray-100 ${
                                     location.pathname === item.path ? 'bg-gray-50' : ''
                                   }`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <motion.div 
                            whileHover={{ rotate: 360 }} 
                            transition={{ duration: 0.4 }}
                          >
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
                        <motion.div 
                          whileHover={{ rotate: 360 }} 
                          transition={{ duration: 0.4 }}
                        >
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

                {/* Video Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto p-4 border-t border-gray-100"
                >
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[350px] object-cover"
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-lg font-medium font-serif">
                          Dignity in Every Journey
                        </h3>
                        <p className="text-sm opacity-90 mt-1">
                          Professional & Compassionate Service
                        </p>
                      </div>
                    </div>
                  </div>
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