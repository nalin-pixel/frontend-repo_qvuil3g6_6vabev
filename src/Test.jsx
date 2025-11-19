import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ServicesPage from './components/ServicesPage'
import AutomationPage from './components/AutomationPage'
import CaseStudiesPage from './components/CaseStudiesPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

export default function Test(){
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <Routes>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
