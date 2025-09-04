import React from 'react';

const Funcionamento = () => {
  return (
    <div className="w-full bg-[#FAE6DD] min-h-screen"> {/* Fundo aplicado aqui e min-h-screen para ocupar altura total */}

        {/* Versão Desktop */}
        <div className="hidden lg:block">
          <div className="flex flex-col items-center px-4 pt-21 pb-16"> {/* Removido max-h-screen e bg-[#FAE6DD] */}
      
            <h2 className="text-[30px] font-playfairsc font-bold text-[#61372F] text-center mb-10">
              COMO USAR O ÁUREA: GUIA DE ESTILO
            </h2>

            <div className="w-full max-w-6xl space-y-10 grid grid-cols-3 gap-8">
          
              <div 
                className="w-[300px] h-[200px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
                style={{ borderRadius: '8px' }}
              >
                <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-10">
                  Aproxime-se do Espelho ÁUREA
                </h3>
                <p className="text-[14px] font-poppins font-light text-[#61372F] text-center">
                  O espelho possui uma câmera discreta que detecta sua roupa atual. Mantenha-se em frente ao espelho por 3 segundos.
                </p>
              </div>

              <div 
                className="w-[300px] h-[200px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
                style={{ borderRadius: '8px' }}
              >
                <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-10">
                  Envio automático para o Totem
                </h3>
                <p className="text-[14px] font-poppins font-light text-[#61372F] text-center">
                  A câmera identifica os tons e formatos das roupas e envia as informações para o aplicativo ÁUREA exibido no totem ao lado.
                </p>
              </div>

              <div 
                className="w-[300px] h-[200px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
                style={{ borderRadius: '8px' }}
              >
                <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-10">
                  Visualize sugestões de roupas
                </h3>
                <p className="text-[14px] font-poppins font-light text-[#61372F] text-center">
                  No totem, o app mostrará peças da loja que combinam com o seu estilo atual. Você poderá navegar pelas opções usando a tela touch.
                </p>
              </div>

              <div 
                className="w-[300px] h-[200px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
                style={{ borderRadius: '8px' }}
              >
                <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-10">
                  Adicione a roupa ao carrinho
                </h3>
                <p className="text-[14px] font-poppins font-light text-[#61372F] text-center">
                  Toque nas peças que você gostou para adicioná-las ao carrinho. Você pode ver combinações e sugestões de look completas.
                </p>
              </div>

              <div 
                className="w-[300px] h-[200px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
                style={{ borderRadius: '8px' }}
              >
                <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-10">
                  Finalize sua compra
                </h3>
                <p className="text-[14px] font-poppins font-light text-[#61372F] text-center">
                  Após montar seu look, clique em "Finalizar Compra" no totem para efetuar o pagamento via QR Code ou cartão.
                </p>
              </div>

              <div 
                className="w-[300px] h-[200px] bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] p-4 flex flex-col mx-auto"
                style={{ borderRadius: '8px' }}
              >
                <h3 className="text-[16px] font-poppins font-bold text-[#61372F] text-center mb-10">
                  Retire na loja ou receba em casa
                </h3>
                <p className="text-[14px] font-poppins font-light text-[#61372F] text-center">
                  Escolha se deseja retirar na loja ou receber em casa. Pronta! Agora você está vestindo o futuro com ÁUREA.
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Versão Mobile */}
        <div className="lg:hidden flex flex-col items-center px-4 pt-24 pb-10"> {/* Removido bg-[#FAE6DD] e min-h-screen */}
      
          <h2 className="text-[24px] font-playfairsc font-bold text-[#61372F] text-center mb-10">
            COMO USAR O ÁUREA: GUIA DE ESTILO
          </h2>

          <div className="w-full max-w-md space-y-8">
         
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
    </div>
  );
};

export default Funcionamento;