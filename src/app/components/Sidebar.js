'use client'

import React, { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar} //Atributo define uma função que será chamada quando o botão for clicado,  a função toggleSidebar é chamada, que geralmente alterna a visibilidade da barra lateral.
        className="p-2 bg-red-800 text-white fixed top-4 left-4 z-10 ">
      
      <svg class="w-6 h-6 " aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
      </button>
      <div
        className={`fixed inset-0 bg-red-800 text-white w-64 p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform md:relative md:translate-x-0 md:w-64 md:flex md:flex-col ${
          isOpen ? 'md:block' : 'md:hidden'
        }`}
      >
        <div className="mb-4">
            <svg class="w-6 h-6 " aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
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
          <p>&copy; 2024 Clube NocauteBoxe</p>
        </div>
      </div>
    </>
  );
}
