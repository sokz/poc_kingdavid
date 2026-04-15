export default function AboutPage() {
  return (
    <section className="section-shell">
      <p className="eyebrow">About The Hotel</p>
      <h1 className="section-title">A place for story, stillness, and direct hospitality.</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-8 shadow-card">
          <p className="muted-copy">
            This placeholder page is ready for the hotel story, location context, service promise,
            and photography that help guests trust the brand before they book.
          </p>
        </div>
        <div className="rounded-[2rem] bg-[#e8d7bd] p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-ink/60">Content To Gather</p>
          <ul className="mt-4 space-y-3 text-ink/78">
            <li>Brand story and positioning</li>
            <li>Property highlights and amenities</li>
            <li>Neighborhood or destination context</li>
            <li>Professional room and facility imagery</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
