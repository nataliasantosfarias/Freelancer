import React from 'react';
import Image from "next/image";
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      {/* /* primeira div depois do header*/}
      <div className="flex flex-col min-h-screen">
        <div className="ml-4">
          <Image
            src="/images/logosemfundo.png"
            alt="Logo fundo transparente"
            width={100}
            height={50} />
        </div>
        <main className="flex-grow container mx-auto p-4">
          {/* Conteúdo principal aqui */}
          <h1 className="text-3xl font-bold text-center">Bem-vindo aoClube Nocaute Boxe</h1>
          <p><center>Treine com os melhores e alcance seus objetivos!</center></p>
        </main
        > 
        <Footer />
      </div>
    </>
  );
};
