// pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center text-green-800 mb-4">About Jamie's Farm</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Learn about our journey, our values, and our commitment to sustainable mushroom farming.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Jamie in the mushroom farm" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-serif font-bold text-green-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, Jamie's Farm began as a small hobby operation and has grown into a thriving organic mushroom farm specializing in oyster mushroom varieties.
            </p>
            <p className="text-gray-700 mb-4">
              What started with just a few grow kits in our basement has expanded to a full-scale operation supplying restaurants, farmers markets, and local grocery stores with the freshest mushrooms available.
            </p>
            <p className="text-gray-700">
              Our mission is to provide fresh, sustainable, and delicious mushrooms to our local community while practicing environmentally responsible farming.
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-serif font-bold text-green-800 mb-6 text-center">Our Farming Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-700 text-xl">🌿</span>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">100% Organic</h3>
                <p className="text-gray-700">We use no pesticides, herbicides, or chemicals in our growing process.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-700 text-xl">♻️</span>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Sustainable Substrate</h3>
                <p className="text-gray-700">We use recycled agricultural waste as growing substrate.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-700 text-xl">💧</span>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Water Conservation</h3>
                <p className="text-gray-700">We implement water conservation practices throughout our operation.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-700 text-xl">🚜</span>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Local Distribution</h3>
                <p className="text-gray-700">We minimize food miles by selling primarily to local markets.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-green-800 mb-6">Visit Our Farm</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We welcome visitors to our farm by appointment. Come see how we grow our mushrooms and learn more about the process.
          </p>
          <a href="/contact" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition-colors">
            Schedule a Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;