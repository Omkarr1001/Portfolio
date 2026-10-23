import { Link } from 'react-router-dom';
import { site, worlds } from '../../data/site';

const SiteFooter = () => {
  return (
    <footer className="border-t border-[var(--line)] py-14">
      <div className="page-wrap grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--quiet)]">
            {site.role} · {site.discipline} · {site.experience}
          </p>
        </div>
        <div>
          <p className="kicker mb-3">Worlds</p>
          <div className="flex flex-col gap-2">
            {worlds.map((world) => (
              <Link key={world.id} to={world.path} className="text-sm hover:underline">
                {world.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="kicker mb-3">Contact</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="page-wrap mt-12 flex flex-col justify-between gap-2 border-t border-[var(--line)] pt-6 text-xs text-[var(--quiet)] md:flex-row">
        <p>© 2026 {site.name}</p>
        <p>React · Tailwind · GSAP</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
