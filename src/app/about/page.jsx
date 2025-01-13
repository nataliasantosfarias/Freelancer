import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function About() {
  return (
    <>
      <div className="bg-blue-900 mx-auto px-4 py-10 "></div>{/*  //Cirrige temporáriamente a visisbilidade do header */}
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Sobre o Projeto Social de Boxe</h1>
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
    </>
  );
}
