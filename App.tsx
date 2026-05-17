import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Infantil from './pages/Infantil';
import Fundamental from './pages/Fundamental';
import Medio from './pages/Medio';
import Differentials from './pages/Differentials';
import Contact from './pages/Contact';
import Enrollment from './pages/Enrollment';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="infantil" element={<Infantil />} />
          <Route path="fundamental" element={<Fundamental />} />
          <Route path="medio" element={<Medio />} />
          <Route path="diferenciais" element={<Differentials />} />
          <Route path="contato" element={<Contact />} />
          <Route path="matricula" element={<Enrollment />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;