export default function BookingPage() {
  return (
    <section className="section-shell">
      <p className="eyebrow">Booking Flow</p>
      <h1 className="section-title">A clear multi-step reservation journey.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {[
          "1. Dates",
          "2. Room",
          "3. Guest Details",
          "4. Payment"
        ].map((step) => (
          <div key={step} className="rounded-[2rem] bg-white p-6 shadow-card">
            <p className="font-display text-2xl text-ink">{step}</p>
            <p className="mt-3 text-sm leading-7 text-ink/68">
              Placeholder step card for the booking funnel and validation logic.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-card">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-ink/10 px-4 py-3" type="date" />
          <input className="rounded-2xl border border-ink/10 px-4 py-3" type="date" />
          <input className="rounded-2xl border border-ink/10 px-4 py-3" placeholder="Guest name" />
          <input className="rounded-2xl border border-ink/10 px-4 py-3" placeholder="Email" />
          <input className="rounded-2xl border border-ink/10 px-4 py-3" placeholder="Coupon code" />
          <select className="rounded-2xl border border-ink/10 px-4 py-3">
            <option>Pay in full</option>
            <option>Pay deposit</option>
          </select>
        </div>
        <button className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-clay">
          Continue to payment
        </button>
      </div>
    </section>
  );
}
