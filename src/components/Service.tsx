import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, MessageSquare, FileText, HeartHandshake, Hospital, Shield, Phone } from 'lucide-react';

const ServicePage = () => {
  const services = [
    {
      title: "Deceased Transportation Services",
      icon: <Truck />,
      description: "Partnering with over 1000 funeral providers and healthcare facilities to simplify deceased transport across South Africa.",
      gradient: "from-violet-50 to-indigo-50"
    },
    {
      title: "Real-Time Order Tracking",
      icon: <Shield />,
      description: "Multiple digital platforms enabling families to track their loved one's transportation in real-time with status updates.",
      gradient: "from-rose-50 to-orange-50"
    },
    {
      title: "Direct Messaging with Drivers",
      icon: <MessageSquare />,
      description: "Seamless communication platform allowing families to coordinate directly with drivers throughout the journey.",
      gradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "24/7 Support",
      icon: <Clock />,
      description: "Round-the-clock caring assistance available whenever you need us most.",
      gradient: "from-blue-50 to-cyan-50"
    }
  ];

  const additionalServices = [
    {
      icon: <FileText />,
      title: "Documentation Assistance",
      description: "Help with insurance claims and burial documentation"
    },
    {
      icon: <Hospital />,
      title: "Healthcare Partnerships",
      description: "Strong network of healthcare facility partners"
    },
    {
      icon: <HeartHandshake />,
      title: "Dignified Care",
      description: "Compassionate and meticulous handling"
    },
    {
      icon: <Phone />,
      title: "Immediate Response",
      description: "Swift assistance during difficult times"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="bg-gradient-to-r from-violet-100 via-slate-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            Golden Tears Send Off (GTS)
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partnering with select funeral providers to deliver dignified and dependable funeral transportation services. We ensure seamless and respectful transfer of the deceased from the place of death to the chosen mortuary.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.gradient} rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  {React.cloneElement(service.icon, { className: "w-6 h-6 text-gray-700" })}
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-serif text-center mb-10 text-gray-800">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-violet-100 via-slate-50 to-indigo-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    {React.cloneElement(service.icon, { 
                      className: "w-5 h-5 text-gray-700" 
                    })}
                  </div>
                  <h3 className="text-base font-medium text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-200 via-slate-800 to-red-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-serif text-white mb-4">Need Immediate Assistance?</h2>
          <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
            GTS is here for you 24/7, providing caring assistance when you need it most.
          </p>
          <Link to="/contact">
            <button className="bg-white text-gray-800 px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors duration-300 shadow-md">
              Contact Us Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;