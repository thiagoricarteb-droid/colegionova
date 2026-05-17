import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! Retornaremos em breve.');
  };

  return (
    <>
      <div className="bg-gradient-to-br from-[#e1f0ff] to-[#f0f8ff] py-16 px-5 text-center border-b-4 border-brand-orange">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-brand-blue mb-2">Fale Conosco</h1>
        <p className="text-xl text-[#3a5a6b]">Estamos prontos para atender você</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-8">Informações de Contato</h3>
            <div className="space-y-6 text-lg text-slate-700 mb-10">
              <p className="flex items-center gap-4">
                <Phone className="text-brand-orange shrink-0" /> 
                <strong>(11) 99999-9999</strong>
              </p>
              <p className="flex items-center gap-4">
                <Mail className="text-brand-orange shrink-0" /> 
                contato@colegionovageracao.com.br
              </p>
              <p className="flex items-start gap-4">
                <MapPin className="text-brand-orange shrink-0 mt-1" /> 
                Av. Paulista, 1500 - São Paulo/SP
              </p>
              <p className="flex items-center gap-4">
                <Clock className="text-brand-orange shrink-0" /> 
                Secretaria: Seg-Sex 7h-18h
              </p>
            </div>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert('WhatsApp abriria aqui'); }}
              className="inline-flex items-center gap-3 bg-brand-orange text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-brand-orange-dark hover:scale-105 transition-all"
            >
              <Phone size={20} /> Chamar no WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(74,144,226,0.1)] border border-slate-100">
            <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-brand-blue font-medium mb-2">Seu nome</label>
                <input type="text" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" placeholder="Nome completo" />
              </div>
              <div>
                <label className="block text-brand-blue font-medium mb-2">Seu e-mail</label>
                <input type="email" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" placeholder="email@exemplo.com" />
              </div>
              <div>
                <label className="block text-brand-blue font-medium mb-2">Telefone</label>
                <input type="tel" className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-brand-blue font-medium mb-2">Nível de interesse</label>
                <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors bg-white">
                  <option>Educação Infantil</option>
                  <option>Ensino Fundamental</option>
                  <option>Ensino Médio</option>
                </select>
              </div>
              <div>
                <label className="block text-brand-blue font-medium mb-2">Mensagem</label>
                <textarea rows={4} required className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-blue text-white font-bold py-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>

        {/* Map */}
        <div className="mt-16 rounded-[2.5rem] overflow-hidden shadow-lg h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.449447953476!2d-46.6368523!3d-23.5613544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f4c8f8c1%3A0x8b9f8f8f8f8f8f8f!2sAv.%20Paulista%2C%201500%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            title="Mapa da Escola"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;