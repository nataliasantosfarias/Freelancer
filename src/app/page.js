// "Using CLient";
import React from 'react';
// import Image from "next/image";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col">
      <Header />
        <main className="flex-grow container mx-auto p-4">
          <section className="bg-white text-black p-8 shadow-md rounded-lg mb-4">
            <h2 className="text-3xl font-bold text-center">Bem-vindo ao Clube NocauteBoxe</h2>
            <p className="text-lg text-center">Treine com os melhores e alcance seus objetivos!</p>
            </section>
            <section className="flex-grow"> 
              {/* Outros conteúdos da página */}
          </section>   
        </main>
        <Footer />
      </div>
    </div>
  );
};  



  
//   return (
//     <>
//     <Sidebar/>
//       <Header />
//       {/* /* primeira div depois do header*/}
//       <div className="flex flex-col min-h-screen">
//         <div className="ml-9 p-3">
//           <Image
//             src="/images/logosemfundo.png"
//             alt="Logo fundo transparente"
//             width={200} // Largura ajustada
//             height={100} // Altura ajustada
//           />
//         </div>
//         <main className="flex-grow container mx-auto p-4">
//           {/* Conteúdo principal aqui */}
//           <h1 className="text-3xl font-bold text-center">Bem-vindo aoClube Nocaute Boxe</h1>
//           <p><center>Treine com os melhores e alcance seus objetivos!</center></p>
//         </main>
         
//         <Footer />
//       </div>
//     </>
//   );
// };
