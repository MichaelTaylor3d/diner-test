import Link from "next/link";
import { DisplayText } from "@/components/atoms/DisplayText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { IconArrow } from "@/components/atoms/IconArrow";
import { images } from "@/data/images";

export function NeighborhoodTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 grid gap-12 md:grid-cols-2 items-center">
      <RevealOnView className="relative aspect-[3/2] overflow-hidden">
        <ParallaxImage
          src={images.neighborhoodStreet}
          alt="Garfield streetscape"
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
          strength={30}
        />
      </RevealOnView>

      <RevealOnView>
        <Eyebrow className="text-terracotta">The Neighborhood</Eyebrow>
        <DisplayText as="h2" size="lg" className="mt-2">
          Fifteen years on the corner of 10th + Pierce.
        </DisplayText>
        <p className="mt-6 text-base leading-7 text-brass">
          Garfield Historic District has grown up around us, and we&rsquo;ve
          grown up with it. The booth by the window is still the best seat in
          the house.
        </p>
        <Link
          href="/locations"
          className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-brass hover:text-cream transition-colors"
        >
          Come find us <IconArrow size={14} />
        </Link>
      </RevealOnView>
    </section>
  );
}
