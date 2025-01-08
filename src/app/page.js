import React from 'react';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-grow flex flex-col">
        

        {/* Adicionando a imagem principal após o Header */}
        <div className="relative w-full h-screen">
          <Image
            src="/images/img-atleta-ring.jpeg"
            alt='Boxe'
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          {/* Incluindo a imagem do logo sobreposta */}
          <div className="absolute top-0 left-0">
            <Image
              src="/images/logoSemFundo.png"
              alt="Logo"
              width={250} // Largura ajustada
              height={150} // Altura ajustada
              className="object-contain"
            />
          </div>
        </div>

        {/* --------------Div principal------------------ */}
        <main className="flex-grow container mx-auto mt-40 p-20 flex flex-col items-center md:items-center">
          <h1 className="text-4xl font-bold text-gray-900">Bem-vindo ao Clube Nocaute Boxe</h1>
          <p className="mt-4 text-lg text-red-500">Transforme sua vida com o poder do Boxe.</p>
          <p className="mt-4 text-lg font-bold text-gray-900">No Clube Nocaute Boxe, somos referência no esporte e na transformação Social!</p>
        </main>

        {/* Adicionando a seção de cartões de imagens */}
        <section className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cartão de imagem 1 */}
            <div className="relative w-full h-48">
              <Image
                src="/images/atletas2-ring.jpeg"
                alt="Imagem 1"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            {/* Cartão de imagem 2 */}
            <div className="relative w-full h-48">
              <Image
                src="/images/atletas2-ring.jpeg"
                alt="Imagem 2"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            {/* Cartão de imagem 3 */}
            <div className="relative w-full h-48">
              <Image
                src="/images/atletas2-ring.jpeg"
                alt="Imagem 3"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            {/* Cartão de imagem 4 */}
            <div className="relative w-full h-48">
              <Image
                src="/images/atletas2-ring.jpeg"
                alt="Imagem 4"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            {/* Cartão de imagem 5 */}
            <div className="relative w-full h-48">
              <Image
                src="/images/atletas2-ring.jpeg"
                alt="Imagem 5"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            {/* Cartão de imagem 6 */}
            <div className="relative w-full h-48">
              <Image
                src="/images/atletas2-ring.jpeg"
                alt="Imagem 6"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        <div className="relative w-full h-screen">
          <Image
            src="/images/victoria.jpeg"
            alt="vitoria"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
