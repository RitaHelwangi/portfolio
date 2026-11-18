import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Sets the tab title, and on route change scrolls to #hash or the top.
export function usePageSetup(title: string) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = title
  }, [title])

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
