import React, { useState } from 'react';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 fixed top-0 left-0 w-full z-50 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-white">Nexcent</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-green.600 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-green-600 transition-colors">Features</a>
          <a href="#" className="text-white hover:text-green-600 transition-colors">Community</a>
          <a href="#" className="text-white hover:text-green-600 transition-colors">Blog</a>
          <a href="#" className="text-white hover:text-green-600 transition-colors">Pricing</a>
        </div>

        {/* Desktop Register Button */}
        <button className="hidden md:block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">Register Now</button>

        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6">
          <a href="#" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Features</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Community</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Blog</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Pricing</a>
          <button className="w-full bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-600 transition-colors">Register Now</button>
        </div>
      )}
    </nav>
  );
};




export default Navbar;
