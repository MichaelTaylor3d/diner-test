import { EditorialCard } from "@/components/molecules/EditorialCard";
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
            <EditorialCard
              href={m.href}
              eyebrow="Menu"
              title={m.label}
              body={m.body}
              image={m.image}
              alt={`${m.label} menu cover`}
              aspectClass="aspect-[4/5]"
            />
          </RevealOnView>
        ))}
      </div>
    </section>
  );
}
