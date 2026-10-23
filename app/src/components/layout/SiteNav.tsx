import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { site, worlds } from '../../data/site';

const links = [
  { to: '/#work', label: 'Work' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#contact', label: 'Contact' },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_86%,transparent)] backdrop-blur-xl">
      <div className="page-wrap flex h-[4.25rem] items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-tight" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm text-[var(--quiet)] hover:text-[var(--ink)]">
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            {worlds.map((world) => (
              <NavLink
                key={world.id}
                to={world.path}
                className={({ isActive }) =>
                  `text-sm ${isActive ? 'text-[var(--ink)] underline decoration-[var(--copper)] underline-offset-8' : 'text-[var(--quiet)] hover:text-[var(--ink)]'}`
                }
              >
                {world.id === 'hotel' ? 'Hotel' : world.id === 'medicine' ? 'Medicine' : 'AI'}
              </NavLink>
            ))}
          </div>
        </nav>

        <a href={`mailto:${site.email}`} className="btn-solid hidden md:inline-flex">
          Write to me
        </a>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.to} href={link.to} onClick={() => setOpen(false)} className="font-serif text-2xl">
                {link.label}
              </a>
            ))}
            {worlds.map((world) => (
              <Link key={world.id} to={world.path} onClick={() => setOpen(false)} className="font-serif text-2xl">
                {world.title}
              </Link>
            ))}
            <a href={`mailto:${site.email}`} className="btn-solid mt-2 w-fit">
              Write to me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
