import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Hero({ focus = 'Κρεβάτι / Σαλόνι' }) {
  const [form, setForm] = useState({ first_name: '', last_name: '', phone: '', email: '', focus })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'landing', page: window.location.href })
      })
      if (!res.ok) throw new Error((await res.json()).detail || 'Αποτυχία υποβολής')
      setSuccess(true)
      // Facebook Pixel Lead event if pixel exists
      if (window.fbq) {
        window.fbq('track', 'Lead', { content_name: 'Landing Lead' })
      }
      setForm({ first_name: '', last_name: '', phone: '', email: '', focus })
    } catch (err) {
      setError(err.message || 'Κάτι πήγε στραβά. Προσπαθήστε ξανά.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(199,210,254,0.25),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">epiplagand.gr</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Premium ελληνικές κατασκευές για {focus.toLowerCase()} — ραντεβού στο φυσικό κατάστημα
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Επιλέξτε εξατομικευμένα έπιπλα με άμεση επιμέτρηση χώρου και διαφανή τιμολόγηση. Τερματίζουμε τις καθυστερήσεις παράδοσης με σαφή χρονοδιάγραμμα.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#lead-form" className="inline-flex items-center justify-center rounded-md bg-amber-700 hover:bg-amber-800 text-white px-5 py-3 font-semibold shadow-lg shadow-amber-700/20 transition">Κλείστε ραντεβού</a>
              <a href="#benefits" className="inline-flex items-center justify-center rounded-md border border-slate-300 hover:border-slate-400 text-slate-700 px-5 py-3 font-semibold transition">Γιατί με ραντεβού;</a>
            </div>
            <div className="mt-4 text-sm text-slate-500">Προτεινόμενο URL: /rantevou-epipla-ypnodomatio-saloni</div>
            <div className="mt-1 text-xs text-slate-400">Εσωτερικοί σύνδεσμοι: <a className="underline" href="/sitemap.xml">sitemap.xml</a> • <a className="underline" href="/robots.txt">robots.txt</a></div>
          </div>

          <div id="lead-form" className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-900">Ζητήστε προσφορά & ραντεβού</h2>
            <p className="text-sm text-slate-500 mt-1">Συμπληρώστε τα στοιχεία σας — θα επικοινωνήσουμε εντός 24 ωρών.</p>

            {success ? (
              <div className="mt-4 p-4 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                Ευχαριστούμε! Καταχωρήσαμε το αίτημά σας. Θα σας καλέσουμε άμεσα.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Όνομα</label>
                    <input required name="first_name" value={form.first_name} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-600 focus:ring-amber-600" placeholder="π.χ. Γιάννης" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Επώνυμο</label>
                    <input required name="last_name" value={form.last_name} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-600 focus:ring-amber-600" placeholder="π.χ. Παπαδόπουλος" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Τηλέφωνο</label>
                    <input required name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-600 focus:ring-amber-600" placeholder="π.χ. 69XXXXXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-600 focus:ring-amber-600" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Εστίαση</label>
                  <select name="focus" value={form.focus} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-600 focus:ring-amber-600">
                    <option>Κρεβάτι / Σαλόνι</option>
                    <option>Κουζίνες</option>
                    <option>Custom Κατασκευές</option>
                  </select>
                </div>
                {error && <div className="text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-md p-2">{error}</div>}
                <button disabled={loading} className="inline-flex items-center justify-center rounded-md bg-amber-700 hover:bg-amber-800 text-white px-5 py-3 font-semibold shadow-lg shadow-amber-700/20 transition disabled:opacity-60">
                  {loading ? 'Αποστολή…' : 'Κλείστε ραντεβού'}
                </button>
                <p className="text-xs text-slate-500">Με την υποβολή, συμφωνείτε με την επεξεργασία των δεδομένων σας για σκοπούς επικοινωνίας.</p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <img className="rounded-lg object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1726731782773-c6b8265dbbca?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlQ0UlQjUlQ0UlQkIlQ0UlQkIlQ0UlQjclQ0UlQkQlQ0UlQjklQ0UlQkElQ0UlQUMlMjBwcmVtaXVtJTIwJUNFJUFEJUNGJTgwJUNFJUI5JUNGJTgwJUNFJUJCJUNFJUIxJTIwJUNFJUJBJUNGJTgxJUNFJUI1JUNFJUIyJUNFJUIxJUNGJTg0JUNFJUJGJUNFJUJBJUNFJUFDJUNFJUJDJUNFJUIxJUNGJTgxJUNFJUIxJUNGJTgyfGVufDB8MHx8fDE3NjM1NTU1MzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="ελληνικά premium έπιπλα κρεβατοκάμαρας και σαλονιού" />
          <img className="rounded-lg object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop" alt="μοντέρνο σαλόνι custom επίπλωση" />
          <img className="rounded-lg object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop" alt="ποιοτικό ξύλο για κρεβάτι και κομοδίνα" />
          <img className="rounded-lg object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop" alt="minimal αισθητική ελληνικά έπιπλα σαλονιού" />
        </div>
      </div>
    </section>
  )
}
