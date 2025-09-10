import React from 'react';

const Jogo = () => {
  return (
    <div className="min-h-screen bg-[#FAE6DD] flex flex-col items-center px-4 pt-24 pb-10 md:pt-32 md:pb-16">
      
      <h2 className="text-[22px] md:text-[28px] font-playfair font-bold text-[#61372F] text-center mb-4 md:mb-6">
        ÁUREA - O ESTILO EM CADA ERA
      </h2>

      <div className="w-full max-w-md md:max-w-lg bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col items-center justify-center mb-6 md:mb-8"
        style={{ borderRadius: '8px', height: '200px' }}>
        <div className="w-16 h-16 bg-[#FAE6DD] border-2 border-[#61372F] rounded-full flex items-center justify-center mb-3">
          <span className="text-[30px] text-[#61372F]">▶</span>
        </div>
        <p className="text-[12px] font-poppins font-light text-[#61372F] text-center">
          Vídeo demonstrativo do jogo
        </p>
      </div>

      <p className="text-[14px] md:text-[16px] font-poppins text-[#61372F] text-center mb-8 max-w-md md:max-w-2xl">
        Você é Lele, Bibi, Isa ou Elle, herdeira de costureiras que viam a moda como resistência. 
        Ao tocar um espelho antigo, é sugada para uma linha do tempo corrompida pelo Monotonia. 
        Sua missão é viajar por décadas, enfrentar padrões opressores e libertar a moda.
      </p>

      <div className="w-full max-w-4xl space-y-8 md:space-y-12">
        
        <h3 className="text-[23px] md:text-[28px] font-playfairsc font-bold italic text-[#61372F] text-center mb-6 md:mb-10">
          VIAGEM PELAS DÉCADAS
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
   
          <div className="w-full max-w-[160px] md:max-w-none mx-auto h-[210px] md:h-[240px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col"
            style={{ borderRadius: '8px' }}>
            <h4 className="text-[14px] md:text-[16px] font-poppins font-bold text-[#61372F] text-center mb-1">
              1920S
            </h4>
            <h5 className="text-[12px] md:text-[14px] font-poppins font-semibold text-[#61372F] text-center mb-2">
              A ERA DO SILÊNCIO<br />ESTRONDOSO
            </h5>
            <p className="text-[10px] md:text-[11px] font-poppins font-light text-[#61372F] text-center">
              Dançar era um ato de rebelião. As frappas romperam com padrões – o agora cabe a você devolver o brilho e o jara e essa década esquecida.
            </p>
          </div>

          <div className="w-full max-w-[160px] md:max-w-none mx-auto h-[210px] md:h-[240px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col"
            style={{ borderRadius: '8px' }}>
            <h4 className="text-[14px] md:text-[16px] font-poppins font-bold text-[#61372F] text-center mb-1">
              1950S
            </h4>
            <h5 className="text-[12px] md:text-[14px] font-poppins font-semibold text-[#61372F] text-center mb-2">
              O SORRISO<br />FORÇADO
            </h5>
            <p className="text-[10px] md:text-[11px] font-poppins font-light text-[#61372F] text-center">
              Por trás dos sorrisos perfeitos, havia mulheres presas em moldes. Aqui, você resgata a liberdade escondida entre babados e botons.
            </p>
          </div>

          <div className="w-full max-w-[160px] md:max-w-none mx-auto h-[210px] md:h-[240px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col"
            style={{ borderRadius: '8px' }}>
            <h4 className="text-[14px] md:text-[16px] font-poppins font-bold text-[#61372F] text-center mb-1">
              1980S
            </h4>
            <h5 className="text-[12px] md:text-[14px] font-poppins font-semibold text-[#61372F] text-center mb-2">
              CORES CONTRA<br />A CONFORMIDADE
            </h5>
            <p className="text-[10px] md:text-[11px] font-poppins font-light text-[#61372F] text-center">
              O neon não era só estática – era resistência contra o irmão da padronização. Sua música devolve: cor, som e atitude da nua.
            </p>
          </div>

          <div className="w-full max-w-[160px] md:max-w-none mx-auto h-[210px] md:h-[240px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col"
            style={{ borderRadius: '8px' }}>
            <h4 className="text-[14px] md:text-[16px] font-poppins font-bold text-[#61372F] text-center mb-1">
              2000S
            </h4>
            <h5 className="text-[12px] md:text-[14px] font-poppins font-semibold text-[#61372F] text-center mb-2">
              O BRILHO<br />DIGIT@L
            </h5>
            <p className="text-[10px] md:text-[11px] font-poppins font-light text-[#61372F] text-center">
              Chamaram de cafona, mas era revolução. O glitter, o cyber e o espério votaram por provar que autenticidade nunca sai de moda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 md:justify-center md:mt-6">

          <div className="hidden md:block"></div>
          
          <div className="w-full max-w-[160px] md:max-w-none mx-auto h-[210px] md:h-[240px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col mb-6 md:mb-0"
            style={{ borderRadius: '8px' }}>
            <h4 className="text-[14px] md:text-[16px] font-poppins font-bold text-[#61372F] text-center mb-1">
              FUTURO
            </h4>
            <h5 className="text-[12px] md:text-[14px] font-poppins font-semibold text-[#61372F] text-center mb-2">
              A ERA DO<br />NÃO-ESTILO
            </h5>
            <p className="text-[10px] md:text-[11px] font-poppins font-light text-[#61372F] text-center">
              No futuro, tudo se ajuda. Mas, quando ninguém mais era quem dava as destaca? Hora de planar o caos criativo no coração da partilaga.
            </p>
          </div>
          
          <div className="hidden md:block"></div>
        </div>

        <div className="w-full flex justify-center mt-8 md:mt-10">
          <button className="w-[140px] md:w-[160px] h-12 md:h-14 bg-[#61372F] rounded-lg flex items-center justify-center"
            style={{ borderRadius: '6px' }}>
            <span className="text-[14px] md:text-[16px] font-poppins font-bold text-[#FAE6DD]">
              JOGAR AGORA
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Jogo;