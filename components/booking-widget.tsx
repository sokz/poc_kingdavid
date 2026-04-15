export function BookingWidget() {
  return (
    <section className="rounded-[2rem] bg-white p-6 shadow-card">
      <div className="grid gap-4 md:grid-cols-4">
        <label className="text-sm text-ink/70">
          Check-in
          <input
            type="date"
            className="mt-2 w-full rounded-2xl border border-ink/10 px-4 py-3 text-ink outline-none transition focus:border-clay"
          />
        </label>
        <label className="text-sm text-ink/70">
          Check-out
          <input
            type="date"
            className="mt-2 w-full rounded-2xl border border-ink/10 px-4 py-3 text-ink outline-none transition focus:border-clay"
          />
        </label>
        <label className="text-sm text-ink/70">
          Guests
          <select className="mt-2 w-full rounded-2xl border border-ink/10 px-4 py-3 text-ink outline-none transition focus:border-clay">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </label>
        <button className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-clay">
          Check Availability
        </button>
      </div>
    </section>
  );
}
