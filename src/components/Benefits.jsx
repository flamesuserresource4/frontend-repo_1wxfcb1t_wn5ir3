export default function Benefits() {
  const items = [
    {
      title: 'Προσωπικός σύμβουλος',
      desc: 'Ένας ειδικός δίπλα σας στο κατάστημα για επιλογές υλικών και σχεδίου.'
    },
    {
      title: 'Ακριβής επιμέτρηση',
      desc: 'Εκτίμηση στον χώρο σας και 3D πρόταση πριν την παραγγελία.'
    },
    {
      title: 'Σαφές χρονοδιάγραμμα',
      desc: 'Συγκεκριμένη ημερομηνία παράδοσης — τέλος στις αργοπορίες.'
    },
    {
      title: 'Τιμή χωρίς εκπλήξεις',
      desc: 'Διαφανής κοστολόγηση με premium ποιότητα κατασκευής.'
    }
  ]

  return (
    <section id="benefits" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Γιατί με ραντεβού</h2>
        <p className="mt-2 text-slate-600">Κερδίζετε χρόνο, σιγουριά και την καλύτερη δυνατή πρόταση για τον χώρο σας.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">{it.title}</h3>
              <p className="text-slate-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
        <img className="mt-8 w-full rounded-xl object-cover aspect-[16/6]" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop" alt="οφέλη ραντεβού για αγορά επίπλων premium ποιότητας" />
      </div>
    </section>
  )
}
