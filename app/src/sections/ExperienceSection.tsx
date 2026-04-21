import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Software Developer',
    company: 'A1 Systems',
    location: 'Satara',
    period: 'Oct 2025 – Present',
    status: 'active',
    color: 'green' as const,
    achievements: [
      'Built CRM modules for business workflows — attendance, lead tracking, marketing automation, and reporting',
      'Developed Android applications for operational management with real-time backend synchronization',
      'Implemented real-time data sync across multi-user systems ensuring consistency under concurrent load',
      'Delivered Restaurant Management System with Captain Pad for table-side ordering and live admin sync',
      'Built GPS-based Live Location Tracker for employee monitoring and logistics operations',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Zepmed Pvt Ltd',
    location: 'Baramati',
    period: 'Apr 2026 – Present',
    status: 'active',
    color: 'cyan' as const,
    achievements: [
      'Developed scalable business applications handling large volumes of transactional data',
      'Worked on authentication and licensing systems to secure access and enforce subscription models',
      'Contributed to production-ready systems with focus on stability, reliability, and maintainability',
      'Built backend APIs and business logic using Java Spring Boot and PHP',
      'Participated in code reviews, testing workflows, and deployment processes for production releases',
    ],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
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
    <section ref={sectionRef} id="experience" className="section-block">
      <div className="section-container">

        {/* Header */}
        <div className="reveal mb-12">
          <div className="section-eyebrow">
            <div className="w-6 h-px bg-cyber-cyan/60" />
            <span className="mono-label text-cyber-cyan text-[11px]">Work Experience</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cyber-text">
            Where I Work
          </h2>
          <p className="mt-3 text-cyber-muted text-base lg:text-lg max-w-lg leading-relaxed">
            Currently active at two companies simultaneously, building real systems in production.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className={`exp-card tilt-card glass-card p-7`}
              style={{ borderColor: exp.color === 'green' ? 'rgba(167,139,250,0.18)' : 'rgba(255,255,255,0.12)' }}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${exp.color === 'green' ? 'bg-cyber-green' : 'bg-white'}`} />
                    <span className={`mono-label text-[10px] ${exp.color === 'green' ? 'text-cyber-green' : 'text-white'}`}>
                      Current
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-cyber-text">{exp.title}</h3>
                  <p className={`font-medium text-sm mt-0.5 ${exp.color === 'green' ? 'text-cyber-green' : 'text-white'}`}>
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-5 text-xs text-cyber-muted">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="h-px bg-white/[0.05] mb-5" />

              {/* Achievements */}
              <ul className="flex flex-col gap-3">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-cyber-muted leading-relaxed">
                    <CheckCircle2
                      size={14}
                      className={`mt-0.5 shrink-0 ${exp.color === 'green' ? 'text-cyber-green/60' : 'text-white/50'}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
