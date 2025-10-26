import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import espelho from '../assets/Espelho.png';
import espelhoDark from '../assets/EspelhoDark.png';
import isabela from '../assets/Isabela.png';
import danielle from '../assets/Danielle.png';
import leticia from '../assets/Leticia.png';
import gabriela from '../assets/Gabriela.png';

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  React.useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FAE6DD] dark:bg-[#8A6157] min-h-screen transition-colors duration-300 pt-16">
      
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto pt-28 px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfairsc text-[#61372F] dark:text-[#F9E5DE] mb-6 transition-colors duration-300">
                ONDE MODA E TECNOLOGIA SE ENCONTRAM.
              </h2>
              <p className="text-lg md:text-xl font-poppins text-[#61372F] dark:text-[#F9E5DE] mb-8 transition-colors duration-300">
                Navegue, experimente e compre – sem tocar nas araras.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src={isDarkMode ? espelhoDark : espelho} 
                alt="Espelho Áurea" 
                className="w-80 md:w-96 lg:w-[500px] h-auto object-contain" 
              />
            </div>
          </div>

          <div className="w-full h-0.5 bg-[#CDA6A2] dark:bg-[#A17E74] my-16 transition-colors duration-300"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-10 rounded-lg text-center h-80 transition-colors duration-300">
              <h3 className="text-3xl font-playfairsc font-bold text-[#61372F] mb-6">
                EXPERIÊNCIA IMERSIVA
              </h3>
              <p className="text-xl font-poppins text-[#61372F] mb-10 leading-relaxed"> 
                Você pode explorar, combinar e até comprar as peças diretamente pelo totem, sem precisar procurar nas araras.
              </p>
            </div>

            <div className="bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-10 rounded-lg text-center h-80 transition-colors duration-300">
              <h3 className="text-3xl font-playfairsc font-bold text-[#61372F] mb-8">
                TECNOLOGIA PARA LOJAS INOVADORAS
              </h3>
              <p className="text-xl font-poppins text-[#61372F] mb-8 leading-relaxed">
                Ideal para clientes que valorizam praticidade, estilo e atendimento inteligente, sem abrir mão do toque humano.
              </p>
            </div>
          </div>

          <div className="bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-10 rounded-lg text-center mb-20 max-w-2xl mx-auto h-96 transition-colors duration-300">
            <h3 className="text-3xl font-playfairsc font-bold text-[#61372F] mb-8">
              SUA ROUPA. SEU ESTILO. SUA LOJA, REPENSADA.
            </h3>
            <p className="text-xl font-poppins text-[#61372F] mb-8 leading-relaxed">
              Com ÁUREA, vestir-se bem é tão simples quanto ser você mesmo. Descubra sugestões inteligentes e práticas direto no totem da loja.
            </p>
            <Link to="/funcionamento">
              <button className="bg-[#DEC8BC] dark:bg-[#9D7C71] border-2 border-[#61372F] px-8 py-3 rounded-lg hover:bg-[#D4B9A9] dark:hover:bg-[#8A6B61] transition-colors">
                <span className="text-xl font-playfair font-bold text-[#61372F]">
                  Ver como funciona
                </span>
              </button>
            </Link>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-playfairsc italic font-bold text-[#61372F] dark:text-[#F9E5DE] text-center mb-12 transition-colors duration-300">
              ÁUREA — A MODA INTELIGENTE
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              <div className="text-center bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-8 rounded-lg mx-auto w-full max-w-[400px] transition-colors duration-300">
                <h4 className="text-center font-playfairsc font-bold text-[#61372F] mb-4">
                  DIFERENCIAL
                </h4>
                <p className="text-lg font-poppins text-[#61372F]">
                  Traz praticidade e personalização para lojas físicas. Evita filas, reduz o tempo de busca e aumenta a conversão de vendas.
                </p>
              </div>

              <div className="text-center bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-8 rounded-lg mx-auto w-full max-w-[400px] transition-colors duration-300">
                <h4 className="text-xl font-playfairsc font-bold text-[#61372F] mb-4">
                  PÚBLICO-ALVO
                </h4>
                <p className="text-lg font-poppins text-[#61372F]">
                  Clientes que frequentam lojas físicas, mas desejam uma experiência rápida e interativa. Lojas físicas de pequeno a grande porte.
                </p>
              </div>

              <div className="text-center bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-8 rounded-lg mx-auto w-full max-w-[400px] transition-colors duration-300">
                <h4 className="text-xl font-playfairsc font-bold text-[#61372F] mb-4 text-center">
                  OBJETIVO
                </h4>
                <p className="text-lg font-poppins text-[#61372F]">
                  Revolucionar a experiência de compra em lojas físicas, unindo moda, tecnologia e interatividade.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-playfairsc italic font-bold text-[#61372F] dark:text-[#F9E5DE] text-center mb-8 transition-colors duration-300">
             APLICATIVO ÁUREA
            </h2>

            <p className="text-lg md:text-xl font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] text-center mb-12 max-w-2xl mx-auto transition-colors duration-300">
              Conecte sua experiência de compra com tecnologia e estilo.
            </p>

            <div className="bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-8 rounded-lg w-full max-w-4xl mx-auto transition-colors duration-300">
              <p className="text-lg font-poppins font-light text-[#61372F] text-center mb-8 leading-relaxed">
                O app da ÁUREA permite que você acesse as peças disponíveis na loja diretamente do seu celular. Através da integração com o espelho equipado com câmera, o sistema reconhece a peça que você está vestindo e envia as informações para o totem — e de lá, direto para seu app. Simples, rápido e sem precisar procurar nas araras.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-playfairsc text-[#61372F] dark:text-[#F9E5DE] text-center mb-8 transition-colors duration-300">
              QUEM SOMOS?
            </h2>

            <p className="text-lg font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] text-center mb-12 transition-colors duration-300">
              Conheça quem faz o ÁUREA acontecer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <img src={isabela} alt="Isabela" className="w-40 h-40 object-contain mb-4 rounded-full border-2 border-[#CDA6A2] dark:border-[#8A665C] transition-colors duration-300" />
                <p className="text-sm font-poppins text-[#61372F] dark:text-[#F9E5DE] text-center mb-2 transition-colors duration-300">
                  @iisacost_
                </p>
                <p className="text-lg font-playfair text-[#61372F] dark:text-[#F9E5DE] text-center mb-2 transition-colors duration-300">
                  Isabela Costa
                </p>
                <div className="w-24 h-0.5 bg-[#61372F] dark:bg-[#F9E5DE] transition-colors duration-300"></div>
              </div>

              <div className="flex flex-col items-center">
                <img 
                  src={danielle} 
                  alt="Danielle" 
                  className="w-40 h-40 object-contain mb-4 rounded-full border-2 border-[#CDA6A2] dark:border-[#8A665C] transition-colors duration-300" 
                />
                <p className="text-sm font-poppins text-[#61372F] dark:text-[#F9E5DE] text-center mb-2 transition-colors duration-300">
                  @_dany.elle_
                </p>
                <p className="text-lg font-playfair text-[#61372F] dark:text-[#F9E5DE] text-center mb-2 transition-colors duration-300">
                  Danielle Freitas
                </p>
                <div className="w-24 h-0.5 bg-[#61372F] dark:bg-[#F9E5DE] transition-colors duration-300"></div>
              </div>

              <div className="flex flex-col items-center">
                <img 
                  src={leticia} 
                  alt="Leticia" 
                  className="w-40 h-40 object-contain mb-4 rounded-full border-2 border-[#CDA6A2] dark:border-[#8A665C] transition-colors duration-300" 
                />
                <p className="text-sm font-poppins text-[#61372F] dark:text-[#F9E5DE] text-center mb-2 transition-colors duration-300">
                  @lelealmeida__
                </p>
                <p className="text-lg font-playfair text-[#61372F] dark:text-[#F9E5DE] text-center mb-2 transition-colors duration-300">
                  Letícia Moreira
                </p>
                <div className="w-24 h-0.5 bg-[#61372F] dark:bg-[#F9E5DE] transition-colors duration-300"></div>
              </div>

              <div className="flex flex-col items-center">
                <img 
                  src={gabriela} 
                  alt="Gabriela" 
                  className="w-40 h-40 object-contain mb-4 rounded-full border-2 border-[#CDA6A2] dark:border-[#8A665C] transition-colors duration-300" 
                />
                <p className="text-sm font-poppins text-[#61372F] dark:text-[#F9E5DE] text-center mb-2 transition-colors duration-300">
                  @gabiheerculano_
                </p>
                <p className="text-lg font-playfair text-[#61372F] dark:text-[#F9E5DE] text-center mb-2 transition-colors duration-300">
                  Gabriela Herculano
                </p>
                <div className="w-24 h-0.5 bg-[#61372F] dark:bg-[#F9E5DE] transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          <div className="pb-20">
            <h2 className="text-4xl font-playfairsc text-[#61372F] dark:text-[#F9E5DE] text-center mb-8 transition-colors duration-300">
              ENTRE EM CONTATO
            </h2>

            <p className="text-lg font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] text-center mb-12 max-w-2xl mx-auto transition-colors duration-300">
              Estamos prontas para te ajudar! Envie sua mensagem e responderemos o mais rápido possível.
            </p>

            <div className="w-full max-w-md mx-auto">
              <div className="flex flex-col items-start mb-6">
                <label className="text-lg font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] mb-2 transition-colors duration-300">
                  Nome
                </label>
                <input 
                  type="text"
                  placeholder="Digite aqui..."
                  className="w-full h-12 bg-[#DEC8BC] dark:bg-[#9D7C71] border-2 border-[#61372F] pl-4 text-base font-playfair text-[#61372F] placeholder-[#61372F] rounded-lg transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col items-start mb-6">
                <label className="text-lg font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] mb-2 transition-colors duration-300">
                  E-mail
                </label>
                <input 
                  type="email"
                  placeholder="Digite aqui..."
                  className="w-full h-12 bg-[#DEC8BC] dark:bg-[#9D7C71] border-2 border-[#61372F] pl-4 text-base font-playfair text-[#61372F] placeholder-[#61372F] rounded-lg transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col items-start mb-8">
                <label className="text-lg font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] mb-2 transition-colors duration-300">
                  Assunto
                </label>
                <textarea 
                  placeholder="Digite aqui..."
                  className="w-full h-32 bg-[#DEC8BC] dark:bg-[#9D7C71] border-2 border-[#61372F] p-4 text-base font-playfair text-[#61372F] placeholder-[#61372F] resize-none rounded-lg transition-colors duration-300"
                />
              </div>

              <div className="flex justify-center">
                <button className="bg-[#61372F] text-[#FAE6DD] dark:text-[#F9E5DE] py-3 px-12 rounded-lg hover:bg-[#7A4A42] transition-colors">
                  <span className="text-lg font-playfair font-bold">
                    Enviar Mensagem
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VERSÃO MOBILE */}
      <div className="lg:hidden flex flex-col items-center pt-24 px-4 pb-12">
        <h2 className="text-[27.8px] font-playfairsc text-[#61372F] dark:text-[#F9E5DE] text-center mb-4 transition-colors duration-300">
          ONDE MODA E TECNOLOGIA SE ENCONTRAM
        </h2>
      
        <img 
          src={isDarkMode ? espelhoDark : espelho} 
          alt="Espelho Áurea" 
          className="w-64 h-64 object-contain mb-8" 
        />

        <div className="flex flex-row gap-4 justify-center mb-6">
          <div className="w-[132px] h-[151px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-2 flex flex-col rounded-lg transition-colors duration-300">
            <h3 className="text-[14px] font-playfairsc font-bold text-[#61372F] text-center mb-2 leading-tight">
              EXPERIÊNCIA IMERSIVA
            </h3>
            <p className="text-[11px] font-poppins text-[#61372F] text-center leading-tight">
              Você pode explorar, combinar e até comprar as peças diretamente pelo totem, sem precisar procurar nas araras.
            </p>
          </div>

          <div className="w-[132px] h-[151px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-2 flex flex-col rounded-lg transition-colors duration-300">
            <h3 className="text-[14px] font-playfairsc font-bold text-[#61372F] text-center mb-2 leading-tight">
              TECNOLOGIA PARA LOJAS INOVADORAS
            </h3>
            <p className="text-[11px] font-poppins text-[#61372F] text-center leading-tight">
              Ideal para clientes que valorizam praticidade, estilo e atendimento inteligente, sem abrir mão do toque humano.
            </p>
          </div>
        </div>

        <div className="w-[273px] h-[230px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-4 flex flex-col items-center justify-between mb-6 rounded-lg transition-colors duration-300">
          <h3 className="text-[18px] font-playfairsc text-[#61372F] text-center leading-tight">
            SUA ROUPA.
            <br />
            SEU ESTILO.
            <br />
            SUA LOJA, REPENSADA.
          </h3>

          <p className="text-[12px] font-poppins text-[#61372F] text-center leading-tight">
            Com ÁUREA, vestir-se bem é tão simples quanto ser você mesmo.
            <br />
            Descubra sugestões inteligentes e práticas direto no totem da loja.
          </p>

          <Link to="/funcionamento">
            <button className="w-[98px] h-[18px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1px] border-[#61372F] flex items-center justify-center rounded transition-colors duration-300">
              <span className="text-[10px] font-playfair font-bold text-[#61372F]">
                Ver como funciona
              </span>
            </button>
          </Link>
        </div>

        <div className="flex flex-col gap-7 justify-center w-full max-w-[170px] mb-6">
          <div className="w-[170px] h-[155px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-3 flex flex-col rounded-lg transition-colors duration-300">
            <h3 className="text-[15px] font-playfairsc font-bold text-[#61372F] text-center mb-2 leading-tight">
              DIFERENCIAL
            </h3>
            <p className="text-[11px] font-poppins text-[#61372F] text-center leading-tight">
              Traz praticidade e personalização para lojas física.
              <br /><br />
              Evita filas, reduz o tempo de busca e aumenta a conversão de vendas.
            </p>
          </div>

          <div className="w-[170px] h-[160px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-3 flex flex-col rounded-lg transition-colors duration-300">
            <h3 className="text-[15px] font-playfairsc font-bold text-[#61372F] text-center mb-1 leading-tight">
              PÚBLICO-ALVO
            </h3>
            <p className="text-[10.5px] font-poppins text-[#61372F] text-center leading-tight">
              Clientes que frequentam lojas físicas, mas desejam uma experiência rápida e interativa.
              <br /><br />
              Lojas físicas de pequeno a grande porte que querem se destacar com inovação and estilo.
            </p>
          </div>

          <div className="w-[170px] h-[155px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-3 flex flex-col rounded-lg transition-colors duration-300">
            <h3 className="text-[15px] font-playfairsc font-bold text-[#61372F] text-center mb-2 leading-tight">
              OBJETIVO
            </h3>
            <p className="text-[11px] font-poppins text-[#61372F] text-center leading-tight">
              Revolucionar a experiência de compra em lojas físicas, unindo moda, tecnologia e interatividade, criando uma jornada personalizada para o cliente và aumentando as vendas do lojista.
            </p>
          </div>
        </div>

        <h2 className="text-[20px] font-playfairsc font-bold text-[#61372F] dark:text-[#F9E5DE] text-center mb-1 transition-colors duration-300">
          APLICATIVO ÁUREA
        </h2>

        <p className="text-[13px] font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] text-center mb-6 transition-colors duration-300">
          Conecte sua experiência de compra com tecnologia e estilo.
        </p>

        <div className="w-[273px] h-[240px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-[1.8px] border-[#CDA6A2] dark:border-[#8A665C] p-4 flex flex-col items-center justify-center mb-8 rounded-lg transition-colors duration-300">
          <p className="text-[12px] font-poppins font-light text-[#61372F] text-center leading-tight max-w-[220px] mx-auto">
            O app da ÁUREA permite que você acesse as peças disponíveis na loja diretamente do seu celular. Através da integração com o espelho equipado com câmera, o sistema reconhece a peça que você está vestindo e envia as informações para o totem — e de lá, direto para seu app. Simples, rápido e sem precisar procurar nas araras.
          </p>
        </div>

        <h2 className="text-[24px] font-playfairsc font-bold text-[#61372F] dark:text-[#F9E5DE] text-center mt-4 transition-colors duration-300">
          QUEM SOMOS?
        </h2>

        <p className="text-[12px] font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] text-center mb-4 transition-colors duration-300">
          Conheça quem faz o ÁUREA acontecer.
        </p>

        <img src={isabela} alt="Isabela" className="w-[122.47px] h-[132.91px] object-contain mb-1" />
        <p className="text-[9px] font-poppins text-[#61372F] dark:text-[#F9E5DE] text-center transition-colors duration-300">@iisacost_</p>
        <p className="text-[15px] font-playfair text-[#61372F] dark:text-[#F9E5DE] text-center transition-colors duration-300">Isabela Costa</p>
        <div className="w-[135.76px] h-[0.98px] bg-[#61372F] dark:bg-[#F9E5DE] mb-4 transition-colors duration-300"></div>

        <img src={danielle} alt="Danielle" className="w-[122.47px] h-[132.91px] object-contain mb-1" />
        <p className="text-[9px] font-poppins text-[#61372F] dark:text-[#F9E5DE] text-center transition-colors duration-300">@_dany.elle_</p>
        <p className="text-[15px] font-playfair text-[#61372F] dark:text-[#F9E5DE] text-center transition-colors duration-300">Danielle Freitas</p>
        <div className="w-[135.76px] h-[0.98px] bg-[#61372F] dark:bg-[#F9E5DE] mb-4 transition-colors duration-300"></div>

        <img src={leticia} alt="Leticia" className="w-[122.47px] h-[132.91px] object-contain mb-1" />
        <p className="text-[9px] font-poppins text-[#61372F] dark:text-[#F9E5DE] text-center transition-colors duration-300">@lelealmeida__</p>
        <p className="text-[15px] font-playfair text-[#61372F] dark:text-[#F9E5DE] text-center transition-colors duration-300">Letícia Moreira</p>
        <div className="w-[135.76px] h-[0.98px] bg-[#61372F] dark:bg-[#F9E5DE] mb-4 transition-colors duration-300"></div>

        <img src={gabriela} alt="Gabriela" className="w-[122.47px] h-[132.91px] object-contain mb-1" />
        <p className="text-[9px] font-poppins text-[#61372F] dark:text-[#F9E5DE] text-center transition-colors duration-300">@gabiheerculano_</p>
        <p className="text-[15px] font-playfair text-[#61372F] dark:text-[#F9E5DE] text-center transition-colors duration-300">Gabriela Herculano</p>
        <div className="w-[135.76px] h-[0.98px] bg-[#61372F] dark:bg-[#F9E5DE] mb-4 transition-colors duration-300"></div>

        <h2 className="text-[24px] font-playfairsc font-bold text-[#61372F] dark:text-[#F9E5DE] text-center mt-4 transition-colors duration-300">
          ENTRE EM CONTATO
        </h2>

        <p className="text-[14px] font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] text-center mb-4 transition-colors duration-300">
          Estamos prontas para te ajudar! Envie sua mensagem e responderemos o mais rápido possível.
        </p>

        <div className="flex flex-col items-start mb-4" style={{ width: '241px' }}>
          <p className="text-[12px] font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] mb-1 ml-1 transition-colors duration-300">Nome</p>
          <input type="text" placeholder="Digite aqui..." className="w-[241px] h-[33px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-2 border-[#61372F] pl-3 text-[12px] font-playfair text-[#61372F] placeholder-[#61372F] rounded transition-colors duration-300" />
        </div>

        <div className="flex flex-col items-start mb-4" style={{ width: '241px' }}>
          <p className="text-[12px] font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] mb-1 ml-1 transition-colors duration-300">E-mail</p>
          <input type="email" placeholder="Digite aqui..." className="w-[241px] h-[33px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-2 border-[#61372F] pl-3 text-[12px] font-playfair text-[#61372F] placeholder-[#61372F] rounded transition-colors duration-300" />
        </div>

        <div className="flex flex-col items-start mb-6" style={{ width: '241px' }}>
          <p className="text-[12px] font-poppins font-light italic text-[#61372F] dark:text-[#F9E5DE] mb-1 ml-1 transition-colors duration-300">Assunto</p>
          <textarea placeholder="Digite aqui..." className="w-[241px] h-[91px] bg-[#DEC8BC] dark:bg-[#9D7C71] border-2 border-[#61372F] p-3 text-[12px] font-playfair text-[#61372F] placeholder-[#61372F] resize-none rounded transition-colors duration-300" />
        </div>

        <div className="flex justify-center mb-12">
          <button className="bg-[#61372F] text-[#FAE6DD] dark:text-[#F9E5DE] py-2 px-8 rounded transition-colors duration-300">
            <span className="text-[12px] font-playfair font-bold">
              Enviar Mensagem
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
