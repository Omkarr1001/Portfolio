import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Code2, Globe, Mail, MapPin, Layers, Bot, ChevronDown } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const years   = useCounter(2, 1600);
  const projects = useCounter(5, 2000);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.hero-badge',  { y: -28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 });
      tl.fromTo('.hero-line-1', { y: 90,  opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, '-=0.3');
      tl.fromTo('.hero-line-2', { y: 90,  opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, '-=0.8');
      tl.fromTo('.hero-sub',    { y: 32,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5');
      tl.fromTo('.hero-cta',    { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');
      tl.fromTo('.hero-bento',  { y: 44, scale: 0.96, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.65, stagger: 0.1 }, '-=0.3');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 pb-10">

      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[12%] right-[6%] w-80 h-80 rounded-full animate-float opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #F59E0B, transparent 65%)' }} />
        <div className="absolute bottom-[18%] left-[4%] w-56 h-56 rounded-full animate-float-2 opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #7C3AED, transparent 65%)' }} />
      </div>

      <div className="section-container w-full">

        {/* Status badge */}
        <div className="hero-badge inline-flex items-center gap-3 mb-10">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
            style={{ border: '1px solid rgba(245,158,11,0.38)', background: 'rgba(245,158,11,0.07)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
            <span className="mono-label text-cyber-cyan text-[10px]">Open to projects</span>
          </div>
          <div className="flex items-center gap-1.5 text-cyber-muted text-xs">
            <MapPin size={11} />
            <span>Pune, India</span>
          </div>
        </div>

        {/* Display name */}
        <div className="mb-7" style={{ perspective: '900px' }}>
          <div className="overflow-hidden">
            <h1 className="hero-line-1 font-heading font-bold text-cyber-text leading-[0.87] tracking-tight"
              style={{ fontSize: 'clamp(4.2rem, 11.5vw, 10.5rem)' }}>
              Omkar
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line-2 font-heading font-bold leading-[0.87] tracking-tight text-gradient-cyan headline-shadow"
              style={{ fontSize: 'clamp(4.2rem, 11.5vw, 10.5rem)' }}>
              Salunkhe
            </h1>
          </div>
        </div>

        {/* Role + tagline */}
        <div className="hero-sub flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10 mb-10 max-w-4xl">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-px" style={{ background: 'rgba(245,158,11,0.55)' }} />
            <span className="mono-label text-cyber-cyan text-[11px]">
              Software Developer · AI Systems Builder
            </span>
          </div>
          <p className="text-cyber-muted text-base lg:text-lg leading-relaxed">
            Building CRM systems, real-time multi-user apps, and AI-powered business tools.
            Active at{' '}
            <span className="text-white font-semibold">A1 Systems</span>
            {' '}and{' '}
            <span className="text-white font-semibold">Zepmed Pvt Ltd</span>.
          </p>
        </div>

        {/* CTAs — magnetic class enables GSAP attract */}
        <div className="hero-cta flex items-center gap-3 flex-wrap mb-16">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary magnetic flex items-center gap-2 group"
          >
            <span>View Projects</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="mailto:salunkheomkar1001@gmail.com" className="btn-outline magnetic flex items-center gap-2">
            <Mail size={15} />
            <span>Get in Touch</span>
          </a>
          <div className="flex items-center gap-2 ml-1">
            <a href="https://github.com/Omkarr1001" target="_blank" rel="noopener noreferrer"
              className="magnetic w-10 h-10 rounded-xl flex items-center justify-center text-cyber-muted transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(245,158,11,0.5)'; el.style.color='#F59E0B'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(255,255,255,0.09)'; el.style.color=''; }}>
              <Code2 size={17} />
            </a>
            <a href="https://linkedin.com/in/omkar-salunkhe" target="_blank" rel="noopener noreferrer"
              className="magnetic w-10 h-10 rounded-xl flex items-center justify-center text-cyber-muted transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(245,158,11,0.5)'; el.style.color='#F59E0B'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(255,255,255,0.09)'; el.style.color=''; }}>
              <Globe size={17} />
            </a>
          </div>
        </div>

        {/* Bento row — floating + counting stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          {/* Counter card 1 */}
          <div className="hero-bento shimmer-card tilt-card p-5 flex flex-col gap-3 animate-float">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background:'rgba(245,158,11,0.10)', border:'1px solid rgba(245,158,11,0.25)' }}>
              <Layers size={16} className="text-cyber-cyan" />
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-white leading-none mb-1">
                <span ref={years.ref}>{years.count}</span>+
              </div>
              <div className="text-xs text-cyber-muted leading-tight">Years Production Experience</div>
            </div>
          </div>

          {/* A1 Systems card */}
          <div className="hero-bento tilt-card glass-card p-5 flex flex-col gap-3 animate-float"
            style={{ animationDelay:'1.2s', borderColor:'rgba(245,158,11,0.18)' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
              <span className="mono-label text-cyber-cyan text-[10px]">Active</span>
            </div>
            <div>
              <div className="text-sm font-heading font-bold text-white mb-0.5">A1 Systems</div>
              <div className="text-xs text-cyber-muted">Software Developer</div>
              <div className="text-[10px] mt-1 font-mono" style={{ color:'rgba(113,113,122,0.8)' }}>
                Oct 2025 – Present
              </div>
            </div>
          </div>

          {/* Zepmed card */}
          <div className="hero-bento tilt-card glass-card p-5 flex flex-col gap-3 animate-float"
            style={{ animationDelay:'2.2s', borderColor:'rgba(124,58,237,0.22)' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              <span className="mono-label text-cyber-green text-[10px]">Active</span>
            </div>
            <div>
              <div className="text-sm font-heading font-bold text-white mb-0.5">Zepmed Pvt Ltd</div>
              <div className="text-xs text-cyber-muted">Software Developer</div>
              <div className="text-[10px] mt-1 font-mono" style={{ color:'rgba(113,113,122,0.8)' }}>
                Apr 2026 – Present
              </div>
            </div>
          </div>

          {/* Counter card 2 */}
          <div className="hero-bento shimmer-card tilt-card p-5 flex flex-col gap-3 animate-float"
            style={{ animationDelay:'0.6s' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background:'rgba(124,58,237,0.10)', border:'1px solid rgba(124,58,237,0.25)' }}>
              <Bot size={16} className="text-cyber-green" />
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-white leading-none mb-1">
                <span ref={projects.ref}>{projects.count}</span>
              </div>
              <div className="text-xs text-cyber-muted leading-tight">AI-Integrated Projects</div>
            </div>
          </div>

        </div>

        {/* Scroll cue */}
        <div className="flex items-center gap-2 mt-14" style={{ color:'rgba(113,113,122,0.45)' }}>
          <ChevronDown size={14} className="animate-bounce" />
          <span className="mono-label text-[10px]">Scroll to explore</span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
