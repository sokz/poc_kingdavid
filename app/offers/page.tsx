import Link from "next/link";

import { offers } from "@/data/site";

export default function OffersPage() {
  return (
    <section className="section-shell">
      <p className="eyebrow">Offers</p>
      <h1 className="section-title">Campaign-ready landing space for seasonal demand.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {offers.map((offer) => (
          <article key={offer.title} className="rounded-[2rem] bg-white p-8 shadow-card">
            <p className="text-sm uppercase tracking-[0.2em] text-clay">{offer.validity}</p>
            <h2 className="mt-4 font-display text-3xl text-ink">{offer.title}</h2>
            <p className="mt-4 muted-copy">{offer.description}</p>
            <Link href="/booking" className="mt-6 inline-block text-sm font-semibold text-clay">
              Use this offer
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
