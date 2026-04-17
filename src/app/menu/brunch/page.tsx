import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";

export default function BrunchMenu() {
  return <MenuImagePage slug="brunch" image={images.menuBrunch} />;
}
