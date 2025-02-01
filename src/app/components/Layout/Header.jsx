'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { menuLinks } from "@/app/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <>
     
    <header style={{ zIndex: 9999 }} className={`p-6 absolute top-0 left-0 w-full text-white`}> 
      <div className="container mx-auto flex justify-between items-center">
     
        <div className="hidden md:flex space-x-6 text-white font-bold justify-center flex-grow">
          {menuLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-red-700"><span className="font-bold">{link.name}</span></Link>
          ))}
        </div> {/* mapeando os links */}
        
        <div className="md:hidden text-white ml-auto cursor:pointer" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-90 z-20 flex flex-col items-center justify-center space-y-6 text-white font-bold">
          {menuLinks.map(link => (
            <Link style={{ zIndex: 9999999 }} href={link.href} key={link.href} className="hover:text-red-700" onClick={toggleSidebar}><span className="font-bold">{link.name}</span></Link>
          ))}{/* mapeando os links em telas menorestornando-se side bar*/}
          <button onClick={toggleSidebar} className="text-white mt-4">
            <FaTimes size={24} />
          </button>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;

