export default function HowItWorks() {
  const steps = [
    {
      title: 'Κλείνετε ραντεβού',
      desc: 'Μέσα από τη φόρμα ή τηλεφωνικά, με την ημέρα και ώρα που σας εξυπηρετεί.'
    },
    {
      title: 'Συμβουλευτική & επιλογές',
      desc: 'Στο κατάστημα επιλέγουμε υλικά, χρώματα και μηχανισμούς, με βάση τον χώρο σας.'
    },
    {
      title: 'Επιμέτρηση & προσφορά',
      desc: 'Μετράμε στον χώρο σας και αποστέλλουμε αναλυτική προσφορά και 3D.'
    },
    {
      title: 'Κατασκευή & παράδοση',
      desc: 'Παρακολουθείτε την πορεία — παραδίδουμε στην ημερομηνία που συμφωνήσαμε.'
    }
  ]

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Πώς λειτουργεί</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-6 bg-white">
              <div className="text-amber-700 font-extrabold text-4xl">{i+1}</div>
              <h3 className="font-semibold text-slate-900 mt-2">{s.title}</h3>
              <p className="text-slate-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
