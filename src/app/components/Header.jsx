import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-500 p-6">
      <div className="container mx-auto flex justify-center items-center">
        <nav className="space-x-4 text-white">
          <a href="#home" className="hover:text-red-700">Home</a>
          <a href="#about" className="hover:text-red-700">Sobre</a>
          <a href="#classes" className="hover:text-red-700">Aulas</a>
          <a href="#contact" className="hover:text-red-700">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
