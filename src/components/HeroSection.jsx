import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/api/placeholder/1200/800')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Bauen auf Vertrauen – Sanieren mit Verstand</h1>
          <p className="text-lg md:text-xl mb-8">Ihr zuverlässiger Partner für alle klassischen Bauleistungen im Bereich Renovierung und Sanierung. Wir betreuen private, gewerbliche und öffentliche Auftraggeber bei der Instandsetzung, Modernisierung und Aufwertung von Bestandsimmobilien.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2">
              Angebot erhalten
              <ChevronRight size={20} />
            </a>
            <a href="#services" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;