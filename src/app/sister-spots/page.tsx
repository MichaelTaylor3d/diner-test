const sisters = [
  { name: "Hai Noon", url: "http://hainoonaz.com/" },
  { name: "Hidden Gem", url: "http://hiddengemaz.com/" },
];

export default function SisterSpots() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="eyebrow mb-10">Visit Our Sister Spots</h1>
      <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.35em]">
        {sisters.map((s) => (
          <li key={s.name}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent"
            >
              {s.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
