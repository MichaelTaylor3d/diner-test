import type { Metadata } from "next";
import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";
import { menuMeta } from "@/data/menuMeta";

export const metadata: Metadata = {
  title: menuMeta["brunch"].title,
  description: `${menuMeta["brunch"].note} — Welcome Diner, Downtown Phoenix.`,
  alternates: { canonical: "/menu/brunch" },
};

export default function BrunchMenu() {
  return <MenuImagePage slug="brunch" image={images.menuBrunch} />;
}
