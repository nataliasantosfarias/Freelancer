'use client';
import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function about() {
  return (
    <>
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
              src="/images/AboutImages/AtletaSFundo2.png"
              alt="imagem sem fundo do banner"
              layout="intrinsic"
              width={1000} // Aumentando a largura para melhorar a qualidade
              height={800} // Aumentando a altura para melhorar a qualidade
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
            <div className="text-center w-full p-6 mt-[-160px]"> {/* Ajuste da margem superior */}
              <h1 className="text-3xl font-bold text-white">Sobre</h1>
              
              <p className="mt-2 text-lg text-red-500 font-bold">Conheça a Nocaute e faça parte do nosso time de campeões </p>
               <hr className="border-t-6 border-gray-300 w-3/4 mx-auto my-4" /> 
              <p className="mt-2 text-lg text-white font-bold">Torne-se parceiro </p>
              
            </div>
          </div>
        </div>
      
        <div className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Sobre o Projeto Social de Boxe</h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/GaleriaPrincipal/ProjetoSocialAcademia.jpeg"
                alt="Projeto Social de Boxe" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Projeto Social de Boxe
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Nosso projeto social de boxe visa proporcionar oportunidades para jovens de comunidades carentes. Através do esporte, buscamos promover disciplina, saúde e inclusão social, ajudando a transformar vidas e construir um futuro melhor.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/GaleriaPrincipal/Entrevista.jpeg"
                alt="Projeto Social de Boxe" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Projeto Social de Boxe
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Nosso projeto social de boxe visa proporcionar oportunidades para jovens de comunidades carentes. Através do esporte, buscamos promover disciplina, saúde e inclusão social, ajudando a transformar vidas e construir um futuro melhor.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/AboutImages/WhatsApp Image 2025-01-13 at 15.26.28.jpeg"
                alt="Projeto Social de Boxe" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Projeto Social de Boxe
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Nosso projeto social de boxe visa proporcionar oportunidades para jovens de comunidades carentes. Através do esporte, buscamos promover disciplina, saúde e inclusão social, ajudando a transformar vidas e construir um futuro melhor.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>
          </Card>

          {/* -------------------------------------------Video Cards--------------------------------------------------- */}
           
           <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
               
                <iframe
                  src="https://www.youtube.com/embed/hvJ_43ZHXv8"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Vídeo exemplo 1"
                  className="absolute top-0 left-0 w-full h-full"
                >
                
                </iframe>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Vídeo exemplo 1
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Assista ao vídeo para saber mais sobre o nosso projeto social de boxe e como ele está impactando a vida dos jovens.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>
          </Card>
          {/* Video Cards */}
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
               
                <iframe
                  src="https://www.youtube.com/embed/hvJ_43ZHXv8"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Vídeo do Projeto Social de Boxe"
                  className="absolute top-0 left-0 w-full h-full"
                >
                
                </iframe>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Segunda Copa Nocaute de Boxe
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Assista ao vídeo para saber mais sobre o nosso projeto social de boxe e como ele está impactando a vida dos jovens.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                
                <iframe
                  src="https://www.youtube.com/embed/hvJ_43ZHXv8"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Segundo Vídeo do Projeto Social de Boxe"
                  className="absolute top-0 left-0 w-full h-full"
                >

                </iframe>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Vídeo exemplo 2
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Assista ao vídeo para saber mais sobre o nosso projeto social de boxe e como ele está impactando a vida dos jovens.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <script>
        {`
          document.getElementById('menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
          });
        `}
      </script>
   
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">CONHEÇA O NOSSO PROJETO</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-red-500 text-center text-2xl font-bold mb-2">Início do Projeto</h2>
          <p className="text-lg text-gray-700">
            O projeto social de boxe foi iniciado em 2010 com o objetivo de proporcionar oportunidades para jovens de comunidades carentes. Através do esporte, buscamos promover disciplina, saúde e inclusão social, ajudando a transformar vidas e construir um futuro melhor.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-red-500 text-center text-2xl font-bold mb-2">Crescimento e Expansão</h1>
          <p className="text-lg text-gray-700">
            Ao longo dos anos, o projeto cresceu e se expandiu, alcançando mais jovens e comunidades. Com o apoio de parceiros e voluntários, conseguimos oferecer aulas de boxe gratuitas, eventos esportivos e programas de mentoria.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-red-500 text-center text-2xl font-bold mb-2">Impacto na Comunidade</h2>
          <p className="text-lg text-gray-700">
            O impacto do projeto na comunidade tem sido significativo. Muitos jovens que participaram do projeto conseguiram melhorar seu desempenho escolar, desenvolver habilidades sociais e encontrar um caminho positivo para o futuro. O projeto também ajudou a reduzir a violência e promover a paz nas comunidades atendidas.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-red-500 text-center text-2xl font-bold mb-2">Futuro do Projeto</h2>
          <p className="text-lgtext-gray-700">
            Estamos comprometidos em continuar expandindo e melhorando o projeto social de boxe. Nosso objetivo é alcançar ainda mais jovens e comunidades, oferecendo novas oportunidades e recursos para ajudar a transformar vidas. Com o apoio contínuo de nossos parceiros e voluntários, acreditamos que podemos fazer uma diferença ainda maior no futuro.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};