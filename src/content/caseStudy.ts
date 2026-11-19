// The Operations Center case study, told mostly in pictures.
// No screenshots, no company data: every visual is drawn from scratch.
//
// Notes for me: keep every line short and in plain language, so someone
// outside tech understands it. The "Read the case study" link stays hidden
// until every part has text.

export type Visual = 'overview' | 'journey' | 'publish' | 'status' | 'toSync' | 'steps' | 'groups'

export const caseStudy = {
  kind: 'Case study · Maritime safety software',
  title: 'Did the checklist reach the ship?',
  // Shown in search results for this page.
  description:
    'Case study: how office teams can see which ships have received a safety checklist, and what needs action. By Rita Helwangi, frontend developer.',
  intro: 'Office teams distribute safety checklists to their fleet, but had no reliable way to confirm that each one had reached the ship.',
  meta: [
    { label: 'Role', value: 'Frontend developer' },
    { label: 'Built with', value: 'React, TypeScript, Python' },
  ],
  // The big picture.
  journey: 'Each checklist passes from the office through two systems before it reaches the crew on board.',
  // My goal, and the picture that shows it.
  goal: 'The goal: the system handles the tracking and checking, so users only need to take the next action.',
  // Where it shows. Each line: instead of the old work, the new step.
  changes: [
    { instead: 'Instead of reviewing every status', now: 'an overview that highlights only what needs action', visual: 'overview' },
    { instead: 'Instead of four separate decisions', now: 'a single question when publishing', note: 'The version number is now set automatically.', visual: 'publish' },
    { instead: 'Instead of checking each ship', now: 'a clear status for every ship', visual: 'status' },
    { instead: 'Instead of searching for open tasks', now: 'a notice in the top bar when action is needed', visual: 'toSync' },
    { instead: 'Instead of investigating failures', now: 'the failed step is identified, with Retry beside it', visual: 'steps' },
    { instead: 'Instead of selecting ships one by one', now: 'selecting a predefined group', visual: 'groups' },
  ] as { instead: string; now: string; note?: string; visual: Visual }[],
}

// What I worked on: one short card each.
export type Mini = 'approval' | 'reference' | 'create' | 'blocks' | 'settings' | 'workspace'
export const workedOn: { title: string; text: string; mini: Mini }[] = [
  { title: 'Approvals', text: 'A queue of pending changes, and a review page with clearly labelled actions.', mini: 'approval' },
  {
    title: 'Item references in discussions',
    text: 'Comments in an approval discussion can point to a specific checklist item, which is highlighted when opened.',
    mini: 'reference',
  },
  { title: 'Creating a checklist', text: 'A single dialog to import an existing checklist or create a new one.', mini: 'create' },
  {
    title: 'Checklist building blocks',
    text: 'Configuration of the input controls in each checklist item, such as checkboxes, options and dates.',
    mini: 'blocks',
  },
  { title: 'Checklist settings', text: 'Settings grouped into clearly named sections, collapsed by default.', mini: 'settings' },
  {
    title: 'Checklist workspace',
    text: 'A clear switch between a checklist’s items and its settings, so authors always know where they are.',
    mini: 'workspace',
  },
]

// True once every part is written. Until then the link stays hidden.
export const caseStudyReady =
  [caseStudy.title, caseStudy.intro, caseStudy.journey, caseStudy.goal].every((t) => t.trim()) &&
  caseStudy.changes.every((c) => c.instead.trim() && c.now.trim()) &&
  workedOn.every((w) => w.title.trim() && w.text.trim())
