import { CheckIcon } from './Icons.tsx'

// Picking ships one by one, versus choosing a group. Names are made up.
const ships = ['Ship A', 'Ship B', 'Ship C', 'Ship D', 'Ship E', 'Ship F', 'Ship G', 'Ship H']
const picked = new Set(['Ship A', 'Ship C', 'Ship D', 'Ship G'])

function Box({ on }: { on: boolean }) {
  return (
    <span
      className={`flex size-4 shrink-0 items-center justify-center rounded border ${
        on ? 'border-ink bg-ink text-paper' : 'border-line-strong'
      }`}
    >
      {on && <CheckIcon className="size-3" />}
    </span>
  )
}

function Card({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-card p-5">
      <p className="text-[13px] font-semibold tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 mb-4 font-serif text-[20px]">{title}</p>
      <div className="flex-1 rounded-xl border border-line bg-paper p-3">{children}</div>
    </div>
  )
}

export default function LocationGroups() {
  return (
    <figure
      className="m-0 grid gap-4 md:grid-cols-2"
      role="img"
      aria-label="Before: ticking ships one by one in a long list. Now: choosing a group of ships, kept up to date from the company's user app."
    >
      <div aria-hidden="true" className="contents">
        <Card label="Before" title="Select each ship individually">
          <span className="mb-2 block h-7 rounded-md bg-block" />
          <ul className="flex flex-col">
            {ships.map((s) => (
              <li key={s} className="flex items-center gap-2.5 border-b border-line py-1.5 text-[13px] last:border-0">
                <Box on={picked.has(s)} />
                {s}
              </li>
            ))}
          </ul>
        </Card>
        <Card label="Now" title="Select a group">
          <div className="mb-3 inline-flex rounded-full border border-line p-0.5 text-[12px] font-medium">
            <span className="rounded-full bg-ink px-3 py-1 text-paper">Groups</span>
            <span className="px-3 py-1 text-muted">Ships</span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2.5 rounded-lg border border-ink bg-card px-3 py-2.5 text-[13px]">
              <Box on />
              <span className="flex-1 font-medium">North Sea tankers</span>
              <span className="text-[12px] text-muted">4 ships</span>
            </li>
            <li className="flex items-center gap-2.5 rounded-lg border border-line px-3 py-2.5 text-[13px]">
              <Box on={false} />
              <span className="flex-1">Gas carriers</span>
              <span className="text-[12px] text-muted">6 ships</span>
            </li>
          </ul>
          <p className="mt-4 text-[12px] text-muted">
            Groups are managed centrally in the user management app. Changes to a group are flagged before syncing.
          </p>
        </Card>
      </div>
    </figure>
  )
}
