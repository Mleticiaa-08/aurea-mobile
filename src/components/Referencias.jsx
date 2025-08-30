import React from 'react';

const Referencias = () => {
  // Array com os links na ordem correta
  const links = [
    "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/",
    "https://www.raspberrypi.com/documentation/accessories/camera.html",
    "https://www.sciencedirect.com/science/article/pii/S2351978920306719",
    "https://www.nngroup.com/articles/ten-usability-heuristics/",
    "https://uxdesign.cc/minimalism-in-ux-design-why-less-is-more-4a64f1e4416a",
    "https://help.figma.com/hc/en-us",
    "https://randomnerdtutorials.com/",
    "https://revistas.unilasalle.edu.br/index.php/episteme/article/view/10143"
  ];

  return (
    <div className="min-h-screen bg-[#FAE6DD] flex flex-col items-center px-4 pt-20 md:pt-28 pb-10 md:pb-16">
      
      <div className="w-full max-w-3xl text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-[#61372F] mb-4">
          REFERÊNCIAS
        </h1>
        <p className="text-[#61372F] font-poppins font-light italic text-lg md:text-2xl">
          Artigos, Fontes e Materiais Consultados
        </p>
      </div>

      {/* lista de referencias */}
      <div className="w-full max-w-3xl space-y-4 md:space-y-5">
       
        <a 
          href={links[0]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#DEC8BC] border-4 border-[#61372F] rounded-lg p-4 md:p-5 h-auto md:h-20 flex items-center hover:bg-[#d3b9ab] transition-colors cursor-pointer"
        >
          <h2 className="text-[#61372F] font-poppins font-bold text-sm md:text-base lg:text-lg">
            DOCUMENTAÇÃO ESP32
          </h2>
        </a>

        <a 
          href={links[1]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#DEC8BC] border-4 border-[#61372F] rounded-lg p-4 md:p-5 h-auto md:h-20 flex items-center hover:bg-[#d3b9ab] transition-colors cursor-pointer"
        >
          <h2 className="text-[#61372F] font-poppins font-bold text-sm md:text-base lg:text-lg">
            DOCUMENTAÇÃO ESP32 CÂMERA
          </h2>
        </a>

        <a 
          href={links[2]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#DEC8BC] border-4 border-[#61372F] rounded-lg p-4 md:p-5 h-auto md:h-20 flex items-center hover:bg-[#d3b9ab] transition-colors cursor-pointer"
        >
          <h2 className="text-[#61372F] font-poppins font-bold text-sm md:text-base lg:text-lg">
            ARTIGO: TENDÊNCIAS DA MODA E SUSTENTABILIDADE NO DESIGN DE ROUPAS
          </h2>
        </a>

        <a 
          href={links[3]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#DEC8BC] border-4 border-[#61372F] rounded-lg p-4 md:p-5 h-auto md:h-20 flex items-center hover:bg-[#d3b9ab] transition-colors cursor-pointer"
        >
          <h2 className="text-[#61372F] font-poppins font-bold text-sm md:text-base lg:text-lg">
            MANUAL DE USABILIDADE DE INTERFACES – NIELSEN NORMAN GROUP
          </h2>
        </a>

        <a 
          href={links[4]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#DEC8BC] border-4 border-[#61372F] rounded-lg p-4 md:p-5 h-auto md:h-20 flex items-center hover:bg-[#d3b9ab] transition-colors cursor-pointer"
        >
          <h2 className="text-[#61372F] font-poppins font-bold text-sm md:text-base lg:text-lg">
            DESIGN MINIMALISTA APLICADO A INTERFACES DIGITAIS
          </h2>
        </a>

        <a 
          href={links[5]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#DEC8BC] border-4 border-[#61372F] rounded-lg p-4 md:p-5 h-auto md:h-20 flex items-center hover:bg-[#d3b9ab] transition-colors cursor-pointer"
        >
          <h2 className="text-[#61372F] font-poppins font-bold text-sm md:text-base lg:text-lg">
            DOCUMENTAÇÃO DO FIGMA (PARA CONSTRUÇÃO DOS PROTÓTIPOS)
          </h2>
        </a>

        <a 
          href={links[6]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#DEC8BC] border-4 border-[#61372F] rounded-lg p-4 md:p-5 h-auto md:h-20 flex items-center hover:bg-[#d3b9ab] transition-colors cursor-pointer"
        >
          <h2 className="text-[#61372F] font-poppins font-bold text-sm md:text-base lg:text-lg">
            TUTORIAIS ARDUINO PARA IOT (APLICADO AO ESP32)
          </h2>
        </a>

        <a 
          href={links[7]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#DEC8BC] border-4 border-[#61372F] rounded-lg p-4 md:p-5 h-auto md:h-20 flex items-center hover:bg-[#d3b9ab] transition-colors cursor-pointer"
        >
          <h2 className="text-[#61372F] font-poppins font-bold text-sm md:text-base lg:text-lg">
            ARTIGO: A INFLUÊNCIA DA MODA NA CONSTRUÇÃO DA IDENTIDADE
          </h2>
        </a>
      </div>

    </div>
  );
};

export default Referencias;