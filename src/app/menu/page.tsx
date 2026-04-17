import Link from "next/link";
import { Hero } from "@/components/Hero";
import { images } from "@/data/images";

const menus = [
  { label: "All Day", href: "/menu/all-day" },
  { label: "Brunch", href: "/menu/brunch" },
  { label: "Lunch", href: "/menu/lunch" },
  { label: "Dinner", href: "/menu/dinner" },
  { label: "Drinks", href: "/menu/drinks" },
  { label: "Kids", href: "/menu/kids" },
  { label: "Happy Hour", href: "/menu/happy-hour" },
];

export default function MenuIndex() {
  return (
    <>
      <Hero image={images.menuAllDay} alt="Menu" title="Menus" />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {menus.map((m) => (
            <li key={m.href}>
              <Link
                href={m.href}
                className="block border border-brand-muted/30 rounded px-6 py-5 font-display text-xl uppercase tracking-widest text-center hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                {m.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
