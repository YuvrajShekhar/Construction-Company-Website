const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Neovista Construction UG</h3>
            <p className="mb-4 text-gray-400">
              Ihr zuverlässiger Partner für alle klassischen Bauleistungen im Bereich Renovierung und Sanierung. Kompetent, termingerecht und mit hohem Qualitätsanspruch.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-yellow-500">Startseite</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-500">Leistungen</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-500">Über uns</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-500">Kontakt</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Projekte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Referenzen</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Unsere Leistungen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Komplettsanierung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Energetische Modernisierung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Innenausbau</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Badsanierung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Küchenmodernisierung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500">Abbruchlösungen</a></li>
            </ul>
          </div>
          
          {/* Legal & Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="/impressum" className="text-gray-400 hover:text-yellow-500">Impressum</a></li>
              <li><a href="/datenschutz" className="text-gray-400 hover:text-yellow-500">Datenschutzerklärung</a></li>
            </ul>
            <div className="space-y-2 text-gray-400">
              <p className="font-semibold text-white">Kontakt:</p>
              <p>Dänenstr. 6</p>
              <p>10439 Berlin</p>
            </div>
          </div>
          
          {/* Company Info */}
          
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {year} Neovista Construction UG. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;