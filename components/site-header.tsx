import Link from "next/link";

import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <Link href="/" className="font-display text-xl tracking-[0.18em]">
          KING DAVID GARDEN
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/booking"
          className="rounded-full border border-gold px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold hover:text-ink"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
