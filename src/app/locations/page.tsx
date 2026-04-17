import Image from "next/image";
import { RuledHeading } from "@/components/RuledHeading";
import { images } from "@/data/images";

export default function Locations() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 text-center">
      <RuledHeading>
        you can find us in the garfield historic district downtown phoenix
      </RuledHeading>
      <div className="relative mx-auto mt-6 aspect-[16/10] w-full max-w-3xl">
        <Image
          src={images.locationsMap}
          alt="Welcome Diner — 929 E Pierce St, Phoenix AZ"
          fill
          sizes="(min-width: 1024px) 768px, 100vw"
          className="object-contain"
        />
      </div>
    </section>
  );
}
