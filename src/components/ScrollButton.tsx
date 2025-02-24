import { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [shouldPulse, setShouldPulse] = useState(true);
  const pulseTimeoutRef = useRef<number | null>(null);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setShouldPulse(false);
    // Reset pulse after 30 seconds
    if (pulseTimeoutRef.current) {
      clearTimeout(pulseTimeoutRef.current);
    }
    pulseTimeoutRef.current = window.setTimeout(() => {
      setShouldPulse(true);
    }, 30000);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (pulseTimeoutRef.current) {
        clearTimeout(pulseTimeoutRef.current);
      }
    };
  }, []);

  const buttonClasses = `
    fixed bottom-10 right-10 
    p-4 rounded-full
    bg-white/90 backdrop-blur-sm
    shadow-lg
    transform transition-all duration-300
    ${isHovered ? 'scale-110' : 'scale-100'}
    ${shouldPulse ? 'animate-bounce' : ''}
    hover:shadow-xl
    group
  `;

  const ringClasses = `
    absolute inset-0
    rounded-full
    ${shouldPulse ? 'animate-ping' : ''}
    bg-blue-400/30
  `;

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={buttonClasses}
      aria-label="Scroll to top"
      style={{ zIndex: 999 }}
    >
      <div className={ringClasses} />
      <div className="relative z-10 flex items-center justify-center">
        <ArrowUp 
          className={`
            w-6 h-6 
            text-blue-600
            transition-transform duration-300
            ${isHovered ? 'translate-y-[-2px]' : ''}
            group-hover:text-blue-700
          `}
        />
      </div>
      {shouldPulse && (
        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 
          bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Scroll to top
        </span>
      )}
    </button>
  );
};

export default ScrollToTopButton;