import ButtonLink from '../components/ButtonLink.tsx'
import { glance, hero, site } from '../content/site.ts'

function GlanceCard() {
  return (
    <aside aria-labelledby="glance-title" className="rounded-3xl border border-line bg-card p-7">
      <h2 id="glance-title" className="eyebrow text-muted">
        At a glance
      </h2>
      <dl className="mt-5 flex flex-col gap-4">
        {glance.map((item) => (
          <div key={item.label}>
            <dt className="text-[13px] text-muted">{item.label}</dt>
            <dd className="mt-0.5 text-[15px] leading-snug font-medium">{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="wrap grid flex-1 content-center items-center gap-12 py-6 md:grid-cols-[minmax(0,1fr)_300px] md:gap-14"
    >
      <div className="min-w-0">
        {/* Who: photo and name together, like a profile */}
        <div className="mb-7 flex items-center gap-6">
          <img
            src="/rita-240.webp"
            alt=""
            width={240}
            height={240}
            fetchPriority="high"
            className="aspect-square w-24 shrink-0 rounded-2xl border border-line object-cover md:w-30 md:rounded-[20px]"
          />
          <div>
            <p className="font-serif text-[28px] leading-tight md:text-[32px]">{site.name}</p>
            <p className="eyebrow mt-1.5 text-sage">
              {site.role}, {site.location}
            </p>
          </div>
        </div>

        <h1
          id="hero-title"
          className="font-serif text-[38px] leading-[1.08] font-normal tracking-[-0.01em] md:text-[50px]"
        >
          {hero.thesisStart} <em className="text-sage">{hero.thesisEmphasis}</em> {hero.thesisEnd}
        </h1>
        <p className="mt-6 max-w-[600px] text-lg text-muted">{hero.intro}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/#work">See the work</ButtonLink>
          <ButtonLink href="/#contact" variant="outline">
            Let's talk
          </ButtonLink>
        </div>
      </div>

      <GlanceCard />
    </section>
  )
}
