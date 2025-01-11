import React from 'react';
import Image from 'next/image';

export default function MenuPrincipal() {
  return (
    <div className="relative w-full h-screen">
        
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-900 to-black opacity-75 z-10"></div>
      <Image
        src="/images/fundo.jpg"
        alt="fundo"
        layout="fill"
        objectFit="cover" // Ajuste para cobrir toda a área
        className="w-full h-full"
      />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white p-6">
      <div className="absolute top-0 left-0 m-4">
          <Image
            src="/images/logoSemFundo.png"
            alt="Logo"
            width={250} // Largura ajustada
            height={150} // Altura ajustada
            className="object-contain"
          />
      </div>
      </div>
    </div>
  );
}