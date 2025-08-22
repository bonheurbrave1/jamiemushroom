// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import poly from "../assets/poly.jpeg"
import kits from "../assets/kits.jpeg"
import pink from "../assets/pink.jpeg"
import king from "../assets/king.jpeg"
import golden from "../assets/golden.jpeg"
import blue from "../assets/blue.jpeg"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-green-800 mb-4">
                Fresh Organic Oyster Mushrooms
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Grown with care and sustainable practices right here on our family farm.
              </p>
              <div className="flex space-x-4">
                <Link to="/products" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition-colors">
                  View Our Products
                </Link>
                <Link to="/about" className="border border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Fresh oyster mushrooms" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-green-800 mb-12">Why Choose Our Mushrooms?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-medium mb-2">100% Organic</h3>
              <p className="text-gray-600">No pesticides or chemicals used in our growing process</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Locally Grown</h3>
              <p className="text-gray-600">Freshly harvested and delivered to local markets</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Sustainable</h3>
              <p className="text-gray-600">Environmentally friendly farming practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-green-800 mb-4">Our Mushroom Varieties</h2>
          <p className="text-center text-gray-600 mb-12">Discover our selection of premium oyster mushrooms</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={poly}
                alt="Pearl Oyster Mushrooms" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Pearl Oyster</h3>
                <p className="text-gray-600 mb-4">The classic variety with a delicate flavor and tender texture.</p>
                <Link to="/products" className="text-green-700 font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={blue}
                alt="Blue Oyster Mushrooms" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Blue Oyster</h3>
                <p className="text-gray-600 mb-4">Beautiful blue-gray caps with a robust, savory flavor.</p>
                <Link to="/products" className="text-green-700 font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={golden}
                alt="Golden Oyster Mushrooms" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Golden Oyster</h3>
                <p className="text-gray-600 mb-4">Vibrant yellow mushrooms with a rich, nutty taste.</p>
                <Link to="/products" className="text-green-700 font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/products" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Try Our Mushrooms?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Find our products at local farmers markets or contact us directly for bulk orders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/products" className="bg-white text-green-800 hover:bg-green-100 px-6 py-3 rounded-lg transition-colors">
              Where to Buy
            </Link>
            <Link to="/contact" className="border border-white hover:bg-green-700 px-6 py-3 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;