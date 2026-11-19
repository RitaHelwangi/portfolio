// The top bar with and without the "To sync" prompt.
function Bar({ waiting }: { waiting: boolean }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-4">
      <p className="mb-3 text-[13px] font-semibold tracking-wide text-muted uppercase">
        {waiting ? 'Something is waiting' : 'All up to date'}
      </p>
      <div aria-hidden="true" className="flex items-center gap-3 rounded-xl border border-line bg-paper px-3 py-2.5">
        <span className="size-5 rounded-md bg-ink" />
        <span className="h-2.5 w-14 rounded bg-block" />
        <span className="h-2.5 w-10 rounded bg-block" />
        <span className="ml-auto flex items-center gap-3">
          {waiting && <span className="text-[13px] font-medium text-muted">To sync · 3</span>}
          <span className="size-6 rounded-full bg-block" />
        </span>
      </div>
    </div>
  )
}

export default function ToSyncBar() {
  return (
    <figure
      className="m-0"
      role="img"
      aria-label="A top bar showing 'To sync, 3' when checklists are waiting, and nothing when everything is up to date."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Bar waiting />
        <Bar waiting={false} />
      </div>
    </figure>
  )
}
