import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import contrast1 from '../assets/ModoClaro.png'; 

const HeaderDark = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-full py-4 px-6 fixed top-0 left-0 z-40 bg-[#61372F] dark:bg-[#61372F] ">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
  
          {/* Logo */}
          <Link to="/dark" className="text-3xl lg:text-4xl font-playfair text-[#b39889] dark:text-[#DEC8BC]">
            ÁUREA
          </Link>
         
          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/dark" className="text-[#b39889] text-lg font-playfair hover:text-[#7A4A42] transition-colors ">
              Home
            </Link>
            <Link to="/jogodark" className="text-[#b39889] text-lg font-playfair hover:text-[#7A4A42] transition-colors">
              Jogo
            </Link>
            <Link to="/equipamentosdark" className="text-[#b39889] text-lg font-playfair hover:text-[#7A4A42] transition-colors">
              Equipamentos
            </Link>
            <Link to="/referenciasdark" className="text-[#b39889] text-lg font-playfair hover:text-[#7A4A42] transition-colors">
              Referências
            </Link>
          </nav>

          {/* Botão Dark Mode (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">
              <img 
                src={contrast1} 
                alt="Modo Claro" 
                className="w-6 h-6 object-contain cursor-pointer" 
              />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/">
              <img 
                src={contrast1} 
                alt="Modo Escuro" 
                className="w-6 h-6 object-contain cursor-pointer" 
              />
            </Link>
            
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

      {/* Fundo escuro ao abrir menu */}
      <div 
        className={`fixed inset-0 bg-[#61372F] bg-opacity-70 z-30 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      ></div>

      {/* Menu lateral mobile */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-[#DEC8BC] shadow-lg z-40 transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="pt-24 px-6">
          <nav className="flex flex-col space-y-6">
            <Link to="/dark" className="text-[#61372F] text-xl font-playfair hover:text-[#7A4A42] transition-colors" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/jogo" className="text-[#61372F] text-xl font-playfair hover:text-[#7A4A42] transition-colors" onClick={closeMenu}>
              Jogo
            </Link>
            <Link to="/equipamentos" className="text-[#61372F] text-xl font-playfair hover:text-[#7A4A42] transition-colors" onClick={closeMenu}>
              Equipamentos
            </Link>
            <Link to="/referencias" className="text-[#61372F] text-xl font-playfair hover:text-[#7A4A42] transition-colors" onClick={closeMenu}>
              Referências
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderDark;
