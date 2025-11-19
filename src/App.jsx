import Hero from './components/Hero'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Trust from './components/Trust'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  const lastModified = new Date().toISOString()

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* SEO Meta for preview purposes (would normally be in index.html or via SSR) */}
      <div className="hidden" aria-hidden>
        <div data-meta-title>Epiplagand.gr | Premium έπιπλα κρεβατοκάμαρας & σαλόνι — Ραντεβού για εξατομικευμένη πρόταση</div>
        <div data-meta-description>Custom ελληνικές κατασκευές σε κρεβατοκάμαρες και σαλόνι. Ραντεβού στο κατάστημα, δωρεάν επιμέτρηση, σαφή χρόνοι παράδοσης, premium ποιότητα.</div>
        <div data-canonical>https://www.epiplagand.gr/rantevou-epipla-ypnodomatio-saloni</div>
        <div data-structured-json>{JSON.stringify({
          '@context':'https://schema.org',
          '@type':'LocalBusiness',
          name:'Epiplagand',
          url:'https://www.epiplagand.gr',
          image:'https://www.epiplagand.gr/og.jpg',
          telephone:'+30 210 0000000',
          address:{'@type':'PostalAddress', addressLocality:'Athens', addressCountry:'GR'},
          department:[{ '@type':'Service', name:'Έπιπλα κρεβατοκάμαρας' }, { '@type':'Service', name:'Έπιπλα σαλονιού' }]
        })}</div>
        <div data-alt-image-1>ελληνικά premium έπιπλα κρεβατοκάμαρας και σαλονιού</div>
        <div data-url-slug>rantevou-epipla-ypnodomatio-saloni</div>
        <div data-last-modified>{lastModified}</div>
        <div data-og-image>https://www.epiplagand.gr/og.jpg</div>
        <div data-twitter-image>https://www.epiplagand.gr/og.jpg</div>
        <div data-internal-links>/sitemap.xml,/robots.txt</div>
      </div>

      {/* Page */}
      <Hero focus="Κρεβάτι / Σαλόνι" />
      <Benefits />
      <HowItWorks />
      <Trust />
      <FAQ />
      <FinalCTA />

      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} epiplagand.gr — Όλα τα δικαιώματα διατηρούνται.
      </footer>
    </div>
  )
}

export default App
