// Behind the butterfly. Each question is a trade: the visitor answers,
// then I share something back. No scores, no labels, no diagnosis.
//
// Notes for me: write each `body` in my own words. The butterfly door
// stays hidden on the site until every answer is written.

export type Question = {
  ask: string
  gives: string
  body: string
}

// The three questions visitors see, in this order:
// how I work, what I believe, what I'd pass on.
export const questions: Question[] = [
  {
    ask: 'When something isn’t working, what do you reach for first?',
    gives: 'How I find the real cause',
    body: '', // TODO: I get curious and dig until I find the real cause, then make it simple. Add a short example from Maranics
  },
  {
    ask: 'Where do people and AI work best together in your job?',
    gives: 'Where I think AI belongs',
    // TODO: these are my LinkedIn words. Make them a little different from the About section
    body: 'Tools don’t solve problems on their own. People do, when they’re willing to. The best work happens when AI handles the chores and people do what they do best: think, decide and help each other.',
  },
  {
    ask: 'If someone joined your team tomorrow, what’s the first thing you’d tell them?',
    gives: 'What I’d tell someone new',
    body: '', // TODO: what I learned going from intern to owning a product's frontend
  },
]

// Saved for later, not shown on the site. Move one up to swap it in.
export const extraQuestions: Question[] = [
  { ask: 'What’s one piece of advice you’d give someone starting out in your field?', gives: '', body: '' },
  { ask: 'If you could give your first-day-at-work self one tip, what would it be?', gives: '', body: '' },
  { ask: 'What’s a lesson your work taught you the hard way?', gives: '', body: '' },
  { ask: 'What part of your work would you do even if nobody paid you?', gives: 'Why I moved from design into code', body: '' },
  { ask: 'Where do you find purpose?', gives: 'Why work in maritime operations matters to me', body: '' },
  {
    ask: 'What keeps you excited right now?',
    gives: 'What I’m building now',
    body: 'A tool that helps developers and product owners see who is waiting on whom, so nobody waits in silence.',
  },
]

// True once every answer is written. Until then the door is hidden.
export const questionsReady = questions.every((q) => q.body.trim().length > 0)
