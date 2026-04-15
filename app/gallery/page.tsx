export default function GalleryPage() {
  return (
    <section className="section-shell">
      <p className="eyebrow">Gallery</p>
      <h1 className="section-title">A visual storytelling page ready for hotel photography.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {["Rooms", "Facilities", "Surroundings", "Lobby", "Dining", "Garden"].map((label, index) => (
          <div
            key={label}
            className={`rounded-[2rem] p-6 text-white shadow-card ${
              index % 2 === 0 ? "bg-[linear-gradient(135deg,_#8b6d56,_#243741)]" : "bg-[linear-gradient(135deg,_#4a5f4c,_#d0b17a)]"
            }`}
          >
            <div className="h-56 rounded-[1.5rem] border border-white/20 bg-white/10" />
            <p className="mt-4 font-display text-2xl">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
