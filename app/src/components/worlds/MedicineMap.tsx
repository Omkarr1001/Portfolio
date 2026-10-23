type Props = { compact?: boolean };

const states = [
  { id: 'placed', label: 'Placed' },
  { id: 'pharmacy', label: 'Pharmacy' },
  { id: 'packed', label: 'Packed' },
  { id: 'out', label: 'Out' },
  { id: 'done', label: 'Delivered' },
] as const;

const roles = ['Customer', 'Pharmacy', 'Delivery', 'Doctor', 'Laboratory', 'Hospital'];

const MedicineMap = ({ compact = false }: Props) => {
  return (
    <div
      className={`scene-frame relative ${compact ? 'h-[320px] rounded-3xl' : 'min-h-[540px] rounded-[28px] lg:min-h-[640px]'}`}
      style={{ background: 'linear-gradient(180deg, #0b1c1e 0%, #071416 100%)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 30%, rgba(62,200,192,0.16), transparent 34%), linear-gradient(rgba(231,244,243,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(231,244,243,0.04) 1px, transparent 1px)',
          backgroundSize: 'auto, 28px 28px, 28px 28px',
        }}
      />

      <div className={`relative grid h-full ${compact ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_280px]'} gap-4 p-4 lg:p-6`}>
        <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#0a181a]/70">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8fb3b3]">
              Hyperlocal map
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#3ec8c0]">
              Rider live
            </span>
          </div>

          <svg viewBox="0 0 640 360" className="h-[calc(100%-44px)] w-full">
            <path d="M40 80 H600" stroke="rgba(231,244,243,0.12)" strokeWidth="18" />
            <path d="M40 180 H600" stroke="rgba(231,244,243,0.1)" strokeWidth="14" />
            <path d="M40 280 H600" stroke="rgba(231,244,243,0.12)" strokeWidth="18" />
            <path d="M160 40 V320" stroke="rgba(231,244,243,0.1)" strokeWidth="12" />
            <path d="M320 40 V320" stroke="rgba(231,244,243,0.12)" strokeWidth="16" />
            <path d="M480 40 V320" stroke="rgba(231,244,243,0.1)" strokeWidth="12" />

            <rect x="70" y="96" width="70" height="48" rx="6" fill="#123033" stroke="#3ec8c0" />
            <text x="105" y="124" textAnchor="middle" fill="#e7f4f3" fontSize="11" fontFamily="Outfit">
              Pharmacy
            </text>

            <rect x="500" y="206" width="78" height="44" rx="6" fill="#123033" stroke="rgba(231,244,243,0.3)" />
            <text x="539" y="232" textAnchor="middle" fill="#e7f4f3" fontSize="11" fontFamily="Outfit">
              Customer
            </text>

            <path
              id="ride-path"
              d="M140 120 C 220 120, 240 180, 320 180 S 430 228, 500 228"
              fill="none"
              stroke="#3ec8c0"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash"
            />

            <g>
              <circle r="11" fill="#3ec8c0">
                <animateMotion dur="8s" repeatCount="indefinite" begin="-4s">
                  <mpath href="#ride-path" />
                </animateMotion>
              </circle>
              <text
                fill="#071416"
                fontSize="8"
                fontFamily="IBM Plex Mono"
                textAnchor="middle"
                dy="3"
              >
                R
                <animateMotion dur="8s" repeatCount="indefinite" begin="-4s">
                  <mpath href="#ride-path" />
                </animateMotion>
              </text>
            </g>
          </svg>
        </div>

        {!compact && (
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-white/10 bg-[#0d1e20] p-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8fb3b3]">
                Order states
              </p>
              <ol className="space-y-2">
                {states.map((state, i) => (
                  <li key={state.id} className="flex items-center gap-3">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px]"
                      style={{
                        background: i === 3 ? '#3ec8c0' : 'rgba(62,200,192,0.12)',
                        color: i === 3 ? '#071416' : '#e7f4f3',
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#e7f4f3]">{state.label}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0d1e20] p-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8fb3b3]">
                Roles on one backend
              </p>
              <div className="flex flex-wrap gap-1.5">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-[#e7f4f3]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineMap;
