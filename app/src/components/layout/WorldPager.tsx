import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { worlds } from '../../data/site';

type Props = { current: (typeof worlds)[number]['id'] };

const WorldPager = ({ current }: Props) => {
  const index = worlds.findIndex((world) => world.id === current);
  const prev = worlds[(index + worlds.length - 1) % worlds.length];
  const next = worlds[(index + 1) % worlds.length];

  return (
    <div className="mt-16 grid gap-4 border-t border-[var(--line)] pt-10 md:grid-cols-2">
      <Link to={prev.path} className="group rounded-3xl border border-[var(--line)] p-6">
        <p className="kicker flex items-center gap-2">
          <ArrowLeft size={12} /> Previous world
        </p>
        <p className="mt-3 font-serif text-3xl group-hover:underline">{prev.title}</p>
      </Link>
      <Link to={next.path} className="group rounded-3xl border border-[var(--line)] p-6 md:text-right">
        <p className="kicker flex items-center justify-end gap-2">
          Next world <ArrowRight size={12} />
        </p>
        <p className="mt-3 font-serif text-3xl group-hover:underline">{next.title}</p>
      </Link>
    </div>
  );
};

export default WorldPager;
