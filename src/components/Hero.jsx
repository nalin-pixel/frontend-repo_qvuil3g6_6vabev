import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-slate-900" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-blue-200/90 text-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
              Coastal Virginia • Local Service Specialists
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Save time and grow with automation, AI, and a website that works
            </h1>
            <p className="mt-4 text-lg text-blue-100/90 max-w-xl">
              We help plumbers, HVAC, roofers, and home services win more jobs by fixing the basics, automating follow‑up, and making sure you look great online.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow hover:shadow-lg hover:brightness-110 transition">
                Book a Free Strategy Call
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-blue-200 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 transition">
                See How It Works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 grid place-items-center text-blue-200">
                Suggestion: dashboard mockup or automation flow illustration with shark fin watermark
              </div>
            </div>
            <p className="mt-3 text-xs text-blue-300/70">Suggestion: use a clean dashboard screenshot, wave shapes, or a subtle shark illustration.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
