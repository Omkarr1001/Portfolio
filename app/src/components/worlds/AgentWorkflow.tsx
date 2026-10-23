import { aiStory } from '../../data/site';

type Props = { compact?: boolean };

const tools = ['Cursor', 'Claude', 'Copilot', 'OpenAI APIs', 'MCP'];

const AgentWorkflow = ({ compact = false }: Props) => {
  return (
    <div
      className={`scene-frame relative ${compact ? 'h-[320px] rounded-3xl' : 'min-h-[540px] rounded-[28px] lg:min-h-[640px]'}`}
      style={{ background: 'linear-gradient(180deg, #141226 0%, #0b0a14 100%)' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 20%, rgba(212,176,114,0.12), transparent 28%), radial-gradient(circle at 82% 70%, rgba(139,134,217,0.16), transparent 32%)',
        }}
      />

      <div className="relative flex h-full flex-col gap-4 p-4 lg:p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#aea8c9]">
            Agent workflow
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#d4b072]">
            Review gate on
          </span>
        </div>

        <div className={`grid flex-1 gap-3 ${compact ? 'grid-cols-5' : 'grid-cols-1 md:grid-cols-5'}`}>
          {aiStory.stages.map((stage, i) => (
            <div
              key={stage.id}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-3"
              style={{ animationDelay: `${i * 0.7}s` }}
            >
              <div
                className="mb-3 h-1.5 w-1.5 rounded-full bg-[#d4b072] animate-nodeFlash"
                style={{ animationDelay: `${i * 0.7}s` }}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#d4b072]">
                0{i + 1}
              </p>
              <p className={`mt-1 font-serif text-[#efeafc] ${compact ? 'text-sm leading-tight' : 'text-xl'}`}>
                {stage.label}
              </p>
              {!compact && (
                <p className="mt-2 text-sm leading-relaxed text-[#aea8c9]">{stage.detail}</p>
              )}
              {i < aiStory.stages.length - 1 && (
                <div className="pointer-events-none absolute -right-2 top-8 hidden h-px w-4 bg-[#d4b072]/50 md:block" />
              )}
            </div>
          ))}
        </div>

        {!compact && (
          <div className="grid gap-3 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#aea8c9]">
                Tool layer
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[#d4b072]/30 bg-[#d4b072]/10 px-3 py-1.5 text-sm text-[#efeafc]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#aea8c9]">
                Gate
              </p>
              <p className="font-serif text-lg text-[#efeafc]">Diff review, then device / API verify.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentWorkflow;
