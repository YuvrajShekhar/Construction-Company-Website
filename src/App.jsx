import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CopyrightPage from './components/CopyrightPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

// Main homepage component
const HomePage = ({ sidebarOpen, setSidebarOpen, toggleSidebar }) => (
  <>
    <Navbar toggleSidebar={toggleSidebar} />
    <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen} 
                toggleSidebar={toggleSidebar} 
              />
            } 
          />
          <Route path="/impressum" element={<CopyrightPage />} />
          <Route path="/datenschutz" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;