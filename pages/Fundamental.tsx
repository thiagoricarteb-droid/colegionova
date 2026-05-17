import React from 'react';
import { 
  FlaskConical, Laptop, Book, Trophy, Bot, Music, Dribbble, Ticket,
  BookOpen, Calculator, Globe, Map, Palette, Dumbbell
} from 'lucide-react';

const Fundamental: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#e1f0ff] to-[#f0f8ff] py-16 px-5 text-center border-b-4 border-brand-orange">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-brand-blue mb-2">Ensino Fundamental</h1>
        <p className="text-xl text-[#3a5a6b]">Construindo saberes - 1º ao 9º ano</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100">
            <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-3">Anos Iniciais</h3>
            <p className="text-slate-600 leading-relaxed">1º ao 5º ano: Alfabetização contextualizada, letramento matemático e desenvolvimento socioemocional.</p>
          </div>
          <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100">
            <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-3">Anos Finais</h3>
            <p className="text-slate-600 leading-relaxed">6º ao 9º ano: Aprofundamento disciplinar, projetos interdisciplinares e protagonismo.</p>
          </div>
        </div>

        <h2 className="font-poppins text-3xl font-bold text-brand-blue mb-4 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          Metodologia
        </h2>
        <p className="text-xl mb-12 leading-relaxed text-slate-700">
          Projetos interdisciplinares, tecnologia educacional, robótica e educação socioemocional integradas ao currículo.
        </p>

        <div className="bg-brand-light-blue p-10 rounded-[2.5rem] mb-12">
          <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-8">Grade Curricular</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm"><BookOpen size={18} className="text-brand-orange" /> Português</div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm"><Calculator size={18} className="text-brand-orange" /> Matemática</div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm"><FlaskConical size={18} className="text-brand-orange" /> Ciências</div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm"><Globe size={18} className="text-brand-orange" /> História</div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm"><Map size={18} className="text-brand-orange" /> Geografia</div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm">🇬🇧 Inglês</div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm"><Palette size={18} className="text-brand-orange" /> Artes</div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm"><Dumbbell size={18} className="text-brand-orange" /> Ed. Física</div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm"><Music size={18} className="text-brand-orange" /> Música</div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm"><Bot size={18} className="text-brand-orange" /> Robótica</div>
          </div>
        </div>

        <h2 className="font-poppins text-3xl font-bold text-brand-blue mb-8 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          Infraestrutura
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
            <FlaskConical size={40} className="text-brand-orange mb-3" />
            <span className="font-semibold text-brand-blue text-lg">Lab. Ciências</span>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
            <Laptop size={40} className="text-brand-orange mb-3" />
            <span className="font-semibold text-brand-blue text-lg">Lab. Informática</span>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
            <Book size={40} className="text-brand-orange mb-3" />
            <span className="font-semibold text-brand-blue text-lg">Biblioteca</span>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
            <Trophy size={40} className="text-brand-orange mb-3" />
            <span className="font-semibold text-brand-blue text-lg">Quadras</span>
          </div>
        </div>

        <h2 className="font-poppins text-3xl font-bold text-brand-blue mb-8 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          Atividades Extras
        </h2>
        <div className="flex gap-4 flex-wrap">
          <span className="border-2 border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-brand-blue hover:text-white transition-all cursor-default">
            <Bot size={20} /> Robótica
          </span>
          <span className="border-2 border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-brand-blue hover:text-white transition-all cursor-default">
            <Music size={20} /> Coral
          </span>
          <span className="border-2 border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-brand-blue hover:text-white transition-all cursor-default">
            <Dribbble size={20} /> Esportes
          </span>
          <span className="border-2 border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-brand-blue hover:text-white transition-all cursor-default">
            <Ticket size={20} /> Teatro
          </span>
        </div>
      </div>
    </>
  );
};

export default Fundamental;