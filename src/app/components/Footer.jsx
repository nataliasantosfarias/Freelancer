import React from 'react';
import { FaInstagram, FaLaptop } from 'react-icons/fa'; //íncons

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Nocaute clube boxe. Todos os direitos reservados.</p>
       
        <div className="space-x-4 mt-2">
          <p>
            <a href="https://www.instagram.com/nocaute_clube_se/?locale=gb&hl=am-et" target="_blank" rel="noopener noreferrer" className="hover:text-red-800 flex items-center justify-center">
              <FaInstagram className="mr-2" /> Instagram
            </a>
          </p>
          <p>
            <a href="https://github.com/nataliasantosfarias" target="_blank" rel="noopener noreferrer" className="hover:text-red-800 flex items-center justify-center">
              <FaLaptop className="mr-2" /> Desenvolvido por Natália Farias Santos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
