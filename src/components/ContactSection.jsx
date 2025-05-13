import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Phone size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone Number</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Mail size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Address</h4>
                  <p className="text-gray-600">info@Company_Name.example</p>
                  <p className="text-gray-600">sales@Company_Name.example</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Office Address</h4>
                  <p className="text-gray-600">123 Construction Way,</p>
                  <p className="text-gray-600">Building City, BC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Clock size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map
          <div className="bg-gray-300 rounded-lg shadow-lg flex items-center justify-center h-full">
            <p className="text-gray-600">Map placeholder - Would integrate Google Maps here</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;