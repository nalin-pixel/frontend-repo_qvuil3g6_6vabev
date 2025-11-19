import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Mail } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
              <span className="font-semibold text-white">COVA Digital</span>
            </div>
            <p className="text-sm text-blue-200/80">Automation-first marketing partner for local service businesses in Coastal Virginia and beyond.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick links</h4>
            <ul className="space-y-2 text-blue-200/80 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/automation" className="hover:text-white">Automation & AI</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p className="text-sm text-blue-200/80">Email us: hello@cova.digital</p>
            <p className="text-sm text-blue-200/80">Based in Coastal Virginia</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <div className="flex gap-3 text-blue-200/80">
              <a href="#" className="hover:text-white"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
              <a href="mailto:hello@cova.digital" className="hover:text-white"><Mail size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-blue-200/60">© {new Date().getFullYear()} COVA Digital. All rights reserved.</div>
      </div>
    </footer>
  )
}
