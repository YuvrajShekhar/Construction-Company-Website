import { X } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="w-64 h-full bg-white shadow-lg flex flex-col">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-bold text-yellow-600">Company_Name</h2>
            <button 
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <a href="#hero" className="py-2 px-4 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md" onClick={toggleSidebar}>Home</a>
            <a href="#services" className="py-2 px-4 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md" onClick={toggleSidebar}>Services</a>
            <a href="#about" className="py-2 px-4 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md" onClick={toggleSidebar}>About Us</a>
            <a href="#contact" className="py-2 px-4 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md" onClick={toggleSidebar}>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;