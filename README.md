# ritahelwangi

My personal portfolio. A calm surface for the work, a butterfly for a door, and a short conversation behind it.

> I build software, and I'm unusually interested in the people using it.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check and production build into dist/
npm run preview   # serve the production build
npm run lint      # oxlint
npm run format    # prettier
```

## Stack

Vite, React, TypeScript, Tailwind CSS v4, React Router, Motion (only behind the door). Self-hosted fonts: Newsreader and Hanken Grotesk. Deployed on Vercel (`vercel.json` sends every route to the app).

## Where things live

```
src/
  content/        All copy. Edit text here, not in components.
    site.ts         name, links, hero, about, door, contact
    work.ts         project cards on the home page
    caseStudy.ts    the Operations Center case study
    questions.ts    the five questions and what I share back
  pages/          One file per route
    Home.tsx          /                        the surface
    CaseStudy.tsx     /work/operations-center  (lazy loaded)
    Questions.tsx     /questions               behind the butterfly (lazy loaded)
    NotFound.tsx      anything else
  sections/       The blocks of the home page, top to bottom
  components/     Shared pieces: Layout, Header, Footer, ButtonLink, Butterfly, Clover, Progress, SkipLink
  hooks/          usePageSetup: tab title and scroll on navigation
  lib/            guestNotes.ts: the note for the next guest (stub until phase 3)
  index.css       Tailwind and the design tokens (colours, fonts)
```

## Principles the code has to keep

- Keyboard navigable, with visible focus states and a skip link
- Works on a phone, no horizontal scroll
- Fast: the surface loads first, deeper pages load only when visited
- Semantic HTML
- Respects "reduce motion"
- Visitors' answers are never stored or sent anywhere

## Before going live

Search the project for `TODO` to find what's still unwritten: email, Lighthouse scores, the case study and the answers behind the butterfly. Anything left empty is hidden on the site, and each part appears by itself once it's filled in.
