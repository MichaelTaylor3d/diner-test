import { EditorialCard } from "@/components/molecules/EditorialCard";
import { RevealOnView } from "@/components/motion/RevealOnView";
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
            <EditorialCard {...c} />
          </RevealOnView>
        ))}
      </div>
    </section>
  );
}
