'use client';
;import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';

export default function Buttonknow() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/about'); 
  };

  return (
    <div className="flex justify-center mt-10"> 
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={handleClick}
          className=" text-white bg-blue-700 hover:bg-blue-500">
          Conheça o nosso Projeto 
        </Button>
      </Stack>
    </div>
  );
}