import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import Image from '../assets/images/istockphoto-1347838937-612x612.jpg';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure Firebase is properly initialized
import { useToast } from '../hooks/use-toast'; // Import the toast hook

function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast(); // Initialize the toast hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // Get form data
      const formData = new FormData(formRef.current);
      const name = formData.get('user_name') as string;
      const email = formData.get('user_email') as string;
      const message = formData.get('message') as string;

      // Validate form fields
      if (!name || !email || !message) {
        throw new Error('Please fill in all fields.');
      }

      // Prepare submission data
      const submissionData = {
        name,
        email,
        message,
        timestamp: new Date(),
      };

      // Add data to Firebase collection
      await addDoc(collection(db, 'contact-submissions'), submissionData);

      // Show success toast
      toast({
        title: 'Success!',
        description: 'Your message has been sent successfully.',
      });

      // Set submitted state
      setIsSubmitted(true);

      // Reset form
      formRef.current.reset();
    } catch (error) {
      console.error('Error submitting form:', error);

      // Show error toast
      toast({
        variant: 'destructive',
        title: 'Error!',
        description: error instanceof Error ? error.message : 'An error occurred while submitting your message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left side - Image and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <img
              src={Image}
              alt="Contact"
              className="rounded-2xl shadow-2xl"
            />
            
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg"
              >
                <Mail className="text-blue-400" />
                <span>Tiyani.Mbalati@gmail.com</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg"
              >
                <Phone className="text-green-400" />
                <span>083 123 4567</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg"
              >
                <MapPin className="text-red-400" />
                <span>No 1 North Road, Johannesburg</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-green-400 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p>Your message has been sent successfully.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-700 via-gray-400 to-emerald-50 hover:bg-blue-700 transition flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;