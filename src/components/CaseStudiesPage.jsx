export default function CaseStudiesPage(){
  const cases = [
    { type: 'Plumbing Company', problem: 'Slow follow‑up and few reviews', solution: 'Form + SMS follow‑ups, review requests after jobs', result: 'Booked jobs up 28%, reviews doubled' },
    { type: 'HVAC Contractor', problem: 'Leads from ads not tracked', solution: 'New site pages, call tracking, CRM sync', result: 'Clear ROI and better close rate' },
    { type: 'Roofing Company', problem: 'Storm leads missed after hours', solution: 'After‑hours chatbot + routing', result: 'Captured 32% more inquiries' },
    { type: 'Tree Service', problem: 'Website outdated and slow', solution: 'Simple fast rebuild, GBP optimization', result: 'More map views and calls' },
  ]

  return (
    <main className="min-h-screen bg-slate-950 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Case Studies</h1>
        <p className="mt-2 text-blue-200/80 max-w-2xl">Real‑world fixes that made phones ring and teams breathe easier.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="text-xs text-blue-300/80">{c.type}</div>
              <h3 className="text-white font-semibold mt-1">Problem → Solution → Result</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue-200/80">
                <li><strong className="text-blue-100">Problem:</strong> {c.problem}</li>
                <li><strong className="text-blue-100">Solution:</strong> {c.solution}</li>
                <li><strong className="text-blue-100">Result:</strong> {c.result}</li>
              </ul>
              <a href="#" className="mt-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-200 hover:text-white hover:bg-white/10 transition">View details</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
