import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import POSApp from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <POSApp />
  </StrictMode>,
)
