import type { Metadata } from "next";
import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";
import { menuMeta } from "@/data/menuMeta";

export const metadata: Metadata = {
  title: menuMeta["happy-hour"].title,
  description: `${menuMeta["happy-hour"].note} — Welcome Diner, Downtown Phoenix.`,
  alternates: { canonical: "/menu/happy-hour" },
};

export default function HappyHourMenu() {
  return <MenuImagePage slug="happy-hour" image={images.menuHappyHour} />;
}
