type Props = { size?: number; className?: string }

// The door. The only decorative symbol on the surface: transformation.
export default function Butterfly({ size = 56, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <g className="fill-wing stroke-ink" strokeWidth={1.4} strokeLinejoin="round">
        <path d="M24 22C18 8 4 8 6 20C8 28 18 26 24 24Z" />
        <path d="M24 22C30 8 44 8 42 20C40 28 30 26 24 24Z" />
        <path d="M24 25C18 30 10 38 16 41C20 43 23 34 24 27Z" />
        <path d="M24 25C30 30 38 38 32 41C28 43 25 34 24 27Z" />
      </g>
      <g className="stroke-ink" strokeLinecap="round">
        <path d="M24 18V34" strokeWidth={1.6} />
        <path d="M24 18C23 14 21 12 19 11M24 18C25 14 27 12 29 11" strokeWidth={1.2} />
      </g>
    </svg>
  )
}
