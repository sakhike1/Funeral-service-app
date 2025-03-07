import  { useState, useEffect } from 'react';
import { MapPin, Loader2, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import provincesData, { Town } from '../data/provincesData';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure Firebase is properly initialized

interface Location {
  city: string;
  province: string;
}

export default function FuneralServiceLocator() {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [nearbyServices, setNearbyServices] = useState<Town | null>(null);
  const [requestSent, setRequestSent] = useState(false);

  const findNearbyServices = (city: string) => {
    for (const province of provincesData) {
      const town = province.towns.find(t => 
        t.name.toLowerCase().includes(city.toLowerCase())
      );
      if (town) {
        setLocation({ city: town.name, province: province.name });
        setNearbyServices(town);
        return;
      }
    }
    setError('No services found in your area');
  };

  const detectLocation = async () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
      );
      const data = await response.json();
      
      if (data.city) {
        findNearbyServices(data.city);
      } else {
        setError('Unable to determine your city');
      }
    } catch (err) {
      setError('Unable to get your location. Please allow location access.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    detectLocation();
  }, []);

  const handleServiceRequest = async () => {
    if (!selectedService || !location) return;

    try {
      // Prepare the data to be submitted
      const submissionData = {
        service: selectedService,
        city: location.city,
        province: location.province,
        timestamp: new Date(),
      };

      // Add the data to Firebase Firestore
      await addDoc(collection(db, 'serviceRequests'), submissionData);

      // Set request sent state
      setRequestSent(true);

      // Refresh the page after 2 seconds (optional delay)
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error('Error submitting to Firebase:', error);
      setError('Failed to submit your request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(51,65,85,0.1),transparent_50%)]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10"
        >
          <div className="text-center mb-12">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Globe className="w-20 h-20 mx-auto mb-6 text-blue-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              AI-Powered Funeral Service Locator
            </h2>
            <p className="text-gray-400 text-lg">Connecting you with compassionate care in your area</p>
          </div>

          {loading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center gap-4 py-12"
            >
              <Loader2 className="animate-spin text-blue-400" size={40} />
              <span className="text-gray-300 text-lg">Processing Your Location...</span>
            </motion.div>
          )}

          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8"
            >
              <div className="flex items-center gap-4">
                <AlertCircle className="text-red-400" size={28} />
                <span className="text-red-300 text-lg">{error}</span>
              </div>
              <button
                onClick={detectLocation}
                className="mt-6 w-full bg-red-500/20 hover:bg-red-500/30 text-red-300 py-3 rounded-lg transition-all duration-300 text-lg"
              >
                Retry Location Detection
              </button>
            </motion.div>
          )}

          {location && nearbyServices && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-400" size={28} />
                  <div>
                    <p className="text-gray-400">Your Location</p>
                    <p className="text-xl font-semibold">{location.city}, {location.province}</p>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-blue-400">Available Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  {nearbyServices.funeralServices.map((service, index) => (
                    <motion.label
                      key={service}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-6 border border-white/10 rounded-xl cursor-pointer hover:bg-white/5 transition-all duration-300"
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service}
                        checked={selectedService === service}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="hidden"
                      />
                      <motion.div 
                        animate={selectedService === service ? { scale: [1, 1.2, 1] } : {}}
                        className={`w-6 h-6 rounded-full border-2 mr-6 flex items-center justify-center transition-colors ${
                          selectedService === service ? 'border-blue-400 bg-blue-400/20' : 'border-white/30'
                        }`}
                      >
                        {selectedService === service && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-3 h-3 rounded-full bg-blue-400" 
                          />
                        )}
                      </motion.div>
                      <span className="flex-1 text-lg">{service}</span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {selectedService && !requestSent && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={handleServiceRequest}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-size-200 text-white py-4 rounded-xl font-semibold text-lg hover:bg-pos-100 transition-all duration-500"
                >
                  Request Service
                </motion.button>
              )}

              {requestSent && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/20 rounded-xl p-6"
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle className="text-green-400" size={28} />
                    <span className="text-green-300 text-lg">Your request has been sent successfully.</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}