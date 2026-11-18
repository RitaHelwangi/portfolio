import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'

// The surface loads first and fast. Deeper pages load only when visited.
const CaseStudy = lazy(() => import('./pages/CaseStudy.tsx'))
const Questions = lazy(() => import('./pages/Questions.tsx'))

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/operations-center" element={<CaseStudy />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
