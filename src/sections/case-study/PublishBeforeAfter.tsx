// The publish window, before and after, sketched from scratch with made-up labels.

function Radio({ label, on = false }: { label: string; on?: boolean }) {
  return (
    <span className="flex items-center gap-2 text-[13px] text-muted">
      <span className={`size-3.5 rounded-full border ${on ? 'border-[4px] border-ink' : 'border-line-strong'}`} />
      {label}
    </span>
  )
}

function Question({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-3">
      <p className="mb-2 text-[13px] font-medium">{q}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5">{children}</div>
    </div>
  )
}

function Card({ label, count, children }: { label: string; count: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[13px] font-semibold tracking-wide text-muted uppercase">{label}</p>
        <span className="rounded-full bg-sand px-2.5 py-0.5 text-[12px] font-medium">{count}</span>
      </div>
      <div className="flex-1 rounded-xl border border-line bg-paper p-4">{children}</div>
    </div>
  )
}

const btn = 'rounded-full px-3.5 py-1.5 text-[13px] font-medium'

export default function PublishBeforeAfter() {
  return (
    <figure className="m-0" role="img" aria-label="Before: the publish window asked four questions. After: it asks one, sync to the ships now or later.">
      <div aria-hidden="true" className="grid gap-4 md:grid-cols-2">
        <Card label="Before" count="4 decisions">
          <p className="mb-3 font-serif text-lg">Publish</p>
          <div className="flex flex-col gap-3">
            <Question q="Where should it go?">
              <Radio label="All locations" />
              <Radio label="Only these locations" on />
              <span className="h-6 w-full rounded-md bg-block" />
            </Question>
            <Question q="Roll out now or later?">
              <Radio label="Now" on />
              <Radio label="Later" />
            </Question>
            <Question q="Retire older checklists?">
              <Radio label="Yes" />
              <Radio label="No" />
            </Question>
            <div className="rounded-md bg-sand px-3 py-2 text-[12px] text-muted">A warning without a clear action</div>
          </div>
        </Card>
        <Card label="After" count="1 decision">
          <p className="mb-3 font-serif text-lg">Publish</p>
          <div className="flex flex-col gap-4 border-t border-line pt-4">
            <p className="font-serif text-[22px] leading-tight">Sync to the ships now?</p>
            <ul className="flex flex-col gap-1.5 text-[13px]">
              {['Ship A', 'Ship B', 'Ship C'].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="flex size-4 items-center justify-center rounded border border-ink bg-ink text-[10px] text-paper">✓</span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <span className={`${btn} border border-line-strong`}>Later</span>
              <span className={`${btn} bg-ink text-paper`}>Sync</span>
            </div>
          </div>
        </Card>
      </div>
    </figure>
  )
}
