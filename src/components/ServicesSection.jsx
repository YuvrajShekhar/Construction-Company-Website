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
        title: "Residential Construction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        imageUrl: "/api/placeholder/600/400"
      },
      {
        title: "Commercial Buildings",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        imageUrl: "/api/placeholder/600/400"
      },
      {
        title: "Renovation Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        imageUrl: "/api/placeholder/600/400"
      },
      {
        title: "Infrastructure Projects",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        imageUrl: "/api/placeholder/600/400"
      }
    ];
  
    return (
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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