export default function ContactPage() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Contact, enquiry, and WhatsApp entry point.</h1>
          <p className="mt-6 muted-copy">
            This page is ready for the hotel’s live address, embedded map, operating details, and
            enquiry handling flow.
          </p>
          <div className="mt-8 rounded-[2rem] bg-[#e8d7bd] p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-ink/60">Placeholders</p>
            <div className="mt-4 space-y-3 text-sm text-ink/78">
              <p>Phone: +972 00 000 0000</p>
              <p>Email: hello@kingdavidgarden.com</p>
              <p>WhatsApp: Click-to-chat integration to be wired here</p>
            </div>
          </div>
        </div>
        <form className="rounded-[2rem] bg-white p-8 shadow-card">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-ink/10 px-4 py-3" placeholder="Full name" />
            <input className="rounded-2xl border border-ink/10 px-4 py-3" placeholder="Email address" />
          </div>
          <input className="mt-4 w-full rounded-2xl border border-ink/10 px-4 py-3" placeholder="Phone number" />
          <textarea
            className="mt-4 min-h-40 w-full rounded-2xl border border-ink/10 px-4 py-3"
            placeholder="Tell us about your stay or question"
          />
          <button className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-clay">
            Send enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
