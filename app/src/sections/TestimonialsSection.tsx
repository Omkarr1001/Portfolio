import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

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

      // Left text entrance
      scrollTl.fromTo(
        textRef.current,
        { x: '-50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );
      // Left text exit
      scrollTl.to(
        textRef.current,
        { x: '-12vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Quote card entrance
      scrollTl.fromTo(
        quoteRef.current,
        { y: '14vh', scale: 0.97, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, ease: 'none' },
        0.12
      );
      // Quote card exit
      scrollTl.to(
        quoteRef.current,
        { y: '-8vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Right media entrance
      scrollTl.fromTo(
        mediaRef.current,
        { x: '70vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );
      // Right media exit
      scrollTl.to(
        mediaRef.current,
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`section-pinned flex items-center ${className}`}
    >
      {/* Left Text Block */}
      <div
        ref={textRef}
        className="absolute left-[6vw] top-[18vh] w-[38vw]"
      >
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cyber-text uppercase tracking-wide mb-6">
          What Teams Say
        </h2>
        <p className="text-cyber-muted text-base lg:text-lg leading-relaxed">
          I&apos;ve worked with startups and product teams to ship under pressure - without turning the codebase into a maze.
        </p>
      </div>

      {/* Quote Card */}
      <div
        ref={quoteRef}
        className="absolute left-[6vw] top-[46vh] w-[38vw] glass-card-strong p-6"
      >
        <Quote size={32} className="text-cyber-cyan/50 mb-4" />
        <blockquote className="text-cyber-text text-lg lg:text-xl leading-relaxed mb-6">
          &ldquo;Shipped our billing system in weeks, not months. Clean APIs, solid tests, and zero drama at launch.&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyber-cyan/20 flex items-center justify-center">
            <span className="text-cyber-cyan font-semibold text-sm">PL</span>
          </div>
          <div>
            <p className="text-cyber-text font-medium text-sm">Product Lead</p>
            <p className="text-cyber-muted text-xs">Fintech Startup</p>
          </div>
        </div>
      </div>

      {/* Right Media Card */}
      <div
        ref={mediaRef}
        className="absolute left-[52vw] top-[14vh] w-[42vw] h-[72vh] rounded-2xl overflow-hidden shadow-card"
      >
        <img
          src="/images/testimonials.jpg"
          alt="Team Collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-cyber-dark/40 to-transparent" />
      </div>
    </section>
  );
};

export default TestimonialsSection;

