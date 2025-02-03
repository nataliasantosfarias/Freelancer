'use client';
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css'

// A prop `bannerImage` é passada como argumento para o componente MainMenu.
// Isso permite que o componente receba dados dinâmicos de seu componente pai.
export default function MainMenu({ bannerImage, message }) {  
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
          // A prop `bannerImage` é usada aqui para definir a imagem do banner.
          // Se `bannerImage` for fornecida, ela será usada como a fonte da imagem.
          // Caso contrário, a imagem padrão "/images/victoriaSFundoBanner.png" será usada.
          src={bannerImage || "/images/victoriaSFundoBanner.png"}
          alt="imagem sem fundo do banner"
          layout="intrinsic"
          width={600} // Aumentando a largura para melhorar a qualidade
          height={400} // Aumentando a altura para melhorar a qualidade
          className={`object-contain ${styles.animateImage}`} // Aplicando a classe de animação
          
          unoptimized={true}
        />
      </div>
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white p-6">
        <div className="absolute top-0 left-0 m-4">
          <Image
            src="/images/MainMenu/LogoRecortada.png" // Substitua pelo caminho da sua imagem de logo
            alt="imagem da Logo"
            width={100} // Largura ajustada para mobile
            height={50} // Altura ajustada para mobile
            className="object-contain md:w-80 md:h-64 mt-3" // Ajuste responsivo
          />
        </div>
        <div className="text-center md:hidden w-full p-6 mt-[-160px]"> {/* Ajuste da margem superior */}
          <h1 className="text-2xl font-bold text-white">Nocaute Clube Boxe</h1>
          <hr className="border-t-6 border-gray-300 w-3/4 mx-auto my-4" /> {/* Linha suave com comprimento aumentado */}
          <h2 className="mt-2 text-xl font-bold text-red-500">{message}</h2> 
        </div> 
      </div>
    </div>
  );
}