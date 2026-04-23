import type { Metadata } from "next";
import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";
import { menuMeta } from "@/data/menuMeta";

export const metadata: Metadata = {
  title: menuMeta["all-day"].title,
  description: `${menuMeta["all-day"].note} — Welcome Diner, Downtown Phoenix.`,
  alternates: { canonical: "/menu/all-day" },
};

export default function AllDayMenu() {
  return <MenuImagePage slug="all-day" image={images.menuAllDay} />;
}
