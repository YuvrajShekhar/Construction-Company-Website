import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bz2ep9o', 'template_952xqnw', form.current, {
        publicKey: 'BHrJzyb1ZbdjBK4ul',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);
          // Reset form
          form.current.reset();
          // Hide notification after 3 seconds
          setTimeout(() => setMessageSent(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
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
                    <p className="text-gray-600">neovista.construction@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Geschäftsadresse</h4>
                    <p className="text-gray-600">Werdertraße 30</p>
                    <p className="text-gray-600">12103 Berlin</p>
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

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Haben wir Ihr Interesse geweckt?</h3>
              <p className="text-gray-600 mb-6">Schreiben Sie uns und wir kontaktieren Sie schnellstmöglich zurück.</p>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Beschreiben Sie hier Ihr Projekt oder Ihre Anfrage..."
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-vertical"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
                >
                  Nachricht senden
                </button>
                
                {messageSent && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md flex items-center">
                    <span className="mr-2">✅</span>
                    Ihre Nachricht wurde erfolgreich gesendet!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;