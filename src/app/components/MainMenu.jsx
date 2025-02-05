'use client';
import React from 'react';
import Image from 'next/image';
import ButtonEnroll from './Layout/ButtonEnroll';
import styles from './styles.module.css'

// A prop `bannerImage` é passada como argumento para o componente MainMenu.
// Isso permite que o componente receba dados dinâmicos de seu componente pai.
// backgroundColor = 'bg-gray-800' define um valor padrão para a propriedade backgroundColor, 
// se não for passado nada o valor padrão será 'bg-gray-800'
export default function MainMenu({ bannerImage, backgroundImage, backgroundColor = 'bg-gray-800', message }) {  
  return (
    
    <div className={`relative w-full h-screen ${backgroundColor}`}>
      {
        backgroundImage && (
          <Image
          src={backgroundImage}
          alt="fundo"
          layout="fill"
          objectFit="cover" // Ajuste para cobrir toda a área
          className="w-full h-full"
        />
        )
      }
      <div className="absolute bottom-0 z-20 w-full flex justify-center"> {/* Ajuste para posicionar a imagem no final */}
        {
          bannerImage && (
          <Image
            // A prop `bannerImage` é usada aqui para definir a imagem do banner.
            // Se `bannerImage` for fornecida, ela será usada como a fonte da imagem.
            // Caso contrário, a imagem padrão "/images/victoriaSFundoBanner.png" será usada.
            src={bannerImage}
            alt="imagem sem fundo do banner"
            layout="intrinsic"
            width={600} // Aumentando a largura para melhorar a qualidade
            height={400} // Aumentando a altura para melhorar a qualidade
            className={`object-contain ${styles.animateImage}`} // Aplicando a classe de animação
            
            unoptimized={true}
        />
          )
        }
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

        <div className='absolute top-20 right-14 hidden md:block'>
          <ButtonEnroll />
        </div>
      </div>
    </div>
  );
}