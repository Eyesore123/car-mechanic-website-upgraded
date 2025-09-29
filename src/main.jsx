if (window.location.protocol === 'http:') {
  window.location.href = window.location.href.replace('http:', 'https:');
}

import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider } from './context/LanguageContext.jsx'
import BackToTopButton from './components/BackToTopButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
      <BackToTopButton />
    </LanguageProvider>
  </StrictMode>,
)