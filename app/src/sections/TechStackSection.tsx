import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Globe, Smartphone, BrainCircuit, GitBranch, Cpu, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stackGroups = [
  {
    label: 'Backend',
    color: 'cyan',
    items: [
      { name: 'Java', icon: Code2 },
      { name: 'Spring Boot', icon: Server },
      { name: 'PHP', icon: Code2 },
    ],
  },
  {
    label: 'Frontend',
    color: 'green',
    items: [
      { name: 'Angular', icon: Globe },
      { name: 'Android', icon: Smartphone },
      { name: 'Kotlin', icon: Smartphone },
    ],
  },
  {
    label: 'Systems',
    color: 'cyan',
    items: [
      { name: 'Real-time Sync', icon: Cpu },
      { name: 'Multi-user Arch', icon: Cpu },
      { name: 'MySQL', icon: Database },
    ],
  },
  {
    label: 'AI & Tools',
    color: 'green',
    items: [
      { name: 'OpenAI APIs', icon: BrainCircuit },
      { name: 'Prompt Workflows', icon: BrainCircuit },
      { name: 'Git / GitHub', icon: GitBranch },
    ],
  },
];

const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stack-group',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
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
    <section ref={sectionRef} id="tech-stack" className="section-block">
      <div className="section-container">

        {/* Header */}
        <div className="reveal mb-12">
          <div className="section-eyebrow">
            <div className="w-6 h-px bg-cyber-cyan/60" />
            <span className="mono-label text-cyber-cyan text-[11px]">Tech Stack</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cyber-text">
            Tools & Technologies
          </h2>
          <p className="mt-3 text-cyber-muted text-base leading-relaxed max-w-lg">
            Java Spring Boot and PHP for backend. Angular and Android for interfaces. OpenAI APIs for intelligence.
            Real-time sync for multi-user architectures.
          </p>
        </div>

        {/* Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stackGroups.map((group) => (
            <div key={group.label} className="stack-group">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-1.5 h-1.5 rounded-full ${group.color === 'cyan' ? 'bg-cyber-cyan' : 'bg-cyber-green'}`} />
                <span className={`mono-label text-[10px] ${group.color === 'cyan' ? 'text-cyber-cyan' : 'text-cyber-green'}`}>
                  {group.label}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-cyber-cyan/25 hover:bg-white/[0.04] transition-all duration-200"
                    >
                      <Icon
                        size={14}
                        className={group.color === 'cyan' ? 'text-cyber-cyan/70' : 'text-cyber-green/70'}
                      />
                      <span className="text-sm text-cyber-text font-medium">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
