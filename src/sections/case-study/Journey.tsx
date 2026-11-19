import { AppIcon, CheckIcon, GatewayIcon, OfficeIcon, ShipIcon } from './Icons.tsx'

const stops = [
  { label: 'Office', note: 'Creates the checklist', Icon: OfficeIcon },
  { label: 'Checklist system', note: 'Approves and sends', Icon: GatewayIcon },
  { label: 'Crew’s app', note: 'On board', Icon: AppIcon },
  { label: 'Ship', note: 'Crew complete it', Icon: ShipIcon },
]

function Lane({ after, label = true }: { after: boolean; label?: boolean }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      {label && (
        <p className="mb-4 text-[13px] font-semibold tracking-wide text-muted uppercase">{after ? 'After' : 'Before'}</p>
      )}
      <ol className="flex items-start justify-between gap-1">
        {stops.map(({ label, note, Icon }, i) => {
          const last = i === stops.length - 1
          return (
            <li key={label} className="relative flex flex-1 flex-col items-center text-center">
              {!last && (
                <span
                  aria-hidden="true"
                  className={`absolute top-5 left-[calc(50%+22px)] h-0 w-[calc(100%-44px)] border-t-2 ${
                    after ? 'border-sage' : i < 1 ? 'border-line-strong' : 'border-dashed border-line-strong'
                  }`}
                />
              )}
              <span
                className={`relative flex size-10 items-center justify-center rounded-full border ${
                  last && after
                    ? 'border-ok-ink bg-ok text-ok-ink'
                    : last
                      ? 'border-dashed border-line-strong bg-paper text-muted'
                      : 'border-line bg-paper text-ink'
                }`}
              >
                {last && after ? <CheckIcon /> : last ? <span className="font-serif text-lg">?</span> : <Icon />}
              </span>
              <span className="mt-2 text-[13px] font-medium">{label}</span>
              <span className="text-[12px] text-muted">{note}</span>
            </li>
          )
        })}
      </ol>
      <p className={`mt-4 text-[14px] ${after ? 'text-ok-ink' : 'text-muted'}`}>
        {after ? 'Delivered: confirmed by the ship.' : 'Sent, but delivery could not be confirmed.'}
      </p>
    </div>
  )
}

// A checklist's path from the office to the ship, before and after.
export default function Journey({ compact = false }: { compact?: boolean }) {
  return (
    <figure className="m-0">
      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        {!compact && <Lane after={false} />}
        <Lane after label={!compact} />
      </div>
      {compact && (
        <figcaption className="mt-3.5 text-sm text-muted">
          From the office to the ship, through two other systems.
        </figcaption>
      )}
    </figure>
  )
}
