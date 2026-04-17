import { RevealOnView } from "@/components/motion/RevealOnView";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { IconArrow } from "@/components/atoms/IconArrow";
import Link from "next/link";
import { images } from "@/data/images";

const cards = [
  {
    eyebrow: "Kitchen",
    title: "Scratch-cooked, every plate.",
    body: "Comfort food built from Sonoran and Southern roots, sourced through purveyor partners we trust.",
    image: images.editorialKitchen,
    alt: "Chef plating a dish",
    href: "/menu",
  },
  {
    eyebrow: "Room",
    title: "A booth for every morning.",
    body: "Worn wood, warm light, and enough elbow room for a long second cup of coffee.",
    image: images.editorialRoom,
    alt: "Diner booth with morning light",
    href: "/locations",
  },
  {
    eyebrow: "Neighborhood",
    title: "Rooted in Garfield.",
    body: "Fifteen-plus years on the corner of 10th and Pierce — and counting.",
    image: images.editorialNeighborhood,
    alt: "Phoenix streetscape",
    href: "/our-story",
  },
];

export function EditorialTriptych() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-3">
        {cards.map((c) => (
          <RevealOnView key={c.eyebrow} amount={0.25}>
            <Link
              href={c.href}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-bg-ivory"
            >
              <div className="relative w-full overflow-hidden aspect-[3/4]">
                <ParallaxImage
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                  strength={25}
                />
              </div>
              <Eyebrow className="mt-4 text-terracotta">{c.eyebrow}</Eyebrow>
              <h3 className="display text-2xl md:text-3xl mt-1 transition-colors duration-300 group-hover:text-terracotta">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-desert-shadow">{c.body}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.35em] text-brass">
                Explore <IconArrow size={14} />
              </span>
            </Link>
          </RevealOnView>
        ))}
      </div>
    </section>
  );
}
