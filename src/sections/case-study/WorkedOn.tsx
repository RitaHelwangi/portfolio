import { workedOn, type Mini } from '../../content/caseStudy.ts'

// The six areas I worked on, each with a small picture. Decorative only:
// the title and text under each picture say the same thing in words.

const minis: Record<Mini, () => React.JSX.Element> = {
  approval: () => (
    <div className="flex w-full items-center gap-2">
      <span className="size-6 shrink-0 rounded-full bg-block" />
      <span className="flex flex-1 flex-col gap-1"><span className="h-2 w-20 rounded bg-ink/70" /><span className="h-2 w-12 rounded bg-block" /></span>
      <span className="rounded-full bg-ink px-2.5 py-0.5 text-[11px] font-medium text-paper">Approve</span>
    </div>
  ),
  reference: () => (
    <div className="flex w-full flex-col gap-1.5 text-[11px]">
      <div className="flex items-center gap-1.5 self-start rounded-lg bg-card px-2.5 py-1.5 shadow-[0_0_0_1px_var(--color-line)]">
        <span className="h-2 w-12 rounded bg-block" />
        <span className="rounded bg-info px-1.5 py-0.5 font-medium text-info-ink">→ Item 4</span>
      </div>
      <div className="flex items-center gap-2 rounded-md bg-info/60 px-2 py-1"><span className="font-medium text-info-ink">Item 4</span><span className="h-2 w-16 rounded bg-card" /></div>
    </div>
  ),
  create: () => (
    <div className="grid w-full grid-cols-2 gap-2 text-[11px] font-medium">
      <span className="rounded-lg border border-ink px-2 py-2 text-center">Import</span>
      <span className="rounded-lg border border-line-strong px-2 py-2 text-center text-muted">Create new</span>
    </div>
  ),
  blocks: () => (
    <div className="flex flex-wrap gap-1.5 text-[11px]">
      <span className="rounded-md border border-line-strong px-2 py-0.5">☐ Checkbox</span>
      <span className="rounded-md border border-line-strong px-2 py-0.5">Options</span>
      <span className="rounded-md border border-line-strong px-2 py-0.5">Text</span>
      <span className="rounded-md border border-line-strong px-2 py-0.5">Date</span>
    </div>
  ),
  settings: () => (
    <div className="flex w-full flex-col gap-1.5 text-[11px]">
      <div className="flex items-center gap-2"><span className="text-muted">▾</span><span className="font-medium">About</span><span className="ml-auto h-2 w-10 rounded bg-block" /></div>
      <div className="flex items-center gap-2"><span className="text-muted">▸</span><span className="h-2 w-14 rounded bg-block" /></div>
      <div className="flex items-center gap-2"><span className="text-muted">▸</span><span className="h-2 w-12 rounded bg-block" /></div>
    </div>
  ),
  workspace: () => (
    <div className="flex w-full flex-col gap-2 text-[11px]">
      <div className="flex items-center gap-2"><span className="h-2 w-20 rounded bg-ink/70" /><span className="ml-auto text-muted">12 items</span></div>
      <div className="inline-flex w-fit rounded-full border border-line-strong p-0.5 font-medium">
        <span className="rounded-full bg-ink px-2.5 py-0.5 text-paper">Items</span>
        <span className="px-2.5 py-0.5 text-muted">Settings</span>
      </div>
    </div>
  ),
}

export default function WorkedOn() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {workedOn.map((w) => {
        const MiniPic = minis[w.mini]
        return (
          <li key={w.title} className="flex flex-col rounded-2xl border border-line bg-card p-5">
            <div aria-hidden="true" className="mb-4 flex h-[92px] items-center rounded-xl bg-paper p-3">
              <MiniPic />
            </div>
            <p className="font-serif text-[19px] leading-snug">{w.title}</p>
            <p className="mt-1.5 text-[14px] text-muted">{w.text}</p>
          </li>
        )
      })}
    </ul>
  )
}
