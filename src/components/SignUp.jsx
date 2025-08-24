import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-[#FAE6DD] flex flex-col items-center justify-center px-4 pt-20 pb-10">
      {/* Título Principal */}
      
      {/* Subtítulo */}
      <h2 className="text-[20px] font-playfairsc font-bold text-[#61372F] text-center mb-8">
        CRIE SUA CONTA NO ÁUREA
      </h2>
      
      <p className="text-[14px] font-poppins text-[#61372F] text-center mb-8 max-w-md">
        Comece sua jornada no mundo da moda inteligente.
      </p>

      <div className="w-full max-w-md bg-[#DEC8BC] border-2 border-[#CDA6A2] rounded-lg p-6">
        {/* Seção de Foto */}
        <div className="mb-6">
          <h3 className="text-[16px] font-playfairsc text-[#61372F] text-center mb-4">
            Escolher foto
          </h3>
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[#FAE6DD] border-2 border-dashed border-[#61372F] flex items-center justify-center cursor-pointer">
              <span className="text-[40px] text-[#61372F]">+</span>
            </div>
          </div>
        </div>

        {/* Formulário de Cadastro */}
        <div className="space-y-4">
          {/* Campo Nome */}
          <div>
            <label className="block text-[14px] font-poppins font-medium text-[#61372F] mb-1">
              Nome
            </label>
            <input 
              type="text"
              placeholder="Digite aqui..."
              className="w-full h-10 bg-[#FAE6DD] border-2 border-[#61372F] rounded px-3 text-[14px] font-poppins text-[#61372F] placeholder-[#61372F]"
            />
          </div>

          {/* Campo Email */}
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

          {/* Campo Senha */}
          <div>
            <label className="block text-[14px] font-poppins font-medium text-[#61372F] mb-1">
              Senha
            </label>
            <input 
              type="password"
              placeholder="Digite aqui..."
              className="w-full h-10 bg-[#FAE6DD] border-2 border-[#61372F] rounded px-3 text-[14px] font-poppins text-[#61372F] placeholder-[#61372F]"
            />
          </div>

          {/* Campo Confirmar Senha */}
          <div>
            <label className="block text-[14px] font-poppins font-medium text-[#61372F] mb-1">
              Confirmar Senha
            </label>
            <input 
              type="password"
              placeholder="Digite aqui..."
              className="w-full h-10 bg-[#FAE6DD] border-2 border-[#61372F] rounded px-3 text-[14px] font-poppins text-[#61372F] placeholder-[#61372F]"
            />
          </div>

          {/* Botão de Criar Conta */}
          <button className="w-full h-12 bg-[#61372F] rounded flex items-center justify-center mt-6">
            <span className="text-[16px] font-playfair font-bold text-[#FAE6DD]">
              CRIAR CONTA
            </span>
          </button>
        </div>
      </div>

      <p className="text-[14px] font-poppins text-[#61372F] text-center mt-6">
        Já possui uma conta? – <Link to="/login" className="font-bold underline">Fazer Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
