// pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center text-green-800 mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Have questions about our products or want to place an order? Get in touch with us!
        </p>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-serif font-bold text-green-800 mb-6">Get In Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <span className="text-green-700">📧</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-700">info@jamiefarm.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <span className="text-green-700">📞</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-700">+250794082154</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <span className="text-green-700">📍</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-gray-700">123 Forest Lane, Woodland, CA 95695</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Farmers Market Schedule</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">🗓️</span>
                  <span>Downtown Farmers Market: Saturdays, 8am-1pm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">🗓️</span>
                  <span>Nyabugogo Modern Market:Monday - Sundays, 10am-2pm</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-bold text-green-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;