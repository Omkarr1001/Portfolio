import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, ArrowUpRight, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-el',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-block">
      <div className="section-container">
        <div className="glass-card-strong tilt-card p-8 lg:p-16 text-center" style={{ borderColor: 'rgba(245,158,11,0.16)' }}>

          {/* Glow blob */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, rgba(124,58,237,0.06) 50%, transparent 70%)' }} />
          </div>

          <div className="relative flex flex-col items-center">
            <div className="cta-el section-eyebrow justify-center mb-6">
              <div className="w-6 h-px bg-cyber-cyan/60" />
              <span className="mono-label text-cyber-cyan text-[11px]">Let's Connect</span>
              <div className="w-6 h-px bg-cyber-cyan/60" />
            </div>

            <h2 className="cta-el font-heading font-bold text-white leading-tight mb-4 headline-shadow"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Build Something<br />
              <span className="text-gradient-cyan">Worth Shipping</span>
            </h2>

            <p className="cta-el text-cyber-muted text-base lg:text-lg leading-relaxed max-w-xl mb-3">
              Tell me what you're building. I'll reply with a clear plan, realistic timeline, and honest tradeoffs.
            </p>

            <div className="cta-el flex items-center gap-1.5 text-cyber-muted text-sm mb-10">
              <MapPin size={13} />
              <span>Pune, India</span>
            </div>

            {/* Primary CTAs */}
            <div className="cta-el flex items-center gap-4 flex-wrap justify-center mb-8">
              <a
                href="mailto:salunkheomkar1001@gmail.com"
                className="btn-primary magnetic flex items-center gap-2 group"
              >
                <Mail size={16} />
                <span>Email Me</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="tel:+919373573102"
                className="btn-outline flex items-center gap-2"
              >
                <Phone size={16} />
                <span>Call Me</span>
              </a>
            </div>

            {/* Secondary links */}
            <div className="cta-el flex items-center gap-6 flex-wrap justify-center">
              <a
                href="https://linkedin.com/in/omkar-salunkhe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyber-muted hover:text-cyber-cyan transition-colors text-sm"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://github.com/Omkarr1001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyber-muted hover:text-cyber-cyan transition-colors text-sm"
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="mailto:salunkheomkar1001@gmail.com?subject=Request%20resume"
                className="flex items-center gap-1.5 text-cyber-muted hover:text-cyber-cyan transition-colors text-sm"
              >
                <FileText size={14} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
