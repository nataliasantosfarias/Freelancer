import React from "react";
import Image from 'next/image';
import { Card, CardContent, Typography } from '@mui/material';

export default function CardGaleria() {
  return (
    <>
      <div className="px-6"> {/* Adicionando padding */}
        <h1 className="text-center text-3xl font-bold mb-8 text-blue-700 mt-10">Faça parte do time dos campeões</h1>
        <p className="text-center text-lg text-gray-500 mt-4">
          Veja nossos atletas em ação,
          os treinamentos intensos e as conquistas que celebramos juntos.
          Inspire-se e venha fazer parte desta jornada!
        </p>
      </div>
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
            <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
              <CardContent>
                <Typography variant="body2" component="p">
                  Atletas em Ação
                </Typography>
              </CardContent>
            </Card>
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
            <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
              <CardContent>
                <Typography variant="body2" component="p">
                  Treinamento Intenso
                </Typography>
              </CardContent>
            </Card>
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
            <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
              <CardContent>
                <Typography variant="body2" component="p">
                  Conquistas e Vitórias
                </Typography>
              </CardContent>
            </Card>
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
            <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
              <CardContent>
                <Typography variant="body2" component="p">
                  Dedicação e Esforço
                </Typography>
              </CardContent>
            </Card>
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
            <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
              <CardContent>
                <Typography variant="body2" component="p">
                  Treinamento em Grupo
                </Typography>
              </CardContent>
            </Card>
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
            <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
              <CardContent>
                <Typography variant="body2" component="p">
                  Superação Pessoal
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}