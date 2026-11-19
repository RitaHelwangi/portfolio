import { CheckIcon } from './Icons.tsx'

// The heart of the case study: before, people did the thinking.
// Now the system does it, and people only take the next step.
const work = [
  'Answer four questions to publish',
  'Check each ship for delivery',
  'Search for open tasks',
  'Investigate where a failure occurred',
]
const system = ['Tracks delivery to every ship', 'Surfaces pending actions', 'Identifies failures and where they occurred']

function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5" />
    </svg>
  )
}

export default function WhoDoesTheWork() {
  return (
    <figure className="m-0 grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-line bg-card p-6">
        <p className="text-[13px] font-semibold tracking-wide text-muted uppercase">Before</p>
        <p className="mt-1 font-serif text-[22px]">The user did the work</p>
        <ul className="mt-5 flex flex-col gap-3">
          {work.map((w) => (
            <li key={w} className="flex items-center gap-3 text-[15px]">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-block text-ink">
                <PersonIcon />
              </span>
              {w}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col rounded-2xl border border-line bg-card p-6">
        <p className="text-[13px] font-semibold tracking-wide text-muted uppercase">Now</p>
        <p className="mt-1 font-serif text-[22px]">The system does the work</p>
        <ul className="mt-5 flex flex-col gap-3">
          {system.map((s) => (
            <li key={s} className="flex items-center gap-3 text-[15px]">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ok text-ok-ink">
                <CheckIcon className="size-4" />
              </span>
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-3 rounded-xl bg-sand px-4 py-3">
            <span className="text-[15px] font-medium">The user takes the next action:</span>
            <span aria-hidden="true" className="rounded-full bg-ink px-3.5 py-1 text-[13px] font-medium text-paper">
              Sync
            </span>
            <span aria-hidden="true" className="rounded-full border border-ink px-3.5 py-1 text-[13px] font-medium">
              Retry
            </span>
          </div>
        </div>
      </div>
    </figure>
  )
}
