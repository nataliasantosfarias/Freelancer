'use client';
import React from 'react';
import Image from 'next/image';
import MenuPrincipal from './components/MenuPrincipal';
import { BasicButton, Card } from '@mui/material';
import Buttonknow from './components/Buttonknow';

export default function Home() {
  return (
    <>
      <MenuPrincipal /> {/* Adicionando o componente MenuPrincipal */}
      <Card className="text-center w-full p-6 mt-20"> {/* Ajuste da margem superior */}
        <h1 className="text-3xl font-bold text-black">
          Bem-vindo a Nocaute Clube Boxe
        </h1>
          <p className="text-lg text-gray-500 mt-4">Aqui na <b>Nocaute Clube Boxe</b>, nossa missão é transformar vidas através do poder do boxe.
           Seja você um iniciante que busca melhorar a forma física ou um atleta que deseja aprimorar suas habilidades,
           nosso clube oferece um ambiente acolhedor e desafiador para todos os níveis.
          </p>
        <hr className="border-t-6 border-gray-300 w-3/4 mx-auto my-4" /> {/* Linha suave com comprimento aumentado */}
        <p className="mt-2 text-lg font-bold text-red-500">Venha fazer parte da nossa comunidade de campeões!</p>
      </Card>
      <Buttonknow/>

      {/* Adicionando a seção de cartões de imagens */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cartão de imagem 1 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 1"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
          {/* Cartão de imagem 2 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 2"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
          {/* Cartão de imagem 3 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 3"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
          {/* Cartão de imagem 4 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 4"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
          {/* Cartão de imagem 5 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 5"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
          {/* Cartão de imagem 6 */}
          <div className="relative w-full h-48">
            <Image
              src="/images/atletas2-ring.jpeg"
              alt="Imagem 6"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* <div className="relative w-full h-screen">
        <Image
          src="/images/bannerSFundo.png"
          alt="vitoria"
          layout="fill"
          objectFit="contain"
          className="w-full h-full"
          unoptimized={true}
        />
      </div> */}
    </>
  );
}