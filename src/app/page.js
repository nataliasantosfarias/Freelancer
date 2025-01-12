import React from 'react';
import Image from 'next/image';
import MenuPrincipal from './components/MenuPrincipal';

export default function Home() {
  return (
    <>
      <MenuPrincipal/> {/* Adicionando o componente MenuPrincipal */}

      {/* --------------Div principal------------------ */}
      <section className="flex-grow container mx-auto mt-40 p-20 flex flex-col items-center md:items-center">
        <h1 className="text-4xl font-bold text-gray-900">Bem-vindo ao Clube Nocaute Boxe</h1>
        <p className="mt-4 text-lg text-red-500">Transforme sua vida com o poder do Boxe.</p>
        <p className="mt-4 text-lg font-bold text-gray-900">No Clube Nocaute Boxe, somos referência no esporte e na transformação Social!</p>
      </section>

      {/* Adicionando a seção de cartões de imagens */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cartão de imagem 1 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 1"
              layout="fill"
              objectFit="contain" // Ajuste para manter a imagem visível
              className="w-full h-full"
            />
          </div>
          {/* Cartão de imagem 2 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 2"
              layout="fill"
              objectFit="contain" // Ajuste para manter a imagem visível
              className="w-full h-full"
            />
          </div>
          {/* Cartão de imagem 3 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 3"
              layout="fill"
              objectFit="contain" // Ajuste para manter a imagem visível
              className="w-full h-full"
            />
          </div>
          {/* Cartão de imagem 4 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 4"
              layout="fill"
              objectFit="contain" // Ajuste para manter a imagem visível
              className="w-full h-full"
            />
          </div>
          {/* Cartão de imagem 5 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 5"
              layout="fill"
              objectFit="contain" // Ajuste para manter a imagem visível
              className="w-full h-full"
            />
          </div>
          {/* Cartão de imagem 6 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 6"
              layout="fill"
              objectFit="contain" // Ajuste para manter a imagem visível
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <div className="relative w-full h-screen">
        <Image
          src="/images/bannerSFundo.png"
          alt="vitoria"
          layout="fill"
          objectFit="contain" // Ajuste para manter a imagem visível
          className="w-full h-full"
        />
      </div>
    </>
  );
}
