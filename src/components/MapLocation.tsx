import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2Icon } from 'lucide-react';

interface FuneralParlor {
  id: number;
  name: string;
  address: string;
  distance: string;
  rating: number;
  services: string[];
}

const dummyParlors: FuneralParlor[] = [
  {
    id: 1,
    name: "Eternal Peace Funeral Home",
    address: "123 Comfort Lane, Johannesburg",
    distance: "2.5 km",
    rating: 4.8,
    services: ["24/7 Service", "Transportation", "Chapel Services"],
  },
  {
    id: 2,
    name: "Graceful Passages Memorial",
    address: "456 Serenity Road, Pretoria",
    distance: "3.2 km",
    rating: 4.6,
    services: ["Traditional Services", "Modern Facilities", "Grief Counseling"],
  },
  {
    id: 3,
    name: "Divine Rest Funeral Services",
    address: "789 Tranquil Street, Sandton",
    distance: "4.1 km",
    rating: 4.9,
    services: ["Cultural Ceremonies", "Premium Facilities", "24/7 Support"],
  },
];

const Partnership = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const [filteredParlors, setFilteredParlors] = useState<FuneralParlor[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedParlor, setSelectedParlor] = useState<number | null>(null);
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      // If there's any need to rotate through partners, implement it here
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message: string) => {
    setToast({ show: true, message });
  };

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setFilteredParlors(dummyParlors);
      setIsSearching(false);
    }, 1000);
  };

  const handleSelect = (id: number) => {
    setSelectedParlor(id);
  };

  const handleRemove = (id: number) => {
    setFilteredParlors(prev => prev.filter(parlor => parlor.id !== id));
    if (selectedParlor === id) {
      setSelectedParlor(null);
    }
    showToast('Funeral parlor removed successfully');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedParlor !== null) {
      showToast('Request sent successfully!');
    }
  };

  return (
    <div className="w-full py-8 md:py-16 ">
      <div className="max-w-7xl mx-auto -mt-[100px] px-4">
        <div className="mt-8 md:mt-16 bg-gray-900 rounded-xl p-4 md:p-8 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-serif text-center text-white mb-6 md:mb-8">
            Find Nearby Funeral Parlors
          </h3>

          <div className="max-w-2xl mx-auto mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <input
                type="text"
                placeholder="Enter your address..."
                value={searchAddress}
                onChange={(e) => setSearchAddress(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSearch}
                className="w-full sm:w-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors duration-200"
              >
                Search
              </motion.button>
            </div>
          </div>

          {isSearching ? (
            <p className="text-center text-white">Searching...</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {filteredParlors.map((parlor) => (
                  <div
                    key={parlor.id}
                    className={`relative p-4 bg-gray-800 text-white rounded-lg shadow-md transition-all duration-200 ${
                      selectedParlor === parlor.id ? 'ring-2 ring-purple-500 bg-gray-700' : 'hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div 
                        className="flex-1 cursor-pointer w-full" 
                        onClick={() => handleSelect(parlor.id)}
                      >
                        <h4 className="text-lg md:text-xl font-semibold">{parlor.name}</h4>
                        <p className="text-sm md:text-base">{parlor.address}</p>
                        <p className="text-sm md:text-base">{parlor.distance}</p>
                        <p className="text-sm md:text-base">Rating: {parlor.rating} ★</p>
                        <div className="text-sm md:text-base">
                          <span>Services: </span>
                          <span className="break-words">{parlor.services.join(", ")}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleRemove(parlor.id)}
                        className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-700 transition-colors duration-200 self-start"
                      >
                        <Trash2Icon className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>

              {selectedParlor !== null && (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 rounded-lg shadow-lg transition-all duration-200"
                >
                  Send Request
                </motion.button>
              )}
            </form>
          )}

          {/* Custom Toast */}
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50"
            >
              {toast.message}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Partnership;