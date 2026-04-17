const sisters = [
  { name: "Hai Noon", url: "http://hainoonaz.com/" },
  { name: "Hidden Gem", url: "http://hiddengemaz.com/" },
];

export default function SisterSpots() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12 text-center">
      <h1 className="eyebrow mb-8">Visit Our Sister Spots</h1>
      <ul className="flex flex-col gap-4">
        {sisters.map((s) => (
          <li key={s.name}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-brand-accent/60 px-6 py-4 text-xs uppercase tracking-[0.45em] text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
            >
              {s.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
