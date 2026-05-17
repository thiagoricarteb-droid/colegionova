import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, Instagram, Facebook, Youtube, Linkedin, 
  CheckCircle, MapPin, Mail, Clock, Edit
} from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinkClass = (path: string) => `
    font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200 py-1 border-b-2
    ${isActive(path) ? 'text-brand-blue border-brand-orange' : 'border-transparent'}
  `;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-5 py-3 flex items-center justify-between flex-wrap">
          <Link to="/" className="font-poppins text-2xl font-bold text-brand-blue flex items-center gap-2" onClick={closeMenu}>
            📚 Colégio<span className="text-brand-orange font-normal"> Inova</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-brand-blue" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation */}
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex w-full lg:w-auto flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-4 lg:mt-0 transition-all`}>
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center list-none m-0 p-0">
              <li><Link to="/" className={navLinkClass('/')} onClick={closeMenu}>Home</Link></li>
              <li><Link to="/infantil" className={navLinkClass('/infantil')} onClick={closeMenu}>Infantil</Link></li>
              <li><Link to="/fundamental" className={navLinkClass('/fundamental')} onClick={closeMenu}>Fundamental</Link></li>
              <li><Link to="/medio" className={navLinkClass('/medio')} onClick={closeMenu}>Médio</Link></li>
              <li><Link to="/diferenciais" className={navLinkClass('/diferenciais')} onClick={closeMenu}>Diferenciais</Link></li>
              <li><Link to="/contato" className={navLinkClass('/contato')} onClick={closeMenu}>Contato</Link></li>
              <li><Link to="/matricula" className={navLinkClass('/matricula')} onClick={closeMenu}>Matrícula</Link></li>
            </ul>
            <Link 
              to="/matricula" 
              className="bg-brand-orange text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-brand-orange-dark hover:scale-105 transition-all duration-200 flex items-center gap-2 font-poppins"
              onClick={closeMenu}
            >
              <Edit size={18} /> Matrícula 2026
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-200 z-40"
      >
        <Phone size={28} fill="white" />
      </a>

      {/* Footer */}
      <footer className="bg-brand-blue text-white pt-12 pb-6 px-5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <div className="font-poppins text-2xl font-bold mb-3">
              📚 Colégio<span className="text-brand-orange"> Inova</span>
            </div>
            <p className="opacity-90 leading-relaxed mb-4">
              Educação que transforma futuros há mais de 25 anos. Da Educação Infantil ao Ensino Médio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm flex items-center gap-1.5">
                <CheckCircle size={14} /> MEC
              </span>
              <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm flex items-center gap-1.5">
                <CheckCircle size={14} /> BNCC
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-5">Níveis de Ensino</h4>
            <ul className="space-y-3">
              <li><Link to="/infantil" className="opacity-90 hover:opacity-100 hover:underline">Educação Infantil</Link></li>
              <li><Link to="/fundamental" className="opacity-90 hover:opacity-100 hover:underline">Ensino Fundamental</Link></li>
              <li><Link to="/medio" className="opacity-90 hover:opacity-100 hover:underline">Ensino Médio</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><Link to="/diferenciais" className="opacity-90 hover:opacity-100 hover:underline">Diferenciais</Link></li>
              <li><Link to="/contato" className="opacity-90 hover:opacity-100 hover:underline">Contato</Link></li>
              <li><Link to="/matricula" className="opacity-90 hover:opacity-100 hover:underline">Matrícula 2026</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 opacity-90">
                <Phone size={18} /> (11) 99999-9999
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <Mail size={18} /> contato@colegioinova.com.br
              </li>
              <li className="flex items-start gap-3 opacity-90">
                <MapPin size={18} className="shrink-0 mt-1" /> Av. Paulista, 1500 - São Paulo/SP
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <Clock size={18} /> Secretaria: Seg-Sex 7h-18h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
          <p>© 2025 Colégio Inova · Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;