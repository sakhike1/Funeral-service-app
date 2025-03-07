
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import PlanAhead from './pages/PlanAhead';
import Contact from './pages/Contact';
import RequestTransport from './pages/RequestTransport';
import ScrollButton from "./components/ScrollButton";
import Footer from './components/FooterSection';

const App = () => {
  return (
    
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/About" element={<About />} />
            <Route path="/plan-ahead" element={<PlanAhead />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/RequestTransport" element={<RequestTransport />} />
            <Route
              path="*"
              element={
                <div>
                  {/* Add any additional content or components here */}
                </div>
              }
            />
          </Routes>
        </div>
        <ScrollButton/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;