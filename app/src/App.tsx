import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import SiteNav from './components/layout/SiteNav';
import SiteFooter from './components/layout/SiteFooter';
import HomePage from './pages/HomePage';
import HotelWorldPage from './pages/HotelWorldPage';
import MedicineWorldPage from './pages/MedicineWorldPage';
import AiWorldPage from './pages/AiWorldPage';

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <ScrollManager />
      <SiteNav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/hotel" element={<HotelWorldPage />} />
          <Route path="/work/medicine" element={<MedicineWorldPage />} />
          <Route path="/work/ai" element={<AiWorldPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
