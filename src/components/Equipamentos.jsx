import React from 'react';
import esp32 from '../assets/Esp32.png';
import esp32Cam from '../assets/Esp32Cam.png';
import TabletAndroid from '../assets/TabletAndroid.png';
import EspelhoMoldura from '../assets/EspelhoMoldura.png';
import Led from '../assets/Led.png';
import Cabo from '../assets/Cabo.png';
import Suporte from '../assets/Suporte.png';
import SuporteEspelho from '../assets/SuporteEspelho.png';
import Sensor from '../assets/Sensor.png';

const Equipamentos = () => {
  return (
    <div className="min-h-screen bg-[#FAE6DD] flex flex-col items-center px-4 pt-20 md:pt-28 pb-10 md:pb-16">
      
      <div className="w-full max-w-3xl text-center mb-12">
    
        <h1 className="text-[30px] font-playfair font-bold text-[#61372F] mb-6">
          ITENS UTILIZADOS
        </h1>
        
        {/* Subtítulo com 57px */}
        <div className="max-w-2xl mx-auto">
          <p className="text-[20px] text-[#61372F] mb-2 font-poppins font-light italic">
            Veja os níveis utilizados no projeto, seus valores e escolha
          </p>
          <p className="text-[16px] text-[#61372F] font-poppins font-light italic">
            compre os materiais ou adquira a versão completa do Áurea
          </p>
          <p className="text-[57px] text-[#61372F] font-poppins font-light italic">com tudo pronto.</p>
        </div>
      </div>

      {/* Grid de 3x3 imagens reais */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {/* Linha 1 */}
        <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg h-48 overflow-hidden">
          <img 
            src={esp32} 
            alt="ESP32" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg h-48 overflow-hidden">
          <img 
            src={esp32Cam} 
            alt="esp32-cam" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg h-48 overflow-hidden">
          <img 
            src={TabletAndroid}
            alt="Tablet" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Linha 2 */}
        <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg h-48 overflow-hidden">
          <img 
            src={EspelhoMoldura}
            alt="Espelho-moldura" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg h-48 overflow-hidden">
          <img 
            src={Led}
            alt="Led" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg h-48 overflow-hidden">
          <img 
            src={Cabo}
            alt="Cabo" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Linha 3 */}
        <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg h-48 overflow-hidden">
          <img 
            src={Suporte}
            alt="Suporte" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg h-48 overflow-hidden">
          <img 
            src={SuporteEspelho}
            alt="SuporteEspelho" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg h-48 overflow-hidden">
          <img 
            src={Sensor}
            alt="Sensor" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
};

export default Equipamentos;