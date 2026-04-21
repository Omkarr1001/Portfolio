import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ArchitectureSectionProps {
  className?: string;
}

const ArchitectureSection = ({ className = '' }: ArchitectureSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

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

      // CTA entrance
      scrollTl.fromTo(
        ctaRef.current,
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.18
      );
      // CTA exit
      scrollTl.to(
        ctaRef.current,
        { y: '-6vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className={`section-pinned flex items-center ${className}`}
    >
      {/* Left Media Card */}
      <div
        ref={mediaRef}
        className="absolute left-[6vw] top-[14vh] w-[46vw] h-[72vh] rounded-2xl overflow-hidden shadow-card"
      >
        <img
          src="/images/architecture-code.jpg"
          alt="Clean Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/40 to-transparent" />
      </div>

      {/* Right Text Block */}
      <div
        ref={textRef}
        className="absolute left-[56vw] top-[18vh] w-[38vw]"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center">
            <Layers size={24} className="text-cyber-cyan" />
          </div>
        </div>
        
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cyber-text uppercase tracking-wide mb-6">
          Clean Architecture
        </h2>
        
        <p className="text-cyber-muted text-base lg:text-lg leading-relaxed">
          Domain-driven design with clear boundaries: entities, use cases, and interfaces. The result is testable, replaceable, and easy to extend without breaking what&apos;s live.
        </p>
      </div>

      {/* CTA Link */}
      <a
        ref={ctaRef}
        href="/images/architecture-code.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-[56vw] top-[72vh] flex items-center gap-2 text-cyber-cyan hover:underline group"
      >
        <span className="font-medium">See the diagram</span>
        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
    </section>
  );
};

export default ArchitectureSection;
