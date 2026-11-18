import ButtonLink from '../components/ButtonLink.tsx'
import { contact, site } from '../content/site.ts'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="wrap scroll-mt-8 pt-24 pb-18 md:pt-30">
      <h2 id="contact-title" className="font-serif text-[36px] leading-[1.15] font-normal md:text-[44px]">
        {contact.heading}
      </h2>
      <p className="mt-4 max-w-[520px] text-muted">{contact.body}</p>
      <ul className="mt-10 flex flex-wrap gap-4">
        {site.email && (
          <li>
            <ButtonLink href={`mailto:${site.email}`}>{site.email}</ButtonLink>
          </li>
        )}
        <li>
          <ButtonLink href={site.linkedin} variant="outline">
            LinkedIn
          </ButtonLink>
        </li>
        <li>
          <ButtonLink href={site.github} variant="outline">
            GitHub
          </ButtonLink>
        </li>
      </ul>
    </section>
  )
}
