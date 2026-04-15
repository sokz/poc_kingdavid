export default function AdminPage() {
  return (
    <div className="grid gap-6">
      <div className="rounded-[2rem] bg-white p-8 shadow-card">
        <p className="eyebrow">Dashboard</p>
        <h1 className="section-title">Hotel operations overview.</h1>
        <p className="mt-6 muted-copy">
          This skeleton dashboard is ready for occupancy, arrivals, payments, and reservation
          snapshots.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          "Arrivals Today",
          "Pending Payments",
          "Open Enquiries"
        ].map((card) => (
          <div key={card} className="rounded-[2rem] bg-white p-6 shadow-card">
            <p className="text-sm uppercase tracking-[0.2em] text-clay">{card}</p>
            <p className="mt-4 font-display text-4xl text-ink">--</p>
          </div>
        ))}
      </div>
    </div>
  );
}
