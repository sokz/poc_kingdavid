import Link from "next/link";
import type { Route } from "next";

const adminLinks = [
  { href: "/admin" as Route, label: "Overview" },
  { href: "/admin/reservations" as Route, label: "Reservations" },
  { href: "/admin/guests" as Route, label: "Guests" },
  { href: "/admin/pricing" as Route, label: "Pricing" }
];

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="bg-[#f6f1e8]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl gap-8 px-6 py-10 md:grid-cols-[240px_1fr]">
        <aside className="rounded-[2rem] bg-ink p-6 text-white">
          <p className="font-display text-2xl">Admin</p>
          <nav className="mt-8 flex flex-col gap-3 text-sm">
            {adminLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-3 transition hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </section>
  );
}
