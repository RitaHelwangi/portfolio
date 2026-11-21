import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { caseStudy } from './src/content/caseStudy.ts'

const SITE = 'https://www.ritahelwangi.com'

// Pages that get their own starting HTML, so link previews (LinkedIn) and
// search engines see the right title, description and address before any
// JavaScript runs. The home page uses index.html as it is.
const pages = [
  {
    path: '/work/operations-center',
    title: `${caseStudy.title} · Rita Helwangi`,
    description: caseStudy.description,
  },
]

function escape(text: string) {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function pageMeta(): Plugin {
  let outDir = 'dist'
  return {
    name: 'page-meta',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const base = readFileSync(join(outDir, 'index.html'), 'utf8')
      for (const page of pages) {
        const url = SITE + page.path
        const title = escape(page.title)
        const description = escape(page.description)
        const swaps: [RegExp, string][] = [
          [/<title>[^<]*<\/title>/, `<title>${title}</title>`],
          [/(<meta name="description" content=")[^"]*/, `$1${description}`],
          [/(<meta property="og:url" content=")[^"]*/, `$1${url}`],
          [/(<meta property="og:title" content=")[^"]*/, `$1${title}`],
          [/(<meta property="og:description" content=")[^"]*/, `$1${description}`],
          [/(<meta property="og:type" content=")[^"]*/, '$1article'],
          [/(<link rel="canonical" href=")[^"]*/, `$1${url}`],
        ]
        let html = base
        for (const [pattern, replacement] of swaps) {
          if (!pattern.test(html)) throw new Error(`page-meta: ${pattern} not found in index.html`)
          html = html.replace(pattern, replacement)
        }
        const file = join(outDir, page.path, 'index.html')
        mkdirSync(dirname(file), { recursive: true })
        writeFileSync(file, html)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), pageMeta()],
})
