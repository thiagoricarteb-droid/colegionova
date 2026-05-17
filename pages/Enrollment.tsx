import React from 'react';
import { CheckCircle } from 'lucide-react';

const Enrollment: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitação de matrícula enviada! Entraremos em contato para agendar uma visita.');
  };

  return (
    <>
      <div className="bg-gradient-to-br from-[#e1f0ff] to-[#f0f8ff] py-16 px-5 text-center border-b-4 border-brand-orange">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-brand-blue mb-2">Matrículas 2026</h1>
        <p className="text-xl text-[#3a5a6b]">Vagas limitadas - Garanta a vaga do seu filho</p>
      </div>

      <div className="max-w-[800px] mx-auto px-5 py-20">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_15px_40px_rgba(74,144,226,0.1)] border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Responsável */}
            <section>
              <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-6 border-b border-slate-100 pb-2">Dados do responsável</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-brand-blue font-medium mb-2">Nome completo</label>
                  <input type="text" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
                <div>
                  <label className="block text-brand-blue font-medium mb-2">CPF</label>
                  <input type="text" required placeholder="000.000.000-00" className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brand-blue font-medium mb-2">Telefone (WhatsApp)</label>
                    <input type="tel" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" />
                  </div>
                  <div>
                    <label className="block text-brand-blue font-medium mb-2">E-mail</label>
                    <input type="email" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" />
                  </div>
                </div>
              </div>
            </section>

            {/* Aluno */}
            <section>
              <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-6 border-b border-slate-100 pb-2">Dados do aluno</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-brand-blue font-medium mb-2">Nome completo</label>
                  <input type="text" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
                <div>
                  <label className="block text-brand-blue font-medium mb-2">Data de nascimento</label>
                  <input type="date" required className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
                <div>
                  <label className="block text-brand-blue font-medium mb-2">Nível de ensino pretendido</label>
                  <select required className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors bg-white">
                    <option value="">Selecione</option>
                    <option>Educação Infantil</option>
                    <option>Ensino Fundamental - Anos Iniciais (1º ao 5º)</option>
                    <option>Ensino Fundamental - Anos Finais (6º ao 9º)</option>
                    <option>Ensino Médio</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brand-blue font-medium mb-2">Período desejado</label>
                  <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors bg-white">
                    <option>Manhã</option>
                    <option>Tarde</option>
                    <option>Integral</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brand-blue font-medium mb-2">Como conheceu a escola?</label>
                  <input type="text" placeholder="Google, indicação..." className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
                
                <div>
                  <label className="block text-brand-blue font-medium mb-2">Documentos (enviar após contato)</label>
                  <input type="file" disabled className="w-full px-4 py-3 border-2 border-slate-200 bg-slate-50 rounded-2xl cursor-not-allowed text-slate-400" />
                  <small className="text-slate-500 mt-1 block">* Enviaremos instruções para upload após análise</small>
                </div>
              </div>
            </section>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="regulamento" required className="w-5 h-5 accent-brand-orange" />
              <label htmlFor="regulamento" className="text-slate-700 select-none cursor-pointer">Li e aceito o regulamento interno</label>
            </div>

            <div className="bg-brand-light-blue p-6 rounded-3xl">
              <p className="font-bold text-brand-blue mb-2">📌 Informações adicionais:</p>
              <ul className="text-sm space-y-1 text-slate-700">
                <li>• Mensalidades a partir de R$ 1.200,00 (Infantil) | R$ 1.500,00 (Fundamental) | R$ 1.800,00 (Médio)</li>
                <li>• Desconto de 10% para irmãos</li>
                <li>• Bolsas de estudo disponíveis (sujeito a análise)</li>
              </ul>
            </div>

            <button type="submit" className="w-full bg-brand-orange text-white font-bold text-lg py-4 rounded-full shadow-lg hover:bg-brand-orange-dark hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
              <CheckCircle size={24} /> Solicitar Matrícula
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Enrollment;