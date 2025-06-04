import komplettsanierung from "../assets/images/Komplettsanierung_Renovierung.jpg"
import energetische from "../assets/images/Energetische_Modernisierung.jpg"
import innenausbau from "../assets/images/Innenausbau.jpg"
import badsanierung from "../assets/images/Badsanierung.jpg"
import abbruchlösungen from "../assets/images/Abbruchlösungen.jpg"

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Komplettsanierung & Renovierung",
      description: "Umfassende Sanierung und Renovierung von Bestandsimmobilien mit höchsten Qualitätsansprüchen und fachgerechter Umsetzung.",
      imageUrl: komplettsanierung
    },
    {
      title: "Energetische Modernisierung",
      description: "Moderne Lösungen zur Verbesserung der Energieeffizienz Ihres Gebäudes für nachhaltige und kosteneffiziente Ergebnisse.",
      imageUrl: energetische
    },
    {
      title: "Innenausbau & Modernisierung",
      description: "Professioneller Innenausbau und Modernisierung zur optimalen Nutzung und Aufwertung Ihrer Räumlichkeiten.",
      imageUrl: innenausbau
    },
    {
      title: "Badsanierung & Küchenmodernisierung",
      description: "Spezialisierte Sanierung von Bädern und Küchen mit modernen Materialien und durchdachten Konzepten.",
      imageUrl: badsanierung
    },
    {
      title: "Sichere Abbruchlösungen",
      description: "Fachgerechte und sichere Abbrucharbeiten mit professioneller Planung und umweltgerechter Entsorgung.",
      imageUrl: abbruchlösungen
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Unser Leistungsspektrum umfasst sämtliche üblichen baulichen Maßnahmen zur Werterhaltung und Verbesserung von Gebäuden, innen wie außen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              imageUrl={service.imageUrl} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;