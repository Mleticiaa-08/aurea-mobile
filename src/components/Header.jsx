import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModoEscuro from '../assets/ModoEscuro.png';
import ModoClaro from '../assets/ModoClaro.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <header className="w-full py-4 px-6 fixed top-0 left-0 z-40 bg-[#FAE6DD] dark:bg-[#704943] transition-colors duration-300">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
  
          <Link to="/" className="text-3xl lg:text-4xl font-playfair text-[#61372F] dark:text-white transition-colors duration-300">
            ÁUREA
          </Link>
        
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-[#61372F] dark:text-white text-lg font-poppins hover:text-[#7A4A42] dark:hover:text-[#B39889] transition-colors duration-300">
              Home
            </Link>
            <Link to="/jogo" className="text-[#61372F] dark:text-white text-lg font-poppins hover:text-[#7A4A42] dark:hover:text-[#B39889] transition-colors duration-300">
              Jogo
            </Link>
            <Link to="/equipamentos" className="text-[#61372F] dark:text-white text-lg font-poppins hover:text-[#7A4A42] dark:hover:text-[#B39889] transition-colors duration-300">
              Equipamentos
            </Link>
            <Link to="/referencias" className="text-[#61372F] dark:text-white text-lg font-poppins hover:text-[#7A4A42] dark:hover:text-[#B39889] transition-colors duration-300">
              Referências
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Botão de contraste */}
            <button
              onClick={toggleDarkMode}
              className="hidden md:flex w-10 h-10 bg-[#DEC8BC] dark:bg-[#B39889] rounded-full items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
              aria-label="Alternar modo escuro"
            >
              <img 
                src={isDarkMode ? ModoClaro : ModoEscuro} 
                alt={isDarkMode ? "Modo Claro" : "Modo Escuro"} 
                className="w-6 h-6" 
              />
            </button>

            {/* Menu mobile */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleDarkMode}
                className="w-8 h-8 bg-[#DEC8BC] dark:bg-[#B39889] rounded-full flex items-center justify-center shadow-md"
                aria-label="Alternar modo escuro"
              >
                <img 
                  src={isDarkMode ? ModoClaro : ModoEscuro} 
                  alt={isDarkMode ? "Modo Claro" : "Modo Escuro"} 
                  className="w-4 h-4" 
                />
              </button>
              
              <div 
                className="flex flex-col space-y-1 cursor-pointer z-50"
                onClick={toggleMenu}>
                <div className={`w-6 h-0.5 bg-[#61372F] dark:bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-[#61372F] dark:bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-[#61372F] dark:bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 bg-[#61372F] bg-opacity-70 z-30 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      ></div>

      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-[#DEC8BC] dark:bg-[#704943] shadow-lg z-40 transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="pt-24 px-6">
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="text-[#61372F] dark:text-white text-xl font-playfair hover:text-[#7A4A42] dark:hover:text-[#B39889] transition-colors duration-300" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/jogo" className="text-[#61372F] dark:text-white text-xl font-playfair hover:text-[#7A4A42] dark:hover:text-[#B39889] transition-colors duration-300" onClick={closeMenu}>
              Jogo
            </Link>
            <Link to="/equipamentos" className="text-[#61372F] dark:text-white text-xl font-playfair hover:text-[#7A4A42] dark:hover:text-[#B39889] transition-colors duration-300" onClick={closeMenu}>
              Equipamentos
            </Link>
            <Link to="/referencias" className="text-[#61372F] dark:text-white text-xl font-playfair hover:text-[#7A4A42] dark:hover:text-[#B39889] transition-colors duration-300" onClick={closeMenu}>
              Referências
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;