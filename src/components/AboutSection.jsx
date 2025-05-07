import construction_company from "../assets/images/construction_company.jpg"

const AboutSection = () => {
    return (
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src={construction_company}
                alt="About Company_Name Construction" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Company</h2>
              <div className="w-20 h-1 bg-yellow-600 mb-6"></div>
              
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <p className="text-gray-700 mb-6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold">15+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Years Experience</h4>
                    <p className="text-sm text-gray-600">In Construction Industry</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold">500+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Projects Done</h4>
                    <p className="text-sm text-gray-600">Successfully Completed</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold">100%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Client Satisfaction</h4>
                    <p className="text-sm text-gray-600">Our Primary Goal</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold">50+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Team Members</h4>
                    <p className="text-sm text-gray-600">Professional Experts</p>
                  </div>
                </div>
              </div>
              
              <a href="#contact" className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;