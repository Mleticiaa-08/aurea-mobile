import React from 'react';

const Funcionamento = () => {
  return (
    <div className="min-h-screen bg-[#FAE6DD] flex flex-col items-center px-4 pt-24 pb-10">

      <h2 className="text-[24px] font-playfairsc font-bold text-[#61372F] text-center mb-10">
        COMO USAR O ÁUREA: GUIA DE ESTILO
      </h2>

      <div className="w-full max-w-md space-y-10">
     
        <div 
          className="w-[250px] h-[150px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-2">
            Aproxime-se do Espelho ÁUREA
          </h3>
          <p className="text-[12px] font-poppins font-light text-[#61372F] text-center">
            O espelho possui uma câmera discreta que detecta sua roupa atual. Mantenha-se em frente ao espelho por 3 segundos.
          </p>
        </div>

        <div 
          className="w-[250px] h-[150px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-2">
            Envio automático para o Totem
          </h3>
          <p className="text-[12px] font-poppins font-light text-[#61372F] text-center">
            A câmera identifica os tons e formatos das roupas e envia as informações para o aplicativo ÁUREA exibido no totem ao lado.
          </p>
        </div>

        <div 
          className="w-[250px] h-[150px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-2">
            Visualize sugestões de roupas
          </h3>
          <p className="text-[12px] font-poppins font-light text-[#61372F] text-center">
            No totem, o app mostrará peças da loja que combinam com o seu estilo atual. Você poderá navegar pelas opções usando a tela touch.
          </p>
        </div>

        <div 
          className="w-[250px] h-[150px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-2">
            Adicione a roupa ao carrinho
          </h3>
          <p className="text-[12px] font-poppins font-light text-[#61372F] text-center">
            Toque nas peças que você gostou para adicioná-las ao carrinho. Você pode ver combinações e sugestões de look completas.
          </p>
        </div>

        <div 
          className="w-[250px] h-[150px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-2">
            Finalize sua compra
          </h3>
          <p className="text-[12px] font-poppins font-light text-[#61372F] text-center">
            Após montar seu look, clique em "Finalizar Compra" no totem para efetuar o pagamento via QR Code ou cartão.
          </p>
        </div>

        <div 
          className="w-[250px] h-[150px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
          style={{ borderRadius: '8px' }}
        >
          <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-2">
            Retire na loja ou receba em casa
          </h3>
          <p className="text-[12px] font-poppins font-light text-[#61372F] text-center">
            Escolha se deseja retirar na loja ou receber em casa. Pronta! Agora você está vestindo o futuro com ÁUREA.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Funcionamento;
