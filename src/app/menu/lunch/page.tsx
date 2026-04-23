import type { Metadata } from "next";
import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";
import { menuMeta } from "@/data/menuMeta";

export const metadata: Metadata = {
  title: menuMeta["lunch"].title,
  description: `${menuMeta["lunch"].note} — Welcome Diner, Downtown Phoenix.`,
  alternates: { canonical: "/menu/lunch" },
};

export default function LunchMenu() {
  return <MenuImagePage slug="lunch" image={images.menuLunch} />;
}
