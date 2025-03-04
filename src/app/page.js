'use client';
import React from 'react';
import { Card } from '@mui/material';
import CardGaleria from './components/CardGallery';
import MainMenu from './components/MainMenu';
import TestimonialCard from './components/TestimonialCard';

export default function Home() {
  return (
      <>
        <MainMenu backgroundImage='/images/fundoMenuPrincipal.jpg'
          bannerImage={ "/images/victoriaSFundoBanner.png"} /> 
          
          <Card className="text-center w-full p-6 mt-20"> {/* Ajuste da margem superior */}
          <h1 className="text-3xl font-bold text-blue-800">
            Seja Bem-vindo!
          </h1>
            <p className="text- text-gray-500 mt-4">Aqui na <b>Nocaute Clube Boxe</b>, 
            nossa missão é transformar vidas através do poder do boxe.
            Seja você um iniciante que busca melhorar a forma física ou um atleta que deseja aprimorar suas habilidades,
            nosso clube oferece um ambiente acolhedor e desafiador para todos os níveis.
            </p>
          <hr className="border-t-6 border-gray-300 w-3/4 mx-auto my-4" /> {/* Linha suave com comprimento aumentado */}
          <p className="mt-2 text-lg font-bold text-red-500">Venha fazer parte da nossa equipe de campeões!</p>
          </Card>
        <CardGaleria/> 
      <TestimonialCard/>
    </>
  );
}