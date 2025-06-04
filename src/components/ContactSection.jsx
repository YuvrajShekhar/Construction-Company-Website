import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
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
        
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-lg shadow-lg p-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;