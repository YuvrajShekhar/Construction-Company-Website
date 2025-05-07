import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-2xl font-bold ${scrolled ? 'text-yellow-600' : 'text-white'}`}>Company_Name</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-500 font-medium`}>Home</a>
          <a href="#services" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-500 font-medium`}>Services</a>
          <a href="#about" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-500 font-medium`}>About Us</a>
          <a href="#contact" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-500 font-medium`}>Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg bg-yellow-600 text-white"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;