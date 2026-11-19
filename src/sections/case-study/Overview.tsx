// The overview: one checklist across every fleet and ship.
// Before, every status at once. Now, calm: only what needs action stands out.
// Names are made up.

type Pill = 'synced' | 'syncing' | 'notSynced' | 'waiting' | 'failed'
const pill: Record<Pill, { label: string; cls: string }> = {
  synced: { label: 'Synced', cls: 'bg-ok text-ok-ink' },
  syncing: { label: 'Syncing…', cls: 'border border-line-strong text-ink' },
  notSynced: { label: 'Not synced', cls: 'bg-block text-ink' },
  waiting: { label: 'Waiting for approval', cls: 'bg-wait text-wait-ink' },
  failed: { label: 'Failed', cls: 'bg-fail text-fail-ink' },
}

function Status({ s }: { s: Pill }) {
  return (
    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium whitespace-nowrap ${pill[s].cls}`}>
      {pill[s].label}
    </span>
  )
}

const noisy: { name: string; level: number; s: Pill }[] = [
  { name: 'Engine room safety check', level: 0, s: 'synced' },
  { name: 'Fleet North', level: 1, s: 'synced' },
  { name: 'Ship A', level: 2, s: 'synced' },
  { name: 'Ship B', level: 2, s: 'syncing' },
  { name: 'Ship C', level: 2, s: 'synced' },
  { name: 'Ship D', level: 2, s: 'synced' },
  { name: 'Fleet South', level: 1, s: 'waiting' },
  { name: 'Ship E', level: 2, s: 'synced' },
  { name: 'Ship F', level: 2, s: 'notSynced' },
  { name: 'Ship G', level: 2, s: 'synced' },
  { name: 'Ship H', level: 2, s: 'failed' },
]

function Card({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-card p-5">
      <p className="text-[13px] font-semibold tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 mb-4 font-serif text-[20px]">{title}</p>
      <div className="flex-1 rounded-xl border border-line bg-paper p-3">{children}</div>
    </div>
  )
}

const btn = 'shrink-0 rounded-full px-3 py-1 text-[12px] font-medium'

export default function Overview() {
  return (
    <figure className="m-0 grid gap-4 md:grid-cols-2">
      <Card label="Before" title="Every status, all at once">
        <ul aria-label="Before: a long tree where every fleet and ship shows its status" className="flex flex-col">
          {noisy.map((r) => (
            <li
              key={r.name}
              className="flex items-center gap-2 border-b border-line py-1.5 last:border-0"
              style={{ paddingLeft: r.level * 16 }}
            >
              <span className={`min-w-0 flex-1 truncate text-[13px] ${r.level === 0 ? 'font-medium' : ''}`}>{r.name}</span>
              <span aria-hidden="true" className="hidden h-2 w-10 rounded bg-block sm:block" />
              <span aria-hidden="true" className="hidden h-2 w-8 rounded bg-block sm:block" />
              <Status s={r.s} />
            </li>
          ))}
        </ul>
      </Card>

      <Card label="Now" title="Only what needs attention">
        <ul aria-label="Now: the same tree, where fine parts fold away and only rows that need action show a colour and a button" className="flex flex-col">
          <li className="flex items-center gap-2 border-b border-line py-2">
            <span className="min-w-0 flex-1 truncate text-[13px] font-medium">Engine room safety check</span>
            <span className="text-[12px] text-muted">2 need action</span>
          </li>
          <li className="flex items-center gap-2 border-b border-line py-2 pl-4">
            <span aria-hidden="true" className="text-[11px] text-muted">▸</span>
            <span className="min-w-0 flex-1 truncate text-[13px] text-muted">Fleet North</span>
            <span className="text-[12px] text-muted">4 ships · all synced</span>
          </li>
          <li className="flex items-center gap-2 border-b border-line py-2 pl-4">
            <span aria-hidden="true" className="text-[11px] text-muted">▾</span>
            <span className="min-w-0 flex-1 truncate text-[13px]">Fleet South</span>
            <Status s="waiting" />
            <span aria-hidden="true" className={`${btn} bg-ink text-paper`}>
              Review
            </span>
          </li>
          <li className="flex items-center gap-2 border-b border-line py-2 pl-9">
            <span className="min-w-0 flex-1 truncate text-[13px] text-muted">Ships E, F, G</span>
            <span className="text-[12px] text-muted">waiting on approval</span>
          </li>
          <li className="flex items-center gap-2 py-2 pl-9">
            <span className="min-w-0 flex-1 truncate text-[13px]">Ship H</span>
            <Status s="failed" />
            <span aria-hidden="true" className={`${btn} border border-ink`}>
              Retry
            </span>
          </li>
        </ul>
        <p className="mt-3 px-1 text-[12px] text-muted">Completed areas are collapsed. Only items that need action are highlighted.</p>
      </Card>
    </figure>
  )
}
