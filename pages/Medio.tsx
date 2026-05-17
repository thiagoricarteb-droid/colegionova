import React from 'react';
import { 
  PenTool, CalendarCheck, FlaskConical, Handshake, Target, Mic, Globe 
} from 'lucide-react';

const Medio: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#e1f0ff] to-[#f0f8ff] py-16 px-5 text-center border-b-4 border-brand-orange">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-brand-blue mb-2">Ensino Médio</h1>
        <p className="text-xl text-[#3a5a6b]">Preparação para o futuro - 1ª a 3ª série</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 py-20">
        <p className="text-xl md:text-2xl text-center text-slate-700 font-light mb-16 max-w-4xl mx-auto">
          Foco em vestibular, ENEM e mercado de trabalho, com formação cidadã e protagonismo juvenil.
        </p>

        <div className="bg-brand-light-blue p-10 rounded-[2.5rem] mb-16 shadow-inner">
          <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-4">Grade Curricular</h3>
          <p className="text-lg text-slate-700">
            Aprofundamento nas áreas: Linguagens, Matemática, Ciências Humanas, Ciências da Natureza. 
            Redação semanal, orientação profissional e eletivas.
          </p>
        </div>

        <h2 className="font-poppins text-3xl font-bold text-brand-blue mb-8 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          Diferenciais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform">
            <PenTool size={40} className="text-brand-orange mb-3 mx-auto" />
            <h4 className="font-semibold text-brand-blue text-lg">Aulas preparatórias</h4>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform">
            <CalendarCheck size={40} className="text-brand-orange mb-3 mx-auto" />
            <h4 className="font-semibold text-brand-blue text-lg">Simulados periódicos</h4>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform">
            <FlaskConical size={40} className="text-brand-orange mb-3 mx-auto" />
            <h4 className="font-semibold text-brand-blue text-lg">Laboratórios atualizados</h4>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform">
            <Handshake size={40} className="text-brand-orange mb-3 mx-auto" />
            <h4 className="font-semibold text-brand-blue text-lg">Parceria com cursinhos</h4>
          </div>
        </div>

        <h2 className="font-poppins text-3xl font-bold text-brand-blue mb-8 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 flex items-start gap-4">
            <div className="bg-brand-light-blue p-3 rounded-full shrink-0"><Target className="text-brand-blue" /></div>
            <div>
              <h4 className="font-bold text-xl text-brand-blue mb-2">Feira de profissões</h4>
              <p className="text-slate-600">Contato direto com universidades e profissionais.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 flex items-start gap-4">
            <div className="bg-brand-light-blue p-3 rounded-full shrink-0"><Mic className="text-brand-blue" /></div>
            <div>
              <h4 className="font-bold text-xl text-brand-blue mb-2">Palestras</h4>
              <p className="text-slate-600">Encontros com especialistas de diversas áreas.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 flex items-start gap-4">
            <div className="bg-brand-light-blue p-3 rounded-full shrink-0"><Globe className="text-brand-blue" /></div>
            <div>
              <h4 className="font-bold text-xl text-brand-blue mb-2">Intercâmbio</h4>
              <p className="text-slate-600">Vivência cultural e aperfeiçoamento de idiomas.</p>
            </div>
          </div>
        </div>

        <h2 className="font-poppins text-3xl font-bold text-brand-blue mb-12 text-center">Aprovações</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
           <span className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">🏛️ USP</span>
           <span className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">🏛️ UNICAMP</span>
           <span className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">🏛️ UNESP</span>
           <span className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">🏛️ ITA</span>
           <span className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">🏛️ FUVEST</span>
        </div>
      </div>
    </>
  );
};

export default Medio;