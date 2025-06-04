import { ChevronRight } from 'lucide-react';
import heroImage from "../assets/images/hero_section.jpg"

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image with Fade Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{ 
          backgroundImage: `url(${heroImage})`
        }}
      >
        {/* Gradient Overlay with Fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent animate-fade-in-delayed"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Bauen auf Vertrauen – Sanieren mit Verstand
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Ihr zuverlässiger Partner für alle klassischen Bauleistungen im Bereich Renovierung und Sanierung. Wir betreuen private, gewerbliche und öffentliche Auftraggeber bei der Instandsetzung, Modernisierung und Aufwertung von Bestandsimmobilien.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Angebot erhalten
              <ChevronRight size={20} />
            </a>
            <a href="#services" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105">
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fade-in-delayed {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 2s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in-delayed 2.5s ease-out 0.5s both;
        }
        
        .animate-slide-up {
          animation: slide-up 1.5s ease-out 1s both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;