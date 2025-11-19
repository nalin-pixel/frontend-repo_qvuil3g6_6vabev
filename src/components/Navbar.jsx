import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-90 group-hover:opacity-100 transition" />
        <span className="relative text-white">
          {/* Simple shark fin mark */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18c6-6 9-9 16-9-2 2-3 4-3 6 0 2 1 3 1 3H4Z" fill="white" fillOpacity="0.9"/>
          </svg>
        </span>
      </span>
      <div className="leading-tight">
        <span className="block font-bold text-white tracking-tight">COVA Digital</span>
        <span className="block text-xs text-blue-200/80">Coastal VA • Automation & AI</span>
      </div>
    </Link>
  )
}

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/automation', label: 'Automation & AI' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} className={({isActive}) => `text-sm transition hover:text-white ${isActive ? 'text-white' : 'text-blue-200/80'}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-lg hover:brightness-110 transition">
              Book a Call
            </Link>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 text-blue-200 hover:text-white hover:bg-white/10" onClick={()=>setOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 pt-4">
            <div className="flex items-center justify-between">
              <Logo />
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 text-blue-200 hover:text-white hover:bg-white/10" onClick={()=>setOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="mt-6 grid gap-2">
              {links.map(l => (
                <NavLink key={l.to} to={l.to} onClick={()=>setOpen(false)} className={({isActive}) => `block rounded-xl px-4 py-3 text-base ${isActive ? 'bg-white/10 text-white' : 'text-blue-200/90 hover:bg-white/5 hover:text-white'}`}>
                  {l.label}
                </NavLink>
              ))}
              <Link to="/contact" onClick={()=>setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-base font-semibold text-white shadow hover:shadow-lg hover:brightness-110 transition">
                Book a Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
