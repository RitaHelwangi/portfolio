import { useEffect } from 'react'
import ButtonLink from '../components/ButtonLink.tsx'
import Layout from '../components/Layout.tsx'
import { usePageSetup } from '../hooks/usePageSetup.ts'

export default function NotFound() {
  usePageSetup('Not found · Rita Helwangi')

  // Tell search engines not to index addresses that don't exist.
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])
  return (
    <Layout>
      <section className="wrap py-30">
        <h1 className="font-serif text-[44px] font-normal">This page flew away.</h1>
        <p className="mt-4 text-muted">It isn't here, but the rest of the site is.</p>
        <div className="mt-8">
          <ButtonLink href="/">Back to the start</ButtonLink>
        </div>
      </section>
    </Layout>
  )
}
