// components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🍄</span>
            </div>
            <span className="text-xl font-serif font-bold text-green-800">Jamie's Farm</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${location.pathname === '/' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-600 hover:text-green-700'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium ${location.pathname === '/about' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-600 hover:text-green-700'}`}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`font-medium ${location.pathname === '/products' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-600 hover:text-green-700'}`}
            >
              Products
            </Link>
            <Link 
              to="/recipes" 
              className={`font-medium ${location.pathname === '/recipes' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-600 hover:text-green-700'}`}
            >
              Recipes
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium ${location.pathname === '/contact' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-600 hover:text-green-700'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              to="/" 
              className={`block font-medium ${location.pathname === '/' ? 'text-green-700' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block font-medium ${location.pathname === '/about' ? 'text-green-700' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`block font-medium ${location.pathname === '/products' ? 'text-green-700' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/recipes" 
              className={`block font-medium ${location.pathname === '/recipes' ? 'text-green-700' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link 
              to="/contact" 
              className={`block font-medium ${location.pathname === '/contact' ? 'text-green-700' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;