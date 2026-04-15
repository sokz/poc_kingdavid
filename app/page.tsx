import Link from "next/link";

import { BookingWidget } from "@/components/booking-widget";
import { languages, rooms, testimonials } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(213,179,106,0.25),_transparent_35%)]" />
        <div className="section-shell relative grid items-end gap-12 py-24 md:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="eyebrow text-gold">Direct Booking Experience</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-none md:text-7xl">
              A calm, premium hotel website designed to convert.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              This skeleton turns the PRD into a polished starting point for King David Garden
              Hotel, with guest-facing discovery, a booking funnel, and an admin-ready foundation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="rounded-full bg-gold px-6 py-3 font-semibold text-ink transition hover:bg-sand"
              >
                Start Booking
              </Link>
              <Link
                href="/rooms"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-gold hover:text-gold"
              >
                Explore Rooms
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.28em] text-gold">Launch Notes</p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-white/78">
              <p>Public pages are designed for SEO, speed, and direct bookings.</p>
              <p>Admin tooling will live under protected `/admin` routes in the same app.</p>
              <p>Languages planned: {languages.join(", ")}.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell -mt-12 relative z-10">
        <BookingWidget />
      </section>

      <section className="section-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Why This Structure</p>
          <h2 className="section-title">A storefront and booking engine in one experience.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "High-converting homepage with embedded booking widget",
            "Room discovery with filters and detailed room pages",
            "Offer-led campaigns and trust-building gallery content",
            "Simple progression into booking, payment, and confirmation"
          ].map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-white p-6 shadow-card">
              <p className="muted-copy">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <p className="eyebrow">Featured Rooms</p>
        <div className="mt-4 flex items-end justify-between gap-6">
          <h2 className="section-title">Flexible room types with room to grow.</h2>
          <Link href="/rooms" className="hidden text-sm font-semibold text-clay md:block">
            View all rooms
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {rooms.map((room) => (
            <article key={room.slug} className="rounded-[2rem] bg-white p-6 shadow-card">
              <div className="h-48 rounded-[1.5rem] bg-[linear-gradient(135deg,_#d7c3a1,_#8a6849)]" />
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-ink">{room.name}</h3>
                  <p className="mt-2 text-sm text-ink/60">{room.capacity}</p>
                </div>
                <span className="rounded-full bg-sand px-3 py-1 text-sm font-semibold text-ink">
                  {room.price}
                </span>
              </div>
              <p className="mt-4 muted-copy">{room.summary}</p>
              <Link href={`/rooms/${room.slug}`} className="mt-6 inline-block text-sm font-semibold text-clay">
                View room
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f4ebdd]">
        <div className="section-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Guest Confidence</p>
            <h2 className="section-title">A booking-first experience that still feels like hospitality.</h2>
          </div>
          <div className="grid gap-6">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="rounded-[2rem] bg-white p-6 shadow-card">
                <p className="text-lg leading-8 text-ink/82">“{item.quote}”</p>
                <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-clay">
                  {item.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
