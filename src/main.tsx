import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FinanceApp from './FinanceApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FinanceApp />
  </StrictMode>,
)
