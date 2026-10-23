import { aiStory } from '../data/site';
import { useTheme } from '../hooks/useTheme';
import AgentWorkflow from '../components/worlds/AgentWorkflow';
import WorldPager from '../components/layout/WorldPager';

const AiWorldPage = () => {
  useTheme('ai');

  return (
    <article className="pb-24 pt-12 lg:pt-16">
      <div className="page-wrap">
        <p className="kicker">World 03 · Agent systems · finance, desktop, CRM</p>
        <h1 className="display mt-5 max-w-4xl text-[clamp(3rem,7vw,6.4rem)]">{aiStory.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--quiet)] lg:text-xl">
          {aiStory.lede}
        </p>

        <div className="mt-12">
          <AgentWorkflow />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {aiStory.panels.map((panel) => (
            <section key={panel.label} className="border-t border-[var(--line)] pt-6">
              <p className="kicker">{panel.label}</p>
              <h2 className="mt-3 font-serif text-3xl">{panel.title}</h2>
              <p className="mt-3 leading-relaxed text-[var(--quiet)]">{panel.copy}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-[var(--quiet)]">Stack: {aiStory.stack.join(' · ')}</p>

        <WorldPager current="ai" />
      </div>
    </article>
  );
};

export default AiWorldPage;
