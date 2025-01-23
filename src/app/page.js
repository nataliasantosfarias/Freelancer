'use client';
import React from 'react';
import MainMenu from './components/MainMenu';
import { Card } from '@mui/material';
import Buttonknow from './components/Layout/Buttonknow';
import CardGaleria from './components/CardGallery';

import TestimonialCard from './components/TestimonialCard';

export default function Home() {
  return (
      <>
        <MainMenu /> {/* Adicionando o componente MenuPrincipal */}
       
          <Card className="text-center w-full p-6 mt-20"> {/* Ajuste da margem superior */}
          <h1 className="text-3xl font-bold text-black">
            Bem-vindo a Nocaute Clube Boxe
          </h1>
            <p className="text- text-gray-500 mt-4">Aqui na <b>Nocaute Clube Boxe</b>, nossa missão é transformar vidas através do poder do boxe.
            Seja você um iniciante que busca melhorar a forma física ou um atleta que deseja aprimorar suas habilidades,
            nosso clube oferece um ambiente acolhedor e desafiador para todos os níveis.
            </p>
          <hr className="border-t-6 border-gray-300 w-3/4 mx-auto my-4" /> {/* Linha suave com comprimento aumentado */}
          <p className="mt-2 text-lg font-bold text-red-500">Venha fazer parte da nossa equipe de campeões!</p>
          </Card>
         <Buttonknow/>
        <CardGaleria/> 
      <TestimonialCard/>
    </>
  );
}