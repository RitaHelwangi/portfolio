import { useEffect } from 'react'
import { useLocation } from 'react-router'

// The site's main address. Every page tells search engines this is the original.
const SITE = 'https://www.ritahelwangi.com'

// The description written in index.html, used by pages without their own.
const DEFAULT_DESCRIPTION =
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? ''

// Sets the tab title, the page description and the canonical address,
// and on route change scrolls to #hash or the top.
export function usePageSetup(title: string, description?: string) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = title
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description ?? DEFAULT_DESCRIPTION
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = SITE + (pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname)
  }, [title, description, pathname])

  useEffect(() => {
    if (hash) {
      // Wait for fonts so the page has its final height before scrolling.
      const scroll = () => document.getElementById(hash.slice(1))?.scrollIntoView()
      scroll()
      document.fonts.ready.then(scroll)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
}
