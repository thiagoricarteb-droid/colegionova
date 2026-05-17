import React from 'react';
import { 
  Laptop, Bot, Clock, Languages, Heart, Dribbble, Apple, TrendingUp 
} from 'lucide-react';

const Differentials: React.FC = () => {
  const diffs = [
    { icon: <Laptop size={32} />, label: "Tecnologia Educacional" },
    { icon: <Bot size={32} />, label: "Robótica" },
    { icon: <Clock size={32} />, label: "Período Integral" },
    { icon: <Languages size={32} />, label: "Inglês desde o Infantil" },
    { icon: <Heart size={32} />, label: "Educação Socioemocional" },
    { icon: <Dribbble size={32} />, label: "Esportes e Cultura" },
    { icon: <Apple size={32} />, label: "Alimentação Saudável" },
    { icon: <TrendingUp size={32} />, label: "Acompanhamento Pedagógico" },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-[#e1f0ff] to-[#f0f8ff] py-16 px-5 text-center border-b-4 border-brand-orange">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-brand-blue mb-2">Nossos Diferenciais</h1>
        <p className="text-xl text-[#3a5a6b]">O que faz do Nova Geração uma escola única</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {diffs.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-brand-orange mb-4 bg-brand-light-blue p-4 rounded-full">
                {item.icon}
              </div>
              <h3 className="font-poppins font-bold text-brand-blue text-lg">{item.label}</h3>
            </div>
          ))}
        </div>

        <h2 className="font-poppins text-3xl font-bold text-brand-blue mt-20 mb-12 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          Infraestrutura
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop" className="rounded-[2rem] shadow-lg hover:scale-[1.02] transition-transform duration-300" alt="Biblioteca" />
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" className="rounded-[2rem] shadow-lg hover:scale-[1.02] transition-transform duration-300" alt="Sala de aula" />
          <img src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2070&auto=format&fit=crop" className="rounded-[2rem] shadow-lg hover:scale-[1.02] transition-transform duration-300" alt="Laboratório" />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <span className="bg-brand-blue text-white px-6 py-2 rounded-full font-semibold shadow-md">
            Escola Associada à BNCC
          </span>
          <span className="bg-brand-orange text-white px-6 py-2 rounded-full font-semibold shadow-md">
            Membro da Associação de Escolas Particulares
          </span>
        </div>
      </div>
    </>
  );
};

export default Differentials;