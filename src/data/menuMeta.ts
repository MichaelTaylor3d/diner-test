export type MenuSlug =
  | "all-day"
  | "brunch"
  | "lunch"
  | "dinner"
  | "drinks"
  | "kids"
  | "happy-hour";

type Meta = {
  slug: MenuSlug;
  title: string;
  note: string;
};

export const menuOrder: MenuSlug[] = [
  "all-day",
  "brunch",
  "lunch",
  "dinner",
  "drinks",
  "kids",
  "happy-hour",
];

export const menuMeta: Record<MenuSlug, Meta> = {
  "all-day": {
    slug: "all-day",
    title: "All Day",
    note: "Served from open to close. Built for regulars.",
  },
  brunch: {
    slug: "brunch",
    title: "Brunch",
    note: "Weekends only — eggs, biscuits, and a long second coffee.",
  },
  lunch: {
    slug: "lunch",
    title: "Lunch",
    note: "Fast but never rushed. Served until three.",
  },
  dinner: {
    slug: "dinner",
    title: "Dinner",
    note: "The full kitchen, after the sun drops.",
  },
  drinks: {
    slug: "drinks",
    title: "Drinks + Dessert",
    note: "A short list, done right.",
  },
  kids: {
    slug: "kids",
    title: "Kids",
    note: "For smaller guests, same care.",
  },
  "happy-hour": {
    slug: "happy-hour",
    title: "Happy Hour",
    note: "Weekdays 3–6. Bring a coworker.",
  },
};

export function prevNext(slug: MenuSlug): { prev?: Meta; next?: Meta } {
  const i = menuOrder.indexOf(slug);
  return {
    prev: i > 0 ? menuMeta[menuOrder[i - 1]] : undefined,
    next: i < menuOrder.length - 1 ? menuMeta[menuOrder[i + 1]] : undefined,
  };
}
