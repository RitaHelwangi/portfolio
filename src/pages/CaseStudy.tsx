import { Link } from 'react-router'
import Layout from '../components/Layout.tsx'
import { caseStudy, type Visual } from '../content/caseStudy.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'
import Journey from '../sections/case-study/Journey.tsx'
import LocationGroups from '../sections/case-study/LocationGroups.tsx'
import Overview from '../sections/case-study/Overview.tsx'
import PublishBeforeAfter from '../sections/case-study/PublishBeforeAfter.tsx'
import StatusLegend from '../sections/case-study/StatusLegend.tsx'
import SyncSteps from '../sections/case-study/SyncSteps.tsx'
import ToSyncBar from '../sections/case-study/ToSyncBar.tsx'
import WhoDoesTheWork from '../sections/case-study/WhoDoesTheWork.tsx'
import WorkedOn from '../sections/case-study/WorkedOn.tsx'

const visuals: Record<Visual, React.ComponentType> = {
  overview: Overview,
  journey: Journey,
  publish: PublishBeforeAfter,
  status: StatusLegend,
  toSync: ToSyncBar,
  steps: SyncSteps,
  groups: LocationGroups,
}

export default function CaseStudy() {
  usePageSetup('Did the checklist reach the ship? · Rita Helwangi', caseStudy.description)
  return (
    <Layout>
      <article className="wrap pt-10 pb-24">
        <header className="max-w-[760px]">
          <Link to="/#work" className="text-[15px] no-underline">
            <span aria-hidden="true">←</span> Back to the work
          </Link>
          <p className="mt-10 mb-3 text-sm text-sage">{caseStudy.kind}</p>
          <h1 className="font-serif text-[38px] leading-[1.1] font-normal md:text-[52px]">{caseStudy.title}</h1>
          <p className="mt-5 text-[19px] text-muted">{caseStudy.intro}</p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-5 text-[15px]">
            {caseStudy.meta.map((m) => (
              <div key={m.label}>
                <dt className="text-muted">{m.label}</dt>
                <dd className="font-medium">{m.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section aria-labelledby="journey-title" className="mt-16">
          <h2 id="journey-title" className="max-w-[680px] font-serif text-[24px] leading-snug font-normal">
            {caseStudy.journey}
          </h2>
          <div className="mt-6">
            <Journey />
          </div>
        </section>

        <section aria-labelledby="goal-title" className="mt-20">
          <h2 id="goal-title" className="max-w-[720px] font-serif text-[28px] leading-snug font-normal md:text-[32px]">
            {caseStudy.goal}
          </h2>
          <div className="mt-6">
            <WhoDoesTheWork />
          </div>
        </section>

        <section aria-labelledby="changes-title" className="mt-20">
          <h2 id="changes-title" className="eyebrow text-muted">
            How it works in practice
          </h2>
          <ol className="mt-6 flex flex-col gap-16">
            {caseStudy.changes.map((c, i) => {
              const Visual = visuals[c.visual]
              return (
                <li key={c.instead}>
                  <p className="flex max-w-[720px] flex-wrap items-baseline gap-x-3 font-serif text-[22px] leading-snug">
                    <span aria-hidden="true" className="text-sage">
                      {i + 1}
                    </span>
                    <span className="text-muted">{c.instead}</span>
                    <span aria-hidden="true" className="text-sage">→</span>
                    <span className="sr-only">, </span>
                    <span>{c.now}</span>
                  </p>
                  {c.note && <p className="mt-2 ml-7 text-[15px] text-muted">{c.note}</p>}
                  <div className="mt-6">
                    <Visual />
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        <section aria-labelledby="part-title" className="mt-20">
          <h2 id="part-title" className="eyebrow text-muted">
            Other features I worked on
          </h2>
          <div className="mt-6" />
          <WorkedOn />
        </section>
      </article>
    </Layout>
  )
}
