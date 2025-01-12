import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';

export default function Buttonknow() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/sobre'); // Substitua '/target-page' pela rota desejada
  };

  return (
    <div className="flex justify-center mt-10"> {/* Centralizando o botão na página */}
      <Stack direction="row" spacing={2}>
        <Button
        variant="contained"
        onClick={handleClick}
        className="bg-blue-900 text-white hover:bg-blue-700">
          Venha nos conhecer 
        </Button>
      </Stack>
    </div>
  );
}