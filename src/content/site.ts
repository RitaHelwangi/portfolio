// Everything about you that appears on the site lives here.
// Notes for me: anything left empty ('') is simply not shown on the site.

export const site = {
  name: 'Rita Helwangi',
  role: 'Frontend developer',
  location: 'Gothenburg',
  email: 'rita.helwangi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rita-helwangi',
  github: 'https://github.com/RitaHelwangi',
  repo: 'https://github.com/RitaHelwangi/portfolio',
}

export const hero = {
  thesisStart: "I build software, and I'm unusually interested in the",
  thesisEmphasis: 'people',
  thesisEnd: 'using it.',
  intro:
    "I start with curiosity. When something doesn't work, I dig until I find the real cause, then I make it simple. I design and build interfaces, and most recently owned the frontend of a new product for the maritime industry.",
}

// The "At a glance" card next to the headline. Keep each value short.
export const glance = [
  { label: 'Open to', value: 'Frontend, full-stack and product roles' },
  { label: 'Builds with', value: 'React, TypeScript · Python, C#/.NET' },
  { label: 'Right now', value: 'Designing a tool that shows who is waiting on whom' },
]

// Lighthouse scores for the "This site" card. Measure after launch at pagespeed.web.dev,
// then fill in the numbers. The scores card stays hidden until all three are set.
export const lighthouse: { performance: number | null; accessibility: number | null; bestPractices: number | null } = {
  performance: 100,
  accessibility: 100,
  bestPractices: 100,
}

export const principle = 'A good platform tells people what to do next, instead of feeding them information.'

export const about = {
  lead: "I design what I build, so I notice when something works technically but still makes someone's day harder, and I'd rather fix that early.",
  body: [
    "I work in React and TypeScript, with Python/FastAPI and C#/.NET when the feature needs them. I started at Maranics as a frontend and product owner intern, so I know both sides: how software gets built, and how it's actually used.",
    "I'm passionate about AI and love combining it with creativity. But tools don't solve problems on their own. People do, when they're willing to. The best work happens when AI handles the chores and people do what they do best: think, decide and help each other.",
    'I express ideas through design, code, research and writing, including poetry. I speak Arabic, English and Swedish.',
  ],
}

export const nowBuilding =
  'Designing a tool that helps developers and product owners see who is waiting on whom, so nobody waits in silence.'

export const door = {
  line: "Let's trade a few questions.",
  sub: 'Three questions about your work. You answer, I answer back. Nothing you write is saved.',
}

export const contact = {
  heading: "Let's talk.",
  body: 'Open to developer roles across frontend, full-stack and product, in Gothenburg or remote. Always happy to connect.',
}
