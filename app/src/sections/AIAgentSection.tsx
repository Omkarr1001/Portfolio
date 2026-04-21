import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bot, Workflow, Database, Lightbulb, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Workflow,
    title: 'Desktop Automation',
    description:
      'Executes real tasks on the desktop — file management, app control, and multi-step workflows triggered from a single natural language instruction.',
  },
  {
    icon: Database,
    title: 'Context-Aware Memory',
    description:
      'Remembers prior interactions and ongoing tasks to give relevant, connected assistance across sessions — not a stateless chatbot.',
  },
  {
    icon: Lightbulb,
    title: 'Structured AI Execution',
    description:
      'Built on structured prompt orchestration with safe execution boundaries. Plans the action, confirms intent, then executes.',
  },
];

const AIAgentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.agent-el',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ai-agent" className="section-block">
      <div className="section-container">
        <div className="glass-card-strong p-8 lg:p-12 border-cyber-green/15">

          {/* Top row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
            <div className="agent-el">
              <div className="section-eyebrow">
                <div className="w-6 h-px bg-cyber-green/60" />
                <span className="mono-label text-cyber-green text-[11px]">Featured Project</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-cyber-green/10 border border-cyber-green/25 flex items-center justify-center">
                  <Bot size={24} className="text-cyber-green" />
                </div>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cyber-text mb-3">
                Personal AI Assistant
              </h2>
              <p className="text-cyber-muted text-base leading-relaxed max-w-lg">
                Not a chatbot. A desktop assistant that understands your ongoing tasks, remembers context across sessions,
                and executes actions end-to-end — backed by structured prompt orchestration and safe execution boundaries.
              </p>
            </div>

            <div className="agent-el flex flex-col gap-3 shrink-0">
              <div className="glass-card px-4 py-3 text-center min-w-[140px] border-cyber-green/15">
                <Cpu size={16} className="text-cyber-green mx-auto mb-1.5" />
                <div className="text-xs font-heading font-bold text-cyber-text">Python</div>
                <div className="text-[10px] text-cyber-muted mt-0.5">Core Runtime</div>
              </div>
              <div className="glass-card px-4 py-3 text-center border-cyber-green/15">
                <Bot size={16} className="text-cyber-green mx-auto mb-1.5" />
                <div className="text-xs font-heading font-bold text-cyber-text">OpenAI API</div>
                <div className="text-[10px] text-cyber-muted mt-0.5">Intelligence Layer</div>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/[0.05] mb-8" />

          {/* Feature list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="agent-el flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyber-green/10 border border-cyber-green/20 flex items-center justify-center">
                    <Icon size={16} className="text-cyber-green" />
                  </div>
                  <h3 className="font-heading font-semibold text-cyber-text">{feat.title}</h3>
                  <p className="text-sm text-cyber-muted leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIAgentSection;
