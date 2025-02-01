import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';

export default function TestimonialCard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-8 text-blue-800">DEPOIMENTO DE ALUNOS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full object-cover" src="/images/GalleryTestimonialCard/nati.jpeg" alt="natalia depoimento" />
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="text-xl leading-tight">Natália Farias Santos</p>
              <p className="text-sm leading-tight text-gray-600">Aluna Satisfeito</p>
              <p className="mt-2 text-gray-600">
                <span className="text-2xl text-blue-600">“</span>
                A Nocaute mudou minha vida através do Boxe!
                Ela é mais que um um projeto social, é uma família!Minha jornada com a Nocaute tem sido transformadora.
                Obrigada aos treinadores dedicados e ao ambiente positivo.
                Recomendo essa experiência a todos!
                <span className="text-2xl text-blue-600">”</span>
              </p>
              <div className="flex justify-center sm:justify-start mt-2">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full object-cover" src="/images/GalleryTestimonialCard/samuel1.jpg" alt="samuel depoimento" />
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="text-xl leading-tight">Samuel</p>
              <p className="text-sm leading-tight text-gray-600">Aluno Satisfeito</p>
              <p className="mt-2 text-gray-600">
                <span className="text-2xl text-blue-600">“</span>
                Desde que comecei a treinar na Nocaute a minha vida mudou completamente. Sou mais confiante, saudável e determinado. Vocês sempre me motivam a dar o meu melhor.
                Gratidão à Nocaute por me ajudar a alcançar meus objetivos através do projeto social junto ao boxe, muito Obrigado!
                <span className="text-2xl text-blue-600">”</span>
              </p>
              <div className="flex justify-center sm:justify-start mt-2">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full object-cover" src="/images/GalleryTestimonialCard/alisson.jpeg" alt="Alisson depoimento" />
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="text-xl leading-tight">Alisson Gonçalves Farias</p>
              <p className="text-sm leading-tight text-gray-600">Aluno Satisfeito</p>
              <p className="mt-2 text-gray-600">
                <span className="text-2xl text-blue-600">“</span>
                Eu nunca imaginei que o boxe poderia ser tão cativante, estou muito surpreso.
                O ambiente é acolhedor e todos são muito amigáveis.
                Ter a oportunidade de praticar um esporte está sendo uma grande conquita não só para mim, mas também para toda a comunidade!
                Estou adorando cada sessão e já vejo grandes melhorias em minha forma física, inclusive estou pensando em competir em breve!
                <span className="text-2xl  text-blue-600">”</span>
              </p>
              <div className="flex justify-center sm:justify-start mt-2">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}