// pages/Products.js
import React from 'react';
import poly from "../assets/poly.jpeg"
import kits from "../assets/kits.jpeg"
import pink from "../assets/pink.jpeg"
import king from "../assets/king.jpeg"
import golden from "../assets/golden.jpeg"
import blue from "../assets/blue.jpeg"

const Products = () => {
  const mushroomVarieties = [
    {
      name: "Pearl Oyster",
      description: "The most common variety with a mild, delicate flavor. Perfect for soups, stir-fries, and pasta dishes.",
      price: "28,000frw/kg",
      image: poly
    },
    {
      name: "Blue Oyster",
      description: "Characterized by its blue-gray caps and robust flavor. Excellent for grilling or roasting.",
      price: "32,000frw/kg",
      image: blue
    },
    {
      name: "Golden Oyster",
      description: "Vibrant yellow mushrooms with a rich, savory flavor. Great in Asian-inspired dishes.",
      price: "36,000frw/kg",
      image: golden
    },
    {
      name: "Pink Oyster",
      description: "Beautiful pink mushrooms with a seafood-like flavor. Best enjoyed fresh as they don't store well.",
      price: "42,000/kg",
      image: pink
    },
    {
      name: "King Oyster",
      description: "Large, thick-stemmed mushrooms with a meaty texture. Ideal for slicing and grilling.",
      price: "45,000frw/kg",
      image: king
    },
    {
      name: "Mushroom Growing Kits",
      description: "Grow your own oysters at home with our easy-to-use mushroom growing kits. Includes everything you need.",
      price: "30,000frw+",
      image: kits
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center text-green-800 mb-4">Our Mushroom Products</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We offer a variety of fresh oyster mushrooms, available at local farmers markets or for direct order.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mushroomVarieties.map((mushroom, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={mushroom.image} 
                alt={mushroom.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{mushroom.name}</h3>
                <p className="text-gray-600 mb-4">{mushroom.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-bold">{mushroom.price}</span>
                  <a href={`https://wa.me/250794082154?text=Hello%20I%20want%20to%20buy%20${mushroom.name}%20${mushroom.description}%20Mushrooms`}>

                  <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded transition-colors">
                    Place Order
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-green-800 mb-6 text-center">How to Purchase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Farmers Markets</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">📍</span>
                  <span>Downtown Farmers Market - Saturdays 8am-1pm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">📍</span>
                  <span>Riverwalk Artisan Market - Sundays 10am-2pm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">📍</span>
                  <span>Organic Grocers Co-op - Available daily</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Direct Orders</h3>
              <p className="mb-4">For bulk orders or restaurant inquiries, please contact us directly:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">📧</span>
                  <span>Email: orders@jamiefarm.com</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2">📞</span>
                  <span>Phone: 250794082154</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;