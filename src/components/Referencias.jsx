import React from 'react';

const Referencias = () => {
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
    <div className="w-full pt-20 px-4 max-w-7xl mx-auto"> {/* Reduzido o padding-top */}

      {/* Versão Desktop */}
      <div className="hidden lg:block">
        <div className="min-h-screen bg-[#FAE6DD] flex flex-col items-center px-4 pt-16 pb-16"> {/* Reduzido o padding-top */}
          
          <div className="w-full max-w-3xl text-center mb-8"> {/* Reduzido o margin-bottom */}
            <h1 className="text-4xl font-playfair font-bold text-[#61372F] mb-3"> {/* Reduzido o margin-bottom */}
              REFERÊNCIAS
            </h1>
            <p className="text-2xl font-poppins font-light italic text-[#61372F]">
              Artigos, Fontes e Materiais Consultados
            </p>
          </div>

          <div className="w-full max-w-3xl space-y-4"> {/* Reduzido o espaçamento entre os itens */}
            {links.map((link, index) => (
              <a 
                key={index}
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-[#DEC8BC] border-4 border-[#61372F] rounded-lg p-5 h-20 flex items-center hover:bg-[#d3b9ab] transition-colors cursor-pointer"
              >
                <h2 className="text-lg font-poppins font-bold text-[#61372F]">
                  {index === 0 && "DOCUMENTAÇÃO ESP32"}
                  {index === 1 && "DOCUMENTAÇÃO ESP32 CÂMERA"}
                  {index === 2 && "ARTIGO: TENDÊNCIAS DA MODA E SUSTENTABILIDADE NO DESIGN DE ROUPAS"}
                  {index === 3 && "MANUAL DE USABILIDADE DE INTERFACES – NIELSEN NORMAN GROUP"}
                  {index === 4 && "DESIGN MINIMALISTA APLICADO A INTERFACES DIGITAIS"}
                  {index === 5 && "DOCUMENTAÇÃO DO FIGMA (PARA CONSTRUÇÃO DOS PROTÓTIPOS)"}
                  {index === 6 && "TUTORIAIS ARDUINO PARA IOT (APLICADO AO ESP32)"}
                  {index === 7 && "ARTIGO: A INFLUÊNCIA DA MODA NA CONSTRUÇÃO DA IDENTIDADE"}
                </h2>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Versão Mobile */}
      <div className="lg:hidden flex flex-col justify-center items-center pt-16 px-4"> {/* Reduzido o padding-top */}
        
        <h1 className="text-[24px] font-playfair font-bold text-[#61372F] text-center mb-2"> {/* Reduzido o margin-bottom */}
          REFERÊNCIAS
        </h1>
        
        <p className="text-[14px] font-poppins font-light italic text-[#61372F] text-center mb-6"> {/* Reduzido o margin-bottom */}
          Artigos, Fontes e Materiais Consultados
        </p>

        <div className="w-full space-y-3"> {/* Reduzido o espaçamento entre os itens */}
          {links.map((link, index) => (
            <a 
              key={index}
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-[#DEC8BC] border-2 border-[#61372F] rounded-lg p-3 flex items-center hover:bg-[#d3b9ab] transition-colors cursor-pointer"
            >
              <h2 className="text-[12px] font-poppins font-bold text-[#61372F] text-center mx-auto">
                {index === 0 && "DOCUMENTAÇÃO ESP32"}
                {index === 1 && "DOCUMENTAÇÃO ESP32 CÂMERA"}
                {index === 2 && "ARTIGO: TENDÊNCIAS DA MODA E SUSTENTABILIDADE"}
                {index === 3 && "MANUAL DE USABILIDADE – NIELSEN NORMAN GROUP"}
                {index === 4 && "DESIGN MINIMALISTA APLICADO A INTERFACES"}
                {index === 5 && "DOCUMENTAÇÃO DO FIGMA"}
                {index === 6 && "TUTORIAIS ARDUINO PARA IOT"}
                {index === 7 && "ARTIGO: INFLUÊNCIA DA MODA NA IDENTIDADE"}
              </h2>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Referencias;