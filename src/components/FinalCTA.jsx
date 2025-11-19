import Hero from './Hero'

export default function FinalCTA() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Premium έπιπλα κρεβατοκάμαρας & σαλονιού με ραντεβού στο κατάστημα</h2>
          <p className="text-slate-600 mt-2">Ξεκινήστε σήμερα με μια δωρεάν συμβουλευτική και λάβετε σαφές χρονοδιάγραμμα παράδοσης.</p>
        </div>
        <div className="mt-8">
          <Hero />
        </div>
      </div>
    </section>
  )
}
