import  { useState, useEffect } from 'react';
import { Heart, Phone, FileText, Users, Calendar, ChevronRight, HelpCircle, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';

const BereavementGuide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

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

  const steps = [
    {
      title: "Immediate Assistance",
      icon: <Phone className="w-6 h-6" />,
      description: "Connect with a caring professional who can guide you through immediate steps and provide emotional support.",
      action: "Call Support Line",
      details: "Available 24/7 for compassionate guidance",
      urgentInfo: "Emergency Support: 1-800-XXX-XXXX"
    },
    {
      title: "Documentation Support",
      icon: <FileText className="w-6 h-6" />,
      description: "Get help with essential paperwork and legal requirements during this difficult time.",
      action: "View Checklist",
      details: "We'll help you organize necessary documents",
      checklist: [
        "Death Certificate",
        "Insurance Papers",
        "Legal Documents",
        "Financial Records"
      ]
    },
    {
      title: "Memorial Planning",
      icon: <Calendar className="w-6 h-6" />,
      description: "Receive guidance on arranging a meaningful memorial service that honors your loved one.",
      action: "Explore Options",
      details: "Personalized service planning assistance",
      services: [
        "Traditional Service",
        "Celebration of Life",
        "Private Gathering",
        "Virtual Memorial"
      ]
    },
    {
      title: "Family Support",
      icon: <Users className="w-6 h-6" />,
      description: "Connect with grief counselors and support groups in your area.",
      action: "Find Support",
      details: "Local counseling and group sessions",
      supportTypes: [
        "Individual Counseling",
        "Group Sessions",
        "Online Support",
        "Family Therapy"
      ]
    }
  ];

  const ContactForm = () => (
    <div className="mt-6 p-6 bg-gray-700 rounded-lg transform transition-all duration-500 hover:scale-102">
      <h3 className="text-lg font-medium mb-4">Request Support</h3>
      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 rounded-lg bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-rose-400"
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full p-3 rounded-lg bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-rose-400"
        />
        <textarea 
          placeholder="How can we help you?" 
          className="w-full p-3 rounded-lg bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-rose-400 h-32"
        />
        <button className="w-full p-3 bg-rose-500 hover:bg-rose-600 rounded-lg text-white transition-colors duration-300">
          Send Request
        </button>
      </div>
    </div>
  );

  const ProgressIndicator = () => (
    <div className="flex justify-between mb-8 relative">
      <div className="absolute top-1/2 h-0.5 bg-gray-700 w-full -z-10"></div>
      {steps.map((_, index) => (
        <div 
          key={index}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            index <= activeStep ? 'bg-rose-500' : 'bg-gray-700'
          }`}
        >
          {index < activeStep ? '✓' : index + 1}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
      <div className="max-w-7xl mx-auto"> 
        <div className="rounded-lg overflow-hidden transition-all duration-1000">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="transform transition-transform duration-500 hover:scale-110">
                <Heart className="w-16 h-16 mx-auto text-rose-400 mb-4 animate-pulse" />
              </div>
              <h2 className="text-4xl font-semibold mb-2 bg-gradient-to-r from-rose-400 via-violet-100 to-rose-400 bg-clip-text text-transparent animate-pulse">
                We're Here to Help
              </h2>
              <p className="text-gray-400">Guiding you through this difficult time with care and compassion</p>
            </div>

            <ProgressIndicator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-500 cursor-pointer transform hover:-translate-y-1 h-full ${
                    activeStep === index 
                      ? `${gradients[backgroundIndex]} border-rose-400 shadow-lg shadow-rose-400/20` 
                      : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-full bg-gray-700 text-rose-400 transition-transform duration-300 hover:rotate-12">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                    
                    {activeStep === index && (
                      <div className="pl-4 border-l-2 border-rose-400 mb-4 flex-grow animate-fadeIn">
                        {step.checklist && (
                          <ul className="space-y-2">
                            {step.checklist.map((item, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-rose-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {step.services && (
                          <ul className="space-y-2">
                            {step.services.map((service, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-rose-400" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        )}
                        {step.supportTypes && (
                          <ul className="space-y-2">
                            {step.supportTypes.map((type, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-rose-400" />
                                {type}
                              </li>
                            ))}
                          </ul>
                        )}
                        {step.urgentInfo && (
                          <div className="text-rose-400 font-medium animate-pulse">
                            {step.urgentInfo}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-gray-300">{step.details}</span>
                      <button 
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-400 to-violet-400 hover:from-rose-500 hover:to-violet-500 text-white flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-rose-400/50"
                      >
                        {step.action}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 transition-all duration-500">
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-rose-400" />
                  <p className="text-sm">24/7 Local Support Available</p>
                </div>
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300">
                  <Clock className="w-5 h-5 text-rose-400" />
                  <p className="text-sm">Response Within 30 Minutes</p>
                </div>
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5 text-rose-400" />
                  <p className="text-sm">Online Consultation Available</p>
                </div>
              </div>

              <button 
                className="mt-6 w-full p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-102 hover:shadow-lg"
                onClick={() => setShowContactForm(!showContactForm)}
              >
                <HelpCircle className="w-5 h-5 text-rose-400" />
                <span>Need Additional Support?</span>
              </button>

              {showContactForm && <ContactForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BereavementGuide;