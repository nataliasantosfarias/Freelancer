'use client';
import React from 'react';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { FaLaptop } from 'react-icons/fa'; // ícones
import LocationButton from './LocationButton';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4"> {/* Alinhando os itens ao topo */}
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <Image
                src="/images/MainMenu/LogoRecortada.png" // Substitua pelo caminho da sua imagem de logo
                alt="Imagem de Logo"
                width={100}
                height={50}
                className="object-contain"
              />
              <h2 className="text-xl font-bold mb-2 mt-4 ">Endereço</h2> {/* Adicionando margem superior */}
              <p className="mb-2">
                Av. Coletora A, N°875 - C - CONJUNTO ALBANO FRANCO,<br />
                Nossa Sra. do Socorro - SE<br />
                49160-000
              </p>
              <LocationButton /> {/* Adicionando o botão de localização */}
            </div>
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 w-full md:w-auto mt-4"> {/* Ajuste para garantir que a mensagem apareça em todas as telas */}
              <h2 className="text-xl font-bold mb-2 text-center">Entre em contato </h2>
              <div className="flex justify-center md:justify-start space-x-4 mb-4 md:mb-0"> {/* Adicionando flex container e espaço entre os botões */}
                <a
                  href="https://wa.me/+5579998011683"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold p-3 rounded-md inline-flex items-center justify-center"
                >
                  <WhatsAppIcon style={{ fontSize: 24 }} />
                </a>
                <a
                  href="mailto:nocauteclubeboxe@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-red-500 text-white font-bold p-3 rounded-md inline-flex items-center justify-center"
                >
                  <EmailRoundedIcon style={{ fontSize: 24 }} />
                </a>
                <a
                  href="https://www.instagram.com/nocaute_clube_se/?locale=gb&hl=am-et"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-700 hover:bg-pink-500 text-white font-bold p-3 rounded-md inline-flex items-center justify-center"
                >
                  <InstagramIcon style={{ fontSize: 24 }} />
                </a>
                
              </div>
              <hr className="border-t border-gray-400 w-full my-4" />
              <h1 className="mt-8 text-center md:text-left text-xl font-bold">
                Horários
              </h1>
              <p className="mt-2 text-center md:text-left">
                SEGUNDA - SEXTA 19h às 20h.
              </p>
              
              </div>
            </div>
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