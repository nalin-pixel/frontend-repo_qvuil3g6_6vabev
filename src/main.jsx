import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ServicesPage from './components/ServicesPage'
import AutomationPage from './components/AutomationPage'
import CaseStudiesPage from './components/CaseStudiesPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
