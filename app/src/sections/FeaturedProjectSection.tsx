import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Wifi, MapPin, BrainCircuit, Bot, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    icon: Users,
    label: 'CRM System',
    title: 'Multi-Module CRM',
    description:
      'Production CRM covering attendance, lead management, marketing automation, and reporting. Real-time multi-user architecture with AI-based lead scoring and response generation.',
    tags: ['Java Spring Boot', 'Angular', 'MySQL', 'OpenAI API', 'Real-time'],
    accent: 'cyan',
    size: 'large',
  },
  {
    icon: Wifi,
    label: 'Restaurant System',
    title: 'Restaurant Management',
    description:
      'Network-based system with Captain Pad for table-side ordering. Orders sync live with the admin dashboard. Supports concurrent captains without data conflicts.',
    tags: ['PHP', 'Android', 'MySQL', 'WebSocket'],
    accent: 'green',
    size: 'normal',
  },
  {
    icon: MapPin,
    label: 'Location Tracker',
    title: 'Real-Time GPS Tracker',
    description:
      'Live location tracking for employee field monitoring and logistics. Tracks GPS coordinates in real time, visualizes routes, supports multi-device concurrent tracking.',
    tags: ['Android', 'Google Maps API', 'Spring Boot'],
    accent: 'cyan',
    size: 'normal',
  },
  {
    icon: BrainCircuit,
    label: 'AI Finance',
    title: 'AI Finance Manager',
    description:
      'Expense tracking with AI-generated financial insights. Users get intelligent summaries, spending patterns, and budget recommendations from LLM analysis of their data.',
    tags: ['React', 'Node.js', 'OpenAI API', 'MySQL'],
    accent: 'green',
    size: 'normal',
  },
  {
    icon: Bot,
    label: 'AI Assistant',
    title: 'Desktop AI Assistant',
    description:
      'Context-aware desktop automation assistant. Understands ongoing tasks, remembers sessions, executes workflows end-to-end via structured prompt orchestration.',
    tags: ['Python', 'OpenAI API', 'Prompt Engineering'],
    accent: 'cyan',
    size: 'normal',
  },
];

const accentClasses = {
  cyan: {
    border: 'border-white/10 hover:border-white/25',
    icon: 'bg-white/[0.07] border-white/20 text-white',
    tag: 'text-white/70',
    label: 'text-white',
    dot: 'bg-white',
  },
  green: {
    border: 'border-cyber-green/15 hover:border-cyber-green/35',
    icon: 'bg-cyber-green/10 border-cyber-green/20 text-cyber-green',
    tag: 'text-cyber-green/80',
    label: 'text-cyber-green',
    dot: 'bg-cyber-green',
  },
};

const ProjectCard = ({ project, large = false }: { project: typeof projects[0]; large?: boolean }) => {
  const a = accentClasses[project.accent as 'cyan' | 'green'];
  const Icon = project.icon;

  return (
    <div
      className={`project-card group flex flex-col gap-5 ${a.border} ${large ? 'lg:col-span-2' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${a.icon}`}>
          <Icon size={18} />
        </div>
        <ArrowUpRight
          size={16}
          className="text-cyber-muted/40 group-hover:text-cyber-muted transition-colors mt-1"
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
          <span className={`mono-label text-[10px] ${a.label}`}>{project.label}</span>
        </div>
        <h3 className={`font-heading font-bold text-cyber-text mb-2 ${large ? 'text-2xl' : 'text-xl'}`}>
          {project.title}
        </h3>
        <p className="text-cyber-muted text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/[0.04]">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

const FeaturedProjectSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.proj-card',
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
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

  const [featured, ...rest] = projects;

  return (
    <section ref={sectionRef} id="projects" className="section-block">
      <div className="section-container">

        {/* Header */}
        <div className="reveal mb-12">
          <div className="section-eyebrow">
            <div className="w-6 h-px bg-cyber-green/60" />
            <span className="mono-label text-cyber-green text-[11px]">Featured Work</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cyber-text">
            Projects
          </h2>
          <p className="mt-3 text-cyber-muted text-base lg:text-lg max-w-lg leading-relaxed">
            Real production systems — not side projects. Built for businesses, used by real users.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Featured large card */}
          <div className="proj-card lg:col-span-2">
            <ProjectCard project={featured} large />
          </div>
          {/* Rest */}
          {rest.map((project) => (
            <div key={project.title} className="proj-card">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectSection;
