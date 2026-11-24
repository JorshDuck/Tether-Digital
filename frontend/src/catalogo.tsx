import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CatalogoPage from './pages/CatalogoPage.tsx'
import { ErrorBoundary } from './components/common/ErrorBoundary.tsx'
import { initAnalytics } from './utils/analytics.ts'

initAnalytics()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <CatalogoPage />
    </ErrorBoundary>
  </StrictMode>,
)
