import type { Metadata } from "next";
import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";
import { menuMeta } from "@/data/menuMeta";

export const metadata: Metadata = {
  title: menuMeta["dinner"].title,
  description: `${menuMeta["dinner"].note} — Welcome Diner, Downtown Phoenix.`,
  alternates: { canonical: "/menu/dinner" },
};

export default function DinnerMenu() {
  return <MenuImagePage slug="dinner" image={images.menuDinner} />;
}
