import { Check, Sparkles, Star, Timer, MessageSquare, Shield } from 'lucide-react'

export function WhoWeHelp(){
  const items = [
    { title: 'Plumbers', desc: 'Convert more calls into booked jobs with instant follow‑ups.' },
    { title: 'HVAC', desc: 'Keep your schedule full with smart reminders and reviews.' },
    { title: 'Roofers', desc: 'Capture storm leads fast and never miss an opportunity.' },
    { title: 'Other Local Services', desc: 'Tree, electrical, cleaning, and more — we’ve got you.' },
  ]
  return (
    <section className="py-16 bg-slate-950" id="who">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Who we help</h2>
        <p className="mt-2 text-blue-200/80 max-w-2xl">Busy owners and office managers who want the phones ringing and the paperwork lighter.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i)=> (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mb-3" />
              <h3 className="font-semibold text-white">{i.title}</h3>
              <p className="text-sm text-blue-200/80 mt-1">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhatWeDo(){
  const pillars = [
    { title: 'Websites & Online Presence', points: ['Fast, clear, mobile‑first pages', 'Local SEO basics that move the needle', 'Tracking that shows what’s working'] },
    { title: 'Reviews & Reputation', points: ['Ask every happy customer', 'Respond to every review', 'Showcase the best across the web'] },
    { title: 'Automation & AI Workflows', points: ['Instant lead routing + follow‑up', 'Lead recovery sequences', 'Custom “virtual assistant” automations'] },
  ]
  return (
    <section className="py-16" id="what">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">What we do</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4" />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue-200/80">
                {p.points.map(pt => (
                  <li key={pt} className="flex items-start gap-2"><Check size={16} className="text-blue-300 mt-0.5" /> <span>{pt}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Results(){
  const stats = [
    { k: 'More reviews', v: '+150% avg increase in 60 days' },
    { k: 'Faster response', v: 'Under 5 minutes on new leads' },
    { k: 'Fewer missed leads', v: 'Recover 20–35% with follow‑ups' },
  ]
  return (
    <section className="py-16 bg-slate-950" id="results">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map(s => (
              <div key={s.k} className="text-center">
                <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{s.k}</div>
                <div className="mt-1 text-blue-200/80">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonials(){
  const quotes = [
    { q: 'We went from chasing calls to booking jobs automatically. Easiest win we had this year.', a: 'Owner, Coastal Plumbing' },
    { q: 'Reviews doubled in two months and we finally know where leads come from.', a: 'Office Manager, Tidewater HVAC' },
    { q: 'They built a simple site, hooked up our forms, and set up text follow‑ups. Game changer.', a: 'Partner, Bay Roofing' },
  ]
  return (
    <section className="py-16" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">What clients say</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {quotes.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <p className="text-blue-100">“{t.q}”</p>
              <p className="mt-3 text-sm text-blue-300/80">— {t.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA(){
  return (
    <section className="py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to save time and book more jobs?</h2>
        <p className="mt-2 text-blue-200/80">Let’s map out quick wins and a simple plan. No fluff, no pressure.</p>
        <a href="/contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow hover:shadow-lg hover:brightness-110 transition">
          Book a Free Strategy Call
        </a>
      </div>
    </section>
  )
}
