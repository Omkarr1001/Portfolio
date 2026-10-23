type Props = { compact?: boolean };

const tables = [
  { id: 'T1', x: 18, y: 28, state: 'seated', guests: 2, note: 'KOT 14' },
  { id: 'T2', x: 42, y: 26, state: 'open', guests: 0, note: 'Open' },
  { id: 'T3', x: 66, y: 30, state: 'kitchen', guests: 4, note: 'Firing' },
  { id: 'T4', x: 30, y: 58, state: 'bill', guests: 3, note: 'Bill' },
  { id: 'T5', x: 54, y: 62, state: 'seated', guests: 2, note: 'Drinks' },
  { id: 'T6', x: 78, y: 58, state: 'open', guests: 0, note: 'Open' },
] as const;

const tickets = [
  { n: '18', table: 'T3', item: 'Grill thali ×2', age: '3m' },
  { n: '19', table: 'T1', item: 'Butter chicken', age: '1m' },
  { n: '20', table: 'T5', item: 'Lime soda ×2', age: 'now' },
];

const padRows = [
  { table: 'T1', status: 'Seated', tone: 'live' },
  { table: 'T3', status: 'Kitchen', tone: 'hot' },
  { table: 'T4', status: 'Payment', tone: 'bill' },
  { table: 'T5', status: 'Seated', tone: 'live' },
];

function stateColor(state: string) {
  if (state === 'open') return '#8a7d70';
  if (state === 'kitchen') return '#e08a4f';
  if (state === 'bill') return '#d4b072';
  return '#f3d7b5';
}

const HotelFloor = ({ compact = false }: Props) => {
  return (
    <div
      className={`scene-frame relative ${compact ? 'h-[320px] rounded-3xl' : 'min-h-[540px] rounded-[28px] lg:min-h-[640px]'}`}
      style={{ background: 'linear-gradient(180deg, #1c130f 0%, #120c09 100%)' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(224,138,79,0.18), transparent 36%), radial-gradient(circle at 80% 80%, rgba(212,176,114,0.12), transparent 40%)',
        }}
      />

      <div className={`relative grid h-full gap-3 p-4 lg:p-6 ${compact ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-[minmax(0,1fr)_220px_180px]'}`}>
        <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#1a120e]/80">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#cbb39a]">
              Service floor
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#e08a4f]">
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-[#e08a4f]" />
              Live
            </span>
          </div>

          <svg viewBox="0 0 100 90" className="h-[calc(100%-44px)] w-full">
            <rect x="6" y="8" width="88" height="74" rx="3" fill="#241812" stroke="rgba(246,234,220,0.12)" />
            <rect x="8" y="10" width="18" height="10" rx="1.2" fill="#2c1d16" stroke="rgba(224,138,79,0.35)" />
            <text x="17" y="16.5" textAnchor="middle" fill="#cbb39a" fontSize="3.2" fontFamily="IBM Plex Mono">
              Pass
            </text>
            {tables.map((t) => (
              <g key={t.id}>
                <ellipse
                  cx={t.x}
                  cy={t.y}
                  rx="8.5"
                  ry="6.2"
                  fill="#2a1c16"
                  stroke={stateColor(t.state)}
                  strokeWidth="0.7"
                />
                {Array.from({ length: t.guests }).map((_, i) => (
                  <circle
                    key={i}
                    cx={t.x - 4 + i * 2.7}
                    cy={t.y + 8.4}
                    r="1.15"
                    fill={stateColor(t.state)}
                    className={t.state === 'kitchen' ? 'origin-center animate-pulseDot' : undefined}
                  />
                ))}
                <text
                  x={t.x}
                  y={t.y - 0.4}
                  textAnchor="middle"
                  fill="#f6eadc"
                  fontSize="3.4"
                  fontFamily="Outfit"
                  fontWeight="600"
                >
                  {t.id}
                </text>
                <text
                  x={t.x}
                  y={t.y + 3.6}
                  textAnchor="middle"
                  fill="#cbb39a"
                  fontSize="2.4"
                  fontFamily="IBM Plex Mono"
                >
                  {t.note}
                </text>
              </g>
            ))}
            <path
              d="M12 78 H88"
              stroke="rgba(246,234,220,0.08)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {!compact && (
          <>
            <div className="flex flex-col rounded-2xl border border-white/10 bg-[#20150f] p-3">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#cbb39a]">
                Kitchen tickets
              </p>
              <div className="flex flex-1 flex-col gap-2">
                {tickets.map((ticket) => (
                  <div
                    key={ticket.n}
                    className="rounded-xl bg-[#f3e6d2] px-3 py-2 text-[#1b1713] shadow-sm"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#8a5a32]">
                      <span>#{ticket.n} · {ticket.table}</span>
                      <span>{ticket.age}</span>
                    </div>
                    <p className="mt-1 font-serif text-sm">{ticket.item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-[168px] rounded-[28px] border border-white/15 bg-[#0d0a08] p-2 shadow-2xl">
              <div className="rounded-[22px] bg-[#16100c] px-3 pb-3 pt-4">
                <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" />
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#e08a4f]">
                  Captain pad
                </p>
                <p className="mt-1 font-serif text-lg text-[#f6eadc]">Shift board</p>
                <div className="mt-3 space-y-1.5">
                  {padRows.map((row) => (
                    <div
                      key={row.table}
                      className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1.5"
                    >
                      <span className="font-mono text-[11px] text-[#f6eadc]">{row.table}</span>
                      <span
                        className="font-mono text-[10px]"
                        style={{
                          color:
                            row.tone === 'hot'
                              ? '#e08a4f'
                              : row.tone === 'bill'
                                ? '#d4b072'
                                : '#cbb39a',
                        }}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HotelFloor;
