// Hidden for the curious: intuition, and how much there is to give.
export default function Clover({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g className="stroke-sage" strokeWidth={1.4}>
        <circle cx="9" cy="8" r="3.4" />
        <circle cx="15" cy="8" r="3.4" />
        <circle cx="9" cy="14" r="3.4" />
        <circle cx="15" cy="14" r="3.4" />
        <path d="M12 14C13 18 14 20 16 22" strokeLinecap="round" />
      </g>
    </svg>
  )
}
