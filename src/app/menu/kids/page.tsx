import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";

export default function KidsMenu() {
  return <MenuImagePage slug="kids" image={images.menuKids} />;
}
