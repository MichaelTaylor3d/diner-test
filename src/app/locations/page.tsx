import { LocationCard, type LocationData } from "@/components/LocationCard";

const locations: LocationData[] = [
  {
    name: "Welcome Diner — Phoenix",
    addressLines: ["929 E Pierce St", "Phoenix, AZ 85006"],
    hours: [],
    mapsUrl:
      "https://www.google.com/maps/dir//929+E+Pierce+St,+Phoenix,+AZ+85006",
  },
];

export default function Locations() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-display text-4xl md:text-5xl uppercase tracking-widest text-center mb-2">
        Locations
      </h1>
      <p className="text-center text-brand-muted mb-10">
        Find us in the Garfield Historic District, Downtown Phoenix.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((l) => (
          <LocationCard key={l.name} location={l} />
        ))}
      </div>
    </section>
  );
}
