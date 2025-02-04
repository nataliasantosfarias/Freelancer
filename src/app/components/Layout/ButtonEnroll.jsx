'use client';
import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';

export default function ButtonEnroll() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/EnrollmentPage'); // Substitua '/about' pela rota desejada
  };

  return (
    <div className="flex justify-center mt-8"> {/* Centralizando o botão na página */}
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          onClick={handleClick}
          sx={{
            color: 'white', // Cor do texto
            borderColor: 'blue', // Cor da borda
            '&:hover': {
              color: 'white', // Cor do texto ao passar o mouse
              borderColor: 'red', // Cor da borda ao passar o mouse
              backgroundColor: 'rgba(255, 0, 0, 0.1)', // Cor de fundo ao passar o mouse
            },
            '&:active': {
              color: 'darkred', // Cor do texto ao clicar
              borderColor: 'darkred', // Cor da borda ao clicar
              backgroundColor: 'rgba(139, 0, 0, 0.1)', // Cor de fundo ao clicar
            },
          }}
        >
          Matricule-se
        </Button>
      </Stack>
    </div>
  );
}