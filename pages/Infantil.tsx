import React from 'react';
import { 
  Heart, Activity, Palette, MessageCircle, Boxes, 
  PaintBucket, TreePine, Cuboid, Sun, Clock
} from 'lucide-react';

const Infantil: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#e1f0ff] to-[#f0f8ff] py-16 px-5 text-center border-b-4 border-brand-orange">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-brand-blue mb-2">Educação Infantil</h1>
        <p className="text-xl text-[#3a5a6b]">O primeiro passo para o conhecimento - 0 a 5 anos</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1974&auto=format&fit=crop" className="rounded-[2.5rem] w-full shadow-lg" alt="Crianças brincando" />
          <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1974&auto=format&fit=crop" className="rounded-[2.5rem] w-full shadow-lg" alt="Atividade lúdica" />
        </div>

        <h2 className="font-poppins text-3xl font-bold text-brand-blue mb-4 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          Nossa metodologia
        </h2>
        <p className="text-xl mb-12 leading-relaxed text-slate-700">
          Abordagem lúdica que respeita o desenvolvimento natural da criança, estimulando a curiosidade, autonomia e socialização.
        </p>

        <div className="bg-brand-light-blue p-10 rounded-[2.5rem] mb-16">
          <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-8">Campos de experiência (BNCC)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"><Heart className="text-brand-orange" /> O eu, o outro e o nós</div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"><Activity className="text-brand-orange" /> Corpo, gestos e movimentos</div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"><Palette className="text-brand-orange" /> Traços, sons, cores e formas</div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"><MessageCircle className="text-brand-orange" /> Escuta, fala, pensamento e imaginação</div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"><Boxes className="text-brand-orange" /> Espaços, tempos, quantidades</div>
          </div>
        </div>

        <h2 className="font-poppins text-3xl font-bold text-brand-blue mb-8 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          Infraestrutura
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
            <PaintBucket size={40} className="text-brand-orange mb-3" />
            <span className="font-semibold text-brand-blue text-lg">Salas coloridas</span>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
            <TreePine size={40} className="text-brand-orange mb-3" />
            <span className="font-semibold text-brand-blue text-lg">Parque</span>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
            <Cuboid size={40} className="text-brand-orange mb-3" />
            <span className="font-semibold text-brand-blue text-lg">Brinquedoteca</span>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
            <Sun size={40} className="text-brand-orange mb-3" />
            <span className="font-semibold text-brand-blue text-lg">Área externa</span>
          </div>
        </div>

        <h2 className="font-poppins text-3xl font-bold text-brand-blue mb-8 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          Horários
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="bg-brand-light-blue p-3 rounded-full"><Sun className="text-brand-blue" /></div>
            <div>
              <h4 className="font-bold text-brand-blue">Período Parcial</h4>
              <p>7h-12h ou 13h-18h</p>
            </div>
          </div>
          <div className="flex-1 bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="bg-brand-light-blue p-3 rounded-full"><Clock className="text-brand-blue" /></div>
            <div>
              <h4 className="font-bold text-brand-blue">Período Integral</h4>
              <p>7h-18h</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infantil;