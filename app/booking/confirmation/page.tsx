import Link from "next/link";

export default function BookingConfirmationPage() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-10 text-center shadow-card">
        <p className="eyebrow">Confirmation</p>
        <h1 className="section-title">Booking complete.</h1>
        <p className="mt-6 muted-copy">
          This success state is ready for reservation summaries, payment status, and confirmation
          email messaging.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-clay"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
