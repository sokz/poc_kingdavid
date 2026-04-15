import Link from "next/link";
import { notFound } from "next/navigation";

import { rooms } from "@/data/site";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = rooms.find((entry) => entry.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <section className="section-shell">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Room Detail</p>
          <h1 className="section-title">{room.name}</h1>
          <p className="mt-6 muted-copy">{room.summary}</p>
          <div className="mt-8 h-[28rem] rounded-[2rem] bg-[linear-gradient(145deg,_#eddcbe,_#6d4e3f)]" />
        </div>
        <aside className="rounded-[2rem] bg-white p-8 shadow-card">
          <p className="text-sm uppercase tracking-[0.2em] text-clay">Stay Snapshot</p>
          <p className="mt-4 font-display text-4xl text-ink">{room.price}</p>
          <p className="mt-2 text-sm text-ink/60">Starting nightly rate · {room.capacity}</p>
          <div className="mt-8 space-y-3">
            {room.amenities.map((amenity) => (
              <div key={amenity} className="rounded-2xl bg-sand px-4 py-3 text-sm text-ink/80">
                {amenity}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink/68">
            Future state: live pricing, date-aware availability, deposit rules, and cancellation notes.
          </p>
          <Link
            href="/booking"
            className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-clay"
          >
            Book this room
          </Link>
        </aside>
      </div>
    </section>
  );
}
