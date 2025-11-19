export default function AutomationPage(){
  const assistants = [
    { name: 'Lead Intake Assistant', desc: 'Greets new leads, asks key questions, and routes them to the right person.' },
    { name: 'Review Response Assistant', desc: 'Drafts thoughtful replies to every review so you never miss one.' },
    { name: 'Scheduling Assistant', desc: 'Finds times, confirms appointments, and reduces no‑shows.' },
    { name: 'FAQ Answering Assistant', desc: 'Answers common questions and collects info after hours.' },
  ]

  const steps = [
    'Lead comes in (form, call, chat, GBP message)',
    'Automation routes it to the right place',
    'Follow‑ups go out by text and email',
    'Reports show what happened and what closed',
  ]

  return (
    <main className="min-h-screen bg-slate-950 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Automation & AI</h1>
        <p className="mt-2 text-blue-200/80 max-w-2xl">We connect your tools so nothing slips through the cracks and your team gets time back.</p>

        <section className="mt-8">
          <h2 className="text-white font-semibold">How it works</h2>
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s} className="relative rounded-xl bg-slate-900/50 p-4">
                  <span className="absolute -top-3 -left-3 h-7 w-7 grid place-items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold">{i+1}</span>
                  <span className="text-blue-100">{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs text-blue-300/70">Suggestion: use a simple timeline or flow diagram with arrows and icons (forms → CRM → SMS → reports).</p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-white font-semibold">Virtual Assistants</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {assistants.map(a => (
              <div key={a.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4" />
                <h3 className="text-white font-semibold">{a.name}</h3>
                <p className="text-sm text-blue-200/80 mt-1">{a.desc}</p>
              </div>
            ))}
          </div>
          <a href="/contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow hover:shadow-lg hover:brightness-110 transition">
            Request an Automation Audit
          </a>
        </section>
      </div>
    </main>
  )
}
