import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/Styles.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <LanguageProvider>
    <App />
  </LanguageProvider>
  </StrictMode>,
)
