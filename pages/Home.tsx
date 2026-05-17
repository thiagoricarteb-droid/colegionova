import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Baby, BookOpen, GraduationCap, School, 
  Quote, Calendar, ChevronRight 
} from 'lucide-react';
import CountUp from '../components/CountUp';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center px-5 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(74,144,226,0.9) 0%, rgba(74,144,226,0.6) 100%), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')`
        }}
      >
        <div className="max-w-[1400px] mx-auto w-full text-white">
          <div className="max-w-2xl">
            <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Educação que transforma futuros
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed font-light">
              Há 25 anos formando cidadãos críticos, criativos e preparados para os desafios do mundo.
            </p>
            <Link 
              to="/diferenciais" 
              className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-brand-orange-dark hover:scale-105 transition-all duration-300 text-lg"
            >
              <School size={22} /> Conheça nossa estrutura
            </Link>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-20 px-5 max-w-[1400px] mx-auto">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-brand-blue mb-12 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          Nossos níveis de ensino
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card Infantil */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(74,144,226,0.1)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 text-center group">
            <Baby size={64} className="mx-auto mb-6 text-brand-orange group-hover:scale-110 transition-transform" />
            <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-2">Educação Infantil</h3>
            <p className="text-brand-blue font-semibold mb-4">0 a 5 anos</p>
            <p className="mb-6 text-slate-600">Desenvolvimento integral através do lúdico, afeto e descobertas.</p>
            <Link to="/infantil" className="inline-flex items-center gap-2 text-brand-blue font-semibold px-6 py-2 border-2 border-brand-blue rounded-full hover:bg-brand-blue hover:text-white transition-all">
              Saiba mais <ChevronRight size={16} />
            </Link>
          </div>

          {/* Card Fundamental */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(74,144,226,0.1)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 text-center group">
            <BookOpen size={64} className="mx-auto mb-6 text-brand-orange group-hover:scale-110 transition-transform" />
            <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-2">Ensino Fundamental</h3>
            <p className="text-brand-blue font-semibold mb-4">6 a 14 anos</p>
            <p className="mb-6 text-slate-600">Formação sólida com projetos interdisciplinares e tecnologia.</p>
            <Link to="/fundamental" className="inline-flex items-center gap-2 text-brand-blue font-semibold px-6 py-2 border-2 border-brand-blue rounded-full hover:bg-brand-blue hover:text-white transition-all">
              Saiba mais <ChevronRight size={16} />
            </Link>
          </div>

          {/* Card Médio */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(74,144,226,0.1)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 text-center group">
            <GraduationCap size={64} className="mx-auto mb-6 text-brand-orange group-hover:scale-110 transition-transform" />
            <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-2">Ensino Médio</h3>
            <p className="text-brand-blue font-semibold mb-4">15 a 17 anos</p>
            <p className="mb-6 text-slate-600">Preparação para vestibulares, ENEM e mercado de trabalho.</p>
            <Link to="/medio" className="inline-flex items-center gap-2 text-brand-blue font-semibold px-6 py-2 border-2 border-brand-blue rounded-full hover:bg-brand-blue hover:text-white transition-all">
              Saiba mais <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Structure Section (Carousel) */}
      <div className="bg-brand-light-blue py-20">
        <div className="max-w-[1400px] mx-auto px-5">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-brand-blue mb-12 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
            Nossa estrutura
          </h2>
          
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar">
            {[
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
            ].map((src, index) => (
              <div key={index} className="min-w-[300px] md:min-w-[400px] h-[250px] rounded-[2rem] overflow-hidden shadow-lg snap-start">
                <img src={src} alt={`Estrutura ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 px-5 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Alunos', value: 1500 },
            { label: 'Anos de história', value: 25 },
            { label: 'Professores', value: 120 },
            { label: 'Prêmios', value: 15 },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-orange font-poppins mb-2">
                <CountUp end={stat.value} />
              </div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-brand-blue mb-12 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-orange after:mt-2 after:rounded-full">
          O que dizem os pais
        </h2>
        <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar">
          {[
            {
              text: "Meu filho ama a escola! A equipe é muito acolhedora e o desenvolvimento dele foi incrível.",
              name: "Ana Carolina",
              role: "Mãe do Pedro (Infantil)",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
            },
            {
              text: "Ótima preparação para o vestibular. Minha filha passou em medicina graças ao apoio da escola.",
              name: "Carlos Eduardo",
              role: "Pai da Mariana (Médio)",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
            },
            {
              text: "Estrutura maravilhosa, professores qualificados. Recomendo a todos!",
              name: "Fernanda Lima",
              role: "Mãe do João (Fundamental)",
              img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974&auto=format&fit=crop"
            }
          ].map((item, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(74,144,226,0.1)] snap-start">
              <Quote size={32} className="text-brand-orange mb-4" />
              <p className="text-lg text-slate-700 italic mb-6">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <strong className="block text-brand-blue">{item.name}</strong>
                  <span className="text-sm text-slate-500">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-[2rem] p-8 shadow-lg mt-12 border border-slate-100">
          <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-6 flex items-center gap-3">
            <Calendar className="text-brand-orange" /> Próximos eventos
          </h3>
          <div className="space-y-4">
            {[
              { date: "25/10", title: "Reunião de pais - Educação Infantil" },
              { date: "05/11", title: "Feira de Ciências - Fundamental" },
              { date: "20/11", title: "Simulado ENEM - Ensino Médio" }
            ].map((event, idx) => (
              <div key={idx} className="flex items-center gap-6 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <div className="bg-brand-blue text-white px-4 py-2 rounded-2xl font-bold min-w-[80px] text-center">
                  {event.date}
                </div>
                <div className="text-lg font-medium text-slate-700">{event.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;