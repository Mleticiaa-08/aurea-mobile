// components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import contrast1 from '../assets/ModoEscuro.png'; // Importe a imagem

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-full py-4 px-4 fixed top-0 left-0 z-40 bg-[#FAE6DD]">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-[30px] font-playfair text-[#61372F]">
            ÁUREA
          </Link>
          
          {/* Container para a imagem e menu hamburguer */}
          <div className="flex items-center gap-4">
            {/* Imagem contrast 1.png - ModoEscuro */}
            <img 
              src={contrast1} 
              alt="ModoEscuro" 
              className="w-6 h-6 object-contain cursor-pointer" // Diminuído de w-8 h-8 para w-6 h-6
            />
            
            {/* Menu hamburguer */}
            <div 
              className="flex flex-col space-y-1 cursor-pointer z-50"
              onClick={toggleMenu}
            >
              <div className={`w-6 h-0.5 bg-[#61372F] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-[#61372F] ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-[#61372F] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#61372F] bg-opacity-70 z-30 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      ></div>

      {/* Menu Lateral */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-[#DEC8BC] shadow-lg z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="pt-24 px-6">
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="text-[#61372F] text-xl font-playfair hover:text-[#7A4A42] transition-colors" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/jogo" className="text-[#61372F] text-xl font-playfair hover:text-[#7A4A42] transition-colors" onClick={closeMenu}>
              Jogo
            </Link>
            <a href="#" className="text-[#61372F] text-xl font-playfair hover:text-[#7A4A42] transition-colors" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#" className="text-[#61372F] text-xl font-playfair hover:text-[#7A4A42] transition-colors" onClick={closeMenu}>
              Shop
            </a>
            <Link to="/login" className="text-[#61372F] text-xl font-playfair hover:text-[#7A4A42] transition-colors" onClick={closeMenu}>
              Login
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;