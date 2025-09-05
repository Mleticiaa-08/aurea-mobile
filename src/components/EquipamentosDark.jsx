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

const EquipamentosDark = () => {
  return (
    <div className="min-h-screen bg-[#704943] flex flex-col items-center px-4 pt-20 md:pt-28 pb-10 md:pb-16">
      
      <div className="w-full max-w-3xl text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-playfair font-bold text-[#B39889] mb-6">
          ITENS UTILIZADOS
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-[#B39889] mb-2 font-poppins font-light italic">
            Veja os itens utilizados no projeto, seus valores e escolha:  
          </p>
          <p className="text-[#B39889] font-poppins font-light italic">
            compre os materiais ou adquira a versão completa do Áurea com tudo pronto.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">

        <div className="flex flex-col items-center px-4">
          <h3 className="text-[#B39889] font-poppins font-bold text-center mb-3 text-sm">ESP32 (ESP-32 DEVKIT)</h3>
          <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg p-3 flex items-center justify-center mx-4"
               style={{ width: '280px', height: '300px', maxWidth: '100%' }}>
            <div className="bg-[#FAE6DD] border-[1.8px] border-[#CDA6A2] rounded-lg overflow-hidden flex items-center justify-center"
                 style={{ width: '200px', height: '200px' }}>
              <img 
                src={esp32} 
                alt="ESP32" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4">
          <h3 className="text-[#B39889] font-poppins font-bold text-center mb-3 text-sm">ESP32 CAMERA</h3>
          <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg p-3 flex items-center justify-center mx-4"
               style={{ width: '280px', height: '300px', maxWidth: '100%' }}>
            <div className="bg-[#FAE6DD] border-[1.8px] border-[#CDA6A2] rounded-lg overflow-hidden flex items-center justify-center"
                 style={{ width: '200px', height: '200px' }}>
              <img 
                src={esp32Cam} 
                alt="ESP32 Camera" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4">
          <h3 className="text-[#B39889] font-poppins font-bold text-center mb-3 text-sm">TABLET ANDROID</h3>
          <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg p-3 flex items-center justify-center mx-4"
               style={{ width: '280px', height: '300px', maxWidth: '100%' }}>
            <div className="bg-[#FAE6DD] border-[1.8px] border-[#CDA6A2] rounded-lg overflow-hidden flex items-center justify-center"
                 style={{ width: '200px', height: '200px' }}>
              <img 
                src={TabletAndroid} 
                alt="Tablet Android" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4">
          <h3 className="text-[#B39889] font-poppins font-bold text-center mb-3 text-sm">ESPELHO COM MOLDURA</h3>
          <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg p-3 flex items-center justify-center mx-4"
               style={{ width: '280px', height: '300px', maxWidth: '100%' }}>
            <div className="bg-[#FAE6DD] border-[1.8px] border-[#CDA6A2] rounded-lg overflow-hidden flex items-center justify-center"
                 style={{ width: '200px', height: '200px' }}>
              <img 
                src={EspelhoMoldura} 
                alt="Espelho com Moldura" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4">
          <h3 className="text-[#B39889] font-poppins font-bold text-center mb-3 text-sm">FITA LED 5M + FONTE</h3>
          <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg p-3 flex items-center justify-center mx-4"
               style={{ width: '280px', height: '300px', maxWidth: '100%' }}>
            <div className="bg-[#FAE6DD] border-[1.8px] border-[#CDA6A2] rounded-lg overflow-hidden flex items-center justify-center"
                 style={{ width: '200px', height: '200px' }}>
              <img 
                src={Led} 
                alt="Fita LED" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4">
          <h3 className="text-[#B39889] font-poppins font-bold text-center mb-3 text-sm">CABO MICRO USB</h3>
          <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg p-3 flex items-center justify-center mx-4"
               style={{ width: '280px', height: '300px', maxWidth: '100%' }}>
            <div className="bg-[#FAE6DD] border-[1.8px] border-[#CDA6A2] rounded-lg overflow-hidden flex items-center justify-center"
                 style={{ width: '200px', height: '200px' }}>
              <img 
                src={Cabo} 
                alt="Cabo Micro USB" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4">
          <h3 className="text-[#B39889] font-poppins font-bold text-center mb-3 text-sm">SUPORTE ANTI-FURTO</h3>
          <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg p-3 flex items-center justify-center mx-4"
               style={{ width: '280px', height: '300px', maxWidth: '100%' }}>
            <div className="bg-[#FAE6DD] border-[1.8px] border-[#CDA6A2] rounded-lg overflow-hidden flex items-center justify-center"
                 style={{ width: '200px', height: '200px' }}>
              <img 
                src={Suporte} 
                alt="Suporte Anti-Furto" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4">
          <h3 className="text-[#B39889] font-poppins font-bold text-center mb-3 text-sm">SUPORTE ESPELHO</h3>
          <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg p-3 flex items-center justify-center mx-4"
               style={{ width: '280px', height: '300px', maxWidth: '100%' }}>
            <div className="bg-[#FAE6DD] border-[1.8px] border-[#CDA6A2] rounded-lg overflow-hidden flex items-center justify-center"
                 style={{ width: '200px', height: '200px' }}>
              <img 
                src={SuporteEspelho} 
                alt="Suporte Espelho" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4">
          <h3 className="text-[#B39889] font-poppins font-bold text-center mb-3 text-sm">SENSOR ULTRASSÔNICO</h3>
          <div className="bg-[#DEC8BC] border-[1.8px] border-[#CDA6A2] rounded-lg p-3 flex items-center justify-center mx-4"
               style={{ width: '280px', height: '300px', maxWidth: '100%' }}>
            <div className="bg-[#FAE6DD] border-[1.8px] border-[#CDA6A2] rounded-lg overflow-hidden flex items-center justify-center"
                 style={{ width: '200px', height: '200px' }}>
              <img 
                src={Sensor} 
                alt="Sensor Ultrassônico" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EquipamentosDark;