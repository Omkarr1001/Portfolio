import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'AI', id: 'ai-capabilities' },
    { label: 'Stack', id: 'tech-stack' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled
            ? 'bg-cyber-dark/80 backdrop-blur-2xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'rgba(245,158,11,0.10)', border: '1px solid rgba(245,158,11,0.30)' }}>
                <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
              </div>
              <span className="font-heading font-bold text-base tracking-wide text-white">
                Omkar<span className="text-cyber-cyan">.</span>
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-1.5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="mono-label text-cyber-muted hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/[0.06]"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <a
              href="mailto:salunkheomkar1001@gmail.com"
              className="hidden md:flex btn-primary py-2 px-4 text-xs items-center gap-1.5"
            >
              Hire Me
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden p-2 text-cyber-text"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[999] bg-cyber-dark/97 backdrop-blur-xl transition-all duration-400 md:hidden flex flex-col items-center justify-center gap-6 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="font-heading text-3xl font-bold text-cyber-text hover:text-cyber-cyan transition-colors"
          >
            {link.label}
          </button>
        ))}
        <a
          href="mailto:salunkheomkar1001@gmail.com"
          className="btn-primary mt-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Hire Me
        </a>
      </div>
    </>
  );
};

export default Navigation;
