export default function ServicesPage(){
  const services = [
    {
      title: 'Web Design & Local SEO',
      desc: 'Clear, fast websites that bring in leads and show up when people search near you.',
      bullets: ['Mobile‑first, speed‑focused', 'Calls, forms, and tracking set up right', 'Local SEO basics that move rankings'],
    },
    {
      title: 'Review Management & Reputation',
      desc: 'Consistent new reviews and professional responses so you stand out everywhere.',
      bullets: ['Ask every happy customer automatically', 'Respond with the right tone', 'Showcase best reviews on your site'],
    },
    {
      title: 'Automation & AI',
      desc: 'Connect your tools so leads route instantly, follow‑ups go out, and reporting is simple.',
      bullets: ['n8n / Activepieces workflows', 'Email, SMS, and CRM integration', 'Custom virtual assistants for intake & FAQs'],
    },
  ]
  return (
    <main className="min-h-screen bg-slate-950 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Services</h1>
        <p className="mt-2 text-blue-200/80 max-w-2xl">Pick what you need now. We’ll keep it practical and focused on outcomes.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map(s => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition flex flex-col">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4" />
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-blue-200/80">{s.desc}</p>
              <ul className="mt-3 space-y-2 text-sm text-blue-200/80 list-disc list-inside">
                {s.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <a href="/contact" className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-lg hover:brightness-110 transition">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
