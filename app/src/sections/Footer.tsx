import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.05] py-14 lg:py-16">
      <div className="absolute top-0 inset-x-0 soft-divider" />
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(245,158,11,0.10)', border: '1px solid rgba(245,158,11,0.28)' }}>
                <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
              </div>
              <span className="font-heading font-bold text-base tracking-wide text-white">
                Omkar<span className="text-cyber-cyan">.</span>
              </span>
            </div>
            <p className="text-cyber-muted text-sm leading-relaxed max-w-xs">
              Software Developer building CRM systems, real-time applications, and AI-powered business tools.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex items-center gap-2 text-cyber-muted text-sm">
                <MapPin size={13} />
                <span>Pune, India</span>
              </div>
              <a href="tel:+919373573102" className="flex items-center gap-2 text-cyber-muted text-sm hover:text-cyber-cyan transition-colors">
                <Phone size={13} />
                <span>+91 9373573102</span>
              </a>
              <a href="mailto:salunkheomkar1001@gmail.com" className="flex items-center gap-2 text-cyber-muted text-sm hover:text-cyber-cyan transition-colors">
                <Mail size={13} />
                <span>salunkheomkar1001@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="mono-label text-cyber-muted text-[10px]">Navigation</span>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
                { label: 'AI Capabilities', id: 'ai-capabilities' },
                { label: 'Tech Stack', id: 'tech-stack' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-cyber-muted hover:text-cyber-text transition-colors text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <span className="mono-label text-cyber-muted text-[10px]">Connect</span>
            <div className="flex flex-col gap-2.5">
              <a href="https://linkedin.com/in/omkar-salunkhe" target="_blank" rel="noopener noreferrer"
                className="text-cyber-muted hover:text-cyber-cyan transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://github.com/Omkarr1001" target="_blank" rel="noopener noreferrer"
                className="text-cyber-muted hover:text-cyber-cyan transition-colors text-sm">
                GitHub
              </a>
              <a href="mailto:salunkheomkar1001@gmail.com?subject=Request%20resume"
                className="text-cyber-muted hover:text-cyber-cyan transition-colors text-sm">
                Resume
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cyber-muted/60 text-xs">© 2026 Omkar Salunkhe. All rights reserved.</p>
          <p className="text-cyber-muted/40 text-xs">Built with React · Tailwind · GSAP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
