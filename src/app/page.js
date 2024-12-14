import React from 'react';
import Image from 'next/image';
import Sidebar from './components/Sidebar';
import Header from './components/Header';


export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto p-4 flex flex-col md:flex-row items-center md:items-start ">
        <div className="mt-2 md:mt-0 md:ml-8">
          <Image 
            src="/images/logo-fundobranco.jpeg"
            alt='Logo'
            width={250} // Largura ajustada
            height={150} // Altura ajustada
            className="object-contain"
          />
          </div>
        
        </main>
      </div>
    </div>
  );
}



