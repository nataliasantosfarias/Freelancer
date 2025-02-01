'use client'
import { useState } from 'react'
import Image from 'next/image'

// This would typically come from an API or database
const images = [
  { id: 1, src: '/images/GaleriaPrincipal/atletas-suasmedalhas-praca.jpeg', alt: 'Victor e Victoria segunda copa nocaute, entrada da luta' },
  { id: 2, src: '/images/GaleriaPrincipal/VictorVictoriaCopa2.jpg', alt: 'Victor e Victoria na segunda copa nocaute' },
  { id: 3, src: '/images/GaleriaPrincipal/Entrevista.jpeg', alt: 'Entrevista com os atletas' },
  { id: 4, src: '/images/GaleriaPrincipal/samuel1.jpg', alt: 'Samuel em ação no ringue' },
  { id: 5, src: '/images/GaleriaPrincipal/ProjetoSocialAcademia.jpeg', alt: 'Projeto social na academia' },
  { id: 6, src: '/images/GaleriaPrincipal/samuelNocaulte2.jpg', alt: 'Samuel nocauteando o adversário' },
  { id: 7, src: '/images/GaleriaPrincipal/victor-atletas.jpeg', alt: 'Victor com os atletas' },
  { id: 8, src: '/images/GaleriaPrincipal/COPA_NOCAUTE2-Samara.jpg', alt: 'Victor no corner com Samara atleta' },
  { id: 9, src: '/images/GaleriaPrincipal/img-atleta-ring.png', alt: 'Atleta no ringue' },
  { id: 10, src: '/images/GaleriaPrincipal/victor-carlos5.jpeg', alt: 'Victor e Carlos na segunda copa nocaute' },
  { id: 12, src: '/images/GaleriaPrincipal/COPA_NOCAUTE2-Victoria.jpg', alt: 'Victoria na segunda copa nocaute' },
  { id: 13, src: '/images/GaleriaPrincipal/COPA_NOCAUTE2-Carlos.jpg', alt: 'Carlos na segunda copa nocaute' },
  { id: 14, src: '/images/GaleriaPrincipal/atletas2-ring.jpeg', alt: 'Lutas dos atletas no ringue' },
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
      <h1 className="text-3xl font-bold mb-6 text-center ">Conheça o nosso Projeto Social</h1>
      
      {/* Main Image */}
      <div className="mb-4 cursor-pointer flex justify-center" onClick={() => openLightbox(mainImage)}>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          width={1200}
          height={800}
          className="w-full max-w-4xl h-auto rounded-lg shadow-md"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2 justify-center">
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



