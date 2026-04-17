import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";

export default function LunchMenu() {
  return <MenuImagePage slug="lunch" image={images.menuLunch} />;
}
