import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Academia de Boxe. Todos os direitos reservados.</p>
        <div className="space-x-4 mt-2">
          
          <a href="https://www.instagram.com/nocaute_clube_se/?locale=gb&hl=am-et" target="_blank" rel="noopener noreferrer" className="hover:text-red-800">
            Instagram
          </a>
          <p href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-700">
            Desenvolvido por Natália Farias Santos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
