import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrainCircuit, Workflow, Code2, Settings2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: BrainCircuit,
    title: 'Prompt Design',
    description:
      'Structured prompt engineering for reliable, consistent LLM outputs in production workflows — not just chatbot responses.',
  },
  {
    icon: Workflow,
    title: 'LLM API Automation',
    description:
      'Automating business processes using OpenAI APIs — from data extraction to lead scoring and response generation.',
  },
  {
    icon: Code2,
    title: 'AI in Real Applications',
    description:
      'Integrating AI features into production systems: CRM intelligence, financial insights, smart desktop assistants.',
  },
  {
    icon: Settings2,
    title: 'Context & Workflow Design',
    description:
      'Multi-step AI workflows with session memory, context handling, and safe execution boundaries for real-world use.',
  },
];

const CapabilitiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cap-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
    <section ref={sectionRef} id="ai-capabilities" className="section-block">
      <div className="section-container">

        {/* Header */}
        <div className="reveal mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="section-eyebrow">
              <div className="w-6 h-px bg-cyber-cyan/60" />
              <span className="mono-label text-cyber-cyan text-[11px]">AI Capabilities</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cyber-text">
              Beyond Building —<br />
              <span className="text-gradient-cyan">Intelligence Inside</span>
            </h2>
          </div>
          <p className="text-cyber-muted text-base leading-relaxed max-w-sm lg:max-w-xs lg:text-right">
            Real AI features in real products. Not demos. Not wrappers. Integrated intelligence that solves business problems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="cap-card tilt-card glass-card p-6 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{ background: 'rgba(167,139,250,0.10)', border: '1px solid rgba(167,139,250,0.25)' }}>
                  <Icon size={20} className="text-cyber-green" />
                </div>
                <h3 className="font-heading font-bold text-cyber-text text-lg mb-2">{cap.title}</h3>
                <p className="text-cyber-muted text-sm leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
