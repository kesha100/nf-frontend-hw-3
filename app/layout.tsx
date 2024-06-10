// src/app/layout.tsx
import React from 'react';
import Header from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
