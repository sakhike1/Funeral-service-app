import { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTopButtonRef = useRef(null);

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
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          ref={scrollTopButtonRef}
          className="fixed bottom-10 right-10"
          style={{ zIndex: 999 }}
        >
          <button
            onClick={scrollToTop}
            className="hover:scale-125 text-gray-600  rounded-full  "
          >
            <ArrowUp className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;