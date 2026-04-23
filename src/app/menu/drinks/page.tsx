import type { Metadata } from "next";
import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";
import { menuMeta } from "@/data/menuMeta";

export const metadata: Metadata = {
  title: menuMeta["drinks"].title,
  description: `${menuMeta["drinks"].note} — Welcome Diner, Downtown Phoenix.`,
  alternates: { canonical: "/menu/drinks" },
};

export default function DrinksMenu() {
  return <MenuImagePage slug="drinks" image={images.menuDrinks} />;
}
