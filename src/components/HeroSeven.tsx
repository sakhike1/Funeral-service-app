import { useState, useEffect } from 'react';
import { Heart, ChevronRight, HelpCircle, MapPin, Clock, Mail, ArrowRight, Globe, Truck, Shield, HeartHandshake } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useToast } from "../hooks/use-toast";

const GoldTearsSendOff = () => {
  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const gradients = [
    'bg-gradient-to-r from-gray-800 to-gray-900',
    'bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900',
    'bg-gradient-to-r from-gray-900 via-rose-900 to-gray-900',
    'bg-gradient-to-r from-indigo-900 via-gray-900 to-gray-900'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % gradients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.details) {
        throw new Error('Please fill in all fields');
      }

      const submissionData = {
        ...formData,
        timestamp: new Date(),
      };

      console.log('Submitting data to Firebase:', submissionData);
      
      await addDoc(collection(db, 'transportation-requests'), submissionData);
      
      console.log('Data successfully submitted to Firebase');
      
      toast({
        title: "Success!",
        description: "Your request has been submitted successfully.",
      });

      setSubmitStatus({
        type: 'success',
        message: 'Your request has been submitted successfully! We will contact you shortly.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        details: ''
      });
    } catch (error) {
      console.error('Error submitting to Firebase:', error);
      
      toast({
        variant: "destructive",
        title: "Error!",
        description: error instanceof Error ? error.message : 'An error occurred while submitting your request',
      });
      
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred while submitting your request'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      title: "Transportation Services",
      icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Professional and dignified transportation of deceased individuals across Africa.",
      action: "Request Service",
      details: "24/7 Transportation Support",
      services: [
        "Place of death to mortuary transport",
        "Inter-facility transfers",
        "International transportation",
        "Real-time tracking system"
      ]
    },
    {
      title: "Digital Tracking",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Track and monitor transportation progress in real-time through our digital platform.",
      action: "Track Service",
      details: "Advanced tracking technology",
      features: [
        "Real-time GPS tracking",
        "Status updates",
        "Digital documentation",
        "Secure communication"
      ]
    },
    {
      title: "Support Network",
      icon: <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Access our extensive network of funeral parlours and healthcare facilities.",
      action: "View Network",
      details: "Nationwide coverage",
      network: [
        "Funeral Parlour Partners",
        "Healthcare Facilities",
        "24/7 Support Centers",
        "Local Representatives"
      ]
    },
    {
      title: "Care Assurance",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Our commitment to providing dignified and professional services.",
      action: "Learn More",
      details: "Quality guaranteed service",
      assurance: [
        "Professional Handlers",
        "Specialized Vehicles",
        "Proper Documentation",
        "Compassionate Care"
      ]
    }
  ];

  const ProgressIndicator = () => (
    <div className="flex justify-between mb-6 sm:mb-8 relative mt-20">
      <div className="absolute top-1/2 h-0.5 bg-gray-700 w-full -z-10 mt-20" ></div>
      {steps.map((_, index) => (
        <div 
          key={index}
          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center  justify-center text-sm sm:text-base ${
            index <= activeStep ? 'bg-rose-500' : 'bg-gray-700'
          }`}
        >
          {index < activeStep ? '✓' : index + 1}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen  p-3 sm:p-6 text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className={`rounded-lg overflow-hidden ${gradients[backgroundIndex]} transition-colors duration-1000`}>
          <div className="p-4 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div>
                <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-rose-400 mb-4" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold mb-2 bg-gradient-to-r from-rose-400 via-violet-100 to-rose-400 bg-clip-text text-transparent">
                Gold Tears Send Off
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                Providing dignified and compassionate transportation services for your loved ones across Africa. Our commitment is to ensure every journey is handled with the utmost care and respect.
              </p>
            </div>

            <ProgressIndicator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-gray-800/50 border-rose-400' 
                      : 'bg-gray-800 border-gray-700 hover:border-gray-500'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 rounded-full bg-gray-700 text-rose-400">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2">{step.title}</h3>
                        <p className="text-sm sm:text-base text-gray-300">{step.description}</p>
                      </div>
                    </div>
                    
                    {activeStep === index && (
                      <div className="pl-3 sm:pl-4 border-l-2 border-rose-400 mb-3 sm:mb-4 flex-grow">
                        {(step.services || step.features || step.network || step.assurance) && (
                          <ul className="space-y-2">
                            {(step.services || step.features || step.network || step.assurance)?.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm sm:text-base">
                                <ArrowRight className="w-4 h-4 text-rose-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs sm:text-sm text-gray-300">{step.details}</span>
                      <button 
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm transition-colors duration-300"
                      >
                        {step.action}
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg bg-gray-800">
                <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
                  <p className="text-xs sm:text-sm">Nationwide Coverage</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
                  <p className="text-xs sm:text-sm">24/7 Service Available</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
                  <p className="text-xs sm:text-sm">Real-time Support</p>
                </div>
              </div>

              <button 
                className="mt-4 sm:mt-6 w-full p-3 sm:p-4 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center gap-2 text-sm sm:text-base transition-colors duration-300"
                onClick={() => setShowContactForm(!showContactForm)}
              >
                <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
                <span>{showContactForm ? 'Hide Contact Form' : 'Request Transportation Service'}</span>
              </button>

              {showContactForm && (
                <div className="mt-6 p-4 sm:p-6 bg-gray-700 rounded-lg" id="contactForm">
                  <h3 className="text-base sm:text-lg font-medium mb-4">Request Transportation Service</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name" 
                        className="w-full p-2 sm:p-3 rounded-lg bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-rose-400 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address" 
                        className="w-full p-2 sm:p-3 rounded-lg bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-rose-400 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number" 
                        className="w-full p-2 sm:p-3 rounded-lg bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-rose-400 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <textarea 
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        placeholder="Service Details (Location, Requirements, etc.)" 
                        className="w-full p-2 sm:p-3 rounded-lg bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-rose-400 h-24 sm:h-32 text-sm sm:text-base"
                      />
                    </div>
                    {submitStatus.type && (
                      <div className={`p-3 rounded-lg ${
                        submitStatus.type === 'success' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full p-2 sm:p-3 bg-rose-500 hover:bg-rose-600 rounded-lg text-white transition-colors duration-300 text-sm sm:text-base ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldTearsSendOff;
