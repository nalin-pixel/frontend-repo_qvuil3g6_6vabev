export default function AboutPage(){
  return (
    <main className="min-h-screen bg-slate-950 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">About COVA Digital</h1>
        <p className="mt-2 text-blue-200/80 max-w-2xl">Based in Coastal Virginia. We help real local businesses become the “shark” in their market — steady, confident, and always moving forward.</p>
        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Our story</h3>
            <p className="text-sm text-blue-200/80 mt-2">We started after watching great trades struggle with messy websites and missed leads. We fix the basics, automate the boring stuff, and keep things practical.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Values</h3>
            <ul className="text-sm text-blue-200/80 mt-2 space-y-2 list-disc list-inside">
              <li>Honest pricing — no inflated rates</li>
              <li>Only what you really need</li>
              <li>Clear communication and quick support</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Team</h3>
            <p className="text-sm text-blue-200/80 mt-2">Small, responsive, and hands‑on. Placeholder avatars here.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
