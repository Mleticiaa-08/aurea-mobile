import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#FAE6DD] flex flex-col items-center justify-center px-4 pt-20 pb-10">

      <h2 className="text-[18px] font-playfairsc font-bold text-[#61372F] text-center mb-2">
        BEM-VINDO DE VOLTA
      </h2>
      
      <h3 className="text-[18px] font-playfairsc font-bold text-[#61372F] text-center mb-2">
        AO ÁUREA
      </h3>
      
      <p className="text-[14px] font-poppins italic text-[#61372F] text-center mb-8 max-w-md">
        Acesse sua conta e continue sua experiência.
      </p>

      <div className="w-full max-w-md bg-[#DEC8BC] border-2 border-[#CDA6A2] rounded-lg p-6">
    
        <div className="space-y-4">
 
          <div>
            <label className="block text-[14px] font-poppins font-medium text-[#61372F] mb-1">
              Email
            </label>
            <input 
              type="email"
              placeholder="Digite aqui..."
              className="w-full h-10 bg-[#FAE6DD] border-2 border-[#61372F] rounded px-3 text-[14px] font-poppins text-[#61372F] placeholder-[#61372F]"
            />
          </div>

          <div>
            <label className="block text-[14px] font-poppins font-medium text-[#61372F] mb-1">
              Senha
            </label>
            <input 
              type="password"
              placeholder="Digite aqui..."
              className="w-full h-10 bg-[#FAE6DD] border-2 border-[#61372F] rounded px-3 text-[14px] font-poppins text-[#61372F] placeholder-[#61372F] mb-1"
            />

            <div className="text-left -mt-1">
              <Link to="/forgot-password" className="text-[12px] font-poppins italic text-[#61372F] underline">
                Esqueceu sua senha? – Recuperar
              </Link>
            </div>
          </div>

          <button className="w-full h-12 bg-[#61372F] rounded flex items-center justify-center mt-6">
            <span className="text-[16px] font-playfair font-bold text-[#FAE6DD]">
              ENTRAR
            </span>
          </button>
        </div>
      </div>

      <p className="text-[14px] font-poppins italic text-[#61372F] text-center mt-6">
        Não possui uma conta? – <Link to="/signup" className="font-bold underline">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;
