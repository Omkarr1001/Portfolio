import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, TrendingUp, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ResultsSectionProps {
  className?: string;
}

const stats = [
  { value: '<120ms', label: 'p95 API response', icon: Zap },
  { value: '99.9%', label: 'Uptime target', icon: Shield },
  { value: '10x', label: 'Faster iterations with AI', icon: TrendingUp },
];

const ResultsSection = ({ className = '' }: ResultsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

      // Stats chips entrance
      const statChips = statsRef.current?.children || [];
      scrollTl.fromTo(
        statChips,
        { y: '14vh', scale: 0.96, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, stagger: 0.02, ease: 'none' },
        0.12
      );
      // Stats chips exit
      scrollTl.to(
        statChips,
        { y: '-8vh', opacity: 0, stagger: 0.02, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="results"
      className={`section-pinned flex items-center ${className}`}
    >
      {/* Left Text Block */}
      <div
        ref={textRef}
        className="absolute left-[6vw] top-[18vh] w-[38vw]"
      >
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cyber-text uppercase tracking-wide mb-6">
          Performance That Holds Up
        </h2>
        <p className="text-cyber-muted text-base lg:text-lg leading-relaxed">
          Fast response times, stable throughput, and monitoring built in from day one. I optimize for the critical path—then document the tradeoffs.
        </p>
      </div>

      {/* Stats Row */}
      <div
        ref={statsRef}
        className="absolute left-[6vw] top-[66vh] w-[38vw] flex gap-4"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-chip flex-1"
          >
            <stat.icon size={20} className="text-cyber-cyan mb-2" />
            <span className="font-heading text-2xl lg:text-3xl font-bold text-cyber-text">
              {stat.value}
            </span>
            <span className="mono-label text-cyber-muted text-[10px] mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Right Media Card */}
      <div
        ref={mediaRef}
        className="absolute left-[52vw] top-[14vh] w-[42vw] h-[72vh] rounded-2xl overflow-hidden shadow-card"
      >
        <img
          src="/images/performance-servers.jpg"
          alt="Performance Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-cyber-dark/40 to-transparent" />
      </div>
    </section>
  );
};

export default ResultsSection;
