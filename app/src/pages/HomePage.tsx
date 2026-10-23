import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  certifications,
  education,
  experience,
  extraProjects,
  site,
  stack,
  worlds,
} from '../data/site';
import { useTheme } from '../hooks/useTheme';
import HotelFloor from '../components/worlds/HotelFloor';
import MedicineMap from '../components/worlds/MedicineMap';
import AgentWorkflow from '../components/worlds/AgentWorkflow';

const previews = {
  hotel: HotelFloor,
  medicine: MedicineMap,
  ai: AgentWorkflow,
} as const;

const HomePage = () => {
  useTheme('home');

  return (
    <div>
      <section className="pb-8 pt-16 lg:pb-12 lg:pt-24">
        <div className="page-wrap">
          <p className="kicker">
            {site.role} · {site.discipline} · {site.location}
          </p>
          <h1 className="display mt-6 max-w-5xl text-[clamp(3.4rem,10vw,8.5rem)]">
            {site.name}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--quiet)] lg:text-xl">
            {site.summary} One story at a time: a restaurant floor, a medicine-delivery loop, then the
            agent workflow behind the shipping.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="btn-solid">
              Enter the work <ArrowRight size={16} />
            </a>
            <a href={`mailto:${site.email}`} className="btn-ghost">
              {site.email}
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-6 border-y border-[var(--line)] py-8 sm:grid-cols-3">
            <div>
              <dt className="kicker">Production experience</dt>
              <dd className="mt-2 font-serif text-5xl">{site.experience}</dd>
            </div>
            <div>
              <dt className="kicker">ZepMed Pvt Ltd</dt>
              <dd className="mt-2 font-serif text-3xl">Apr 2026 – Present</dd>
              <p className="mt-1 text-sm text-[var(--quiet)]">Baramati · current</p>
            </div>
            <div>
              <dt className="kicker">A1 Systems</dt>
              <dd className="mt-2 font-serif text-3xl">Sep 2025 – July 2026</dd>
              <p className="mt-1 text-sm text-[var(--quiet)]">Satara · freelance, ended</p>
            </div>
          </dl>
        </div>
      </section>

      <section id="work" className="py-20 lg:py-28">
        <div className="page-wrap">
          <p className="kicker">Three worlds</p>
          <h2 className="display mt-4 max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)]">
            Operations, told as rooms you can walk into.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-[var(--quiet)]">
            Each world is a case study of a live system — tables and tickets, pharmacy and rider,
            then the agent path that plans and checks the work.
          </p>

          <div className="mt-14 flex flex-col gap-16">
            {worlds.map((world) => {
              const Preview = previews[world.id];
              return (
                <article key={world.id} className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="kicker">{world.kicker}</p>
                    <h3 className="display mt-3 text-4xl lg:text-5xl">{world.headline}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-[var(--quiet)]">{world.blurb}</p>
                    <p className="mt-3 text-sm text-[var(--quiet)]">{world.period}</p>
                    <Link to={world.path} className="btn-solid mt-6">
                      Open {world.title.toLowerCase()} <ArrowRight size={16} />
                    </Link>
                  </div>
                  <Link to={world.path} aria-label={`Open ${world.title}`}>
                    <Preview compact />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 lg:py-28">
        <div className="page-wrap">
          <p className="kicker">Experience</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4vw,3.8rem)]">Where the systems ran.</h2>
          <div className="mt-12 space-y-10">
            {experience.map((job) => (
              <article key={job.company} className="grid gap-6 border-t border-[var(--line)] pt-8 lg:grid-cols-[280px_1fr]">
                <div>
                  <p className="font-serif text-2xl">{job.company}</p>
                  <p className="mt-1 text-sm text-[var(--quiet)]">{job.title}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--quiet)]">
                    {job.period}
                    {job.current ? ' · current' : ''}
                  </p>
                  <p className="mt-1 text-sm text-[var(--quiet)]">{job.location}</p>
                </div>
                <ul className="space-y-3 text-[15px] leading-relaxed text-[var(--quiet)]">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="text-[var(--ink)]/80">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="page-wrap grid gap-16 lg:grid-cols-2">
          <div>
            <p className="kicker">Education</p>
            <h2 className="display mt-4 text-4xl">Schooling</h2>
            <div className="mt-8 space-y-6">
              {education.map((item) => (
                <div key={item.school} className="border-t border-[var(--line)] pt-5">
                  <p className="font-serif text-2xl">{item.title}</p>
                  <p className="mt-1 text-[var(--quiet)]">{item.school}</p>
                  <p className="mt-1 font-mono text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-[var(--quiet)]">
              Certifications: {certifications.join(' · ')}
            </p>
          </div>
          <div>
            <p className="kicker">Stack</p>
            <h2 className="display mt-4 text-4xl">Tools in use</h2>
            <dl className="mt-8 space-y-5">
              {Object.entries(stack).map(([group, items]) => (
                <div key={group} className="border-t border-[var(--line)] pt-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--quiet)]">
                    {group}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed">{items.join(' · ')}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 border-t border-[var(--line)] pt-4">
              <p className="kicker">Also</p>
              {extraProjects.map((project) => (
                <p key={project.title} className="mt-2 text-sm">
                  {project.title} — {project.detail}{' '}
                  <a className="underline" href={project.href} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pb-24 pt-10">
        <div className="page-wrap border-t border-[var(--line)] pt-16">
          <p className="kicker">Contact</p>
          <h2 className="display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,5rem)]">
            Tell me what the floor needs to do.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-[var(--quiet)]">{site.location}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn-solid">
              {site.email}
            </a>
            <a href={site.phoneHref} className="btn-ghost">
              {site.phoneDisplay}
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
