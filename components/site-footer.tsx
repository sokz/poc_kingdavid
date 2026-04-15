import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-[#f7f1e7]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-ink">King David Garden Hotel</p>
          <p className="mt-3 text-sm text-ink/70">
            A calm, direct-booking-first hotel website skeleton built from the PRD.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">Explore</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-ink/80">
            <Link href="/rooms">Rooms</Link>
            <Link href="/offers">Offers</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">Operations</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-ink/80">
            <p>hello@kingdavidgarden.com</p>
            <p>+972 00 000 0000</p>
            <Link href="/admin">Admin Dashboard</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
