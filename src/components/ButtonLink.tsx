import type { ReactNode } from 'react'
import { Link } from 'react-router'

type Props = {
  href: string
  variant?: 'solid' | 'outline'
  children: ReactNode
}

const base = 'inline-flex min-h-12 items-center rounded-full px-6 font-medium no-underline transition-colors'
const variants = {
  solid: 'bg-ink text-paper hover:bg-sage-deep hover:text-paper',
  outline: 'border border-line-strong text-ink hover:border-ink hover:text-ink',
}

// Internal routes use the router, everything else is a plain link.
export default function ButtonLink({ href, variant = 'solid', children }: Props) {
  const className = `${base} ${variants[variant]}`
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
