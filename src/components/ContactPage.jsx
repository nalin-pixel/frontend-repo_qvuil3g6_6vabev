import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ContactPage(){
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business_name: '', website: '', message: '', need_help_with: 'Not sure'
  })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  async function submit(e){
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const res = await fetch(`${BACKEND_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email || undefined,
          phone: form.phone || undefined,
          business_name: form.business_name || undefined,
          website: form.website || undefined,
          message: form.message,
          need_help_with: form.need_help_with,
        })
      })
      if(!res.ok) throw new Error(await res.text())
      await res.json()
      setStatus({ loading: false, success: 'Thanks! We’ll reach out shortly with next steps.', error: null })
      setForm({ name: '', email: '', phone: '', business_name: '', website: '', message: '', need_help_with: 'Not sure' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Something went wrong. Please try again or email us at hello@cova.digital' })
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Contact / Book a Call</h1>
        <p className="mt-2 text-blue-200/80 max-w-2xl">Tell us what you’re dealing with. We’ll share quick wins and a simple plan. After you submit, you’ll get a confirmation and we’ll follow up to schedule.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <form onSubmit={submit} className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-blue-200/90">Name</label>
                <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-blue-200/90">Email</label>
                <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm text-blue-200/90">Phone</label>
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm text-blue-200/90">Business Name</label>
                <input value={form.business_name} onChange={e=>setForm({...form, business_name:e.target.value})} className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Coastal Plumbing" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-200/90">Website (optional)</label>
                <input value={form.website} onChange={e=>setForm({...form, website:e.target.value})} className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://yourdomain.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-200/90">What do you need help with?</label>
                <select value={form.need_help_with} onChange={e=>setForm({...form, need_help_with:e.target.value})} className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {['Website','Reviews','Automation','Not sure'].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-200/90">Message</label>
                <textarea required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows={6} className="mt-1 w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your current setup and what success looks like." />
              </div>
            </div>
            <button disabled={status.loading} className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow hover:shadow-lg hover:brightness-110 transition disabled:opacity-50">
              {status.loading ? 'Sending...' : 'Submit' }
            </button>
            {status.success && <p className="mt-3 text-sm text-green-300">{status.success}</p>}
            {status.error && <p className="mt-3 text-sm text-red-300">{status.error}</p>}
          </form>
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Prefer email?</h3>
            <p className="text-sm text-blue-200/80 mt-1">Email us at hello@cova.digital. We read every message.</p>
            <div className="mt-6 rounded-xl bg-slate-900 border border-white/10 p-4 text-sm text-blue-200/80">
              What happens next: We’ll review your note, reply with quick suggestions, and share booking times for a short call.
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
