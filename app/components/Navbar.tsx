// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 border-b border-gray-200">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">My Blog</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
