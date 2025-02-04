import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import MainMenu from '../components/MainMenu';

const EnrollmentPage = () => {
  return (
    <>
    
    <MainMenu 
        message="Informações sobre Matrícula" 
      />
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom color="blue">
                Informações sobre Matrícula
            </Typography>
            <Typography variant="body1" gutterBottom>
                Bem-vindo à página de matrícula do Nocaute Clube Boxe. Aqui você encontrará todas as informações necessárias sobre como se matricular e as vantagens de participar do nosso projeto.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Sobre o Boxe
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                O boxe é uma excelente forma de melhorar a condição física, desenvolver habilidades de autodefesa e aumentar a confiança. Nosso projeto oferece treinamento de alta qualidade para jovens e adultos, proporcionando a oportunidade de se tornarem atletas competitivos.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Como se Matricular
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Para se matricular, basta preencher o formulário de inscrição disponível em nosso site. Não há custos envolvidos, e todos são bem-vindos a participar. Se você tiver alguma dúvida, entre em contato conosco através dos nossos canais de atendimento.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Perguntas Frequentes
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                <b>Quais são os requisitos para participar?</b><br />
                                Os requisitos para participar incluem ter entre 10 e 18 anos e estar matriculado em uma escola.<br /><br />
                                <b>Quais são os horários das aulas?</b><br />
                                As aulas acontecem de segunda a sexta-feira, das 14h às 18h.<br /><br />
                                <b>Onde as aulas são realizadas?</b><br />
                                As aulas são realizadas na nossa sede localizada na Av. Coletora A, N°875 - C - CONJUNTO ALBANO FRANCO, Nossa Sra. do Socorro - SE.<br /><br />
                                <b>O projeto é gratuito?</b><br />
                                Sim, o projeto é totalmente gratuito para todos os participantes.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container></>
  );
};

export default EnrollmentPage;