import Link from "next/link";

const menus = [
  { label: "Brunch", href: "/menu/brunch" },
  { label: "Lunch", href: "/menu/lunch" },
  { label: "Dinner", href: "/menu/dinner" },
  { label: "All Day", href: "/menu/all-day" },
  { label: "Drinks + Dessert", href: "/menu/drinks" },
  { label: "Happy Hour", href: "/menu/happy-hour" },
  { label: "Kids", href: "/menu/kids" },
];

export default function MenuIndex() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="eyebrow mb-10">Menus</h1>
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs uppercase tracking-[0.35em]">
        {menus.map((m) => (
          <li key={m.href}>
            <Link href={m.href} className="hover:text-brand-accent transition-colors">
              {m.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
