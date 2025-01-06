'use client'

import React, { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="p-2 text-white fixed top-4 left-4 z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 bg-red-800 text-white w-64 p-4 transform transition-transform duration-300 ease-in-out flex flex-col">
          <div className="mb-4">
            <button onClick={toggleSidebar} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="flex-grow">
            <ul className="space-y-2">
              <li><a href="#home" className="block px-4 py-2 hover:bg-blue-800">Home</a></li>
              <li><a href="#about" className="block px-4 py-2 hover:bg-blue-800">Sobre</a></li>
              <li><a href="#classes" className="block px-4 py-2 hover:bg-blue-800">Aulas</a></li>
              <li><a href="#contact" className="block px-4 py-2 hover:bg-blue-800">Contato</a></li>
            </ul>
          </nav>
          <div className="mt-auto">
            <p>&copy; 2025 Clube Nocaute Boxe</p>
            <p className="text-center mt-4"></p>
          </div>
        </div>
      )}
    </>
  );
}