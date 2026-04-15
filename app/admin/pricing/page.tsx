export default function AdminPricingPage() {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-card">
      <p className="eyebrow">Pricing</p>
      <h1 className="section-title">Seasonal pricing and promotions.</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[1.5rem] bg-[#f7f1e7] p-6">
          <p className="font-display text-2xl text-ink">Seasonal rules</p>
          <p className="mt-3 text-sm leading-7 text-ink/68">
            Configure room-type pricing by date range and apply launch-ready seasonal logic.
          </p>
        </div>
        <div className="rounded-[1.5rem] bg-[#f7f1e7] p-6">
          <p className="font-display text-2xl text-ink">Coupons and offers</p>
          <p className="mt-3 text-sm leading-7 text-ink/68">
            Reserve space for fixed and percentage discounts, expiry, and homepage promotion control.
          </p>
        </div>
      </div>
    </div>
  );
}
