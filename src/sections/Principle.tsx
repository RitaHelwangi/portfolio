import { principle } from '../content/site.ts'

export default function Principle() {
  return (
    <section aria-label="The principle I build by" className="border-y border-line bg-sand">
      <blockquote className="wrap py-7 md:py-8">
        <p className="max-w-[1000px] font-serif text-[22px] leading-[1.35] italic md:text-[28px]">{principle}</p>
      </blockquote>
    </section>
  )
}
