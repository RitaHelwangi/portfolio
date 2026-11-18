import { Link, useLocation } from 'react-router'
import { site } from '../content/site.ts'

const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function Header() {
  // On the home page your name already sits next to your photo, so the corner shows only the menu.
  const isHome = useLocation().pathname === '/'
  return (
    <header className="wrap flex flex-wrap items-center justify-between gap-4 py-6">
      {isHome ? (
        <span />
      ) : (
        <Link to="/" className="font-serif text-[22px] text-ink no-underline hover:text-ink">
          {site.name}
        </Link>
      )}
      <nav aria-label="Main">
        <ul className="flex flex-wrap gap-7 text-[15px]">
          {nav.map((item) => (
            <li key={item.href}>
              <Link to={item.href} className="text-muted no-underline hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
