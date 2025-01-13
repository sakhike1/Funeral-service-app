import { useState } from 'react';
import {  Heart, MapPin, Calendar, Phone, Users, Clock, Search, ArrowRight, Sparkles } from 'lucide-react';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const steps = [
    {
      title: "Immediate Steps",
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      content: [
        "Contact close family members and friends",
        "If death occurred at home, contact emergency services or funeral home",
        "Obtain official pronouncement of death if needed",
        "Secure any pets or dependents",
        "Contact employer or business partners if applicable"
      ],
      image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Gather Information",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      content: [
        "Collect important documents (ID, insurance policies, will)",
        "List any pre-arrangements or expressed wishes",
        "Create preliminary guest list for service",
        "Determine budget and payment sources",
        "Collect photos and memories for memorial"
      ],
      image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Choose Funeral Home",
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      content: [
        "Research local funeral homes",
        "Compare services and prices",
        "Read reviews and ask for recommendations",
        "Visit facilities if possible",
        "Discuss available options and packages"
      ],
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Plan Service Details",
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      content: [
        "Select type of service (traditional, memorial, celebration of life)",
        "Choose date, time, and location",
        "Decide on burial or cremation",
        "Select casket or urn if needed",
        "Plan music, readings, and speakers"
      ],
      image: "https://images.unsplash.com/photo-1490122417551-6ee9691429d0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Additional Arrangements",
      icon: <Phone className="w-6 h-6 text-purple-600" />,
      content: [
        "Order flowers and arrange decorations",
        "Arrange transportation for family",
        "Plan post-service gathering or reception",
        "Write and submit obituary",
        "Arrange for death certificates"
      ],
      image: "https://images.unsplash.com/photo-1486663845017-3eedaa78617f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredSteps = steps.filter(step =>
    step.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    step.content.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-3 mb-6">
            <Heart className="text-purple-600 animate-pulse" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Compassionate Funeral Planning
            </span>
            <Sparkles className="text-purple-600" />
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to guide you through each step of the planning process with care and understanding.
          </p>
          
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for specific guidance..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {filteredSteps.map((step, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ease-in-out
                ${activeStep === index ? 'scale-100' : 'scale-95'}
                hover:scale-[1.02] cursor-pointer`}
              onClick={() => setActiveStep(index)}
            >
              <div className={`bg-white rounded-2xl shadow-lg overflow-hidden
                ${activeStep === index ? 'ring-2 ring-purple-500' : ''}`}>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                      {step.icon}
                      <h3 className="text-xl font-semibold text-gray-800">
                        {step.title}
                      </h3>
                      <ArrowRight className={`w-5 h-5 text-purple-600 transition-transform duration-300
                        ${activeStep === index ? 'rotate-90' : ''}`} />
                    </div>
                    
                    <div className="grid gap-3 transition-all duration-500">
                      {step.content.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 py-2 pl-4 border-l-2 border-purple-200 animate-slide-in"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-purple-400" />
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 shadow-inner">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-full shadow-md">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Need Additional Support?</h4>
              <p className="text-gray-600">
                Our compassionate team is available 24/7 to provide guidance and support during this difficult time.
                Don't hesitate to reach out for assistance with any aspect of the planning process.
              </p>
              <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2">
                Contact Support
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;