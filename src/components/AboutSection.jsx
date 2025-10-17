import construction_company from "../assets/images/construction_company.jpg"

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src={construction_company}
              alt="About BuildRight Construction" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Über Neovista Construction UG</h2>
            <div className="w-20 h-1 bg-yellow-600 mb-6"></div>
            
            <p className="text-gray-700 mb-6">
              Die Neovista Construction UG ist Ihr zuverlässiger Partner für alle klassischen Bauleistungen im Bereich Renovierung und Sanierung. Wir betreuen private, gewerbliche und öffentliche Auftraggeber bei der Instandsetzung, Modernisierung und Aufwertung von Bestandsimmobilien – kompetent, termingerecht und mit hohem Qualitätsanspruch.
            </p>
            
            <p className="text-gray-700 mb-6">
              Mit einem erfahrenen Team, klarer Kommunikation und einem Auge fürs Detail sorgt die Neovista Construction UG für reibungslose Abläufe und nachhaltige Ergebnisse. Dabei stehen für uns die individuellen Anforderungen unserer Kunden sowie die technische und wirtschaftliche Machbarkeit stets im Mittelpunkt.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-sm">V.S</span>
                </div>
                <div>
                  <h4 className="font-semibold">Viktor Shevsov</h4>
                  <p className="text-sm text-gray-600">Geschäftsführer</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold">100%</span>
                </div>
                <div>
                  <h4 className="font-semibold">Kundenzufriedenheit</h4>
                  <p className="text-sm text-gray-600">Unser oberstes Ziel</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold">24/7</span>
                </div>
                <div>
                  <h4 className="font-semibold">Beratung</h4>
                  <p className="text-sm text-gray-600">Persönliche Betreuung</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium">
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;