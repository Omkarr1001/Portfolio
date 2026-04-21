import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Shield, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProcessSectionProps {
  className?: string;
}

const principles = [
  {
    icon: Target,
    title: 'Own the critical path',
    description: 'Optimize what matters; measure everything else.',
  },
  {
    icon: Shield,
    title: 'Design for failure',
    description: 'Retries, circuit breakers, clear error messages.',
  },
  {
    icon: FileText,
    title: 'Write for the next reader',
    description: 'Clean contracts + docs that stay current.',
  },
];

const ProcessSection = ({ className = '' }: ProcessSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Media card entrance
      scrollTl.fromTo(
        mediaRef.current,
        { x: '-70vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );
      // Media card exit
      scrollTl.to(
        mediaRef.current,
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Text entrance
      scrollTl.fromTo(
        textRef.current,
        { x: '50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.08
      );
      // Text exit
      scrollTl.to(
        textRef.current,
        { x: '12vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Principles entrance
      const principleItems = principlesRef.current?.children || [];
      scrollTl.fromTo(
        principleItems,
        { y: '12vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.14
      );
      // Principles exit
      scrollTl.to(
        principleItems,
        { y: '-8vh', opacity: 0, stagger: 0.02, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className={`section-pinned flex items-center ${className}`}
    >
      {/* Left Media Card */}
      <div
        ref={mediaRef}
        className="absolute left-[6vw] top-[14vh] w-[46vw] h-[72vh] rounded-2xl overflow-hidden shadow-card"
      >
        <img
          src="/images/process-planning.jpg"
          alt="Process Planning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/50 to-transparent" />
      </div>

      {/* Right Text Block */}
      <div
        ref={textRef}
        className="absolute left-[56vw] top-[18vh] w-[38vw]"
      >
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cyber-text uppercase tracking-wide mb-6">
          How I Work
        </h2>
        <p className="text-cyber-muted text-base lg:text-lg leading-relaxed">
          I ship small, validate, then harden. Security, logging, and rollback plans are part of the first slice - not an afterthought.
        </p>
      </div>

      {/* Principles List */}
      <div
        ref={principlesRef}
        className="absolute left-[56vw] top-[56vh] w-[38vw] flex flex-col gap-4"
      >
        {principles.map((principle, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyber-cyan/20 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 flex items-center justify-center flex-shrink-0">
              <principle.icon size={18} className="text-cyber-cyan" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-cyber-text mb-1">
                {principle.title}
              </h3>
              <p className="text-sm text-cyber-muted">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;

