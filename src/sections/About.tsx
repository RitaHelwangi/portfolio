import { about } from '../content/site.ts'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="wrap flex scroll-mt-8 flex-wrap gap-14 py-24">
      <h2 id="about-title" className="eyebrow flex-[1_1_240px] text-muted">
        About
      </h2>
      <div className="min-w-0 flex-[3_1_520px]">
        <p className="font-serif text-[23px] leading-[1.45] md:text-[26px]">{about.lead}</p>
        {about.body.map((para) => (
          <p key={para} className="mt-6 text-muted">
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}
