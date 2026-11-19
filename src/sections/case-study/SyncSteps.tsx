import { CheckIcon, CrossIcon } from './Icons.tsx'

// When something fails, every step says what it does and who does it.
const steps = [
  { what: 'Handed to the checklist system', who: 'Operations Center', state: 'done' },
  { what: 'Approved', who: 'Checklist system', state: 'done' },
  { what: 'Sent to the ships', who: 'Checklist system', state: 'failed' },
  { what: 'On the ship', who: 'The ship', state: 'waiting' },
] as const

export default function SyncSteps() {
  return (
    <figure className="m-0 rounded-2xl border border-line bg-card p-5">
      <ol className="flex flex-col">
        {steps.map((s, i) => (
          <li key={s.what} className="flex items-center gap-4 border-line py-3 [&:not(:last-child)]:border-b">
            <span
              className={`flex size-8 shrink-0 items-center justify-center rounded-full text-[13px] ${
                s.state === 'done'
                  ? 'bg-ok text-ok-ink'
                  : s.state === 'failed'
                    ? 'bg-fail text-fail-ink'
                    : 'border border-dashed border-line-strong text-muted'
              }`}
            >
              {s.state === 'done' ? <CheckIcon className="size-4" /> : s.state === 'failed' ? <CrossIcon className="size-4" /> : i + 1}
              <span className="sr-only">
                {s.state === 'done' ? 'Done' : s.state === 'failed' ? 'Failed' : 'Waiting'}
              </span>
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-medium">{s.what}</span>
              <span className="block text-[13px] text-muted">{s.who}</span>
            </span>
            {s.state === 'failed' && (
              <span aria-hidden="true" className="rounded-full border border-ink px-3 py-1 text-[13px] font-medium">
                Retry
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  )
}
