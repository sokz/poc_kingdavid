const rows = [
  ["RES-1001", "Miriam K.", "Garden Deluxe", "Pending"],
  ["RES-1002", "Jonas R.", "Signature King Room", "Paid"],
  ["RES-1003", "Leah A.", "Family Courtyard Suite", "Deposit"]
];

export default function AdminReservationsPage() {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-card">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Reservations</p>
          <h1 className="section-title">List and manage bookings.</h1>
        </div>
        <button className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-clay">
          New reservation
        </button>
      </div>
      <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-ink/10">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-[#f4ebdd] text-ink/70">
            <tr>
              <th className="px-4 py-4 font-medium">Booking</th>
              <th className="px-4 py-4 font-medium">Guest</th>
              <th className="px-4 py-4 font-medium">Room</th>
              <th className="px-4 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-ink/10">
                {row.map((cell) => (
                  <td key={cell} className="px-4 py-4 text-ink/78">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
