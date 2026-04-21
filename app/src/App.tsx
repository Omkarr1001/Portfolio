import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import FeaturedProjectSection from './sections/FeaturedProjectSection';
import CapabilitiesSection from './sections/CapabilitiesSection';
import AIAgentSection from './sections/AIAgentSection';
import TechStackSection from './sections/TechStackSection';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: -999, y: -999 });

  /* ── Cursor spotlight ── */
  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  /* ── Scroll fade-up ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } }
        );
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  /* ── Global 3D tilt ── */
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    const apply = () => {
      document.querySelectorAll<HTMLElement>('.tilt-card').forEach((card) => {
        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const x = ((e.clientX - r.left)  / r.width  - 0.5) * 14;
          const y = ((e.clientY - r.top)   / r.height - 0.5) * 14;
          card.style.transition = 'transform 0.08s linear, box-shadow 0.08s linear';
          card.style.transform  = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(16px)`;
          card.style.boxShadow  = `inset 0 1px 0 rgba(255,255,255,0.08),0 28px 80px rgba(0,0,0,0.55),${x*-0.8}px ${y*-0.8}px 40px rgba(245,158,11,0.12)`;
        };
        const onLeave = () => {
          card.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.55s ease';
          card.style.transform  = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)';
          card.style.boxShadow  = '';
        };
        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
        cleanups.push(() => {
          card.removeEventListener('mousemove', onMove);
          card.removeEventListener('mouseleave', onLeave);
        });
      });
    };
    const t = setTimeout(apply, 700);
    return () => { clearTimeout(t); cleanups.forEach(f => f()); };
  }, []);

  /* ── Magnetic buttons ── */
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    const apply = () => {
      document.querySelectorAll<HTMLElement>('.magnetic').forEach((btn) => {
        const onMove = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width  / 2;
          const y = e.clientY - r.top  - r.height / 2;
          gsap.to(btn, { x: x * 0.32, y: y * 0.32, duration: 0.3, ease: 'power2.out' });
        };
        const onLeave = () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.4)' });
        };
        btn.addEventListener('mousemove', onMove);
        btn.addEventListener('mouseleave', onLeave);
        cleanups.push(() => {
          btn.removeEventListener('mousemove', onMove);
          btn.removeEventListener('mouseleave', onLeave);
        });
      });
    };
    const t = setTimeout(apply, 800);
    return () => { clearTimeout(t); cleanups.forEach(f => f()); };
  }, []);

  return (
    <div ref={mainRef} className="relative bg-cyber-dark min-h-screen">

      {/* ── Cursor spotlight ── */}
      <div
        className="spotlight"
        style={{
          background: `radial-gradient(700px circle at ${cursor.x}px ${cursor.y}px,
            rgba(245,158,11,0.055) 0%,
            rgba(124,58,237,0.025) 40%,
            transparent 70%)`,
        }}
      />

      {/* ── Noise ── */}
      <div className="noise-overlay" />

      {/* ── Grid ── */}
      <div className="fixed inset-0 grid-overlay pointer-events-none z-0" />

      {/* ── Aurora blobs ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="aurora-blob animate-aurora-1"
          style={{ width:'60vw', height:'60vw', top:'-18%', left:'-12%',
            background:'radial-gradient(circle, rgba(124,58,237,0.16) 0%, rgba(109,40,217,0.07) 40%, transparent 70%)' }} />
        <div className="aurora-blob animate-aurora-2"
          style={{ width:'50vw', height:'50vw', bottom:'-16%', right:'-10%',
            background:'radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(217,119,6,0.05) 40%, transparent 70%)' }} />
        <div className="aurora-blob animate-aurora-3"
          style={{ width:'35vw', height:'35vw', top:'20%', right:'15%',
            background:'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)' }} />
        <div className="aurora-blob animate-aurora-2"
          style={{ width:'28vw', height:'28vw', bottom:'25%', left:'8%',
            background:'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
            animationDelay:'5s' }} />
      </div>

      {/* ── Spinning rings ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="ring-deco animate-spin-slow"
          style={{ width:'92vw', height:'92vw', top:'50%', left:'50%', marginTop:'-46vw', marginLeft:'-46vw',
            borderColor:'rgba(245,158,11,0.05)' }} />
        <div className="ring-deco"
          style={{ width:'62vw', height:'62vw', top:'50%', left:'50%', marginTop:'-31vw', marginLeft:'-31vw',
            borderColor:'rgba(124,58,237,0.07)',
            animation:'spin-slow 45s linear infinite reverse' }} />
      </div>

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <FeaturedProjectSection />
        <CapabilitiesSection />
        <AIAgentSection />
        <TechStackSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
