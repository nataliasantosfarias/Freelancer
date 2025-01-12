import React from 'react';
import Image from 'next/image';

export default function MenuPrincipal() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/fundoMenuPrincipal.jpg"
        alt="fundo"
        layout="fill"
        objectFit="cover" // Ajuste para cobrir toda a área
        className="w-full h-full"
      />
      <div className="absolute bottom-0 z-20 w-full flex justify-center"> {/* Ajuste para posicionar a imagem no final */}
        <Image
          src="/images/VictoriaSFundoBanner.png"
          alt="imagem sem fundo do banner"
          layout="intrinsic"
          width={600} // Aumentando a largura para melhorar a qualidade
          height={400} // Aumentando a altura para melhorar a qualidade
          className="object-contain"
          unoptimized={true}
        />
      </div>
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white p-6">
        <div className="absolute top-0 left-0 m-4">
          <Image
            src="/images/LogoRecortada.png"
            alt="Logo"
            width={100} // Largura ajustada para mobile
            height={50} // Altura ajustada para mobile
            className="object-contain md:w-80 md:h-64 mt-3" // Ajuste responsivo
          />
        </div>
        <text className="text-center md:hidden w-full p-6 mt-[-160px]"> {/* Ajuste da margem superior */}
          <h1 className="text-2xl font-bold text-white">Nocaute Clube Boxe</h1>
          <hr className="border-t-6 border-gray-300 w-3/4 mx-auto my-4" /> {/* Linha suave com comprimento aumentado */}
          <p className="mt-2 text-lg text-red-500">Transforme sua vida com o poder do Boxe.</p>
        </text>
      </div>
    </div>
  );
}