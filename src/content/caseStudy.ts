// The Operations Center case study. No screenshots, no company data:
// the story is the thinking.
//
// Notes for me: fill in the empty '' lines. Empty lines are never shown,
// and the "Read the case study" link stays hidden until every section has text.

export const caseStudy = {
  kind: 'Case study · Operations platform, maritime',
  title: 'A powerful feature nobody used, turned into one that tells you what to do next',
  meta: [
    { label: 'Role', value: 'Frontend, UX' },
    { label: 'Stack', value: 'React, TypeScript' },
    { label: 'Year', value: '2026' },
  ],
  sections: [
    {
      heading: 'The context',
      body: [
        'An operations platform used by maritime companies to run their daily work across ships and shore.',
        '', // TODO: who the admins are, and what a normal day asks of them
      ],
    },
    {
      heading: 'The problem',
      body: [
        'The feature was powerful and complete. It also showed everything at once, took many clicks, and left people figuring out what to do next on their own.',
        '', // TODO: one or two concrete moments where users struggled
      ],
    },
    {
      heading: 'What I changed',
      body: [
        'I reshaped it around one question: what should this person act on first?',
        'An overview now shows the admin where to act first. The system works out what the user needs and tells them what to do next, and reminds them of what is waiting.',
        '', // TODO: how the overview decides what comes first
      ],
    },
    {
      heading: 'What happened',
      body: [
        '', // TODO: any sign it worked: feedback, fewer questions, faster tasks, even informal
      ],
    },
    {
      heading: 'What I took from it',
      body: [
        '', // TODO: the lesson, in one or two sentences
      ],
    },
  ],
}

// Only sections and lines with text are shown.
export const caseStudySections = caseStudy.sections
  .map((s) => ({ ...s, body: s.body.filter((line) => line.trim()) }))
  .filter((s) => s.body.length > 0)

// True once every section has at least one written line.
export const caseStudyReady = caseStudySections.length === caseStudy.sections.length
