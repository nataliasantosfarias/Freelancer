import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FaInstagram, FaLaptop } from 'react-icons/fa'; // ícones

const Footer = () => {
  return (
    <>
    
        
      <footer className="bg-gray-800 text-white mt-8">

     {/* <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <h2 className="text-xl font-bold mb-2">Endereço</h2>
          <p className="mb-2">
            Av. Coletora A, N°875 - C - CONJUNTO ALBANO FRANCO,<br />
            Nossa Sra. do Socorro - SE<br />
            49160-000
          </p>
          <h2 className="text-xl font-bold mb-2">Entre em contato</h2>
          <p className="mb-2">Telefone: (11) 1234-5678</p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <WhatsAppIcon className="mr-2" />
          </a>
          <a
            href="https://www.instagram.com/nocaute_clube_se/?locale=gb&hl=am-et"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <InstagramIcon className="mr-2" />
          </a>
        </div>   New cards  */}
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <h2 className="text-xl font-bold mb-2">Endereço</h2>
          <p className="mb-2">
            Av. Coletora A, N°875 - C - CONJUNTO ALBANO FRANCO,<br />
            Nossa Sra. do Socorro - SE<br />
            49160-000
          </p>
          <h2 className="text-xl font-bold mb-2">Entre em contato</h2>
          <p className="mb-2">Telefone: (11) 1234-5678</p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <WhatsAppIcon className="mr-2" />
          </a>
          <a
            href="https://www.instagram.com/nocaute_clube_se/?locale=gb&hl=am-et"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <InstagramIcon className="mr-2" />
          </a>
        </div>
        <div className="bg-blue-800 text-white p-4 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Nocaute clube boxe. Todos os direitos reservados.</p>
            <div className="space-x-4 mt-2">
              <p>
                <a
                  href="https://github.com/nataliasantosfarias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 flex items-center justify-center"
                >
                  <FaLaptop className="mr-3" /> Desenvolvido por Natália Farias Santos
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;