import { Link } from 'react-router'
import { caseStudyReady } from '../content/caseStudy.ts'
import { lighthouse } from '../content/site.ts'
import { projects } from '../content/work.ts'
import OperationsDiagram from './OperationsDiagram.tsx'

function OpenSourceCard() {
  const { performance, accessibility, bestPractices } = lighthouse
  if (performance === null || accessibility === null || bestPractices === null) return null
  return (
    <div className="rounded-2xl bg-ink p-7 font-mono text-sm leading-[1.8] text-[#efe6d8]">
      <p className="text-[#b9ad9c]">// Lighthouse, mobile</p>
      <p>
        Performance <span className="text-[#bfd4b6]">{performance}</span>
      </p>
      <p>
        Accessibility <span className="text-[#bfd4b6]">{accessibility}</span>
      </p>
      <p>
        Best practices <span className="text-[#bfd4b6]">{bestPractices}</span>
      </p>
    </div>
  )
}

const visuals: Record<string, () => React.JSX.Element | null> = {
  'operations-center': OperationsDiagram,
  'this-site': OpenSourceCard,
}

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="wrap scroll-mt-8 pt-24 pb-10 md:pt-30">
      <h2 id="work-title" className="eyebrow mb-14 text-muted">
        Selected work
      </h2>
      {projects.map((p, i) => {
        const Visual = visuals[p.slug]
        return (
          <article
            key={p.slug}
            aria-labelledby={`${p.slug}-title`}
            className={`flex flex-wrap items-center gap-14 py-16 md:py-24 ${i > 0 ? 'border-t border-line' : 'pt-0 md:pt-0'}`}
          >
            <div className="min-w-0 flex-[1_1_420px]">
              <p className="mb-3 text-sm text-sage">{p.kind}</p>
              <h3 id={`${p.slug}-title`} className="font-serif text-[30px] leading-[1.15] font-normal md:text-[38px]">
                {p.title}
              </h3>
              <p className="mt-6 text-muted">{p.summary}</p>
              {p.meta && (
                <dl className="mt-7 flex flex-wrap gap-8 text-[15px]">
                  {p.meta.map((m) => (
                    <div key={m.label}>
                      <dt className="text-muted">{m.label}</dt>
                      <dd className="font-medium">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {p.external ? (
                <a href={p.href} className="mt-8 inline-block font-medium">
                  {p.linkLabel} <span aria-hidden="true">→</span>
                </a>
              ) : p.slug === 'operations-center' && !caseStudyReady && !import.meta.env.DEV ? null : (
                <Link to={p.href} className="mt-8 inline-block font-medium">
                  {p.linkLabel} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
            {Visual && (
              <div className="min-w-0 flex-[1_1_420px]">
                <Visual />
              </div>
            )}
          </article>
        )
      })}
    </section>
  )
}
