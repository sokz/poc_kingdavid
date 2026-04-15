import Link from "next/link";

import { rooms } from "@/data/site";

export default function RoomsPage() {
  return (
    <section className="section-shell">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Rooms</p>
          <h1 className="section-title">Room types designed for browsing and quick comparison.</h1>
        </div>
        <div className="grid gap-3 rounded-[2rem] bg-white p-5 shadow-card md:grid-cols-3">
          <input
            placeholder="Price range"
            className="rounded-full border border-ink/10 px-4 py-3 text-sm outline-none"
          />
          <input
            placeholder="Availability dates"
            className="rounded-full border border-ink/10 px-4 py-3 text-sm outline-none"
          />
          <input
            placeholder="Occupancy"
            className="rounded-full border border-ink/10 px-4 py-3 text-sm outline-none"
          />
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {rooms.map((room) => (
          <article key={room.slug} className="rounded-[2rem] bg-white p-6 shadow-card">
            <div className="h-52 rounded-[1.5rem] bg-[linear-gradient(135deg,_#d9c4a8,_#51645f)]" />
            <h2 className="mt-6 font-display text-2xl text-ink">{room.name}</h2>
            <p className="mt-2 text-sm text-ink/62">
              {room.capacity} · From {room.price}
            </p>
            <p className="mt-4 muted-copy">{room.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {room.amenities.map((amenity) => (
                <span key={amenity} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-ink/80">
                  {amenity}
                </span>
              ))}
            </div>
            <Link href={`/rooms/${room.slug}`} className="mt-6 inline-block text-sm font-semibold text-clay">
              View details
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
