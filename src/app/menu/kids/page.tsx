import type { Metadata } from "next";
import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";
import { menuMeta } from "@/data/menuMeta";

export const metadata: Metadata = {
  title: menuMeta["kids"].title,
  description: `${menuMeta["kids"].note} — Welcome Diner, Downtown Phoenix.`,
  alternates: { canonical: "/menu/kids" },
};

export default function KidsMenu() {
  return <MenuImagePage slug="kids" image={images.menuKids} />;
}
