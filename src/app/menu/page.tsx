import Link from "next/link";

const menus = [
  { label: "Brunch", href: "/menu/brunch" },
  { label: "Lunch", href: "/menu/all-day" },
  { label: "Dinner", href: "/menu/all-day" },
  { label: "Drinks + Dessert", href: "/menu/drinks" },
  { label: "Happy Hour", href: "/menu/happy-hour" },
  { label: "Kids", href: "/menu/kids" },
];

export default function MenuIndex() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="eyebrow text-center mb-8">Menus</h1>
      <ul className="flex flex-col gap-3">
        {menus.map((m) => (
          <li key={m.label}>
            <Link
              href={m.href}
              className="block border border-brand-accent/60 px-6 py-4 text-center text-xs uppercase tracking-[0.45em] text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
            >
              {m.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
