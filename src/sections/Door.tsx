import { Link } from 'react-router'
import Butterfly from '../components/Butterfly.tsx'
import { door } from '../content/site.ts'

export default function Door() {
  return (
    <section aria-labelledby="door-title" className="border-y border-line bg-sand">
      <div className="wrap flex flex-col items-center gap-6 py-24 text-center md:py-30">
        <Link
          to="/questions"
          aria-label="Go behind the butterfly: five questions"
          className="group inline-flex size-28 items-center justify-center rounded-full border border-line bg-card transition-transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <Butterfly className="transition-transform duration-500 group-hover:rotate-[-6deg] motion-reduce:transition-none" />
        </Link>
        <h2 id="door-title" className="font-serif text-[32px] leading-[1.2] font-normal md:text-[40px]">
          {door.line}
        </h2>
        <p className="text-muted">{door.sub}</p>
      </div>
    </section>
  )
}
