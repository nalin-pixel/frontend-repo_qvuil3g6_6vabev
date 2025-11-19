import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { WhoWeHelp, WhatWeDo, Results, Testimonials, FinalCTA } from './components/HomeSections'

export default function App(){
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <div id="how-it-works">
          <WhoWeHelp />
          <WhatWeDo />
          <Results />
          <Testimonials />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}
