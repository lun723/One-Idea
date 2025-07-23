import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/CSS/index.css'
import App from './App.tsx'
import '@fortawesome/fontawesome-free/css/all.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
