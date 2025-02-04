import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const LocationButton = () => {
  const handleClick = () => {
    window.open('https://www.google.com/maps/place/BSP+SEGURAN%C3%87A+PRIVADA+LTDA./@-10.8416058,-37.0748544,15z/data=!4m10!1m2!2m1!1sAv.+Coletora+A,+N%C2%B0875+-+C+-+CONJUNTO+ALBANO+FRANCO,+Nossa+Sra.+do+Socorro+-+SE,+49160-000!3m6!1s0x7054dfc3371dfcf:0xbd75f3f1b7e24371!8m2!3d-10.8348597!4d-37.0616305!15sClpBdi4gQ29sZXRvcmEgQSwgTsKwODc1IC0gQyAtIENPTkpVTlRPIEFMQkFOTyBGUkFOQ08sIE5vc3NhIFNyYS4gZG8gU29jb3JybyAtIFNFLCA0OTE2MC0wMDBaUCJOYXYgY29sZXRvcmEgYSBuIDg3NSBjIGNvbmp1bnRvIGFsYmFubyBmcmFuY28gbm9zc2Egc3JhIGRvIHNvY29ycm8gc2UgNDkxNjAgMDAwkgEWc2VjdXJpdHlfZ3VhcmRfc2VydmljZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOMWNqaEVWa3hCRUFF4AEA-gEECAAQPw!16s%2Fg%2F11gyxhn4fm!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D');
  };

  return (
    <button
      onClick={handleClick}
      className=" hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <FaMapMarkerAlt className="mr-2" />
      Localização
    </button>
  );
};

export default LocationButton;