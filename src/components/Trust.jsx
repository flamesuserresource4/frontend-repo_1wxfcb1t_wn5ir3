export default function Trust() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Εμπιστοσύνη</h2>
        <p className="text-slate-600 mt-2">Σύντομα θα προστεθούν μαρτυρίες πελατών και λογότυπα συνεργατών. Μπορούμε να εμφανίσουμε Google Reviews και projects.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <div key={i} className="rounded-xl border border-slate-200 p-6">
              <div className="text-amber-700 text-xl font-bold">★★★★★</div>
              <p className="text-slate-700 mt-2">Εξαιρετική ποιότητα και τήρηση χρόνων παράδοσης. Η ομάδα ήταν δίπλα μας σε κάθε βήμα.</p>
              <div className="mt-3 text-sm text-slate-500">— Πελάτης</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
