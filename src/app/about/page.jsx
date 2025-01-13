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
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/ProjetoSocialAcademia.jpeg"
                alt="Outras imagens" />
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
                image="/images/ProjetoSocialAcademia.jpeg"
                alt="Outras imagens" />
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
                image="/images/ProjetoSocialAcademia.jpeg"
                alt="Outras imagens" />
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
