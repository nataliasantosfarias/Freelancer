// import React from "react";
// import Image from 'next/image';
// import { Card, CardContent, Typography } from '@mui/material';

// export default function CardGaleria() {
//   return (
//     <>
//       <div className="px-6"> {/* Adicionando padding */}
//         <h1 className="text-center text-3xl font-bold mb-8 text-blue-700 mt-10">Faça parte do time dos campeões</h1>
//         <p className="text-center text-lg text-gray-500 mt-4">
//           Veja nossos atletas em ação,
//           os treinamentos intensos e as conquistas que celebramos juntos.
//           Inspire-se e venha fazer parte desta jornada!
//         </p>
//       </div>
//       <section className="container mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Cartão de imagem 1 */}
//           <div className="relative w-full h-80">
//             {/*  */}
//               src="/images/atletas2-ring.jpeg"
//               alt="Imagem 1"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full"
//             />
//             <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50">
//               <CardContent>
//                 <Typography 
//                     variant="h6"
//                     component="p"
//                     className="text-center text-red-500 font-bold">
//                     Aulas de Boxe
//                 </Typography>
//               </CardContent>
//             </Card>
//           </div>
//           {/* Cartão de imagem 2 */}
//           <div className="relative w-full h-80">
//             <Image
//               src="/images/ProjetoSocialAcademia.jpeg"
//               alt="Imagem 2"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full"
//             />
//             <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
//               <CardContent>
//                 <Typography 
//                     variant="h6" 
//                     component="p" 
//                     className="text-center text-red-500 font-bold">
//                     Projeto Social
//                 </Typography>
//               </CardContent>
//             </Card>
//           </div>
//           {/* Cartão de imagem 3 */}
//           <div className="relative w-full h-80">
//             <Image
//               src="/images/lutaatleta.jpeg"
//               alt="Imagem 3"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full"
//             />
//             <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
//               <CardContent>
//                 <Typography 
//                     variant="h6" 
//                     component="p" 
//                     className="text-center text-red-500 font-bold">
//                     Sparring
//                 </Typography>
//               </CardContent>
//             </Card>
//           </div>
//           {/* Cartão de imagem 4 */}
//           <div className="relative w-full h-80">
//             <Image
//               src="/images/SegunadaCopaBannerCfundo.jpeg"
//               alt="Imagem 4"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full"
//             />
//             <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
//               <CardContent>
//                 <Typography
//                     variant="h6"
//                     component="p"
//                     className="text-center text-red-500 font-bold">
//                     Eventos
//                 </Typography>
//               </CardContent>
//             </Card>
//           </div>
//           {/* Cartão de imagem 5 */}
//           <div className="relative w-full h-80">
//             <Image
//               src="/images/victoria.jpeg"
//               alt="Imagem 5"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full"
//             />
//             <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
//               <CardContent>
//                 <Typography variant="h6"
//                     component="p"
//                     className="text-center text-red-500 font-bold">
//                     Vitórias
//                 </Typography>
//               </CardContent>
//             </Card>
//           </div>
//           {/* Cartão de imagem 6 */}
//           <div className="relative w-full h-80">
//             <Image
//               src="/images/Entrevista.jpeg"
//               alt="Imagem 6"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full"
//             />
//             <Card className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white">
//               <CardContent>
//                 <Typography variant="h6"
//                     component="p"
//                     className="text-center text-red-500 font-bold">
//                     Destaques e Entrevistas
//                 </Typography>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
'use client'

import { useState } from 'react'
import Image from 'next/image'

// This would typically come from an API or database
const images = [
  { id: 1, src: '/images/alisson.jpeg', alt: 'Image 1' },
  { id: 2, src: '/images/alisson.jpeg', alt: 'Image 2' },
  { id: 3, src: '/images/alisson.jpeg', alt: 'Image 3' },
  { id: 4, src: '/images/alisson.jpeg', alt: 'Image 4' },
  { id: 5, src: '/images/alisson.jpeg', alt: 'Image 5' },
]

export default function ImageGallery() {
  const [mainImage, setMainImage] = useState(images[0])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(images[0])

  const openLightbox = (image) => {
    setLightboxImage(image)
    setLightboxOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Image Gallery</h1>
      
      {/* Main Image */}
      <div className="mb-4 cursor-pointer" onClick={() => openLightbox(mainImage)}>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
         width={1200}
              height={800}
          className="w-[600px] h-auto rounded-lg shadow-md"
        />
      </div>
{/*       
      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => {
              setMainImage(image)
              openLightbox(image)
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={150}
              height={100}
              className="w-24 h-16 object-cover rounded-md shadow-sm hover:opacity-75 transition-opacity"
            />
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setLightboxOpen(false)}>
          <div className="max-w-4xl max-h-full p-4">
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div> 
  )
}

