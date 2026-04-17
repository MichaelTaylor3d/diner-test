const sisters = [
  {
    name: "Hai Noon",
    tagline: "Sister spot.",
    url: "http://hainoonaz.com/",
  },
  {
    name: "Hidden Gem",
    tagline: "Sister spot.",
    url: "http://hiddengemaz.com/",
  },
];

export default function SisterSpots() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-display text-4xl md:text-5xl uppercase tracking-widest text-center mb-10">
        Visit Our Sister Spots
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {sisters.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-brand-muted/30 rounded p-8 text-center hover:border-brand-accent hover:text-brand-accent transition-colors"
          >
            <h2 className="font-display text-2xl uppercase tracking-widest">
              {s.name}
            </h2>
            <p className="mt-2 text-sm text-brand-muted">{s.tagline}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
