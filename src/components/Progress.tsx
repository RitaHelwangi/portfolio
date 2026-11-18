type Props = { total: number; current: number }

export default function Progress({ total, current }: Props) {
  return (
    <ol aria-label="Progress" className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => {
        const state = i < current ? 'done' : i === current ? 'current' : 'todo'
        return (
          <li
            key={i}
            aria-current={state === 'current' ? 'step' : undefined}
            className={`h-2.5 rounded-full transition-all motion-reduce:transition-none ${
              state === 'done' ? 'w-2.5 bg-sage' : state === 'current' ? 'w-6 bg-ink' : 'w-2.5 bg-line-strong'
            }`}
          >
            <span className="sr-only">
              Step {i + 1}
              {state === 'done' ? ', done' : state === 'current' ? ', current' : ''}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
