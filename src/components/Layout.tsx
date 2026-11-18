import type { ReactNode } from 'react'
import Footer from './Footer.tsx'
import Header from './Header.tsx'
import SkipLink from './SkipLink.tsx'

export default function Layout({ children, footer = true }: { children: ReactNode; footer?: boolean }) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      {footer && <Footer />}
    </>
  )
}
