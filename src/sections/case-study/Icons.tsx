// Small line icons for the case study visuals. Decorative only.
type P = { className?: string }
const base = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true } as const

export const OfficeIcon = ({ className }: P) => (
  <svg {...base} className={className} stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round">
    <path d="M4 20V6l8-3v17M12 9h8v11M4 20h16M7 8h2M7 11h2M7 14h2M15 12h2M15 15h2" strokeLinecap="round" />
  </svg>
)
export const GatewayIcon = ({ className }: P) => (
  <svg {...base} className={className} stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="6" rx="1.5" />
    <rect x="4" y="14" width="16" height="6" rx="1.5" />
    <path d="M8 7h.01M8 17h.01" />
  </svg>
)
export const AppIcon = ({ className }: P) => (
  <svg {...base} className={className} stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <path d="M10 8h4M10 11h4M10 14h2" />
  </svg>
)
export const ShipIcon = ({ className }: P) => (
  <svg {...base} className={className} stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 15l2 4h14l2-4H3zM6 15V9h12v6M10 9V5h4v4" />
  </svg>
)
export const CheckIcon = ({ className }: P) => (
  <svg {...base} className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
)
export const CrossIcon = ({ className }: P) => (
  <svg {...base} className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <path d="M7 7l10 10M17 7L7 17" />
  </svg>
)
