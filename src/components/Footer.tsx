import { useState } from 'react'
import { site } from '../content/site.ts'
import Clover from './Clover.tsx'

export default function Footer() {
  const [found, setFound] = useState(false)

  return (
    <footer className="wrap flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 pb-12 text-sm text-muted">
      <p>
        {site.name} · {site.location}, Sweden
      </p>
      <div className="flex items-center gap-2">
        <span aria-live="polite" className="text-sage">
          {found ? 'You found the clover. Good things to you.' : ''}
        </span>
        <button
          type="button"
          onClick={() => setFound(true)}
          aria-label="A small clover"
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full"
        >
          <Clover />
        </button>
      </div>
    </footer>
  )
}
