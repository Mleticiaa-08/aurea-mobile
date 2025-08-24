import React from 'react';

const Jogo = () => {
  return (
    <div className="min-h-screen bg-[#FAE6DD] flex flex-col items-center px-4 pt-24 pb-10">
      
      {/* Título Principal */}
      <h2 className="text-[22px] font-playfair font-bold text-[#61372F] text-center mb-4">
        ÁUREA - O ESTILO EM CADA ERA
      </h2>

      {/* Quadro para Vídeo */}
      <div className="w-full max-w-md bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col items-center justify-center mb-6"
        style={{ borderRadius: '8px', height: '200px' }}>
        <div className="w-16 h-16 bg-[#FAE6DD] border-2 border-[#61372F] rounded-full flex items-center justify-center mb-3">
          <span className="text-[30px] text-[#61372F]">▶</span>
        </div>
        <p className="text-[12px] font-poppins font-light text-[#61372F] text-center">
          Vídeo demonstrativo do jogo
        </p>
      </div>

      {/* Descrição del Jogo */}
      <p className="text-[14px] font-poppins text-[#61372F] text-center mb-8 max-w-md">
        Você é Lele, Bibi, Isa ou Elle, herdeira de costureiras que viam a moda como resistência. 
        Ao tocar um espelho antigo, é sugada para uma linha do tempo corrompida pelo Monotonia. 
        Sua missão é viajar por décadas, enfrentar padrões opressores e libertar a moda.
      </p>

      <div className="w-full max-w-md space-y-8">
        
        {/* Seção Viagem pelas Décadas */}
        <h3 className="text-[23px] font-playfairsc font-bold italic text-[#61372F] text-center mb-6">
          VIAGEM PELAS DÉCADAS
        </h3>

        {/* Década 1920 */}
        <div className="w-[140px] h-[210px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}>
          <h4 className="text-[14px] font-poppins font-bold text-[#61372F] text-center mb-1">
            1920S
          </h4>
          <h5 className="text-[12px] font-poppins font-semibold text-[#61372F] text-center mb-2">
            A ERA DO SILÊNCIO<br />ESTRONDOSO
          </h5>
          <p className="text-[10px] font-poppins font-light text-[#61372F] text-center">
            Dançar era um ato de rebelião. As frappas romperam com padrões – o agora cabe a você devolver o brilho e o jara e essa década esquecida.
          </p>
        </div>

        {/* Década 1950 */}
        <div className="w-[140px] h-[210px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}>
          <h4 className="text-[14px] font-poppins font-bold text-[#61372F] text-center mb-1">
            1950S
          </h4>
          <h5 className="text-[12px] font-poppins font-semibold text-[#61372F] text-center mb-2">
            O SORRISO<br />FORÇADO
          </h5>
          <p className="text-[10px] font-poppins font-light text-[#61372F] text-center">
            Por trás dos sorrisos perfeitos, havia mulheres presas em moldes. Aqui, você resgata a liberdade escondida entre babados e botons.
          </p>
        </div>

        {/* Década 1980 */}
        <div className="w-[140px] h-[210px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}>
          <h4 className="text-[14px] font-poppins font-bold text-[#61372F] text-center mb-1">
            1980S
          </h4>
          <h5 className="text-[12px] font-poppins font-semibold text-[#61372F] text-center mb-2">
            CORES CONTRA<br />A CONFORMIDADE
          </h5>
          <p className="text-[10px] font-poppins font-light text-[#61372F] text-center">
            O neon não era só estática – era resistência contra o irmão da padronização. Sua música devolve: cor, som e atitude da nua.
          </p>
        </div>

        {/* Década 2000 */}
        <div className="w-[140px] h-[210px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}>
          <h4 className="text-[14px] font-poppins font-bold text-[#61372F] text-center mb-1">
            2000S
          </h4>
          <h5 className="text-[12px] font-poppins font-semibold text-[#61372F] text-center mb-2">
            O BRILHO<br />DIGIT@L
          </h5>
          <p className="text-[10px] font-poppins font-light text-[#61372F] text-center">
            Chamaram de cafona, mas era revolução. O glitter, o cyber e o espério votaram por provar que autenticidade nunca sai de moda.
          </p>
        </div>

        {/* Futuro */}
        <div className="w-[140px] h-[210px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}>
          <h4 className="text-[14px] font-poppins font-bold text-[#61372F] text-center mb-1">
            FUTURO
          </h4>
          <h5 className="text-[12px] font-poppins font-semibold text-[#61372F] text-center mb-2">
            A ERA DO<br />NÃO-ESTILO
          </h5>
          <p className="text-[10px] font-poppins font-light text-[#61372F] text-center">
            No futuro, tudo se ajuda. Mas, quando ninguém mais era quem dava as destaca? Hora de planar o caos criativo no coração da partilaga.
          </p>
        </div>

        {/* Fase Final - A BATALHA */}
        <div className="w-[140px] h-[210px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-3 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}>
          <h4 className="text-[14px] font-poppins font-bold text-[#61372F] text-center mb-1">
            FASE FINAL
          </h4>
          <h5 className="text-[12px] font-poppins font-semibold text-[#61372F] text-center mb-2">
            A BATALHA
          </h5>
          <p className="text-[10px] font-poppins font-light text-[#61372F] text-center">
            A Monotonia domina. As reguas alucen. Mas diga, seu look e sua arma. Mistura decada; quabre padros a Derrido o vazio. Destile
          </p>
        </div>

        {/* Botão JOGAR AGORA */}
        <button className="w-[140px] h-12 bg-[#61372F] rounded-lg flex items-center justify-center mt-8 mx-auto"
          style={{ borderRadius: '6px' }}>
          <span className="text-[14px] font-poppins font-bold text-[#FAE6DD]">
            JOGAR AGORA
          </span>
        </button>

      </div>
    </div>
  );
};

export default Jogo;