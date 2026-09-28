import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Keep previously shared /#/... links working after moving to clean URLs.
const legacyPath = window.location.hash.match(/^#(\/.*)$/)?.[1]
if (legacyPath) {
  window.history.replaceState(null, '', legacyPath)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
