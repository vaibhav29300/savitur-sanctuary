import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Keep previously shared /#/... links working after moving to clean URLs.
const legacyPath = window.location.hash.match(/^#(\/.*)$/)?.[1]
if (legacyPath) {
  window.history.replaceState(null, '', legacyPath)
}

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
