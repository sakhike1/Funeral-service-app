import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Car, Heart, Shield } from 'lucide-react';

const GoldenTearsSendOff = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bgColor, setBgColor] = useState('bg-slate-800/80');
  const [testimonialBg, setTestimonialBg] = useState('bg-slate-800/80');
  
  useEffect(() => {
    setIsVisible(true);

    const colors = ['bg-red-500/80', 'bg-blue-500/80', 'bg-green-500/80', 'bg-yellow-500/80'];
    let colorIndex = 0;

    const colorInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setBgColor(colors[colorIndex]);
    }, 1000);

    const testimonialColors = [
      'bg-purple-800/80',
      'bg-indigo-800/80',
      'bg-blue-800/80',
      'bg-cyan-800/80',
      'bg-teal-800/80'
    ];
    let testimonialColorIndex = 0;

    const testimonialInterval = setInterval(() => {
      testimonialColorIndex = (testimonialColorIndex + 1) % testimonialColors.length;
      setTestimonialBg(testimonialColors[testimonialColorIndex]);
    }, 2000);

    return () => {
      clearInterval(colorInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left column - Text content */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 text-gold-400">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm uppercase tracking-wider">Trusted Transportation Services</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Gold Tears Send Off
                <br />
                <span className="text-amber-400">Dignified Care When Needed</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Through our network of trusted funeral parlours, we provide dignified and reliable 
                transportation services nationwide. Our advanced digital platform ensures seamless, 
                respectful, and prompt transfer of your loved ones to their chosen destination.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 px-6 sm:px-8 py-3 rounded-full text-white font-medium transition-all duration-300 flex items-center justify-center gap-2">
                    <Car className="w-5 h-5" />
                    Request Service
                  </button>
                </Link>

                <Link to="/service" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border border-amber-400 hover:bg-amber-400/10 px-6 sm:px-8 py-3 rounded-full text-amber-400 font-medium transition-all duration-300">
                    Our Network
                  </button>
                </Link>
              </div>
            </div>

            {/* Right column - Features and trust indicators */}
            <div className={`relative transition-all duration-700 delay-300 mt-8 lg:mt-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className={`rounded-2xl overflow-hidden ${bgColor} p-6 sm:p-8 shadow-2xl relative z-10`}>
                <div className="space-y-6">
                  {[
                    {
                      icon: Heart,
                      title: "Compassionate Care",
                      description: "Professional and respectful transportation services available 24/7 nationwide."
                    },
                    {
                      icon: Shield,
                      title: "Trusted Network",
                      description: "Partnership with reputable funeral parlours ensuring the highest standards of care."
                    },
                    {
                      icon: Car,
                      title: "Digital Platform",
                      description: "Advanced geolocation technology for efficient and monitored transportation."
                    }
                  ].map((feature, index) => (
                    <div 
                      key={feature.title}
                      className={`flex items-start gap-4 transition-all duration-500`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="p-2 sm:p-3 bg-amber-400/10 rounded-lg shrink-0">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium mb-2">{feature.title}</h3>
                        <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsive testimonial */}
              <div 
                className={`relative lg:absolute mt-6 lg:mt-5 p-4 sm:p-6 backdrop-blur-lg 
                  rounded-2xl shadow-xl transition-all duration-1000 transform ${testimonialBg} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } hover:scale-105 mx-auto lg:mx-4`}
                style={{
                  maxWidth: '100%',
                  zIndex: 20
                }}
              >
                <p className="text-sm sm:text-base text-amber-200 text-center lg:text-left">
                  "Supporting families with dignity and compassion during their time of need."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldenTearsSendOff;