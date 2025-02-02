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
import MainMenu from '../components/MainMenu';

export default function about() {
      return (
        <>
        {/* A prop `bannerImage` é passada para o componente MainMenu.
          Isso permite que o componente MainMenu utilize a imagem fornecida
          como o banner, em vez de usar a imagem padrão. */}
        <MainMenu bannerImage='/images/MainMenu/atletas-sem-fundo.png'/>

           {/* CARD IMAGENS APRESENTAÇÃO DO PROJETO SOCIAL*/}
        <Card className="text-center w-full p-6 mt-20"> {/* Ajuste da margem superior */}
          <h1 className="text-3xl font-bold text-blue-800">
              CONHEÇA O NOSSO PROJETO
          </h1>
            <h2 className="text- text-gray-500 mt-4">
              <b>Iniciado em 2019</b>,
               nosso projeto social tem como principal objetivo formar atletas para competição de boxe de maneira totalmente gratuita.
               <p> Acreditamos no poder do esporte como ferramenta de inclusão social,
               desenvolvimento pessoal e transformação de vidas.</p>
              
            </h2>
          <hr className="border-t-6 border-gray-300 w-3/4 mx-auto my-4" /> {/* Linha suave com comprimento aumentado */}
            <p className="mt-2 text-lg font-bold text-red-500">Nossa missão é oferecer treinamento de boxe de alta qualidade para jovens e adultos,
             proporcionando a oportunidade de se tornarem atletas competitivos e, ao mesmo tempo, desenvolver habilidades importantes para a vida,
              como disciplina, respeito, autocontrole e resiliência.
            </p>
        </Card>
         
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/GaleriaPrincipal/ProjetoSocialAcademia.jpeg"
                alt="imagem do Projeto Social de Boxe" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className=" text-bold text-center text-red-500">
                  Aulas totalmente Gratuitas
                </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   <b>Lutamos</b> para que no futuro, todos tenham acesso ao esporte, 
                    independentemente de sua condição socioeconômica, 
                    e onde o boxe seja uma <b>ferramenta poderosa de mudança socia</b>l e formação de campeões dentro e fora dos ringues.
                   </Typography>
                </CardContent>
              </CardActionArea>
             <CardActions>
             {/*  <Button size="small" color="primary">
                Saiba Mais
              </Button>*/}
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
                <Typography gutterBottom variant="h5" component="div" className=" text-bold text-center text-red-500">
                Inclusão e Representatividade
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Na Nocaute nós reconhecemos a <b>importânçia das atletas femininas</b> no boxe, elas servem como modelo para outras mulheres e meninas.
                  mostrando que é possível alcançar altos níveis de desempenho em qualquer esporte
                  Incentivando mais mulheres a se envolverem em atividades físicas e a perseguirem suas paixões,
                  independentemente das barreiras sociais.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/*  <Button size="small" color="primary">
                Saiba Mais
              </Button>*/}
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/AboutImages/about_samuel.jpg"
                alt="imagem atleta Samuel Campeonato" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className=" text-bold text-center text-red-500">
                Apoio Psicossocial
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Além do treinamento físico, oferecemos <b>suporte psicossocial</b>, ajudando os atletas a lidarem com desafios pessoais e profissionais.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
             {/*  <Button size="small" color="primary">
                Saiba Mais
              </Button>*/}
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/AboutImages/victoria_evento_atleta.jpg"
                alt="imagem de atleta e Victoria preparação para lua em evento" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="text-bold text-center text-red-500">
                Incentivo a Competições
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <b>Incentivamos e apoiamos</b> nossos atletas a participarem de competições locais,
                  regionais e nacionais, 
                  proporcionando a experiência e a exposição necessárias para se destacarem no esporte.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
             {/*  <Button size="small" color="primary">
                Saiba Mais
              </Button>*/}
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/AboutImages/img-atleta-ring.jpeg"
                alt="imagem atleta Samuel Campeonato" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className=" text-bold text-center text-red-500">
                Empoderamento e Superação
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Nós não só ensinamos técnicas de combate, ensinamos também valores fundamentais que promovem a autodisciplina,
                  a autoconfiança e o respeito mútuo.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
             {/*  <Button size="small" color="primary">
                Saiba Mais
              </Button>*/}
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/AboutImages/Naylaine.jpeg"
                alt="Projeto Social de Boxe" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className=" text-bold text-center text-red-500">
                Conquistas e Reconhecimento              
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Desde o início do projeto, já impactamos a vida de centenas de jovens,
                  proporcionando-lhes uma nova perspectiva de vida e oportunidades que antes eram inacessíveis.
                  Muitos de nossos atletas já conquistaram títulos e estão trilhando um caminho de sucesso no boxe competitivo.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
             {/*  <Button size="small" color="primary">
                Saiba Mais
              </Button>*/}
            </CardActions>
          </Card>
         
          {/* -------------------------------------------Video Cards--------------------------------------------------- */}
           
           <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
               
                <iframe
                  src="https://www.youtube.com/embed/rh6Cq0tSl-c"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Vídeo exemplo 1"
                  className="absolute top-0 left-0 w-full h-full"
                >
                
                </iframe>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='text-bold text-center text-red-500'>
                1ª COPA NOCAUTE BOXE 
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 Primeira Copa organizada pela Nocaute boxe.
                </Typography>
              </CardContent>
            </CardActionArea>
            {/*<CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>*/}
          </Card>
          
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
               
                <iframe
                  src="https://www.youtube.com/embed/nhAzOgK_8D0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Vídeo do Projeto Social de Boxe"
                  className="absolute top-0 left-0 w-full h-full"
                >
                
                </iframe>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="text-bold text-center text-red-500">
                  2ª COPA NOCAUTE BOXE 
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Fique por dentro da segunda Copa Nocaute boxe, e veja como foi o evento.
                </Typography>
              </CardContent>
            </CardActionArea>
             {/*<CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>*/}
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
                <Typography gutterBottom variant="h5" component="div" className="text-red-500">
                COBERTURA DO 2º EVENTO
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Acompanhe a 2º cobertura do  evento.
                </Typography>
              </CardContent>
            </CardActionArea>
             {/*<CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>*/}
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
   
    <div className="container mx-auto px-4 py-8 mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">AINDA SOBRE O NOSSO PROJETO</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-red-500 text-center text-2xl font-bold mb-2">Início do Projeto</h2>
          <p className="text-lg text-gray-700">
            O Projeto Social de Boxe, foi iniciado em 2019 com o objetivo de proporcionar oportunidades para jovens de comunidades carentes. Através do esporte, buscamos promover disciplina, saúde e inclusão social, ajudando a transformar vidas e construir um futuro melhor.
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