export type LocationData = {
  name: string;
  addressLines: string[];
  phone?: string;
  hours: { label: string; value: string }[];
  mapsUrl?: string;
};

export function LocationCard({ location }: { location: LocationData }) {
  return (
    <article className="p-6 border border-brand-muted/30 rounded">
      <h3 className="font-display text-2xl uppercase tracking-widest">
        {location.name}
      </h3>
      <address className="not-italic mt-2 text-sm">
        {location.addressLines.map((line) => (
          <div key={line}>{line}</div>
        ))}
        {location.phone && <div className="mt-1">{location.phone}</div>}
      </address>

      {location.hours.length > 0 && (
        <dl className="mt-4 grid grid-cols-[max-content_1fr] gap-x-4 text-sm">
          {location.hours.map((h) => (
            <div key={h.label} className="contents">
              <dt className="uppercase tracking-wider text-brand-muted">
                {h.label}
              </dt>
              <dd>{h.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {location.mapsUrl && (
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-xs uppercase tracking-widest hover:text-brand-accent"
        >
          Get directions →
        </a>
      )}
    </article>
  );
}
