// The five statuses every template shows, and what each one promises.
const statuses = [
  { label: 'Synced', meaning: 'Delivered and confirmed by the ship.', cls: 'bg-ok text-ok-ink' },
  { label: 'Syncing…', meaning: 'In progress, awaiting confirmation.', cls: 'border border-line-strong text-ink' },
  { label: 'Not synced', meaning: 'Not yet delivered to this ship.', cls: 'bg-block text-ink' },
  { label: 'Failed', meaning: 'Delivery failed, with the failed step shown.', cls: 'bg-fail text-fail-ink' },
  { label: 'Published here', meaning: 'Published at the main office.', cls: 'bg-info text-info-ink' },
]

export default function StatusLegend() {
  return (
    <figure className="m-0 rounded-2xl border border-line bg-card p-5">
      <dl className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-x-5">
        {statuses.map((s) => (
          <div key={s.label} className="contents">
            <dt>
              <span className={`inline-flex min-w-[118px] justify-center rounded-full px-3 py-1 text-[13px] font-medium ${s.cls}`}>
                {s.label}
              </span>
            </dt>
            <dd className="mb-2 text-[14px] text-muted sm:mb-0">{s.meaning}</dd>
          </div>
        ))}
      </dl>
    </figure>
  )
}
