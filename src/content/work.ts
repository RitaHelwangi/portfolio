export type Project = {
  slug: string
  kind: string
  title: string
  summary: string
  meta?: { label: string; value: string }[]
  href: string
  linkLabel: string
  external?: boolean
}

export const projects: Project[] = [
  {
    slug: 'operations-center',
    kind: 'Case study · Operations platform, maritime',
    title: 'A powerful feature nobody used, turned into one that tells you what to do next',
    summary:
      "An admin view had everything an operator could need, and that was the problem. I reshaped it around one question: what should this person act on first? An overview now leads with the next action, and the system reminds people of what's waiting.",
    meta: [
      { label: 'Role', value: 'Frontend, UX' },
      { label: 'Stack', value: 'React, TypeScript' },
      { label: 'Year', value: '2026' },
    ],
    href: '/work/operations-center',
    linkLabel: 'Read the case study',
  },
  {
    slug: 'this-site',
    kind: 'Open source · This site',
    title: 'Built in the open, held to its own argument',
    summary:
      'Keyboard navigable, fast on a phone, real focus states, semantic HTML. If this site claims I care how software feels, the code has to prove it. Read every line.',
    href: 'https://github.com/RitaHelwangi/portfolio',
    linkLabel: 'View the code on GitHub',
    external: true,
  },
]
