export default function FAQ() {
  const items = [
    {
      q: 'Πόσο διαρκεί η παράδοση;',
      a: 'Συνήθως 20–35 ημέρες ανάλογα με το project. Δίνουμε συγκεκριμένη ημερομηνία στο συμφωνητικό.'
    },
    {
      q: 'Πώς διασφαλίζετε την ποιότητα;',
      a: 'Premium υλικά, έλεγχος ποιότητας ανά στάδιο και επίσημη εγγύηση κατασκευής.'
    },
    {
      q: 'Γίνονται custom κατασκευές;',
      a: 'Βεβαίως. Σχεδιάζουμε από το μηδέν με βάση τον χώρο και τις ανάγκες σας.'
    },
    {
      q: 'Υπάρχει κόστος επιμέτρησης;',
      a: 'Η πρώτη επιμέτρηση είναι δωρεάν για ραντεβού μέσω της φόρμας.'
    },
    {
      q: 'Τιμές;',
      a: 'Δουλεύουμε με διαφανή κοστολόγηση και προσφορά πριν την παραγγελία. Δώστε μας διαστάσεις/υλικά για εκτίμηση.'
    },
    {
      q: 'Παρέχετε μεταφορά και τοποθέτηση;',
      a: 'Ναι, αναλαμβάνουμε πλήρως με έμπειρα συνεργεία.'
    }
  ]

  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Συχνές ερωτήσεις</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-6 bg-white">
              <div className="font-semibold text-slate-900">{it.q}</div>
              <p className="text-slate-600 mt-1">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
