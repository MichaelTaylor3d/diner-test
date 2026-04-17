import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { IconArrow } from "@/components/atoms/IconArrow";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { images } from "@/data/images";

type Entry = { label: string; href: string; image: string; body?: string };

const menus: Entry[] = [
  {
    label: "Brunch",
    href: "/menu/brunch",
    image: images.menuBrunch,
    body: "Eggs divorciados, chilaquiles, pancakes, and brunch beverages.",
  },
  {
    label: "Lunch",
    href: "/menu/all-day",
    image: images.menuLunch,
    body: "Sandwiches, classics, and sides — midday staples.",
  },
  {
    label: "Dinner",
    href: "/menu/all-day",
    image: images.menuDinner,
    body: "All-day plates plus dinner-only features.",
  },
  {
    label: "Drinks + Dessert",
    href: "/menu/drinks",
    image: images.menuDrinks,
    body: "Cocktails, wine, beer, and a short dessert list.",
  },
  {
    label: "Happy Hour",
    href: "/menu/happy-hour",
    image: images.menuHappyHour,
    body: "Weekday deals — bites and pours.",
  },
  {
    label: "Kids",
    href: "/menu/kids",
    image: images.menuKids,
    body: "Small plates for smaller guests.",
  },
];

export function MenuCardGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        {menus.map((m) => (
          <RevealOnView key={m.label} amount={0.25}>
            <Link
              href={m.href}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-bg-ivory"
            >
              <div className="relative w-full overflow-hidden aspect-[4/5]">
                <Image
                  src={m.image}
                  alt={`${m.label} menu cover`}
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <Eyebrow className="mt-5 text-terracotta">Menu</Eyebrow>
              <h3 className="display text-4xl md:text-5xl mt-2 transition-colors duration-300 group-hover:text-terracotta">
                {m.label}
              </h3>
              {m.body && (
                <p className="mt-3 text-base leading-7 text-desert-shadow">
                  {m.body}
                </p>
              )}
              <span className="mt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.35em] text-brass">
                Explore <IconArrow size={14} />
              </span>
            </Link>
          </RevealOnView>
        ))}
      </div>
    </section>
  );
}
