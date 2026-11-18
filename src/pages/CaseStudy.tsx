import { Link } from 'react-router'
import Layout from '../components/Layout.tsx'
import { caseStudy, caseStudySections } from '../content/caseStudy.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'
import OperationsDiagram from '../sections/OperationsDiagram.tsx'

export default function CaseStudy() {
  usePageSetup('Operations Center case study · Rita Helwangi')
  return (
    <Layout>
      <article className="wrap max-w-[760px] pt-12 pb-24">
        <Link to="/#work" className="text-[15px] no-underline">
          <span aria-hidden="true">←</span> Back to the work
        </Link>
        <p className="mt-12 mb-3 text-sm text-sage">{caseStudy.kind}</p>
        <h1 className="font-serif text-[36px] leading-[1.12] font-normal md:text-[48px]">{caseStudy.title}</h1>
        <dl className="mt-8 flex flex-wrap gap-8 border-y border-line py-5 text-[15px]">
          {caseStudy.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-muted">{m.label}</dt>
              <dd className="font-medium">{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12">
          <OperationsDiagram />
        </div>
        {caseStudySections.map((s) => (
          <section key={s.heading} className="mt-14">
            <h2 className="font-serif text-[28px] leading-tight font-normal">{s.heading}</h2>
            {s.body.map((para) => (
              <p key={para} className="mt-4 text-muted">
                {para}
              </p>
            ))}
          </section>
        ))}
      </article>
    </Layout>
  )
}
