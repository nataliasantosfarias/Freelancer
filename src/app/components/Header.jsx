
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-500 p-6">
      <div className="container mx-auto flex justify-center items-center">
        <nav className="space-x-4 text-white">
          <Link href="/" className="hover:text-red-700">Home</Link>
          <Link href="/sobre" className="hover:text-red-700">sobre</Link>
          <Link href="/aulas" className="hover:text-red-700">Aulas</Link>
          <Link href="/contato" className="hover:text-red-700">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
