import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form handling logic here
    alert('Form submitted! This is a placeholder for the actual form submission.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Nehmen Sie Kontakt mit uns auf. Wir beraten Sie gerne zu Ihrem Bauvorhaben und erstellen Ihnen ein individuelles Angebot.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Kontakt aufnehmen</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Vollständiger Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                    placeholder="Max Mustermann" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail-Adresse</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                    placeholder="ihre@email.de" 
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Betreff</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                  placeholder="Wie können wir Ihnen helfen?" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Ihre Nachricht</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                  placeholder="Beschreiben Sie Ihr Projekt..." 
                  required 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium w-full"
              >
                Nachricht senden
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefonnummer</h4>
                    <p className="text-gray-600">Auf Anfrage verfügbar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-Mail-Adresse</h4>
                    <p className="text-gray-600">Auf Anfrage verfügbar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Geschäftsadresse</h4>
                    <p className="text-gray-600">Dänenstr. 6,</p>
                    <p className="text-gray-600">10439 Berlin</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Clock size={24} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Geschäftszeiten</h4>
                    <p className="text-gray-600">Montag - Freitag: Nach Vereinbarung</p>
                    <p className="text-gray-600">Samstag: Nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div >
                    <Clock size={24} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
    </section>
  );
};

export default ContactSection;