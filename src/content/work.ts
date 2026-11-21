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
    kind: 'Case study · Maritime safety software',
    title: 'Did the checklist reach the ship?',
    summary:
      "Office teams distribute safety checklists to their fleet, with no reliable way to confirm delivery. I redesigned the experience so the system tracks every step and users only take the next action.",
    meta: [
      { label: 'Role', value: 'Frontend developer' },
      { label: 'Built with', value: 'React, TypeScript, Python' },
      { label: 'Year', value: '2026' },
    ],
    href: '/work/operations-center',
    linkLabel: 'Read the case study',
  },
  {
    slug: 'this-site',
    kind: 'Open source · This site',
    title: 'Built in the open',
    summary:
      'Keyboard accessible, fast on phones, with clear focus states and semantic HTML. A site about how software feels should prove it in its own code.',
    href: 'https://github.com/RitaHelwangi/portfolio',
    linkLabel: 'View the code on GitHub',
    external: true,
  },
]
