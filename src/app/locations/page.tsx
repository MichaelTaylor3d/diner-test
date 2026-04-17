import Image from "next/image";
import { images } from "@/data/images";

export default function Locations() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 text-center">
      <h1 className="eyebrow mb-4">Locations</h1>
      <p className="font-display text-2xl md:text-3xl tracking-wide lowercase mb-10">
        you can find us in the garfield historic district downtown phoenix
      </p>
      <a
        href="https://www.google.com/maps/dir//929+E+Pierce+St,+Phoenix,+AZ+85006"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-[16/9] w-full max-w-3xl mx-auto"
      >
        <Image
          src={images.locationsMap}
          alt="Welcome Diner exterior — 929 E Pierce St, Phoenix AZ"
          fill
          sizes="(min-width: 1024px) 768px, 100vw"
          className="object-cover"
        />
      </a>
      <p className="mt-6 text-xs uppercase tracking-[0.35em] text-brand-muted">
        929 E Pierce St · Phoenix, AZ 85006
      </p>
    </section>
  );
}
