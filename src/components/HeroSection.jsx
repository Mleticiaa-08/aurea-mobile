import React from 'react';
import { Link } from 'react-router-dom';
import espelho from '../assets/Espelho.png';
import isabela from '../assets/Isabela.png';
import danielle from '../assets/Danielle.png';
import leticia from '../assets/Leticia.png';
import gabriela from '../assets/Gabriela.png';

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-24 px-4">

      <h2 className="text-[27.8px] font-playfairsc text-[#61372F] text-center mb-4">
        ONDE MODA E TECNOLOGIA SE ENCONTRAM
      </h2>
    
      <img 
        src={espelho} 
        alt="Espelho Áurea" 
        className="w-64 h-64 object-contain mb-8" 
      />

      <div className="flex flex-row gap-4 justify-center mb-6">

        <div 
          className="w-[132px] h-[151px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-2 flex flex-col"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[14px] font-playfairsc font-bold text-[#61372F] text-center mb-2 leading-tight">
            EXPERIÊNCIA IMERSIVA
          </h3>
          <p className="text-[11px] font-poppins text-[#61372F] text-center leading-tight">
            Você pode explorar, combinar e até comprar as peças diretamente pelo totem, sem precisar procurar nas araras.
          </p>
        </div>

        <div 
          className="w-[132px] h-[151px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-2 flex flex-col"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[14px] font-playfairsc font-bold text-[#61372F] text-center mb-2 leading-tight">
            TECNOLOGIA PARA LOJAS INOVADORAS
          </h3>
          <p className="text-[11px] font-poppins text-[#61372F] text-center leading-tight">
            Ideal para clientes que valorizam praticidade, estilo e atendimento inteligente, sem abrir mão do toque humano.
          </p>
        </div>
      </div>

      <div 
        className="w-[273px] h-[230px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col items-center justify-between mb-6"
        style={{ borderRadius: '8px' }}
      >
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
          <button 
            className="w-[98px] h-[18px] bg-[#DEC8BC] border-[1px] border-[#61372F] flex items-center justify-center"
          >
            <span className="text-[10px] font-playfair font-bold text-[#61372F]">
              Ver como funciona
            </span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-7 justify-center w-full max-w-[170px] mb-6">
  
        <div 
          className="w-[170px] h-[155px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[15px] font-playfairsc font-bold text-[#61372F] text-center mb-2 leading-tight">
            DIFERENCIAL
          </h3>
          <p className="text-[11px] font-poppins text-[#61372F] text-center leading-tight">
            Traz praticidade e personalização para lojas física.
            <br /><br />
            Evita filas, reduz o tempo de busca e aumenta a conversão de vendas.
          </p>
        </div>

        <div 
          className="w-[170px] h-[160px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[15px] font-playfairsc font-bold text-[#61372F] text-center mb-1 leading-tight">
            PÚBLICO-ALVO
          </h3>
          <p 
            className="font-poppins text-[#61372F] text-center leading-tight"
            style={{ fontSize: '10.5px' }}
          >
            Clientes que frequentam lojas físicas, mas desejam uma experiência rápida e interativa.
            <br /><br />
            Lojas físicas de pequeno a grande porte que querem se destacar com inovação e estilo.
          </p>
        </div>

        <div 
          className="w-[170px] h-[155px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[15px] font-playfairsc font-bold text-[#61372F] text-center mb-2 leading-tight">
            OBJETIVO
          </h3>
          <p className="text-[11px] font-poppins text-[#61372F] text-center leading-tight">
            Revolucionar a experiência de compra em lojas físicas, unindo moda, tecnologia e interatividade, criando uma jornada personalizada para o cliente e aumentando as vendas do lojista.
          </p>
        </div>
      </div>

      <h2 className="text-[20px] font-playfairsc font-bold text-[#61372F] text-center mb-1">
        BAIXE O APLICATIVO ÁUREA
      </h2>

      <p className="text-[13px] font-poppins font-light italic text-[#61372F] text-center mb-6">
        Conecte sua experiência de compra com tecnologia e estilo.
      </p>

      <div 
        className="w-[273px] h-[240px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col items-center justify-center mb-8"
        style={{ borderRadius: '8px' }}
      >
        <p className="text-[12px] font-poppins font-light text-[#61372F] text-center leading-tight max-w-[220px] mx-auto">
          O app da ÁUREA permite que você acesse as peças disponíveis na loja diretamente do seu celular. Através da integração com o espelho equipado avec câmera, o sistema reconhece a peça que você está vestindo e envia as informações para o totem — e de lá, direto para seu app. Simples, rápido e sem precisar procurar nas araras.
        </p>

        <button 
          className="w-[110px] h-[20px] bg-[#DEC8BC] border-[1px] border-[#61372F] flex items-center justify-center mt-4"
        >
          <span className="text-[9px] font-playfair font-bold text-[#61372F]">
            Baixar o Aplicativo
          </span>
        </button>
      </div>

      <h2 className="text-[24px] font-playfairsc font-bold text-[#61372F] text-center mt-4">
        QUEM SOMOS?
      </h2>

      <p className="text-[12px] font-poppins font-light italic text-[#61372F] text-center mb-4">
        Conheça quem faz o ÁUREA acontecer.
      </p>

      {/* Isabela */}
      <img 
        src={isabela} 
        alt="Isabela" 
        className="w-[122.47px] h-[132.91px] object-contain mb-0.9" 
      />
      <p className="text-[9px] font-poppins text-[#61372F] text-center">
        @iisacost_
      </p>
      <p className="text-[15px] font-playfair text-[#61372F] text-center">
        Isabela Costa
      </p>
      <div 
        className="w-[135.76px] h-[0.98px] bg-[#61372F] mb-4"
        style={{ fontWeight: '1' }}
      />

      {/* Danielle */}
      <img 
        src={danielle} 
        alt="Danielle" 
        className="w-[122.47px] h-[132.91px] object-contain mb-0.9" 
      />
      <p className="text-[9px] font-poppins text-[#61372F] text-center">
        @_dany.elle_
      </p>
      <p className="text-[15px] font-playfair text-[#61372F] text-center">
        Danielle Freitas
      </p>
      <div 
        className="w-[135.76px] h-[0.98px] bg-[#61372F] mb-4"
        style={{ fontWeight: '1' }}
      />

      {/* Leticia */}
      <img 
        src={leticia} 
        alt="Leticia" 
        className="w-[122.47px] h-[132.91px] object-contain mb-0.9" 
      />
      <p className="text-[9px] font-poppins text-[#61372F] text-center">
        @lelealmeida__
      </p>
      <p className="text-[15px] font-playfair text-[#61372F] text-center">
        Letícia Moreira
      </p>
      <div 
        className="w-[135.76px] h-[0.98px] bg-[#61372F] mb-4"
        style={{ fontWeight: '1' }}
      />

      {/* Gabriela */}
      <img 
        src={gabriela} 
        alt="Gabriela" 
        className="w-[122.47px] h-[132.91px] object-contain mb-0.9" 
      />
      <p className="text-[9px] font-poppins text-[#61372F] text-center">
        @gabiheerculano_
      </p>
      <p className="text-[15px] font-playfair text-[#61372F] text-center">
        Gabriela Herculano
      </p>
      <div 
        className="w-[135.76px] h-[0.98px] bg-[#61372F] mb-4"
        style={{ fontWeight: '1' }}
      />

      <h2 className="text-[24px] font-playfairsc font-bold text-[#61372F] text-center mt-4">
        ENTRE EM CONTATO
      </h2>

      <p className="text-[14px] font-poppins font-light italic text-[#61372F] text-center mb-4">
        Estamos prontas para te ajudar! Envie sua mensagem e responderemos o mais rápido possível.
      </p>

      <div className="flex flex-col items-start mb-4" style={{ width: '241px' }}>
        <p className="text-[12px] font-poppins font-light italic text-[#61372F] mb-1 ml-1">
          Nome
        </p>
        <input 
          type="text"
          placeholder="Digite aqui..."
          className="w-[241px] h-[33px] bg-[#DEC8BC] border-2 border-[#61372F] pl-3 text-[12px] font-playfair text-[#61372F] placeholder-[#61372F]"
          style={{ borderRadius: '4px' }}
        />
      </div>

      <div className="flex flex-col items-start mb-4" style={{ width: '241px' }}>
        <p className="text-[12px] font-poppins font-light italic text-[#61372F] mb-1 ml-1">
          E-mail
        </p>
        <input 
          type="email"
          placeholder="Digite aqui..."
          className="w-[241px] h-[33px] bg-[#DEC8BC] border-2 border-[#61372F] pl-3 text-[12px] font-playfair text-[#61372F] placeholder-[#61372F]"
          style={{ borderRadius: '4px' }}
        />
      </div>

      <div className="flex flex-col items-start mb-6" style={{ width: '241px' }}>
        <p className="text-[12px] font-poppins font-light italic text-[#61372F] mb-1 ml-1">
          Assunto
        </p>
        <textarea 
          placeholder="Digite aqui..."
          className="w-[241px] h-[91px] bg-[#DEC8BC] border-2 border-[#61372F] p-3 text-[12px] font-playfair text-[#61372F] placeholder-[#61372F] resize-none"
          style={{ borderRadius: '4px' }}
        />
      </div>

    </div>
  );
};

export default HeroSection;
