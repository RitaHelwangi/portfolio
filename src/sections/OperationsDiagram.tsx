// Abstract before/after, drawn from scratch. No company screens or data.
export default function OperationsDiagram() {
  return (
    <figure className="m-0">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-line bg-card p-5">
          <p className="mb-3.5 text-[13px] text-muted">Before</p>
          <div aria-hidden="true" className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="h-10 rounded-md bg-block" />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-card p-5">
          <p className="mb-3.5 text-[13px] text-muted">After</p>
          <div aria-hidden="true" className="flex flex-col gap-2">
            <div className="flex h-14 items-center rounded-lg bg-sage-soft px-3 text-[13px] font-semibold text-sage-deep">
              Act first
            </div>
            <div className="h-5 rounded-md bg-sand" />
            <div className="h-5 rounded-md bg-sand" />
          </div>
        </div>
      </div>
      <figcaption className="mt-3.5 text-sm text-muted">
        Everything at once, nothing first. Then: the next action leads.
      </figcaption>
    </figure>
  )
}
