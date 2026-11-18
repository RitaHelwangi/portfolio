import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router'
import Butterfly from '../components/Butterfly.tsx'
import ButtonLink from '../components/ButtonLink.tsx'
import Progress from '../components/Progress.tsx'
import { questions, questionsReady } from '../content/questions.ts'
import { usePageSetup } from '../hooks/usePageSetup.ts'
import { NOTE_MAX_LENGTH, getNoteForGuest, leaveNote } from '../lib/guestNotes.ts'

// Layer 3, behind the butterfly. A conversation at my table.
// Answers live only in this component's state: never stored, never sent.

const fieldClass =
  'w-full resize-y rounded-2xl border border-line-strong bg-card px-4.5 py-4 font-serif text-xl leading-normal text-ink placeholder:text-muted/70'
const primaryButton =
  'min-h-12 cursor-pointer rounded-full bg-ink px-6 font-medium text-paper transition-colors hover:bg-sage-deep disabled:cursor-not-allowed disabled:opacity-40'
const secondaryButton =
  'min-h-12 cursor-pointer rounded-full border border-ink px-6 font-medium text-ink transition-colors hover:bg-ink hover:text-paper'

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: 'easeOut' },
} as const

export default function Questions() {
  usePageSetup('Behind the butterfly · Rita Helwangi')

  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState('')
  const [shared, setShared] = useState(false)
  const [note, setNote] = useState('')
  const [finished, setFinished] = useState(false)
  const [received, setReceived] = useState<string | null>(null)

  const headingRef = useRef<HTMLHeadingElement>(null)
  const replyRef = useRef<HTMLHeadingElement>(null)

  const isEnd = step >= questions.length
  const current = questions[Math.min(step, questions.length - 1)]

  // Move focus to the new question so keyboard and screen reader users follow along.
  useEffect(() => {
    if (step > 0) headingRef.current?.focus()
  }, [step])

  useEffect(() => {
    if (shared || finished) replyRef.current?.focus()
  }, [shared, finished])

  function next() {
    setStep((s) => s + 1)
    setDraft('')
    setShared(false)
  }

  async function finish(withNote: boolean) {
    if (withNote) await leaveNote(note)
    setReceived(await getNoteForGuest())
    setFinished(true)
  }

  // Until all my answers are written, this page isn't open yet.
  // On my own computer (npm run dev) it's always open, so I can try it.
  if (!questionsReady && !import.meta.env.DEV) return <Navigate to="/" replace />

  return (
    // Animations follow the visitor's "reduce motion" setting.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-sand">
        <header className="mx-auto flex max-w-[720px] flex-wrap items-center justify-between gap-4 px-6 py-8">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2.5 text-[15px] text-ink no-underline hover:text-ink"
          >
            <Butterfly size={28} />
            Back to the work
          </Link>
          <Progress total={questions.length + 1} current={step} />
        </header>

        <main id="main" className="mx-auto max-w-[720px] px-6 pt-8 pb-24 md:pt-12">
          <AnimatePresence mode="wait">
            {!isEnd ? (
              <motion.div key={step} {...fade}>
                <p className="eyebrow mb-4 text-sage">
                  Question {step + 1} of {questions.length}
                </p>
                <h1
                  ref={headingRef}
                  tabIndex={-1}
                  className="font-serif text-[34px] leading-[1.15] font-normal focus:outline-none md:text-[46px]"
                >
                  {current.ask}
                </h1>

                <label htmlFor="answer" className="mt-10 mb-2.5 block text-[15px] text-muted">
                  Your answer. It stays in your browser.
                </label>
                <textarea
                  id="answer"
                  rows={4}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  className={fieldClass}
                />

                {!shared && (
                  <button type="button" onClick={() => setShared(true)} className={`${primaryButton} mt-5`}>
                    Share, and I'll share back
                  </button>
                )}

                <div aria-live="polite">
                  {shared && (
                    <motion.section {...fade} className="mt-10 rounded-[20px] border border-line bg-card p-8">
                      <p className="mb-2 text-sm text-sage">In return</p>
                      <h2
                        ref={replyRef}
                        tabIndex={-1}
                        className="font-serif text-[26px] leading-tight font-normal focus:outline-none md:text-[28px]"
                      >
                        {current.gives}
                      </h2>
                      <p className="mt-4 text-muted">
                        {current.body || (import.meta.env.DEV ? 'Not written yet. Only you see this, on your own computer.' : '')}
                      </p>
                      <div className="mt-7 flex flex-wrap items-center gap-4">
                        <button type="button" onClick={next} className={secondaryButton}>
                          {step === questions.length - 1 ? 'One last thing' : 'Next question'}
                        </button>
                        {step < questions.length - 1 && (
                          <button
                            type="button"
                            onClick={() => setStep(questions.length)}
                            className="min-h-12 cursor-pointer text-[15px] text-muted underline-offset-4 hover:text-ink hover:underline"
                          >
                            That's enough for now
                          </button>
                        )}
                      </div>
                    </motion.section>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div key="end" {...fade}>
                <p className="eyebrow mb-4 text-sage">Before you go</p>
                <h1
                  ref={headingRef}
                  tabIndex={-1}
                  className="font-serif text-[34px] leading-[1.15] font-normal focus:outline-none md:text-[46px]"
                >
                  Leave one line for the next guest.
                </h1>
                <p className="mt-5 text-muted">
                  Advice, a thought, a kindness. Someone you'll never meet will read it. Notes are read by me before
                  they're shared.
                </p>

                {!finished && (
                  <>
                    <label htmlFor="note" className="mt-9 mb-2.5 block text-[15px] text-muted">
                      Your line
                    </label>
                    <textarea
                      id="note"
                      rows={2}
                      maxLength={NOTE_MAX_LENGTH}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      aria-describedby="note-count"
                      className={fieldClass}
                    />
                    <p id="note-count" className="mt-2 text-sm text-muted">
                      {note.length} / {NOTE_MAX_LENGTH}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => finish(true)}
                        disabled={!note.trim()}
                        className={primaryButton}
                      >
                        Leave it at the table
                      </button>
                      <button type="button" onClick={() => finish(false)} className={secondaryButton}>
                        Skip, just read one
                      </button>
                    </div>
                  </>
                )}

                <div aria-live="polite">
                  {finished && (
                    <motion.section {...fade} className="mt-10 rounded-[20px] border border-line bg-card p-8">
                      <h2
                        ref={replyRef}
                        tabIndex={-1}
                        className="mb-3 text-sm font-normal text-sage focus:outline-none"
                      >
                        Someone left this for you
                      </h2>
                      <blockquote className="font-serif text-[26px] leading-[1.35] italic md:text-[28px]">
                        {received}
                      </blockquote>
                      <p className="mt-7 text-muted">
                        Thank you for sitting at my table. If you'd like to keep talking, I'd love to hear from you.
                      </p>
                      <div className="mt-6">
                        <ButtonLink href="/#contact">Get in touch</ButtonLink>
                      </div>
                    </motion.section>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </MotionConfig>
  )
}
