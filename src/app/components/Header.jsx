'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-6 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-6 text-blue-900 font-bold justify-center flex-grow">
          <Link href="/" className="hover:text-red-700"><span className="font-bold">HOME</span></Link>
          <Link href="/sobre" className="hover:text-red-700"><span className="font-bold">SOBRE</span></Link>
          <Link href="/aulas" className="hover:text-red-700"><span className="font-bold">AULAS</span></Link>
          <Link href="/treinadores" className="hover:text-red-700"><span className="font-bold">TREINADORES</span></Link>
          <Link href="/contato" className="hover:text-red-700"><span className="font-bold">CONTATO</span></Link>
        </div>
        <div className="md:hidden text-blue-900 ml-auto" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-90 z-20 flex flex-col items-center justify-center space-y-6 text-white font-bold">
          <Link href="/" className="hover:text-red-700" onClick={toggleSidebar}><span className="font-bold">HOME</span></Link>
          <Link href="/sobre" className="hover:text-red-700" onClick={toggleSidebar}><span className="font-bold">SOBRE</span></Link>
          <Link href="/aulas" className="hover:text-red-700" onClick={toggleSidebar}><span className="font-bold">AULAS</span></Link>
          <Link href="/treinadores" className="hover:text-red-700" onClick={toggleSidebar}><span className="font-bold">TREINADORES</span></Link>
          <Link href="/contato" className="hover:text-red-700" onClick={toggleSidebar}><span className="font-bold">CONTATO</span></Link>
          <button onClick={toggleSidebar} className="text-white mt-4">
            <FaTimes size={24} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;